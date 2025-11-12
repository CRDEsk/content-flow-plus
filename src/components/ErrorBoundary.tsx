import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    
    // Log error to monitoring service (e.g., Sentry)
    // You can add Sentry or other error tracking here
    if (import.meta.env.PROD) {
      // In production, send to error tracking service
      // Example: Sentry.captureException(error, { contexts: { react: { componentStack: errorInfo.componentStack } } });
    }

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
  };

  public render() {
    if (this.state.hasError) {
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
                Oops! Something went wrong
              </h1>
              <p className="text-lg text-zinc-400 max-w-md mx-auto">
                We're sorry, but something unexpected happened. Our team has been notified and is working on a fix.
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
                Try Again
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-zinc-800 hover:border-primary/50 bg-zinc-900/50 backdrop-blur-xl text-foreground font-semibold rounded-full px-8 hover:bg-zinc-900/80 transition-all duration-300"
                asChild
              >
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>

            {/* Support Link */}
            <div className="pt-8">
              <p className="text-sm text-zinc-500">
                Need help?{" "}
                <a
                  href="/contact"
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  Contact Support
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

export default ErrorBoundary;

