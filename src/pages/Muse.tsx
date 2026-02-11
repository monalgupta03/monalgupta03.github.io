/**
 * =============================================================================
 * MUSE PAGE COMPONENT
 * =============================================================================
 * 
 * A visual mood board / inspiration page with:
 *   - Image placeholders
 *   - Inspirational quotes
 *   - Color palettes
 * 
 * Layout: Masonry-style grid that adapts to content types
 * 
 * =============================================================================
 */

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';

// -----------------------------------------------------------------------------
// MOOD BOARD DATA
// -----------------------------------------------------------------------------

/**
 * Mood board items can be of three types:
 *   - image: A placeholder for an image with a description
 *   - quote: An inspirational quote with optional author
 *   - color: A color palette with hex values
 */
const moodBoardItems = [
  {
    type: 'image',
    size: 'large',
    placeholder: 'Vintage botanical illustration',
  },
  {
    type: 'quote',
    content: '"The details are not the details. They make the design."',
    author: 'Charles Eames',
  },
  {
    type: 'color',
    colors: ['#E8D5B7', '#B8860B', '#2F4F4F'],
  },
  {
    type: 'image',
    size: 'small',
    placeholder: 'Cozy café corner',
  },
  {
    type: 'quote',
    content: '"Stay soft in a world that is trying to harden you."',
  },
  {
    type: 'image',
    size: 'medium',
    placeholder: 'Japanese woodblock print',
  },
  {
    type: 'color',
    colors: ['#FDF5E6', '#DEB887', '#8B4513'],
  },
  {
    type: 'image',
    size: 'small',
    placeholder: 'Old typewriter keys',
  },
  {
    type: 'quote',
    content: '"Create the things you wish existed."',
  },
  {
    type: 'image',
    size: 'medium',
    placeholder: 'Sunset through window blinds',
  },
  {
    type: 'color',
    colors: ['#FAF0E6', '#D4A574', '#6B4423'],
  },
  {
    type: 'image',
    size: 'large',
    placeholder: 'Hand-drawn map illustration',
  },
];

// -----------------------------------------------------------------------------
// MUSE PAGE COMPONENT
// -----------------------------------------------------------------------------

const Muse = () => {
  /**
   * Get CSS grid classes based on item type and size
   * Controls how much space each item takes in the masonry grid
   */
  const getItemClasses = (item: typeof moodBoardItems[0], index: number) => {
    if (item.type === 'quote') {
      return 'col-span-1 md:col-span-2';  // Quotes span 2 columns on desktop
    }
    if (item.type === 'color') {
      return 'col-span-1';                // Color palettes are small
    }
    if (item.type === 'image') {
      if (item.size === 'large') return 'col-span-2 row-span-2';   // Large images are 2x2
      if (item.size === 'medium') return 'col-span-1 row-span-2';  // Medium images are 1x2
      return 'col-span-1';                                          // Small images are 1x1
    }
    return 'col-span-1';
  };

  return (
    <div className="min-h-screen py-20 px-6 md:px-12">
      {/* Navigation bar - fixed position top right */}
      <Navigation />
      
      {/* Theme toggle - fixed position bottom right */}
      <ThemeToggle />
      
      {/* Main content container */}
      <div className="max-w-6xl mx-auto pt-12">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Page title - serif font to match other pages */}
          <h1 className="text-3xl md:text-4xl font-serif text-poster-text mb-4">
            Muse
          </h1>
          {/* Page description */}
          <p className="text-poster-muted font-light max-w-xl">
            A collection of textures, colors, and words that inspire my work. 
            A digital mood board of warmth and wonder.
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[180px]">
          {moodBoardItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className={`${getItemClasses(item, index)} rounded-xl overflow-hidden`}
            >
              {/* Image placeholder */}
              {item.type === 'image' && (
                <div className="w-full h-full bg-poster-border/50 border border-poster-border flex items-center justify-center p-4">
                  <span className="text-poster-muted font-mono text-xs text-center">
                    {item.placeholder}
                  </span>
                </div>
              )}

              {/* Quote card */}
              {item.type === 'quote' && (
                <div className="w-full h-full bg-poster-border/30 border border-poster-border flex flex-col items-center justify-center p-6">
                  <p className="text-poster-text font-serif italic text-center text-sm md:text-base leading-relaxed">
                    {item.content}
                  </p>
                  {item.author && (
                    <span className="text-poster-muted font-mono text-xs mt-3">
                      — {item.author}
                    </span>
                  )}
                </div>
              )}

              {/* Color palette */}
              {item.type === 'color' && (
                <div className="w-full h-full bg-poster-border/20 border border-poster-border flex items-center justify-center gap-3 p-4">
                  {item.colors?.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-sm border border-poster-border/50"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Muse;
