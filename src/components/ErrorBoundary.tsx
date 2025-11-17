import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface ErrorBoundaryProps extends Props {
  t: (key: string) => string;
}

class ErrorBoundaryClass extends Component<ErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
    
    // Log error to monitoring service
    if (import.meta.env.PROD) {
      import('@/lib/errorTracking').then(({ trackError }) => {
        trackError(error, {
          componentStack: errorInfo.componentStack,
          errorBoundary: true,
          userAgent: navigator.userAgent,
          url: window.location.href,
          timestamp: new Date().toISOString(),
        });
      });
    }

    // Only auto-retry in production, not in development
    if (import.meta.env.PROD) {
      const retryCount = parseInt(sessionStorage.getItem('error-retry-count') || '0');
      
      if (retryCount < 1) {
        // Increment retry count
        sessionStorage.setItem('error-retry-count', String(retryCount + 1));
        
        // Reset error state and reload after a short delay
        setTimeout(() => {
          this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
          });
          window.location.reload();
        }, 1500);
        
        return; // Don't set error state, just retry
      }
    }
    
    // Show error (always in dev, or after retry in prod)
    this.setState({
      error,
      errorInfo,
    });
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    // Force page reload to retry lazy loading
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      const { t } = this.props;
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center space-y-8">
            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="relative w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent rounded-full blur-xl"></div>
                <AlertTriangle className="w-12 h-12 text-red-500 relative z-10" />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
                {t('error.title')}
              </h1>
              <p className="text-lg text-zinc-400 max-w-md mx-auto">
                {t('error.message')}
              </p>
            </div>

            {/* Error Details (only in development) */}
            {import.meta.env.DEV && this.state.error && (
              <div className="mt-8 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-red-500/20 text-left">
                <h2 className="text-lg font-semibold text-red-400 mb-3">Error Details:</h2>
                <pre className="text-sm text-zinc-300 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                onClick={this.handleReset}
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                {t('error.tryAgain')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-zinc-800 hover:border-primary/50 bg-zinc-900/50 backdrop-blur-xl text-foreground font-semibold rounded-full px-8 hover:bg-zinc-900/80 transition-all duration-300"
                asChild
              >
                <a href="/" className="flex items-center">
                  <Home className="w-5 h-5 mr-2" />
                  {t('error.goHome')}
                </a>
              </Button>
            </div>

            {/* Support Link */}
            <div className="pt-8">
              <p className="text-sm text-zinc-500">
                {t('error.needHelp')}{" "}
                <a
                  href="/contact"
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  {t('error.contactSupport')}
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Fallback translations (French) - used when LanguageProvider is not available
const fallbackTranslations: Record<string, string> = {
  'error.title': "Oups ! Une erreur s'est produite",
  'error.message': "Nous sommes désolés, mais quelque chose d'inattendu s'est produit. Notre équipe a été notifiée et travaille sur une solution.",
  'error.tryAgain': "Réessayer",
  'error.goHome': "Retour à l'accueil",
  'error.needHelp': "Besoin d'aide ?",
  'error.contactSupport': "Contacter le support",
};

// Fallback translation function
const fallbackT = (key: string): string => fallbackTranslations[key] || key;

// Wrapper component - ErrorBoundary is now outside LanguageProvider, so use fallback
const ErrorBoundary = ({ children }: Props) => {
  return <ErrorBoundaryClass t={fallbackT}>{children}</ErrorBoundaryClass>;
};

export default ErrorBoundary;

