/**
 * =============================================================================
 * BLOG DATA CONFIGURATION
 * =============================================================================
 * 
 * This file contains all blog post metadata organized by year.
 * Each blog post has a corresponding markdown file in src/content/blogs/
 * 
 * To add a new blog post:
 * 1. Create a new .md file in src/content/blogs/
 * 2. Add the metadata entry below with a matching 'id' (filename without .md)
 * 3. The blog will automatically appear on the Blog page
 * 
 * =============================================================================
 */

// -----------------------------------------------------------------------------
// TYPE DEFINITIONS
// -----------------------------------------------------------------------------

/**
 * Represents a single blog post entry
 * @property id - Unique identifier, matches the markdown filename (without .md)
 * @property title - Display title shown on the blog list
 * @property date - Day of the month (e.g., '15')
 * @property month - Short month name (e.g., 'Jan')
 * @property excerpt - Brief description shown in previews
 */
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  month: string;
  excerpt: string;
}

/**
 * Blog posts organized by year
 * Keys are year strings (e.g., '2025')
 * Values are arrays of BlogPost objects
 */
export interface BlogsByYear {
  [year: string]: BlogPost[];
}

// -----------------------------------------------------------------------------
// BLOG POST DATA
// -----------------------------------------------------------------------------

/**
 * All blog posts organized by publication year
 * Newest year first, newest posts first within each year
 */
export const blogPosts: BlogsByYear = {
  // 2025 Blog Posts
  '2025': [
    {
      id: 'building-scalable-microservices',
      title: 'Building Scalable Microservices with Rust',
      date: '15',
      month: 'Jan',
      excerpt: 'Exploring how Rust can help build performant and memory-safe microservices...',
    },
    {
      id: 'devops-journey-2025',
      title: 'My DevOps Journey in 2025',
      date: '08',
      month: 'Jan',
      excerpt: 'Reflections on my path into DevOps and what I learned along the way...',
    },
  ],

  // 2024 Blog Posts
  '2024': [
    {
      id: 'docker-kubernetes-deep-dive',
      title: 'Docker & Kubernetes: A Deep Dive',
      date: '22',
      month: 'Dec',
      excerpt: 'Understanding container orchestration and how to leverage it effectively...',
    },
    {
      id: 'iit-delhi-memories',
      title: 'Farewell IIT Delhi: Memories and Lessons',
      date: '15',
      month: 'Jul',
      excerpt: 'Looking back at four incredible years at IIT Delhi...',
    },
    {
      id: 'aws-cost-optimization',
      title: 'AWS Cost Optimization Strategies',
      date: '03',
      month: 'Mar',
      excerpt: 'Practical tips for reducing your AWS bill without sacrificing performance...',
    },
  ],
};

// -----------------------------------------------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------------------------------------------

/**
 * Get sorted years (newest first)
 * Used for displaying blog posts in chronological order
 */
export const getSortedYears = (): string[] => {
  return Object.keys(blogPosts).sort((a, b) => parseInt(b) - parseInt(a));
};

/**
 * Find a blog post by its ID
 * @param id - The blog post ID to search for
 * @returns The blog post and its year, or null if not found
 */
export const findBlogPost = (id: string): { post: BlogPost; year: string } | null => {
  for (const year of Object.keys(blogPosts)) {
    const post = blogPosts[year].find(p => p.id === id);
    if (post) {
      return { post, year };
    }
  }
  return null;
};
