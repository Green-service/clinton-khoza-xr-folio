import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { NavBarDemo } from './components/NavBarDemo';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

// Configure QueryClient with error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

// Lazy load components with error handling
const HeroSection = lazy(() => import('./components/HeroSection').catch(() => ({ default: () => <div>Loading...</div> })));
const AboutSection = lazy(() => import('./components/AboutSection').catch(() => ({ default: () => <div>Loading...</div> })));
const ProjectsSection = lazy(() => import('./components/ProjectsSection').catch(() => ({ default: () => <div>Loading...</div> })));
const ExperienceSection = lazy(() => import('./components/ExperienceSection').catch(() => ({ default: () => <div>Loading...</div> })));
const QualificationsSection = lazy(() => import('./components/QualificationsSection').catch(() => ({ default: () => <div>Loading...</div> })));
const ContactSection = lazy(() => import('./components/ContactSection').catch(() => ({ default: () => <div>Loading...</div> })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-xr-dark-charcoal">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-xr-primary-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white/70 font-inter">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="bg-xr-dark-charcoal min-h-screen">
            <NavBarDemo />
            
            <Suspense fallback={<LoadingFallback />}>
              <ErrorBoundary>
                <HeroSection />
              </ErrorBoundary>
            </Suspense>

            <Suspense fallback={<LoadingFallback />}>
              <ErrorBoundary>
                <AboutSection />
              </ErrorBoundary>
            </Suspense>

            <Suspense fallback={<LoadingFallback />}>
              <ErrorBoundary>
                <ProjectsSection />
              </ErrorBoundary>
            </Suspense>

            <Suspense fallback={<LoadingFallback />}>
              <ErrorBoundary>
                <ExperienceSection />
              </ErrorBoundary>
            </Suspense>

            <Suspense fallback={<LoadingFallback />}>
              <ErrorBoundary>
                <QualificationsSection />
              </ErrorBoundary>
            </Suspense>

            <Suspense fallback={<LoadingFallback />}>
              <ErrorBoundary>
                <ContactSection />
              </ErrorBoundary>
            </Suspense>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
