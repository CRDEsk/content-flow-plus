import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { LanguageProvider } from "@/hooks/useLanguage";
import ErrorBoundary from "@/components/ErrorBoundary";
import NetworkStatus from "@/components/NetworkStatus";
import { Analytics } from "@vercel/analytics/react";
import { initAnalytics, trackPageView } from "@/lib/analytics";
import { hasCookieConsent } from "@/lib/cookies";
import CookieConsent from "@/components/CookieConsent";

// Lazy loading with retry logic - handle chunk loading failures gracefully
const lazyWithRetry = (componentImport: () => Promise<any>) => {
  return lazy(async () => {
    try {
      const component = await componentImport();
      // Success - reset retry counter
      window.sessionStorage.removeItem('chunk-load-retry-count');
      return component;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Chunk load error:', errorMessage);
      
      // Only retry in production, not in development
      if (import.meta.env.PROD) {
        // Check for various types of loading errors
        const isLoadError = 
          errorMessage.includes('MIME type') || 
          errorMessage.includes('text/html') ||
          errorMessage.includes('Failed to fetch') ||
          errorMessage.includes('NetworkError') ||
          errorMessage.includes('Loading chunk') ||
          errorMessage.includes('Importing a module script failed');
        
        // Check if we've already tried reloading
        const retryCount = parseInt(window.sessionStorage.getItem('chunk-load-retry-count') || '0');
        
        if (retryCount < 1 && isLoadError) {
          // For MIME errors, reload immediately (likely a server config issue)
          window.sessionStorage.setItem('chunk-load-retry-count', String(retryCount + 1));
          // Use requestIdleCallback or setTimeout to avoid interrupting React
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
              window.location.reload();
            }, { timeout: 500 });
          } else {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
          
          // Return loading component while reloading
          return { 
            default: () => (
              <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-zinc-400">Rechargement...</p>
                </div>
              </div>
            )
          };
        }
      }
      
      // In development or after retry failed, throw so ErrorBoundary can handle it
      throw error;
    }
  });
};

// Lazy load all pages for code-splitting with retry logic
const Index = lazyWithRetry(() => import("./pages/Index"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));
const MonEspace = lazyWithRetry(() => import("./pages/MonEspace"));
const NotreSolution = lazyWithRetry(() => import("./pages/NotreSolution"));
const Tarifs = lazyWithRetry(() => import("./pages/Tarifs"));
const PourCreateurs = lazyWithRetry(() => import("./pages/PourCreateurs"));
const PourAgences = lazyWithRetry(() => import("./pages/PourAgences"));
const InternationalProtection = lazyWithRetry(() => import("./pages/InternationalProtection"));
const EscaladesLegal = lazyWithRetry(() => import("./pages/EscaladesLegal"));
const APropos = lazyWithRetry(() => import("./pages/APropos"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const CasClients = lazyWithRetry(() => import("./pages/CasClients"));
const CaseStudyDetail = lazyWithRetry(() => import("./pages/CaseStudyDetail"));
const MentionsLegales = lazyWithRetry(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazyWithRetry(() => import("./pages/PolitiqueConfidentialite"));
const CGV = lazyWithRetry(() => import("./pages/CGV"));
const PolitiqueRemboursement = lazyWithRetry(() => import("./pages/PolitiqueRemboursement"));
const PolitiqueCookies = lazyWithRetry(() => import("./pages/PolitiqueCookies"));
const CRDPresentation = lazyWithRetry(() => import("./pages/CRDPresentation"));
const CreatorPresentation = lazyWithRetry(() => import("./pages/CreatorPresentation"));
const AgencyPresentation2 = lazyWithRetry(() => import("./pages/AgencyPresentation2"));
const Presentation = lazyWithRetry(() => import("./pages/Presentation"));
const BlogList = lazyWithRetry(() => import("./blog/pages/BlogList"));
const BlogPost = lazyWithRetry(() => import("./blog/pages/BlogPost"));
const BlogCategory = lazyWithRetry(() => import("./blog/pages/BlogCategory"));
const BlogTag = lazyWithRetry(() => import("./blog/pages/BlogTag"));

// Check if we're on blog subdomain
const isBlogSubdomain = () => {
  if (typeof window === 'undefined') {
    return process.env.BLOG_SUBDOMAIN === 'true';
  }
  return window.location.hostname === 'blog.contentremovaldesk.com' || 
         window.location.hostname === 'localhost' && process.env.BLOG_SUBDOMAIN === 'true';
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      <div className="text-sm text-zinc-400">Chargement...</div>
    </div>
  </div>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  // Ensure black background is always set
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.documentElement.style.backgroundColor = '#000000';
  }, []);

  return (
    <div
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#000000',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        opacity: 1
      }}
    >
      {children}
    </div>
  );
};

// Scroll to top and handle page transitions
const AppContent = () => {
  const location = useLocation();

  // Define pages where cookie banner should NOT appear
  const excludedPages = [
    '/escalades-legal',
    '/politique-confidentialite',
    '/cgv',
    '/politique-remboursement',
    '/politique-cookies',
    '/mentions-legales',
    '/international-protection',
    '/pour-agences',
    '/presentation',
    '/presentation-createurs',
    '/pr'
  ];
  const shouldShowCookieBanner = !excludedPages.includes(location.pathname);

  useEffect(() => {
    // Clear retry counters in development to prevent issues
    if (import.meta.env.DEV) {
      sessionStorage.removeItem('chunk-load-retry-count');
      sessionStorage.removeItem('error-retry-count');
      window.sessionStorage.removeItem('page-has-been-force-refreshed');
    }
    
    // Initialize analytics on mount only if consent is given
    // This will be called again when user accepts cookies
    if (hasCookieConsent()) {
      initAnalytics();
    }
  }, []);

  useEffect(() => {
    // Reset retry counters on successful navigation
    sessionStorage.removeItem('chunk-load-retry-count');
    sessionStorage.removeItem('error-retry-count');
    window.sessionStorage.removeItem('page-has-been-force-refreshed');
    
    // Instant scroll for better performance
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
    trackPageView(location.pathname);
    
    // Define legal pages
    const legalPages = [
      '/escalades-legal',
      '/politique-confidentialite',
      '/cgv',
      '/politique-remboursement',
      '/politique-cookies',
      '/mentions-legales'
    ];
    
    const isLegalPage = legalPages.includes(location.pathname);
    const isAgencyPage = location.pathname === '/pour-agences' || location.pathname.startsWith('/pour-agences');
    
    // Handle theme-color meta tag
    // Note: /pour-agences page manages its own theme-color in PourAgences.tsx
    // We only manage theme-color for other pages here
    if (!isAgencyPage) {
      let themeColorMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
      if (!themeColorMeta) {
        // Create if doesn't exist
        themeColorMeta = document.createElement('meta');
        themeColorMeta.name = 'theme-color';
        document.head.appendChild(themeColorMeta);
      }
      
      // Set theme-color: Gold for non-legal pages, default for legal pages
      if (!isLegalPage) {
        themeColorMeta.content = '#D4AF37'; // Gold
      }
      // Legal pages keep default (already set in index.html as #D4AF37)
    }
    
    if (!isAgencyPage && !isLegalPage) {
      // Restore gold favicon - Safari compatible
      const timestamp = Date.now(); // Cache busting for Safari
      const faviconSizes = [128, 96, 64, 48, 32, 16];
      
      faviconSizes.forEach(size => {
        const link = document.querySelector(`link[rel="icon"][sizes="${size}x${size}"]`) as HTMLLinkElement;
        if (link && link.href.includes('favicon-blue')) {
          // Force update for Safari
          link.href = `/favicon-${size}x${size}.png?v=${timestamp}`;
          // Trigger reload
          const newLink = link.cloneNode(true) as HTMLLinkElement;
          link.parentNode?.replaceChild(newLink, link);
        }
      });
      
      const shortcutIcon = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;
      if (shortcutIcon && shortcutIcon.href.includes('favicon-blue')) {
        shortcutIcon.href = `/favicon-128x128.png?v=${timestamp}`;
        const newShortcut = shortcutIcon.cloneNode(true) as HTMLLinkElement;
        shortcutIcon.parentNode?.replaceChild(newShortcut, shortcutIcon);
      }
      
      const appleIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
      if (appleIcon && appleIcon.href.includes('apple-touch-icon-blue')) {
        appleIcon.href = `/apple-touch-icon.png?v=${timestamp}`;
        const newApple = appleIcon.cloneNode(true) as HTMLLinkElement;
        appleIcon.parentNode?.replaceChild(newApple, appleIcon);
      }
      
      const faviconIco = document.querySelector('link[rel="icon"][type="image/x-icon"]') as HTMLLinkElement;
      if (faviconIco && faviconIco.href.includes('favicon-blue')) {
        faviconIco.href = `/favicon.ico?v=${timestamp}`;
        const newIco = faviconIco.cloneNode(true) as HTMLLinkElement;
        faviconIco.parentNode?.replaceChild(newIco, faviconIco);
      }
      
      // Force Safari to reload favicon - Multiple methods for better compatibility
      const forceFaviconReload = () => {
        // Method 1: Add and remove temporary link
        const tempLink = document.createElement('link');
        tempLink.rel = 'icon';
        tempLink.href = `/favicon-32x32.png?v=${timestamp}`;
        document.head.appendChild(tempLink);
        
        // Method 2: Update existing favicon link href with timestamp
        const existingFavicon = document.querySelector('link[rel="icon"]:not([sizes])') as HTMLLinkElement;
        if (existingFavicon) {
          const originalHref = existingFavicon.href;
          existingFavicon.href = '';
          setTimeout(() => {
            existingFavicon.href = `/favicon-32x32.png?v=${timestamp}`;
          }, 10);
        }
        
        setTimeout(() => {
          tempLink.remove();
        }, 200);
      };
      
      // Force reload immediately and after a delay
      forceFaviconReload();
      setTimeout(forceFaviconReload, 300);
    }
  }, [location.pathname]);

  // Ensure black background on route change
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.documentElement.style.backgroundColor = '#000000';
  }, [location.pathname]);

  // Fix Cal.com modal positioning - NEW APPROACH: Create our own fixed container
  useEffect(() => {
    // Scroll to top on Cal.com button click
    const handleCalButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const calButton = target.closest('[data-cal-link], [data-cal-namespace]');
      
      if (calButton) {
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleCalButtonClick, true);

    // NEW APPROACH: Find Cal.com modal and wrap/move it to a fixed container at top
    const fixCalModal = () => {
      // Find Cal.com modal elements
      const iframes = document.querySelectorAll('iframe[src*="cal.com"], iframe[src*="app.cal.com"]');
      
      if (iframes.length === 0) {
        // No modal yet, remove our wrapper if it exists
        const existingWrapper = document.getElementById('cal-fixed-wrapper');
        if (existingWrapper) {
          existingWrapper.remove();
        }
        return;
      }
      
      // Find the backdrop/modal container by walking up from iframe
      let calContainer: HTMLElement | null = null;
      
      for (const iframe of Array.from(iframes)) {
        let element = iframe.parentElement;
        let depth = 0;
        let bestMatch: HTMLElement | null = null;
        
        // Walk up to find the main container (usually 2-4 levels up)
        while (element && depth < 8 && element !== document.body) {
          const className = (element.className?.toString() || '').toLowerCase();
          const id = (element.id || '').toLowerCase();
          
          // Check if this looks like the main backdrop/modal container
          if (
            className.includes('backdrop') ||
            className.includes('modal') ||
            className.includes('overlay') ||
            id.includes('backdrop') ||
            id.includes('modal')
          ) {
            // This is likely the container
            bestMatch = element;
            break;
          }
          
          // If no specific match, use the first div that's a direct child of body or has significant styling
          if (!bestMatch && element.tagName === 'DIV' && element.parentElement === document.body) {
            bestMatch = element;
          }
          
          element = element.parentElement;
          depth++;
        }
        
        if (bestMatch) {
          calContainer = bestMatch;
          break;
        }
      }
      
      // Fallback: if no container found, use the first iframe's parent that's a direct child of body
      if (!calContainer && iframes.length > 0) {
        const firstIframe = iframes[0] as HTMLElement;
        let element = firstIframe.parentElement;
        let depth = 0;
        while (element && depth < 8 && element !== document.body) {
          if (element.parentElement === document.body) {
            calContainer = element;
            break;
          }
          element = element.parentElement;
          depth++;
        }
      }
      
      // If we found a container, ensure it's fixed at top
      if (calContainer && calContainer !== document.body && calContainer.id !== 'cal-fixed-wrapper') {
        // Create or get our fixed wrapper
        let wrapper = document.getElementById('cal-fixed-wrapper');
        
        if (!wrapper) {
          // Create our own fixed wrapper at the top
          wrapper = document.createElement('div');
          wrapper.id = 'cal-fixed-wrapper';
          wrapper.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 999999 !important;
            display: flex !important;
            align-items: flex-start !important;
            justify-content: center !important;
            padding-top: 2vh !important;
            background: rgba(0, 0, 0, 0.8) !important;
            backdrop-filter: blur(8px) !important;
            -webkit-backdrop-filter: blur(8px) !important;
            overflow-y: auto !important;
            pointer-events: auto !important;
          `;
          document.body.appendChild(wrapper);
        }
        
        // Move the Cal.com container into our wrapper if it's not already there
        if (calContainer.parentElement !== wrapper) {
          // Move the entire container
          wrapper.appendChild(calContainer);
          
          // Ensure the container itself doesn't have positioning that breaks things
          calContainer.style.setProperty('position', 'relative', 'important');
          calContainer.style.setProperty('margin', '0 auto', 'important');
          calContainer.style.setProperty('margin-top', '2vh', 'important');
          calContainer.style.setProperty('max-width', '90vw', 'important');
          calContainer.style.setProperty('max-height', '88vh', 'important');
          calContainer.style.setProperty('top', 'auto', 'important');
          calContainer.style.setProperty('left', 'auto', 'important');
          calContainer.style.setProperty('right', 'auto', 'important');
          calContainer.style.setProperty('bottom', 'auto', 'important');
        }
        
        // Prevent body scroll (but allow scrolling within modal)
        document.body.style.setProperty('overflow', 'hidden', 'important');
      }
    };

    // Function to clean up wrapper when modal is closed
    const cleanupWrapper = () => {
      const wrapper = document.getElementById('cal-fixed-wrapper');
      if (wrapper) {
        // Check for iframes
        const hasIframe = wrapper.querySelector('iframe[src*="cal.com"], iframe[src*="app.cal.com"]');
        
        // Check for cal-modal-box element and if it's actually visible/active
        const calModalBox = wrapper.querySelector('cal-modal-box');
        let isModalActive = false;
        
        if (calModalBox) {
          const style = window.getComputedStyle(calModalBox);
          const visibility = style.visibility;
          const display = style.display;
          const state = calModalBox.getAttribute('state');
          const inlineStyle = calModalBox.getAttribute('style') || '';
          
          // Modal is active if it's visible and not hidden
          // Also check inline style for visibility: hidden
          const isHidden = visibility === 'hidden' || 
                          display === 'none' || 
                          inlineStyle.includes('visibility: hidden') ||
                          inlineStyle.includes('visibility:hidden');
          
          isModalActive = !isHidden && state !== 'closed';
          
          // If modal box is hidden, immediately remove wrapper
          if (isHidden) {
            wrapper.remove();
            return; // Exit early
          }
        }
        
        // Also check if wrapper is effectively empty (only hidden elements)
        const allChildren = Array.from(wrapper.children);
        const hasVisibleContent = allChildren.some((child) => {
          const style = window.getComputedStyle(child);
          const inlineStyle = (child as HTMLElement).getAttribute('style') || '';
          return (style.visibility !== 'hidden' && style.display !== 'none') ||
                 !inlineStyle.includes('visibility: hidden');
        });
        
        // Remove wrapper if no iframe, modal is not active, and no visible content
        if (!hasIframe && !isModalActive && !hasVisibleContent) {
          wrapper.remove();
        }
      }
      
      // Always restore body scroll and remove any backdrop-filter effects
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.documentElement.style.overflow = '';
      
      // Also check for any other Cal.com backdrop elements that might be lingering
      const calBackdrops = document.querySelectorAll('[class*="cal-backdrop"], [class*="cal-modal"], [class*="cal-overlay"], .my-backdrop');
      calBackdrops.forEach((el) => {
        const iframes = el.querySelectorAll('iframe[src*="cal.com"], iframe[src*="app.cal.com"]');
        if (iframes.length === 0) {
          // No iframes in this element, remove it
          el.remove();
        }
      });
      
      // Also check for any divs with backdrop-filter that are direct children of body and might be Cal.com backdrops
      const bodyChildren = Array.from(document.body.children) as HTMLElement[];
      bodyChildren.forEach((div) => {
        if (div.tagName === 'DIV' && div.id !== 'cal-fixed-wrapper') {
          const style = window.getComputedStyle(div);
          const className = (div.className?.toString() || '').toLowerCase();
          const hasCalContent = div.querySelector('iframe[src*="cal.com"], iframe[src*="app.cal.com"]');
          
          // If it has backdrop-filter, no Cal.com content, and Cal.com-related classes, remove it
          if (
            style.backdropFilter && 
            style.backdropFilter !== 'none' && 
            !hasCalContent &&
            (className.includes('cal') || className.includes('backdrop') || className.includes('modal') || className.includes('overlay'))
          ) {
            div.remove();
          }
        }
      });
    };
    
    // Watch for Cal.com iframe creation and removal, and cal-modal-box state changes
    const observer = new MutationObserver((mutations) => {
      const iframes = document.querySelectorAll('iframe[src*="cal.com"], iframe[src*="app.cal.com"]');
      const calModalBoxes = document.querySelectorAll('cal-modal-box');
      
      // Check if any iframes were removed
      let iframeRemoved = false;
      let modalBoxRemoved = false;
      let modalBoxHidden = false;
      
      mutations.forEach((mutation) => {
        // Check removed nodes
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const el = node as HTMLElement;
            if (el.tagName === 'IFRAME' && (el.getAttribute('src')?.includes('cal.com') || el.getAttribute('src')?.includes('app.cal.com'))) {
              iframeRemoved = true;
            }
            if (el.tagName === 'CAL-MODAL-BOX') {
              modalBoxRemoved = true;
            }
            // Also check if a container with iframe was removed
            if (el.querySelector('iframe[src*="cal.com"], iframe[src*="app.cal.com"]')) {
              iframeRemoved = true;
            }
          }
        });
        
        // Check attribute changes (like state or style changes)
        if (mutation.type === 'attributes') {
          const target = mutation.target as HTMLElement;
          if (target.tagName === 'CAL-MODAL-BOX') {
            const style = window.getComputedStyle(target);
            const visibility = style.visibility;
            const state = target.getAttribute('state');
            
            // Check if modal was hidden or closed
            if (visibility === 'hidden' || state === 'closed' || mutation.attributeName === 'style') {
              modalBoxHidden = true;
            }
          }
        }
      });
      
      // Check if any active modal boxes exist
      let hasActiveModal = false;
      calModalBoxes.forEach((box) => {
        const style = window.getComputedStyle(box);
        const visibility = style.visibility;
        const display = style.display;
        const state = box.getAttribute('state');
        const inlineStyle = box.getAttribute('style') || '';
        
        // Check if hidden via inline style or computed style
        const isHidden = visibility === 'hidden' || 
                        display === 'none' || 
                        inlineStyle.includes('visibility: hidden') ||
                        inlineStyle.includes('visibility:hidden');
        
        if (!isHidden && state !== 'closed') {
          hasActiveModal = true;
        } else {
          // If this modal box is hidden, trigger cleanup
          setTimeout(cleanupWrapper, 0);
          setTimeout(cleanupWrapper, 50);
        }
      });
      
      if (iframes.length > 0 || hasActiveModal) {
        // Modal appeared - fix it
        requestAnimationFrame(fixCalModal);
        setTimeout(fixCalModal, 50);
        setTimeout(fixCalModal, 100);
      } else if (iframeRemoved || modalBoxRemoved || (modalBoxHidden && iframes.length === 0)) {
        // Modal closed - remove wrapper and restore scroll
        // Use multiple timeouts to ensure cleanup happens
        setTimeout(cleanupWrapper, 0);
        setTimeout(cleanupWrapper, 50);
        setTimeout(cleanupWrapper, 100);
        setTimeout(cleanupWrapper, 200);
        setTimeout(cleanupWrapper, 300);
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'state', 'visibility']
    });
    
    // Also listen for clicks on backdrop/close buttons
    const handleBackdropClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if clicking on backdrop/close button
      if (
        target.id === 'cal-fixed-wrapper' ||
        target.classList.contains('my-backdrop') ||
        target.closest('.my-backdrop') ||
        (target.tagName === 'BUTTON' && (target.getAttribute('aria-label')?.toLowerCase().includes('close') || target.textContent?.includes('×')))
      ) {
        // Check if modal is actually closed (no iframes)
        setTimeout(() => {
          const iframes = document.querySelectorAll('iframe[src*="cal.com"], iframe[src*="app.cal.com"]');
          if (iframes.length === 0) {
            cleanupWrapper();
          }
        }, 100);
      }
    };
    
    document.addEventListener('click', handleBackdropClick, true);
    
    // Check periodically and also check if wrapper should be removed
    const interval = setInterval(() => {
      const iframes = document.querySelectorAll('iframe[src*="cal.com"], iframe[src*="app.cal.com"]');
      const calModalBoxes = document.querySelectorAll('cal-modal-box');
      const wrapper = document.getElementById('cal-fixed-wrapper');
      
      // Check if any modal boxes are actually active
      let hasActiveModal = false;
      calModalBoxes.forEach((box) => {
        const style = window.getComputedStyle(box);
        const visibility = style.visibility;
        const display = style.display;
        const state = box.getAttribute('state');
        const inlineStyle = box.getAttribute('style') || '';
        
        // Check if hidden via inline style or computed style
        const isHidden = visibility === 'hidden' || 
                        display === 'none' || 
                        inlineStyle.includes('visibility: hidden') ||
                        inlineStyle.includes('visibility:hidden');
        
        if (!isHidden && state !== 'closed') {
          hasActiveModal = true;
        } else {
          // If this modal box is hidden, trigger cleanup immediately
          cleanupWrapper();
        }
      });
      
      if (iframes.length === 0 && !hasActiveModal) {
        // No iframes and no active modals - aggressively clean up
        cleanupWrapper();
      } else if (wrapper) {
        // Iframes exist - check if they're inside our wrapper
        const iframesInWrapper = wrapper.querySelectorAll('iframe[src*="cal.com"], iframe[src*="app.cal.com"]');
        if (iframesInWrapper.length === 0 && iframes.length > 0) {
          // Iframes exist but not in wrapper - modal might have moved, re-fix it
          fixCalModal();
        } else if (iframesInWrapper.length === 0) {
          // No iframes in wrapper and no iframes anywhere - cleanup
          cleanupWrapper();
        } else {
          // Iframes exist - ensure modal is fixed
          fixCalModal();
        }
      } else {
        // Iframes exist but no wrapper - create it
        fixCalModal();
      }
    }, 50); // Check more frequently
    
    return () => {
      document.removeEventListener('click', handleCalButtonClick, true);
      document.removeEventListener('click', handleBackdropClick, true);
      observer.disconnect();
      clearInterval(interval);
      // Clean up wrapper if it exists
      cleanupWrapper();
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', position: 'relative' }}>
      <Suspense fallback={<PageLoader />}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/mon-espace" element={<PageTransition><MonEspace /></PageTransition>} />
          <Route path="/notre-solution" element={<PageTransition><NotreSolution /></PageTransition>} />
          <Route path="/cas-clients" element={<PageTransition><CasClients /></PageTransition>} />
          <Route path="/cas-clients/:id" element={<PageTransition><CaseStudyDetail /></PageTransition>} />
          <Route path="/tarifs" element={<PageTransition><Tarifs /></PageTransition>} />
          <Route path="/pour-createurs" element={<PageTransition><PourCreateurs /></PageTransition>} />
          <Route path="/pour-agences" element={<PageTransition><PourAgences /></PageTransition>} />
          <Route path="/international-protection" element={<PageTransition><InternationalProtection /></PageTransition>} />
          <Route path="/escalades-legal" element={<PageTransition><EscaladesLegal /></PageTransition>} />
          <Route path="/a-propos" element={<PageTransition><APropos /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/mentions-legales" element={<PageTransition><MentionsLegales /></PageTransition>} />
          <Route path="/politique-confidentialite" element={<PageTransition><PolitiqueConfidentialite /></PageTransition>} />
          <Route path="/cgv" element={<PageTransition><CGV /></PageTransition>} />
          <Route path="/politique-remboursement" element={<PageTransition><PolitiqueRemboursement /></PageTransition>} />
          <Route path="/politique-cookies" element={<PageTransition><PolitiqueCookies /></PageTransition>} />
          <Route path="/presentation" element={<PageTransition><CRDPresentation /></PageTransition>} />
          <Route path="/presentation-createurs" element={<PageTransition><CreatorPresentation /></PageTransition>} />
          <Route path="/agency-presentation-2" element={<PageTransition><AgencyPresentation2 /></PageTransition>} />
          <Route path="/pr" element={<PageTransition><Presentation /></PageTransition>} />
          {/* Blog routes - work on both main domain and subdomain */}
          {isBlogSubdomain() ? (
            <>
              {/* Subdomain: routes at root */}
              <Route path="/" element={<PageTransition><BlogList /></PageTransition>} />
              <Route path="/category/:category" element={<PageTransition><BlogCategory /></PageTransition>} />
              <Route path="/tag/:tag" element={<PageTransition><BlogTag /></PageTransition>} />
              <Route path="/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
            </>
          ) : (
            <>
              {/* Main domain: routes with /blog prefix */}
              <Route path="/blog" element={<PageTransition><BlogList /></PageTransition>} />
              <Route path="/blog/category/:category" element={<PageTransition><BlogCategory /></PageTransition>} />
              <Route path="/blog/tag/:tag" element={<PageTransition><BlogTag /></PageTransition>} />
              <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
            </>
          )}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
      {shouldShowCookieBanner && <CookieConsent />}
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <NetworkStatus />
            <Toaster />
            <Sonner />
            <Analytics />
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
