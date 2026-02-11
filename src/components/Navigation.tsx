/**
 * =============================================================================
 * NAVIGATION COMPONENT
 * =============================================================================
 * 
 * Global navigation bar that appears on all pages except the home page.
 * Displays as a floating pill-shaped container in the top-right corner.
 * 
 * Navigation items are in the order:
 * Home, About, Projects, Blogs, Bookshelf, Muse, Contact
 * 
 * Styling: Thin font weight, dark charcoal color, with underline on hover
 * 
 * =============================================================================
 */

import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// -----------------------------------------------------------------------------
// NAVIGATION CONFIGURATION
// -----------------------------------------------------------------------------

/**
 * Navigation items in display order
 * Each item has a display name and corresponding route path
 */
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blogs', path: '/blog' },
  { name: 'Bookshelf', path: '/books' },
  { name: 'Muse', path: '/muse' },
  { name: 'Contact', path: '/contact' },  // Shortened from "Contact Me" for mobile
];

// -----------------------------------------------------------------------------
// NAVIGATION COMPONENT
// -----------------------------------------------------------------------------

const Navigation = () => {
  // Get current route to highlight active link
  const location = useLocation();

  // Don't render navbar on home page (home has its own radial navigation)
  if (location.pathname === '/') {
    return null;
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-2rem)] md:w-auto"
    >
      {/* Pill-shaped container - horizontally scrollable on mobile */}
      <div className="nav-pill flex items-center gap-2 md:gap-6 px-3 md:px-6 py-2 md:py-3 overflow-x-auto no-scrollbar mx-auto w-fit">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {/* Navigation link with hover underline effect */}
            <Link
              to={item.path}
              className={`nav-link-thin text-xs md:text-sm font-extralight whitespace-nowrap ${
                location.pathname === item.path
                  ? 'text-poster-nav'           // Active link: full opacity
                  : 'text-poster-nav/70'         // Inactive: slightly transparent
              }`}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
