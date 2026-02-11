/**
 * =============================================================================
 * NOT FOUND PAGE COMPONENT (404)
 * =============================================================================
 * 
 * Displayed when the user navigates to a route that doesn't exist.
 * Provides a friendly message and a link back to the home page.
 * 
 * =============================================================================
 */

import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Home } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';

// -----------------------------------------------------------------------------
// NOT FOUND COMPONENT
// -----------------------------------------------------------------------------

const NotFound = () => {
  // Get current location for logging purposes
  const location = useLocation();

  // Log 404 errors for debugging
  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      {/* Navigation bar */}
      <Navigation />
      
      {/* Theme toggle */}
      <ThemeToggle />
      
      {/* Centered 404 content */}
      <main className="flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Large 404 text */}
          <h1 className="text-6xl md:text-8xl font-serif text-poster-text mb-4">404</h1>
          
          {/* Error message */}
          <p className="text-xl text-poster-muted font-light mb-8">
            Oops! This page doesn't exist.
          </p>
          
          {/* Return home link */}
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Return to Home
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default NotFound;
