import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { NavBarDemo } from './components/NavBarDemo';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Lazy load components
const HeroSection = lazy(() => import('./components/HeroSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const QualificationsSection = lazy(() => import('./components/QualificationsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-xr-dark-charcoal">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-xr-primary-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white/70 font-inter">Loading...</p>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-xr-dark-charcoal">
    <div className="text-center p-8">
      <h1 className="text-2xl font-orbitron text-white mb-4">Component Error</h1>
      <p className="text-white/70">This section is temporarily unavailable.</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ErrorBoundary>
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
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
