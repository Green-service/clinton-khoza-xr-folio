import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class GlobalErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Global error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center bg-xr-dark-charcoal p-4"
        >
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-orbitron text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-white/70 mb-6">
              Don't worry, the rest of the application is still working. You can continue browsing other sections.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-xr-primary-purple hover:bg-xr-primary-purple/90 text-white px-6 py-2 rounded-lg transition-colors"
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

export default GlobalErrorBoundary; 