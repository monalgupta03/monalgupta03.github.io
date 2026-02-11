/**
 * =============================================================================
 * BLOG POST PAGE COMPONENT
 * =============================================================================
 * 
 * Displays an individual blog post based on the URL slug.
 * Blog metadata is fetched from src/data/blogData.ts
 * Blog content is stored inline for simplicity (can be moved to MD files)
 * 
 * Route: /blog/:slug
 * Example: /blog/building-scalable-microservices
 * 
 * =============================================================================
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';
import { findBlogPost } from '@/data/blogData';

// -----------------------------------------------------------------------------
// BLOG CONTENT STORAGE
// -----------------------------------------------------------------------------

/**
 * Blog post content mapped by post ID
 * Each key matches a blog post ID from blogData.ts
 * Content includes markdown-like formatting that gets parsed for display
 */
interface BlogContentData {
  bannerColor: string;  // Tailwind gradient classes for the banner
  content: string;      // The blog post body content
}

const blogContent: Record<string, BlogContentData> = {
  'building-scalable-microservices': {
    bannerColor: 'from-orange-900/20 to-red-900/20',
    content: `
Rust has been gaining significant traction in the backend development world, and for good reason. Its unique combination of performance, memory safety, and modern tooling makes it an excellent choice for building microservices that need to handle high loads efficiently.

## Why Rust for Microservices?

When we talk about microservices, we're often dealing with systems that need to:

1. **Handle thousands of concurrent requests** - Rust's async runtime and zero-cost abstractions make this incredibly efficient
2. **Maintain low latency** - No garbage collector means predictable performance
3. **Be memory efficient** - Critical when running many services on shared infrastructure

## Key Patterns I've Learned

Throughout my journey building microservices with Rust, I've discovered several patterns that work exceptionally well:

### The Actor Model
Using libraries like Actix, we can build highly concurrent systems that are both safe and performant.

### Async All The Way
Tokio provides an excellent async runtime that integrates seamlessly with the ecosystem.

## Conclusion

If you're building performance-critical microservices, Rust is definitely worth considering. The learning curve is steep, but the rewards are substantial.
    `,
  },
  'devops-journey-2025': {
    bannerColor: 'from-blue-900/20 to-cyan-900/20',
    content: `
DevOps has transformed from a buzzword into a fundamental practice that every modern developer should understand. Here's my journey into this fascinating field.

## The Beginning

My interest in DevOps started during my final year at IIT Delhi when I realized that writing code is only half the battle. Getting it to production reliably is the other half.

## Tools That Changed My Perspective

### Docker
Containerization was my first "aha" moment. The ability to package applications with their dependencies revolutionized how I think about deployment.

### Kubernetes
Learning Kubernetes was challenging but rewarding. It's now my go-to for orchestrating containerized applications.

### Infrastructure as Code
Terraform and Pulumi have made me appreciate the value of treating infrastructure like application code.

## Looking Forward

As I continue my Masters at Bristol, I'm excited to dive deeper into:
- GitOps practices
- Service mesh architectures
- Observability and monitoring

The journey is just beginning!
    `,
  },
  'docker-kubernetes-deep-dive': {
    bannerColor: 'from-purple-900/20 to-indigo-900/20',
    content: `
Container orchestration has become essential for modern software deployment. Let's explore the fundamentals and advanced concepts.

## Understanding Containers

At its core, a container is an isolated environment for running applications. Docker popularized this concept by making it accessible.

## Why Kubernetes?

While Docker handles individual containers, Kubernetes orchestrates them at scale. It provides:

- **Automatic scaling** based on load
- **Self-healing** capabilities
- **Service discovery** and load balancing
- **Rolling updates** with zero downtime

## Practical Tips

1. Start with Minikube for local development
2. Use namespaces to organize resources
3. Implement resource limits early
4. Leverage Helm for package management

The ecosystem continues to evolve, making it an exciting time to be in this space!
    `,
  },
  'iit-delhi-memories': {
    bannerColor: 'from-green-900/20 to-emerald-900/20',
    content: `
Four years at IIT Delhi have shaped who I am today. As I move on to my Masters at Bristol, I want to reflect on this incredible journey.

## The Beginning

Walking through the gates for the first time, I had no idea what was in store. The imposing buildings, the diverse crowd, the palpable energy of innovation.

## Lessons Learned

### Technical Growth
From struggling with basic algorithms to building distributed systems, the growth has been immense.

### Soft Skills Matter
Some of my best learning happened in team projects, hackathons, and late-night discussions.

### Embrace Failure
Failed experiments, rejected proposals, and tough exams taught me resilience.

## Gratitude

To my professors, friends, and the entire IIT Delhi community - thank you for everything.

The next chapter begins, but these memories will always remain special.
    `,
  },
  'aws-cost-optimization': {
    bannerColor: 'from-yellow-900/20 to-orange-900/20',
    content: `
Cloud costs can spiral out of control if not managed properly. Here are strategies I've used to keep AWS bills in check.

## Understanding Your Bill

The first step is visibility. AWS Cost Explorer is your friend. Break down costs by:
- Service
- Region
- Tags

## Quick Wins

### Right-sizing Instances
Many workloads run on oversized instances. Monitor CPU and memory, then adjust.

### Reserved Instances
For predictable workloads, RIs can save up to 75%.

### Spot Instances
For fault-tolerant workloads, spot instances offer massive savings.

## Long-term Strategies

1. Implement auto-scaling properly
2. Use lifecycle policies for S3
3. Clean up unused resources regularly
4. Consider Savings Plans for flexibility

Remember: the goal isn't to minimize cost at all costs, but to optimize value.
    `,
  },
};

// -----------------------------------------------------------------------------
// BLOG POST COMPONENT
// -----------------------------------------------------------------------------

const BlogPost = () => {
  // Get the slug from URL params (e.g., 'building-scalable-microservices')
  const { slug } = useParams();
  
  // Toast hook for showing feedback submission notifications
  const { toast } = useToast();
  
  // Form state for the feedback section
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Find the blog post metadata from our data file
  const result = slug ? findBlogPost(slug) : null;
  const postMeta = result?.post;
  const year = result?.year;
  
  // Get the blog content
  const postContent = slug ? blogContent[slug] : null;

  /**
   * Handle feedback form submission
   * Simulates sending feedback (replace with actual API call)
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success toast
    toast({
      title: "Feedback sent!",
      description: "Thank you for your feedback. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', suggestion: '' });
    setIsSubmitting(false);
  };

  // Show not found state if post doesn't exist
  if (!postMeta || !postContent) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <ThemeToggle />
        <main className="section-container pt-32 pb-20">
          <h1 className="text-2xl text-foreground">Post not found</h1>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground mt-4 inline-block">
            ← Back to Blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Navigation bar - fixed position top right */}
      <Navigation />
      
      {/* Theme toggle - fixed position bottom right */}
      <ThemeToggle />

      {/* Decorative gradient banner - absolute, extends from top to mid-title area */}
      <div className={`absolute top-0 left-0 w-full h-48 md:h-64 bg-gradient-to-br ${postContent.bannerColor}`}>
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Main content area */}
      <main className="section-container pt-32 pb-20 relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back to blog list link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Post title - centered, large serif font */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground text-center mb-4">
            {postMeta.title}
          </h1>

          {/* Post date - monospace font, centered */}
          <p className="date-mono text-center text-muted-foreground/70 mb-12">
            {postMeta.month} {postMeta.date}, {year}
          </p>

          {/* Post content - parsed from markdown-like format */}
          <div className="prose prose-invert prose-lg max-w-none">
            {postContent.content.split('\n\n').map((paragraph, index) => {
              // Render h2 headings
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-serif text-foreground mt-10 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              // Render h3 headings
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-medium text-foreground mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              // Render lists
              if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(Boolean);
                return (
                  <ul key={index} className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^[\d-]+\.\s*|^-\s*/, '')}</li>
                    ))}
                  </ul>
                );
              }
              // Render regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Feedback form section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-12 border-t border-border"
          >
            <h3 className="text-xl font-serif text-foreground mb-2">Share Your Thoughts</h3>
            <p className="text-muted-foreground mb-6">
              Have feedback or suggestions? I'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and email fields - side by side on desktop */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  required
                />
              </div>
              
              {/* Feedback textarea */}
              <textarea
                placeholder="Your feedback or suggestion..."
                value={formData.suggestion}
                onChange={(e) => setFormData({ ...formData, suggestion: e.target.value })}
                className="form-textarea"
                rows={4}
                required
              />
              
              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex items-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </button>
            </form>
          </motion.div>
        </motion.article>
      </main>
    </div>
  );
};

export default BlogPost;
