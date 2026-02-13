/**
 * =============================================================================
 * BOOKS PAGE COMPONENT
 * =============================================================================
 * 
 * Displays a reading list organized by year with a book suggestion form.
 * Books are currently stored inline (can be moved to a separate data file).
 * 
 * =============================================================================
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';

// -----------------------------------------------------------------------------
// TYPE DEFINITIONS
// -----------------------------------------------------------------------------

/**
 * Represents a single book entry
 * @property title - The book's title
 * @property author - The book's author(s)
 */
interface Book {
  title: string;
  author: string;
}

/**
 * Books organized by year
 * Keys are year strings, values are arrays of Book objects
 */
interface BooksByYear {
  [year: string]: Book[];
}

// -----------------------------------------------------------------------------
// BOOK DATA
// -----------------------------------------------------------------------------

/**
 * All books organized by year read
 * Newest year first for display purposes
 */
const booksList: BooksByYear = {
  '2026': [
    { title: 'The Rust Programming Language', author: 'Steve Klabnik & Carol Nichols' },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
  ],
  '2025': [
    { title: 'A Thousand Splendid Suns', author: 'Khaled Hosseini' },
    { title: 'System Design Interview', author: 'Alex Xu' },
    { title: 'The Phoenix Project', author: 'Gene Kim' },
    { title: 'Atomic Habits', author: 'James Clear' },
    { title: 'Site Reliability Engineering', author: 'Google SRE Team' },
  ],
};

// -----------------------------------------------------------------------------
// BOOKS PAGE COMPONENT
// -----------------------------------------------------------------------------

const Books = () => {
  // Toast hook for showing form submission notifications
  const { toast } = useToast();
  
  // Form state for book suggestion
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookName: '',
    author: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get years sorted in descending order (newest first)
  const years = Object.keys(booksList).sort((a, b) => parseInt(b) - parseInt(a));

  /**
   * Handle book suggestion form submission
   * Currently simulates sending (replace with actual API call)
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success notification
    toast({
      title: "Book suggestion received!",
      description: `Thanks for suggesting "${formData.bookName}"! I'll add it to my reading list.`,
    });

    // Reset form fields
    setFormData({ name: '', email: '', bookName: '', author: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation bar - fixed position top right */}
      <Navigation />
      
      {/* Theme toggle - fixed position bottom right */}
      <ThemeToggle />
      
      {/* Main content with consistent padding */}
      <main className="section-container pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page title - serif font to match About page */}
          <h1 className="text-3xl md:text-4xl font-serif text-poster-text mb-4">Books</h1>
          
          {/* Page description */}
          <p className="text-poster-muted font-light mb-16 max-w-2xl">
            Books that have shaped my thinking and skills over the years. (2026 Goals: 12+ books)
          </p>

          {/* Book list grouped by year */}
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
              
              {/* Books for this year - reduced spacing */}
              <div className="space-y-1">
                {booksList[year].map((book, index) => (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 py-1"
                  >
                    {/* Book title */}
                    <span className="text-poster-text font-light">{book.title}</span>
                    
                    {/* Author name */}
                    <span className="text-poster-muted/60 text-sm font-light">by {book.author}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Book suggestion form section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-12 border-t border-poster-border"
          >
            <h3 className="text-2xl font-light text-poster-text mb-2">Suggest a Book</h3>
            <p className="text-poster-muted font-light mb-8">
              Have a book recommendation? I'm always looking for new reads!
            </p>

            {/* Suggestion form */}
            <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
              {/* Name and email - side by side on desktop */}
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
              
              {/* Book name input */}
              <input
                type="text"
                placeholder="Book Name"
                value={formData.bookName}
                onChange={(e) => setFormData({ ...formData, bookName: e.target.value })}
                className="form-input"
                required
              />
              
              {/* Author input */}
              <input
                type="text"
                placeholder="Author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="form-input"
                required
              />
              
              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex items-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Suggest Book'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Books;
