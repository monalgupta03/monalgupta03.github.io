/**
 * =============================================================================
 * PROJECTS PAGE COMPONENT
 * =============================================================================
 * 
 * Displays a list of portfolio projects.
 * Currently shows a placeholder - add your projects data here.
 * 
 * =============================================================================
 */

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';

// -----------------------------------------------------------------------------
// PROJECTS PAGE COMPONENT
// -----------------------------------------------------------------------------

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-6 md:px-12">
      {/* Navigation bar - fixed position top right */}
      <Navigation />
      
      {/* Theme toggle - fixed position bottom right */}
      <ThemeToggle />
      
      {/* Main content with consistent max width */}
      <div className="max-w-5xl mx-auto pt-12">
        {/* Page title with fade-in animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif text-poster-text mb-8"
        >
          Projects
        </motion.h1>
        
        {/* Placeholder content - replace with actual projects */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-poster-muted font-light"
        >
          Coming soon...
        </motion.p>
      </div>
    </div>
  );
};

export default Projects;
