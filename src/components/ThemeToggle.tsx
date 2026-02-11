/**
 * =============================================================================
 * THEME TOGGLE COMPONENT
 * =============================================================================
 * 
 * A button that toggles between light and dark themes.
 * - Persists user preference to localStorage
 * - Respects system preference on first visit
 * - Fixed position at bottom-right of every page
 * - Uses Sun/Moon icons from Lucide
 * 
 * =============================================================================
 */

import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// -----------------------------------------------------------------------------
// THEME TOGGLE COMPONENT
// -----------------------------------------------------------------------------

const ThemeToggle = () => {
  // State to track current theme (true = dark mode)
  const [isDark, setIsDark] = useState(false);

  /**
   * Effect to initialize theme on component mount
   * Priority: localStorage saved preference > system preference > default (light)
   */
  useEffect(() => {
    // Check for previously saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply dark mode if saved as 'dark' OR if no saved preference and system prefers dark
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  /**
   * Toggle between light and dark themes
   * Updates both state and DOM, then persists to localStorage
   */
  const toggleTheme = () => {
    setIsDark(!isDark);
    
    if (isDark) {
      // Switching to light mode
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // Switching to dark mode
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-poster-border/50 border border-poster-border hover:bg-poster-border transition-colors"
      aria-label="Toggle theme"
    >
      {/* Icon rotates when toggling for a smooth visual effect */}
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Show Sun in dark mode (to indicate "switch to light") */}
        {/* Show Moon in light mode (to indicate "switch to dark") */}
        {isDark ? (
          <Sun className="w-5 h-5 text-poster-text" strokeWidth={1.5} />
        ) : (
          <Moon className="w-5 h-5 text-poster-text" strokeWidth={1.5} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
