/**
 * =============================================================================
 * BLOG PAGE COMPONENT
 * =============================================================================
 * 
 * Displays a list of all blog posts organized by year.
 * Blog data is fetched from src/data/blogData.ts
 * Clicking on a post navigates to the individual blog post page.
 * 
 * =============================================================================
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import { blogPosts, getSortedYears } from '@/data/blogData';

// -----------------------------------------------------------------------------
// BLOG PAGE COMPONENT
// -----------------------------------------------------------------------------

const Blog = () => {
  // Get years sorted in descending order (newest first)
  const years = getSortedYears();

  return (
    <div className="min-h-screen">
      {/* Navigation bar - appears on all pages except home */}
      <Navigation />
      
      {/* Theme toggle button - fixed position bottom right */}
      <ThemeToggle />
      
      {/* Main content container with consistent padding */}
      <main className="section-container pt-32 pb-20">
        {/* Page header with fade-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page title - serif font to match About page */}
          <h1 className="text-3xl md:text-4xl font-serif text-poster-text mb-4">Blog</h1>
          
          {/* Page description */}
          <p className="text-poster-muted font-light mb-16 max-w-xl">
            Thoughts on software development, DevOps, and everything in between.
          </p>

          {/* Blog posts grouped by year */}
          {years.map((year) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              {/* Year heading */}
              <h2 className="text-2xl font-light text-poster-text mb-4">{year}</h2>
              
              {/* List of blog posts for this year */}
              <div className="space-y-1">
                {blogPosts[year].map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {/* Blog post link - navigates to /blog/:slug */}
                    <Link
                      to={`/blog/${post.id}`}
                      className="blog-item flex items-baseline gap-4 group"
                    >
                      {/* Date displayed in monospace font */}
                      <span className="date-mono text-poster-muted/50 w-16 shrink-0">
                        {post.month} {post.date}
                      </span>
                      
                      {/* Post title with hover effect */}
                      <span className="blog-title text-poster-text font-light transition-colors duration-200 group-hover:text-poster-muted">
                        {post.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Blog;
