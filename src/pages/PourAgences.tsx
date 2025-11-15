import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";
import { 
  Users, 
  BarChart3, 
  Headphones, 
  FileText, 
  Code, 
  ArrowRight,
  Zap,
  Shield,
  TrendingDown,
  Clock,
  Target,
  Lock,
  Sparkles,
  Star,
  Calendar,
  Flame,
  Scale
} from "lucide-react";
import { Link } from "react-router-dom";

const PourAgences = () => {
  useEffect(() => {
    document.title = "Solutions pour Agences | ContentRemovalDesk - Protection Digitale Multi-Comptes";
    
    let forceInterval: ReturnType<typeof setInterval> | null = null;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Solution n°1 en France pour agences. Gérez 10, 20, 50 créateurs sans charge mentale. Tableau de bord centralisé, escalades prioritaires, support dédié 24/7.");
    }

    // Change favicon to blue version - Safari compatible
    const faviconSizes = [128, 96, 64, 48, 32, 16];
    const faviconLinks: HTMLLinkElement[] = [];
    const timestamp = Date.now(); // Cache busting for Safari
    
    // Remove existing favicon links and create new ones for Safari compatibility
    faviconSizes.forEach(size => {
      const existingLink = document.querySelector(`link[rel="icon"][sizes="${size}x${size}"]`) as HTMLLinkElement;
      if (existingLink) {
        const originalHref = existingLink.href;
        existingLink.remove();
        
        // Create new link element for Safari
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.type = 'image/png';
        newLink.sizes = `${size}x${size}`;
        newLink.href = `/favicon-blue-${size}x${size}.png?v=${timestamp}`;
        document.head.appendChild(newLink);
        faviconLinks.push(newLink);
        (newLink as any).__originalHref = originalHref;
        (newLink as any).__originalElement = existingLink;
      }
    });

    // Change shortcut icon
    const shortcutIcon = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;
    if (shortcutIcon) {
      const originalHref = shortcutIcon.href;
      shortcutIcon.href = `/favicon-blue-128x128.png?v=${timestamp}`;
      (shortcutIcon as any).__originalHref = originalHref;
    }

    // Change apple touch icon - Critical for Safari
    const appleIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
    if (appleIcon) {
      const originalHref = appleIcon.href;
      appleIcon.href = `/apple-touch-icon-blue.png?v=${timestamp}`;
      (appleIcon as any).__originalHref = originalHref;
    } else {
      // Create if doesn't exist (Safari requirement)
      const newAppleIcon = document.createElement('link');
      newAppleIcon.rel = 'apple-touch-icon';
      newAppleIcon.sizes = '180x180';
      newAppleIcon.href = `/apple-touch-icon-blue.png?v=${timestamp}`;
      document.head.appendChild(newAppleIcon);
      (newAppleIcon as any).__originalHref = '/apple-touch-icon.png?v=5';
    }

    // Change favicon.ico - Important for Safari
    const faviconIco = document.querySelector('link[rel="icon"][type="image/x-icon"]') as HTMLLinkElement;
    if (faviconIco) {
      const originalHref = faviconIco.href;
      faviconIco.href = `/favicon-blue.ico?v=${timestamp}`;
      (faviconIco as any).__originalHref = originalHref;
    } else {
      // Create if doesn't exist (Safari fallback)
      const newFaviconIco = document.createElement('link');
      newFaviconIco.rel = 'icon';
      newFaviconIco.type = 'image/x-icon';
      newFaviconIco.href = `/favicon-blue.ico?v=${timestamp}`;
      document.head.appendChild(newFaviconIco);
      (newFaviconIco as any).__originalHref = '/favicon.ico?v=5';
    }
    
    // Add a default favicon link without sizes for Safari compatibility
    const defaultFavicon = document.querySelector('link[rel="icon"]:not([sizes]):not([type="image/x-icon"])') as HTMLLinkElement;
    if (!defaultFavicon || defaultFavicon.href.includes('favicon-')) {
      const newDefaultFavicon = document.createElement('link');
      newDefaultFavicon.rel = 'icon';
      newDefaultFavicon.href = `/favicon-blue-32x32.png?v=${timestamp}`;
      document.head.appendChild(newDefaultFavicon);
      (newDefaultFavicon as any).__isNew = true;
    } else if (defaultFavicon) {
      const originalHref = defaultFavicon.href;
      defaultFavicon.href = `/favicon-blue-32x32.png?v=${timestamp}`;
      (defaultFavicon as any).__originalHref = originalHref;
    }

    // Change theme color to blue
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', '#3B82F6');
    }
    
    // Force Safari to reload favicon - Multiple methods for better compatibility
    const forceFaviconReload = () => {
      // Method 1: Add and remove temporary link
      const tempLink = document.createElement('link');
      tempLink.rel = 'icon';
      tempLink.href = `/favicon-blue-32x32.png?v=${timestamp}`;
      document.head.appendChild(tempLink);
      
      // Method 2: Update existing favicon link href with timestamp
      const existingFavicon = document.querySelector('link[rel="icon"]:not([sizes])') as HTMLLinkElement;
      if (existingFavicon) {
        const originalHref = existingFavicon.href;
        existingFavicon.href = '';
        setTimeout(() => {
          existingFavicon.href = `/favicon-blue-32x32.png?v=${timestamp}`;
        }, 10);
      }
      
      setTimeout(() => {
        tempLink.remove();
      }, 200);
    };
    
    // Force reload immediately and after a delay
    forceFaviconReload();
    setTimeout(forceFaviconReload, 300);

    // Cleanup function to restore original favicons
    return () => {
      faviconLinks.forEach(link => {
        if ((link as any).__originalElement) {
          // Restore original element
          const original = (link as any).__originalElement;
          link.remove();
          document.head.appendChild(original);
        } else if ((link as any).__originalHref) {
          link.href = (link as any).__originalHref;
        } else {
          link.remove();
        }
      });

      if (shortcutIcon && (shortcutIcon as any).__originalHref) {
        shortcutIcon.href = (shortcutIcon as any).__originalHref;
      }

      if (appleIcon && (appleIcon as any).__originalHref) {
        appleIcon.href = (appleIcon as any).__originalHref;
      }

      if (faviconIco && (faviconIco as any).__originalHref) {
        faviconIco.href = (faviconIco as any).__originalHref;
      }
      
      // Remove default favicon if we created it
      const defaultFavicon = document.querySelector('link[rel="icon"]:not([sizes]):not([type="image/x-icon"])') as HTMLLinkElement;
      if (defaultFavicon && (defaultFavicon as any).__isNew) {
        defaultFavicon.remove();
      } else if (defaultFavicon && (defaultFavicon as any).__originalHref) {
        defaultFavicon.href = (defaultFavicon as any).__originalHref;
      }

      if (themeColor) {
        themeColor.setAttribute('content', '#D4AF37');
      }
    };

    // Add custom CSS for small to medium-sized modal
    if (!document.getElementById("cal-com-custom-styles")) {
      const style = document.createElement("style");
      style.id = "cal-com-custom-styles";
      style.textContent = `
        /* Target all Cal.com modal containers - MEDIUM SIZE - EXTREMELY AGGRESSIVE */
        /* Target ALL Cal.com modal elements - FORCE 50% WIDTH */
        .cal-modal,
        .cal-modal[data-cal-namespace="agence"],
        [data-cal-namespace="agence"] .cal-modal,
        .cal-modal-wrapper,
        .cal-modal-content,
        .cal-modal[data-cal-namespace="agence"] .cal-modal-content,
        div[class*="cal-modal"],
        div[class*="CalModal"],
        [id*="cal-modal"],
        [id*="CalModal"],
        [class*="cal-"],
        [id*="cal-"],
        div[class*="Cal"],
        [class*="calendar"],
        [id*="calendar"],
        [data-cal-namespace="agence"] iframe,
        iframe[data-cal-namespace="agence"],
        .cal-modal iframe,
        .cal-modal[data-cal-namespace="agence"] iframe,
        iframe[src*="cal.com"],
        iframe[src*="app.cal.com"],
        iframe[src*="calendar"],
        .cal-modal-dialog,
        .cal-modal[data-cal-namespace="agence"] .cal-modal-dialog,
        div[class*="cal-dialog"],
        div[class*="CalDialog"],
        [class*="dialog"],
        #cal-root,
        [id*="cal-root"],
        [id*="CalRoot"],
        [id*="calendar-root"],
        *[class*="cal"],
        *[id*="cal"],
        *[class*="Cal"],
        *[id*="Cal"],
        body > div:last-child,
        body > div[style*="position"],
        div[style*="fixed"],
        div[style*="absolute"][style*="z-index"],
        div[role="dialog"],
        div[aria-modal="true"],
        div[style*="width: 100%"],
        div[style*="width:100%"],
        div[style*="width: 90%"],
        div[style*="width:90%"],
        div[style*="width: 95%"],
        div[style*="width:95%"] {
          max-width: 450px !important;
          width: 50% !important;
          max-height: 65vh !important;
          left: 50% !important;
          top: 50% !important;
          transform: translate(-50%, -50%) !important;
          box-sizing: border-box !important;
          min-width: auto !important;
          position: fixed !important;
        }
        
        /* EXTRA AGGRESSIVE - Override any width styles */
        [style*="width"],
        [style*="Width"],
        [style*="WIDTH"],
        [style*="width: 100vw"],
        [style*="width:100vw"],
        [style*="width: 100%"],
        [style*="width:100%"],
        [data-testid="booker-container"],
        [data-testid="booker-container"] * {
          width: 50% !important;
          max-width: 450px !important;
        }
        
        /* Target the specific Cal.com booker container - HIGHEST PRIORITY */
        div[data-testid="booker-container"],
        [data-testid="booker-container"],
        div[data-testid="booker-container"][style*="width"],
        [data-testid="booker-container"][style*="width"],
        div[data-testid="booker-container"][style*="100vw"],
        [data-testid="booker-container"][style*="100vw"],
        div[data-testid="booker-container"][style*="width: 100vw"],
        [data-testid="booker-container"][style*="width: 100vw"] {
          width: 50% !important;
          max-width: 450px !important;
          min-width: auto !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          position: relative !important;
        }
        
        /* Target parent containers that wrap booker-container - FORCE PARENT WIDTH */
        div:has([data-testid="booker-container"]),
        [class*="cal"]:has([data-testid="booker-container"]),
        [id*="cal"]:has([data-testid="booker-container"]),
        body > div:has([data-testid="booker-container"]),
        [role="dialog"]:has([data-testid="booker-container"]),
        [aria-modal="true"]:has([data-testid="booker-container"]) {
          width: 50% !important;
          max-width: 450px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
        }
        
        /* Target any modal/overlay that contains booker-container */
        [class*="modal"]:has([data-testid="booker-container"]),
        [id*="modal"]:has([data-testid="booker-container"]),
        [class*="overlay"]:has([data-testid="booker-container"]),
        [id*="overlay"]:has([data-testid="booker-container"]) {
          width: 50% !important;
          max-width: 450px !important;
        }
        
        /* Override any large sizes - FORCE 50% */
        div[style*="width"][style*="%"],
        div[style*="max-width"],
        div[style*="min-width"],
        div[style*="width: 90%"],
        div[style*="width: 100%"],
        div[style*="width: 95%"],
        div[style*="width:90%"],
        div[style*="width:100%"],
        div[style*="width:95%"],
        [style*="max-width: 800px"],
        [style*="max-width: 900px"],
        [style*="max-width: 1000px"],
        [style*="width: 90%"],
        [style*="width: 95%"],
        [style*="width: 100%"],
        [style*="width:90%"],
        [style*="width:95%"],
        [style*="width:100%"],
        *[style*="width"] {
          max-width: 450px !important;
          min-width: auto !important;
          width: 50% !important;
        }
        
        /* Ensure the backdrop doesn't interfere */
        .cal-modal-backdrop {
          display: block !important;
        }
        
        /* Target shadow DOM or nested elements */
        .cal-modal *,
        [data-cal-namespace] * {
          max-width: 100% !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    // ULTRA AGGRESSIVE: Intercept style.setProperty to force modal size
    const originalSetProperty = CSSStyleDeclaration.prototype.setProperty;
    CSSStyleDeclaration.prototype.setProperty = function(property: string, value: string, priority?: string) {
      if (property === 'max-width' || property === 'width' || property === 'min-width') {
        const element = this as any;
        const isCalModal = element.ownerElement && (
          element.ownerElement.classList?.toString().includes('cal') ||
          element.ownerElement.id?.includes('cal') ||
          element.ownerElement.getAttribute('data-cal-namespace') ||
          element.ownerElement.querySelector?.('[data-cal-namespace]') ||
          element.ownerElement.closest?.('[data-cal-namespace]') ||
          element.ownerElement.closest?.('.cal-modal') ||
          element.ownerElement.closest?.('[class*="cal-modal"]')
        );
        
        if (isCalModal) {
          if (property === 'max-width' && (value.includes('px') && parseInt(value) > 450)) {
            value = '450px';
          } else if (property === 'width') {
            // Force 50% for any width value, including 100vw
            if (value === '100vw' || value === '100%' || value === '90%' || value === '95%') {
              value = '50%';
            } else if (value.includes('%') && parseInt(value) > 50) {
              value = '50%';
            } else if (value.includes('px') && parseInt(value) > 450) {
              value = '50%';
            } else if (value.includes('vw') && parseInt(value) >= 100) {
              value = '50%';
            }
          } else if (property === 'min-width' && value !== 'auto') {
            value = 'auto';
          }
        }
        
        // PRIORITY: booker-container gets forced first
        const styleElement = this as any;
        const ownerElement = styleElement.ownerElement;
        const isBookerContainer = ownerElement && (
          ownerElement.getAttribute('data-testid') === 'booker-container' ||
          ownerElement.closest?.('[data-testid="booker-container"]')
        );
        
        if (isBookerContainer && property === 'width') {
          // Force 50% for ANY width value on booker-container - NO EXCEPTIONS
          // Specifically catch 50vw, 100vw, and any other value
          if (value && value !== '50%') {
            // Catch ALL vw values, not just 50vw/100vw
            if (value.includes('vw') || (value.includes('%') && parseInt(value) > 50) || (value.includes('px') && parseInt(value) > 450)) {
              value = '50%';
              // Also immediately apply it directly and remove old value
              setTimeout(() => {
                if (ownerElement && ownerElement.style) {
                  ownerElement.style.removeProperty('width');
                  ownerElement.style.setProperty('width', '50%', 'important');
                  ownerElement.style.width = '50%';
                  
                  // Also replace in the style attribute directly - replace ALL vw values
                  const currentStyle = ownerElement.getAttribute('style') || '';
                  const newStyle = currentStyle
                    .replace(/width\s*:\s*[^;]+;?/gi, '')
                    .replace(/50vw/gi, '50%')
                    .replace(/100vw/gi, '50%')
                    .replace(/[0-9]+vw/gi, '50%')  // Replace ANY vw value
                    + 'width: 50% !important; ';
                  ownerElement.setAttribute('style', newStyle.trim());
                  
                  // Also force parent if it exists
                  const parent = ownerElement.parentElement;
                  if (parent && parent.style) {
                    parent.style.setProperty('width', '50%', 'important');
                    parent.style.setProperty('max-width', '450px', 'important');
                  }
                }
              }, 0);
            }
          }
        }
      }
      return originalSetProperty.call(this, property, value, priority);
    };
    
    // Dedicated function to force booker-container width - ULTRA AGGRESSIVE
    const forceBookerContainerWidth = () => {
      try {
        // Try multiple query methods to find the element
        const bookerContainer = document.querySelector('[data-testid="booker-container"]') as HTMLElement;
        if (bookerContainer) {
          // Method 1: Remove width property completely, then set to 50%
          if (bookerContainer.style) {
            bookerContainer.style.removeProperty('width');
            bookerContainer.style.removeProperty('min-width');
          }
          
          // Method 2: Force with !important
          bookerContainer.style.setProperty('width', '50%', 'important');
          bookerContainer.style.setProperty('max-width', '450px', 'important');
          bookerContainer.style.setProperty('min-width', 'auto', 'important');
          
          // Method 3: Direct assignment
          bookerContainer.style.width = '50%';
          bookerContainer.style.maxWidth = '450px';
          bookerContainer.style.minWidth = 'auto';
          
          // Method 4: Override via Object.defineProperty if possible
          try {
            Object.defineProperty(bookerContainer.style, 'width', {
              get: () => '50%',
              set: () => {},
              configurable: true
            });
          } catch (e) {
            // If defineProperty fails, continue with other methods
          }
          
          // Method 5: Remove from inline style attribute and re-add - REPLACE 50vw with 50%
          const currentStyle = bookerContainer.getAttribute('style') || '';
          let newStyle = currentStyle
            .replace(/width\s*:\s*[^;]+;?/gi, '')
            .replace(/min-width\s*:\s*[^;]+;?/gi, '')
            .replace(/max-width\s*:\s*[^;]+;?/gi, '')
            .replace(/50vw/gi, '50%')
            .replace(/100vw/gi, '50%')
            .replace(/width:\s*50vw/gi, 'width: 50%')
            .replace(/width:\s*100vw/gi, 'width: 50%');
          
          // Add our forced width at the end
          if (!newStyle.includes('width:')) {
            newStyle += 'width: 50% !important; ';
          }
          if (!newStyle.includes('max-width:')) {
            newStyle += 'max-width: 450px !important; ';
          }
          if (!newStyle.includes('min-width:')) {
            newStyle += 'min-width: auto !important; ';
          }
          bookerContainer.setAttribute('style', newStyle.trim());
          
          // Also target parent containers - go up 5 levels
          let parent = bookerContainer.parentElement;
          let depth = 0;
          while (parent && depth < 5) {
            if (parent.style) {
              const computedWidth = window.getComputedStyle(parent).width;
              if (computedWidth.includes('px') && parseInt(computedWidth) > 450 || 
                  computedWidth.includes('%') && parseInt(computedWidth) > 50 ||
                  computedWidth.includes('vw') && parseInt(computedWidth) >= 100 ||
                  parent.style.width === '100vw' || parent.style.width === '100%') {
                parent.style.removeProperty('width');
                parent.style.setProperty('width', '50%', 'important');
                parent.style.setProperty('max-width', '450px', 'important');
                parent.style.width = '50%';
                parent.style.maxWidth = '450px';
              }
            }
            parent = parent.parentElement;
            depth++;
          }
          
          // Force again multiple times with delays - ALWAYS REPLACE 50vw in style attribute
          [0, 10, 50, 100, 200, 500].forEach(delay => {
            setTimeout(() => {
              if (bookerContainer && bookerContainer.style) {
                bookerContainer.style.removeProperty('width');
                bookerContainer.style.setProperty('width', '50%', 'important');
                bookerContainer.style.width = '50%';
                bookerContainer.style.setProperty('max-width', '450px', 'important');
                bookerContainer.style.maxWidth = '450px';
                
                // ALWAYS replace 50vw/100vw in the style attribute - don't check if it exists
                const currentStyle = bookerContainer.getAttribute('style') || '';
                const newStyle = currentStyle
                  .replace(/width\s*:\s*50vw/gi, 'width: 50%')
                  .replace(/width\s*:\s*100vw/gi, 'width: 50%')
                  .replace(/width\s*:\s*[0-9]+vw/gi, 'width: 50%')  // Catch any vw value
                  .replace(/50vw/gi, '50%')
                  .replace(/100vw/gi, '50%');
                if (newStyle !== currentStyle) {
                  bookerContainer.setAttribute('style', newStyle);
                }
              }
            }, delay);
          });
          
          // Method 6: Create a dedicated MutationObserver for style attribute changes
          // This will catch Cal.com when it tries to set 50vw
          if (!(bookerContainer as any)._styleObserver) {
            const styleObserver = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                  const target = mutation.target as HTMLElement;
                  const currentStyle = target.getAttribute('style') || '';
                  // Immediately replace any vw values
                  if (currentStyle.includes('vw')) {
                    const newStyle = currentStyle
                      .replace(/width\s*:\s*50vw/gi, 'width: 50%')
                      .replace(/width\s*:\s*100vw/gi, 'width: 50%')
                      .replace(/width\s*:\s*[0-9]+vw/gi, 'width: 50%')
                      .replace(/50vw/gi, '50%')
                      .replace(/100vw/gi, '50%');
                    // Use requestAnimationFrame to avoid infinite loops
                    requestAnimationFrame(() => {
                      if (target.getAttribute('style')?.includes('vw')) {
                        target.setAttribute('style', newStyle);
                        target.style.setProperty('width', '50%', 'important');
                        target.style.width = '50%';
                      }
                    });
                  }
                }
              });
            });
            
            // Observe the booker-container for style attribute changes
            styleObserver.observe(bookerContainer, {
              attributes: true,
              attributeFilter: ['style'],
              attributeOldValue: true
            });
            
            // Store observer for cleanup
            (bookerContainer as any)._styleObserver = styleObserver;
          }
        }
      } catch (e) {
        // Silently fail if element doesn't exist yet
      }
    };
    
    // Aggressive MutationObserver + requestAnimationFrame to force modal size
    const applyModalStyles = () => {
      // Target all possible Cal.com modal elements
      const allSelectors = [
        '.cal-modal',
        '[class*="cal-modal"]',
        '[id*="cal-modal"]',
        '[id*="CalModal"]',
        'iframe[src*="cal.com"]',
        'iframe[src*="app.cal.com"]',
        '[data-cal-namespace="agence"]',
        '.cal-modal-wrapper',
        '.cal-modal-content',
        '.cal-modal-dialog',
        '#cal-root',
        '[role="dialog"]',
        '[aria-modal="true"]'
      ];
      
      allSelectors.forEach(selector => {
        try {
          const elements = document.querySelectorAll(selector);
          elements.forEach((element: any) => {
            if (element && element.style) {
              // Force all size properties with !important
              element.style.setProperty('max-width', '450px', 'important');
              element.style.setProperty('width', '50%', 'important');
              element.style.setProperty('max-height', '65vh', 'important');
              element.style.setProperty('min-width', 'auto', 'important');
              element.style.setProperty('min-height', 'auto', 'important');
              element.style.setProperty('left', '50%', 'important');
              element.style.setProperty('top', '50%', 'important');
              element.style.setProperty('transform', 'translate(-50%, -50%)', 'important');
              element.style.setProperty('position', 'fixed', 'important');
              
              // Direct style assignment as backup
              try {
                (element as HTMLElement).style.maxWidth = '450px';
                (element as HTMLElement).style.width = '50%';
                (element as HTMLElement).style.maxHeight = '65vh';
                (element as HTMLElement).style.minWidth = 'auto';
                (element as HTMLElement).style.left = '50%';
                (element as HTMLElement).style.top = '50%';
                (element as HTMLElement).style.transform = 'translate(-50%, -50%)';
                (element as HTMLElement).style.position = 'fixed';
              } catch (e) {}
              
              if (element.tagName === 'IFRAME') {
                element.style.setProperty('max-width', '450px', 'important');
                element.style.setProperty('width', '100%', 'important');
                element.style.setProperty('max-height', '65vh', 'important');
                element.style.setProperty('min-width', 'auto', 'important');
              }
            }
          });
        } catch (e) {}
      });
      
      // SPECIFIC TARGET: Cal.com booker container with 100vw
      forceBookerContainerWidth();
      
      // Target all fixed/absolute positioned divs that might be modals - FORCE 50% WIDTH
      try {
        const allDivs = document.querySelectorAll('div');
        allDivs.forEach((div: any) => {
          const computedStyle = window.getComputedStyle(div);
          const inlineWidth = div.style?.width || '';
          const computedWidth = computedStyle.width;
          
          // Check if it's likely a Cal.com modal or has large width
          const hasCalClass = div.classList?.toString().includes('cal') || 
                             div.id?.includes('cal') ||
                             div.querySelector('[data-cal-namespace]') ||
                             div.closest('[data-cal-namespace]');
          
          const isLargeWidth = computedWidth.includes('px') && parseInt(computedWidth) > 450 ||
                              computedWidth.includes('%') && parseInt(computedWidth) > 50 ||
                              inlineWidth.includes('100%') ||
                              inlineWidth.includes('90%') ||
                              inlineWidth.includes('95%');
          
          if ((computedStyle.position === 'fixed' || computedStyle.position === 'absolute') && 
              (div.style?.zIndex || parseInt(computedStyle.zIndex) > 1000)) {
            if (hasCalClass || isLargeWidth || computedStyle.width.includes('%') || computedStyle.maxWidth.includes('px')) {
              // Force 50% width multiple times
              div.style.setProperty('max-width', '450px', 'important');
              div.style.setProperty('width', '50%', 'important');
              div.style.setProperty('max-height', '65vh', 'important');
              div.style.setProperty('min-width', 'auto', 'important');
              div.style.setProperty('left', '50%', 'important');
              div.style.setProperty('top', '50%', 'important');
              div.style.setProperty('transform', 'translate(-50%, -50%)', 'important');
              div.style.setProperty('position', 'fixed', 'important');
              
              // Also set directly multiple times to override
              try {
                div.style.width = '50%';
                div.style.maxWidth = '450px';
                // Force again after a micro delay
                setTimeout(() => {
                  div.style.width = '50%';
                  div.style.maxWidth = '450px';
                }, 0);
              } catch (e) {}
            }
          }
        });
      } catch (e) {}
    };
    
    // Use requestAnimationFrame for continuous enforcement
    let rafId: number | null = null;
    const forceStyles = () => {
      applyModalStyles();
      forceBookerContainerWidth();
      rafId = requestAnimationFrame(forceStyles);
    };
    rafId = requestAnimationFrame(forceStyles);
    
    const observer = new MutationObserver((mutations) => {
      applyModalStyles();
      forceBookerContainerWidth();
      
      // Specifically watch for booker-container creation
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            // Check if the added node is the booker-container
            if (element.getAttribute('data-testid') === 'booker-container') {
              forceBookerContainerWidth();
              // Also check children
            } else if (element.querySelector('[data-testid="booker-container"]')) {
              forceBookerContainerWidth();
            }
            // Check if any descendant is the booker-container
            const bookerContainer = element.querySelector?.('[data-testid="booker-container"]');
            if (bookerContainer) {
              forceBookerContainerWidth();
            }
          }
        });
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'id', 'style', 'data-testid']
    });
    
    // Also use setInterval as backup - very frequent to catch Cal.com
    forceInterval = setInterval(() => {
      applyModalStyles();
      forceBookerContainerWidth();
      
      // Also directly check and replace 50vw in style attributes
      const bookerContainer = document.querySelector('[data-testid="booker-container"]') as HTMLElement;
      if (bookerContainer) {
        const currentStyle = bookerContainer.getAttribute('style') || '';
        if (currentStyle.includes('vw')) {
          const newStyle = currentStyle
            .replace(/width\s*:\s*50vw/gi, 'width: 50%')
            .replace(/width\s*:\s*100vw/gi, 'width: 50%')
            .replace(/width\s*:\s*[0-9]+vw/gi, 'width: 50%')
            .replace(/50vw/gi, '50%')
            .replace(/100vw/gi, '50%');
          if (newStyle !== currentStyle) {
            bookerContainer.setAttribute('style', newStyle);
            bookerContainer.style.setProperty('width', '50%', 'important');
            bookerContainer.style.width = '50%';
          }
        }
      }
    }, 16); // ~60fps
    setTimeout(() => {
      if (forceInterval) {
        clearInterval(forceInterval);
        forceInterval = null;
      }
    }, 20000);
    
    // Apply on any click
    const handleClick = () => {
      requestAnimationFrame(() => {
        applyModalStyles();
        forceBookerContainerWidth();
      });
      setTimeout(() => {
        applyModalStyles();
        forceBookerContainerWidth();
      }, 0);
      setTimeout(() => {
        applyModalStyles();
        forceBookerContainerWidth();
      }, 50);
      setTimeout(() => {
        applyModalStyles();
        forceBookerContainerWidth();
      }, 200);
    };
    document.addEventListener('click', handleClick, true);
    
    // Initialize Cal.com using React package
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "agence" });
        cal("ui", {
          theme: "dark",
          cssVarsPerTheme: {
            light: { "cal-brand": "#0D0D0D" },
            dark: { "cal-brand": "#3B82F6" }
          },
          hideEventTypeDetails: true,
          layout: "week_view",
          styles: {
            branding: {
              brandColor: "#3B82F6"
            }
          }
        });
        
        // Force modal size via Cal.com config if available
        if (typeof (window as any).Cal !== 'undefined' && (window as any).Cal.ns && (window as any).Cal.ns.agence) {
          try {
            (window as any).Cal.ns.agence("ui", {
              theme: "dark",
              layout: "week_view"
            });
          } catch (e) {}
        }
        
        // Force booker container width after Cal.com initializes
        setTimeout(() => {
          forceBookerContainerWidth();
        }, 100);
        setTimeout(() => {
          forceBookerContainerWidth();
        }, 500);
        setTimeout(() => {
          forceBookerContainerWidth();
        }, 1000);
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error("Cal.com initialization error:", error);
        }
      }
    })();
    
    return () => {
      // Cleanup observer, interval, and RAF on unmount
      observer.disconnect();
      
      // Cleanup style observers on booker-container
      const bookerContainer = document.querySelector('[data-testid="booker-container"]') as HTMLElement;
      if (bookerContainer && (bookerContainer as any)._styleObserver) {
        (bookerContainer as any)._styleObserver.disconnect();
      }
      
      if (forceInterval) {
        clearInterval(forceInterval);
        forceInterval = null;
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      document.removeEventListener('click', handleClick, true);
      // Restore original setProperty
      CSSStyleDeclaration.prototype.setProperty = originalSetProperty;
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />

      {/* SECTION 1 - Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Optimized animated background gradients - Safari optimized with reduced blur */}
        <div className="absolute inset-0 overflow-hidden" style={{ 
          transform: 'translateZ(0)', 
          WebkitTransform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        } as React.CSSProperties}>
          {/* Main gradient orb 1 - optimized blur */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-[1200px] h-[1200px]"
            animate={{
              opacity: [0.6, 0.9, 0.7, 0.6],
              scale: [1, 1.2, 1.1, 1],
              x: [0, 50, -40, 30, 0],
              y: [0, -45, 35, -25, 0],
              rotate: [0, 10, -10, 5, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              type: "tween"
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.18) 25%, rgba(59, 130, 246, 0.12) 40%, rgba(147, 197, 253, 0.06) 55%, transparent 70%)',
              filter: 'blur(40px)',
              WebkitFilter: 'blur(40px)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          {/* Main gradient orb 2 - optimized blur */}
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-[1100px] h-[1100px]"
            animate={{
              opacity: [0.55, 0.85, 0.65, 0.55],
              scale: [1, 1.15, 1.1, 1],
              x: [0, -45, 35, -25, 0],
              y: [0, 40, -30, 20, 0],
              rotate: [0, -10, 10, -5, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(96, 165, 250, 0.22) 0%, rgba(147, 197, 253, 0.15) 25%, rgba(96, 165, 250, 0.08) 40%, rgba(59, 130, 246, 0.04) 55%, transparent 70%)',
              filter: 'blur(45px)',
              WebkitFilter: 'blur(45px)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          {/* Center accent orb - optimized blur */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
            animate={{
              opacity: [0.4, 0.65, 0.5, 0.4],
              scale: [1, 1.15, 1.08, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.2) 0%, rgba(96, 165, 250, 0.12) 25%, rgba(147, 197, 253, 0.07) 40%, rgba(59, 130, 246, 0.03) 55%, transparent 70%)',
              filter: 'blur(50px)',
              WebkitFilter: 'blur(50px)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          {/* Additional accent orb - top right - optimized blur */}
          <motion.div 
            className="absolute top-1/3 right-1/3 w-[700px] h-[700px]"
            animate={{
              opacity: [0.3, 0.55, 0.4, 0.3],
              scale: [1, 1.12, 1.06, 1],
              x: [0, 30, -25, 0],
              y: [0, -30, 25, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.18) 0%, rgba(96, 165, 250, 0.1) 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
              filter: 'blur(45px)',
              WebkitFilter: 'blur(45px)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          {/* Additional accent orb - bottom left - optimized blur */}
          <motion.div 
            className="absolute bottom-1/3 left-1/3 w-[650px] h-[650px]"
            animate={{
              opacity: [0.25, 0.5, 0.35, 0.25],
              scale: [1, 1.1, 1.05, 1],
              x: [0, -25, 20, 0],
              y: [0, 25, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.15) 0%, rgba(59, 130, 246, 0.08) 30%, rgba(96, 165, 250, 0.04) 50%, transparent 70%)',
              filter: 'blur(40px)',
              WebkitFilter: 'blur(40px)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          {/* Optimized floating particles - reduced box-shadow for performance */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2.5 + (i % 4) * 1}px`,
                height: `${2.5 + (i % 4) * 1}px`,
                left: `${10 + i * 6}%`,
                top: `${25 + (i % 5) * 15}%`,
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                background: i % 3 === 0 
                  ? 'radial-gradient(circle, rgba(96, 165, 250, 0.8) 0%, rgba(59, 130, 246, 0.4) 100%)'
                  : i % 3 === 1
                  ? 'radial-gradient(circle, rgba(147, 197, 253, 0.9) 0%, rgba(96, 165, 250, 0.5) 100%)'
                  : 'radial-gradient(circle, rgba(59, 130, 246, 0.85) 0%, rgba(147, 197, 253, 0.45) 100%)',
                boxShadow: '0 0 10px rgba(96, 165, 250, 0.6)'
              } as React.CSSProperties}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.sin(i * 0.8) * 30, Math.cos(i * 0.6) * 20, 0],
                opacity: [0.5, 1, 0.7, 0.5],
                scale: [1, 1.4, 1.2, 1],
              }}
              transition={{
                duration: 2.5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
          {/* Optimized sparkles - reduced drop-shadow for performance */}
          {[...Array(4)].map((_, i) => {
            const startX = 5 + (i * 5.5) % 90;
            const startY = 100 + (i * 4) % 25;
            return (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  pointerEvents: 'none'
                } as React.CSSProperties}
                animate={{
                  y: [0, -1400],
                  x: [0, Math.sin(i * 0.6) * 50, Math.cos(i * 0.4) * 40, Math.sin(i * 0.3) * 30],
                  opacity: [0, 0.9, 1, 0.8, 0],
                  scale: [0.4, 1.1, 1.3, 1, 0.7],
                  rotate: [0, 180, 360, 540, 720]
                }}
                transition={{
                  duration: 6 + (i % 3) * 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.3,
                  type: "tween"
                }}
              >
                <Sparkles 
                  className={i % 3 === 0 ? "text-blue-400" : i % 3 === 1 ? "text-blue-300" : "text-blue-500"} 
                  size={10 + (i % 4) * 5}
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(96, 165, 250, 0.8))',
                    WebkitFilter: 'drop-shadow(0 0 4px rgba(96, 165, 250, 0.8))',
                    opacity: 0.9
                  }}
                />
              </motion.div>
            );
          })}
          {/* Optimized star sparkles - reduced drop-shadow for performance */}
          {[...Array(3)].map((_, i) => {
            const startX = 10 + (i * 8) % 80;
            const startY = 75 + (i * 7) % 20;
            return (
              <motion.div
                key={`star-${i}`}
                className="absolute"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  pointerEvents: 'none'
                } as React.CSSProperties}
                animate={{
                  y: [0, -1600],
                  x: [0, Math.sin(i * 0.8) * 60, Math.cos(i * 0.5) * 45, Math.sin(i * 0.2) * 30],
                  opacity: [0, 0.7, 0.9, 0.6, 0],
                  scale: [0.2, 0.9, 1.1, 1, 0.6],
                  rotate: [0, -180, -360, -540, -720]
                }}
                transition={{
                  duration: 6 + (i % 3) * 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.3 + 0.8,
                }}
              >
                <Star 
                  className={i % 2 === 0 ? "text-blue-300 fill-blue-300/40" : "text-blue-400 fill-blue-400/30"} 
                  size={8 + (i % 3) * 4}
                  style={{
                    filter: 'drop-shadow(0 0 3px rgba(147, 197, 253, 0.6))',
                    WebkitFilter: 'drop-shadow(0 0 3px rgba(147, 197, 253, 0.6))'
                  }}
                />
              </motion.div>
            );
          })}
          {/* Enhanced grid overlay for depth - animated */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundImage: 'linear-gradient(rgba(96, 165, 250, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 0.15) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          {/* Radial light rays for extra depth - optimized */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              opacity: [0.02, 0.04, 0.02],
              rotate: [0, 360]
            }}
            transition={{
              opacity: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                type: "tween"
              },
              rotate: {
                duration: 50,
                repeat: Infinity,
                ease: "linear",
                type: "tween"
              }
            }}
            style={{
              background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(59, 130, 246, 0.05) 60deg, transparent 120deg, rgba(96, 165, 250, 0.05) 180deg, transparent 240deg, rgba(147, 197, 253, 0.05) 300deg, transparent 360deg)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            {/* Badge - Enhanced with animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-500/15 via-blue-500/20 to-blue-500/15 backdrop-blur-xl border border-blue-500/40 shadow-2xl shadow-blue-500/30 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                } as React.CSSProperties}
              />
              {/* Pulsing glow effect - optimized with opacity instead of box-shadow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  pointerEvents: 'none'
                } as React.CSSProperties}
              />
              <motion.div
                className="relative z-10"
                animate={{ 
                  rotate: [0, 15, -15, 10, 0],
                  scale: [1, 1.15, 1.05, 1.1, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.5
                }}
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'transform'
                } as React.CSSProperties}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </motion.div>
              <motion.span 
                className="relative z-10 text-xs sm:text-sm font-semibold text-blue-300 drop-shadow-[0_0_4px_rgba(59,130,246,0.6)]"
                animate={{
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Solution agence n°1 en France
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display font-bold leading-[1.1] tracking-tight"
            >
              <motion.span 
                className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 relative"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)',
                    '0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.15)',
                    '0 0 20px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                  WebkitFilter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                }}
              >
                La protection de 10, 20, 50 créateurs.
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-xl sm:text-2xl lg:text-3xl text-zinc-200 max-w-4xl mx-auto leading-relaxed font-medium"
              style={{
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
                WebkitFilter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
              }}
            >
              Sans charge mentale. Sans chaos. Tout dans un seul tableau de bord.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed"
              style={{
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
              }}
            >
              Pour les studios, managers, agents et agences créatives.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                {/* Glowing aura behind button - optimized blur */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    WebkitFilter: 'blur(20px)',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  } as React.CSSProperties}
                />
                <Button
                  size="lg"
                  id="cal-demo-button"
                  data-cal-link="chan-aoufi-ttauyj/agence"
                  data-cal-namespace="agence"
                  data-cal-config='{"layout":"week_view","theme":"dark","embedSize":"medium"}'
                  onClick={async (e) => {
                    e.preventDefault();
                    try {
                      const cal = await getCalApi({ namespace: "agence" });
                      if (cal) {
                        cal("ui", {
                          theme: "dark",
                          cssVarsPerTheme: {
                            light: { "cal-brand": "#0D0D0D" },
                            dark: { "cal-brand": "#3B82F6" }
                          },
                          hideEventTypeDetails: true,
                          layout: "week_view",
                          styles: {
                            branding: {
                              brandColor: "#3B82F6"
                            }
                          }
                        });
                        // Open the calendar modal
                        cal("inline", {
                          calLink: "chan-aoufi-ttauyj/agence",
                          elementOrSelector: e.currentTarget
                        });
                      }
                    } catch (error) {
                      if (import.meta.env.DEV) {
                        console.error("Error opening Cal.com:", error);
                      }
                    }
                  }}
                  className="group relative bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 hover:from-blue-600 hover:via-blue-500 hover:to-blue-500 text-white font-semibold rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 w-full sm:w-auto cursor-pointer overflow-hidden border border-blue-400/30"
                >
                  {/* Enhanced shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut"
                    }}
                    style={{
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    } as React.CSSProperties}
                  />
                  {/* Pulsing inner glow - optimized with opacity */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      pointerEvents: 'none'
                    } as React.CSSProperties}
                  />
                  <span className="relative z-10 flex items-center gap-3 justify-center">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                    transition={{
                      rotate: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                      style={{
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        willChange: 'transform'
                      } as React.CSSProperties}
                    >
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
                    </motion.div>
                    <motion.span
                      animate={{
                        textShadow: [
                          '0 0 10px rgba(255, 255, 255, 0.3)',
                          '0 0 15px rgba(255, 255, 255, 0.5)',
                          '0 0 10px rgba(255, 255, 255, 0.3)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Demander une démonstration
                    </motion.span>
                    <motion.div
                      animate={{
                        x: [0, 4, 0]
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-zinc-800 hover:border-blue-500/50 bg-black/50 backdrop-blur-xl text-foreground font-semibold rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl hover:bg-zinc-900/50 transition-all duration-300 w-full sm:w-auto"
                  asChild
                >
                  <a href="mailto:support@contentremovaldesk.com">
                    <span className="flex items-center gap-3 justify-center">
                      <Headphones className="h-5 w-5 sm:h-6 sm:w-6" />
                      Parler à un expert
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* SECTION 2 - Positioning */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 sm:mb-8">
              Gérez vos créateurs. Nous gérons leurs crises.
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              CRD devient votre <span className="text-blue-400 font-semibold">"équipe de protection intégrée"</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Flame,
                title: "Suppression prioritaire",
                description: "Vos créateurs passent en première ligne. Retraits accélérés, traitement immédiat."
              },
              {
                icon: Scale,
                title: "Escalades juridiques",
                description: "Pour les cas critiques. Nos équipes juridiques gèrent les registrars, hosts offshore, et plateformes complexes."
              },
              {
                icon: BarChart3,
                title: "Reporting clair",
                description: "Preuves, statistiques, rapports consolidés. Vous voyez tout, vos créateurs aussi."
              },
              {
                icon: Headphones,
                title: "Support dédié",
                description: "Pour votre équipe. Un contact unique, des réponses immédiates, escalades prioritaires."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.08, 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 sm:p-8 border border-zinc-800/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:w-7 text-blue-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 - Agency Features */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Une solution pensée pour scaler
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: "Gestion multi-créateurs sans friction",
                description: "Un seul tableau. Tous vos créateurs. Scan, suivi, retraits, preuves. Tout centralisé."
              },
              {
                icon: FileText,
                title: "Rapports consolidés pour votre agence",
                description: "D'un coup d'œil : ce qui a été supprimé, ce qui reste, les priorités."
              },
              {
                icon: Headphones,
                title: "Support agence dédié (24/7)",
                description: "Un contact unique. Des réponses immédiates. Escalades prioritaires."
              },
              {
                icon: Code,
                title: "API complète & intégrations",
                description: "Plug-and-play avec vos systèmes internes, CRM, ou dashboards."
              },
              {
                icon: TrendingDown,
                title: "Tarification dégressive pensée pour scaler",
                description: "Plus vous protégez, plus vous économisez."
              },
              {
                icon: Shield,
                title: "Accès prioritaire aux escalades",
                description: "Vos créateurs passent en première ligne dans nos traitements juridiques & techniques."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.08, 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 sm:p-8 border border-zinc-800/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:w-7 text-blue-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Pourquoi CRD */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Pourquoi une solution agence CRD ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Clock,
                title: "Gagnez du temps. Beaucoup de temps.",
                description: "Plus besoin de jongler entre 30 emails, DMCA, hébergeurs, forums."
              },
              {
                icon: Target,
                title: "Donnez de la valeur à vos créateurs.",
                description: "Vous leur offrez une vraie protection + des preuves + une équipe derrière eux."
              },
              {
                icon: Lock,
                title: "Réduisez vos risques.",
                description: "Les escalades juridiques deviennent notre responsabilité, pas la vôtre."
              }
            ].map((block, index) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.7, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/10 via-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-8 sm:p-10 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                      {block.title}
                    </h3>
                    <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Tarification */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Tarification pensée pour scaler
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              {
                range: "1 – 5 créateurs",
                description: "Tarif réduit, idéal pour les petites agences et studios.",
                highlight: false
              },
              {
                range: "6 – 15 créateurs",
                description: "Tarification optimisée, support dédié inclus.",
                highlight: false
              },
              {
                range: "15+ créateurs",
                description: "Conditions sur mesure + escalades prioritaires + SLA contractuels.",
                highlight: true
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.7, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl backdrop-blur-xl p-8 sm:p-10 border transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-gradient-to-br from-blue-500/10 via-zinc-900/50 to-zinc-950/50 border-blue-500/50'
                    : 'bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border-zinc-800/50 hover:border-blue-500/50'
                }`}
              >
                <div className="relative z-10">
                  {tier.highlight && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
                      <Star className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-semibold text-blue-400">Recommandé</span>
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                    {tier.range}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                data-cal-link="chan-aoufi-ttauyj/agence"
                data-cal-namespace="agence"
                data-cal-config='{"layout":"week_view","theme":"dark","embedSize":"medium"}'
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    const cal = await getCalApi({ namespace: "agence" });
                    if (cal) {
                      cal("ui", {
                        theme: "dark",
                        cssVarsPerTheme: {
                          light: { "cal-brand": "#0D0D0D" },
                          dark: { "cal-brand": "#3B82F6" }
                        },
                        hideEventTypeDetails: true,
                        layout: "week_view",
                        styles: {
                          branding: {
                            brandColor: "#3B82F6"
                          }
                        }
                      });
                      // Open the calendar modal
                      cal("inline", {
                        calLink: "chan-aoufi-ttauyj/agence",
                        elementOrSelector: e.currentTarget
                      });
                    }
                  } catch (error) {
                    console.error("Error opening Cal.com:", error);
                  }
                }}
                className="group relative bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10 flex items-center gap-3 justify-center">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                  Obtenir un devis agence
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PourAgences;
