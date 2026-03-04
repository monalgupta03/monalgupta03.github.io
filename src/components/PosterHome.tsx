/**
 * =============================================================================
 * POSTER HOME COMPONENT
 * =============================================================================
 * 
 * Main home page with a "poster" aesthetic design.
 * 
 * Desktop Layout:
 *   - Full viewport height (100vh), non-scrolling
 *   - Radial navigation with icons positioned around the central hero text
 *   - Time/weather footer at the bottom
 * 
 * Mobile Layout:
 *   - Scrollable vertical layout
 *   - Centered hero text at the top
 *   - Vertical navigation list below
 *   - Footer at the bottom
 * 
 * =============================================================================
 */

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';
import navAbout from '@/assets/HomeNav/nav-about.png';
import navProjects from '@/assets/HomeNav/nav-projects.png';
import navBlog from '@/assets/HomeNav/nav-blog.png';
import navBookshelf from '@/assets/HomeNav/nav-bookshelf.png';
import navMuse from '@/assets/HomeNav/nav-muse.png';
import navContact from '@/assets/HomeNav/nav-contact.png';

// -----------------------------------------------------------------------------
// NAVIGATION CONFIGURATION
// -----------------------------------------------------------------------------

const navItems = [
  { 
    name: 'About', 
    image: navAbout, 
    path: '/about',
    position: { desktop: { top: '12%', left: '15%' }, mobile: 0 }
  },
  { 
    name: 'Projects', 
    image: navProjects, 
    path: '/projects',
    position: { desktop: { top: '42%', left: '4%' }, mobile: 1 }
  },
  { 
    name: 'Blog', 
    image: navBlog, 
    path: '/blog',
    position: { desktop: { bottom: '18%', left: '18%' }, mobile: 2 }
  },
  { 
    name: 'Bookshelf', 
    image: navBookshelf, 
    path: '/books',
    position: { desktop: { top: '12%', right: '15%' }, mobile: 3 }
  },
  { 
    name: 'Muse', 
    image: navMuse, 
    path: '/muse',
    position: { desktop: { top: '42%', right: '4%' }, mobile: 4 }
  },
  { 
    name: 'Contact', 
    image: navContact, 
    path: '/contact',
    position: { desktop: { bottom: '18%', right: '18%' }, mobile: 5 }
  },
];

// -----------------------------------------------------------------------------
// POSTER HOME COMPONENT
// -----------------------------------------------------------------------------

const PosterHome = () => {
  // Hook for programmatic navigation with transition effect
  const navigate = useNavigate();
  
  // State for displaying current time in the footer
  const [currentTime, setCurrentTime] = useState('');
  
  // State for day/night indicator
  const [timeOfDay, setTimeOfDay] = useState('daytime');
  
  // State for weather description
  const [weather, setWeather] = useState('sunny');
  
  // State for fade-out transition when navigating
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * Effect to update time and day/night status
   * Runs once on mount and then every minute
   */
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      
      // Format time as HH:MM
      setCurrentTime(`${hours}:${minutes}`);
      
      // Determine if it's daytime (6 AM - 6 PM) or nighttime
      if (hours >= 6 && hours < 18) {
        setTimeOfDay('daytime');
        setWeather('sunny');
      } else {
        setTimeOfDay('nighttime');
        setWeather('clear');
      }
    };

    // Initial update
    updateTime();
    
    // Update every minute (60000ms)
    const interval = setInterval(updateTime, 60000);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  /**
   * Handle navigation click with fade transition
   * Prevents default link behavior and adds a smooth fade-out
   */
  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setIsTransitioning(true);
    
    // Navigate after fade-out animation (400ms)
    setTimeout(() => {
      navigate(path);
    }, 400);
  };

  return (
    <motion.div 
      className="poster-home"
      initial={{ opacity: 1 }}
      animate={{ opacity: isTransitioning ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Theme toggle button - bottom right corner */}
      <ThemeToggle />
      
      {/* =========== DESKTOP LAYOUT =========== */}
      <div className="hidden md:block h-screen overflow-hidden relative">
        
        {/* Radial Navigation Items - positioned absolutely around the viewport */}
        {navItems.map((item, index) => {
          const pos = item.position.desktop;
          return (
            <motion.div
              key={item.name}
              className="absolute z-10"
              style={pos}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="nav-item-poster group flex flex-col items-center gap-0"
              >
                <motion.div
                  className="icon-container"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-28 h-28 lg:w-32 lg:h-32 object-contain dark:invert" 
                  />
                </motion.div>
                <span className="font-mono text-xs lg:text-sm text-poster-muted group-hover:text-poster-text transition-colors">
                  {item.name}
                </span>
              </Link>
            </motion.div>
          );
        })}

        {/* Center Hero Text - main introduction */}
        <div className="absolute inset-0 flex items-center justify-center px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center max-w-xl lg:max-w-2xl"
          >
            <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-poster-text leading-relaxed hero-text">
              Hi, I am <span className="font-normal">Monal Gupta</span>. I'm a software developer 
              and artist who uses{' '}
              <span className="hero-underline">
                the web as a medium
              </span>
              , likes cozy internet spaces and{' '}
              <span className="hero-underline">
                writes about it all
              </span>.
            </h1>
          </motion.div>
        </div>

        {/* Footer with time and weather */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-6 left-0 right-0 text-center"
        >
          <p className="font-mono text-xs lg:text-sm text-poster-muted">
            Hi, internet wanderer! It's {currentTime} over here.
            <br />
            It's currently {weather} and {timeOfDay}.
          </p>
        </motion.footer>
      </div>

      {/* =========== MOBILE LAYOUT =========== */}
      <div className="md:hidden min-h-screen py-16 px-6 flex flex-col">
        
        {/* Hero Text - centered on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-xl font-light text-poster-text leading-relaxed hero-text">
            Hi, I am <span className="font-normal">Monal Gupta</span>. I'm a software developer 
            and artist who uses{' '}
            <span className="hero-underline">
              the web as a medium
            </span>
            , likes cozy internet spaces and{' '}
            <span className="hero-underline">
              writes about it all
            </span>.
          </h1>
        </motion.div>

        {/* Vertical Navigation List */}
        <nav className="space-y-8 mb-16 text-center">
          {navItems.map((item, index) => {
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex justify-center"
              >
                <Link
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="flex items-center gap-4 group"
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-12 h-12 object-contain dark:invert group-hover:scale-110 transition-transform" 
                  />
                  <span className="font-mono text-lg text-poster-muted group-hover:text-poster-text transition-colors">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Footer - pushed to bottom with flex-grow */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center pt-8 border-t border-poster-border mt-auto"
        >
          <p className="font-mono text-sm text-poster-muted">
            Hi, internet wanderer! It's {currentTime} over here.
            <br />
            It's currently {weather} and {timeOfDay}.
          </p>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default PosterHome;
