import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Component error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-[200px] flex items-center justify-center bg-xr-dark-charcoal/50 p-4 rounded-lg"
        >
          <div className="text-center">
            <h3 className="text-lg font-orbitron text-white mb-2">
              Component Error
            </h3>
            <p className="text-white/70 text-sm mb-4">
              This section encountered an error but the rest of the application is still working.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-xr-primary-purple hover:bg-xr-primary-purple/90 text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Try Again
            </button>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 