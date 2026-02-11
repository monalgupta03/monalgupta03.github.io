/**
 * =============================================================================
 * CONTACT PAGE COMPONENT
 * =============================================================================
 * 
 * Contact form page with:
 *   - Contact information sidebar (email, location, availability)
 *   - Full contact form with Formspree integration
 * 
 * Form integrates with Formspree for email delivery.
 * Replace the Formspree action URL with your own endpoint.
 * 
 * =============================================================================
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';

// -----------------------------------------------------------------------------
// CONTACT PAGE COMPONENT
// -----------------------------------------------------------------------------

const Contact = () => {
  // Toast hook for showing form submission notifications
  const { toast } = useToast();

  // Form state - tracks all input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Loading state for submit button
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handle form submission
   * Simulates sending (replace with actual form submission if needed)
   * Note: The form also has action attribute for Formspree fallback
   */
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();          //preventing page reload
  //   setIsSubmitting(true);

  //   // Simulate form submission delay
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  //   // Show success notification
  //   toast({
  //     title: "Message sent successfully!",
  //     description: "Thank you for reaching out. I'll get back to you soon!",
  //   });

  //   // Reset form fields
  //   setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  //   setIsSubmitting(false);
  // };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();          //preventing page reload
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xqedebej", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        toast({
          title: "Oops!",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
      });
    }

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
          className="max-w-4xl mx-auto"
        >
          {/* Page title - serif font to match About page */}
          <h1 className="text-3xl md:text-4xl font-serif text-poster-text mb-4">Contact Me</h1>

          {/* Page description */}
          <p className="text-poster-muted font-light mb-12 max-w-2xl">
            Have a question, opportunity or just want to say hello? I'd love to hear from you.
          </p>

          {/* Two-column grid: Contact info (1/3) + Form (2/3) */}
          <div className="grid md:grid-cols-3 gap-12">

            {/* Contact Information Sidebar */}
            <div className="md:col-span-1 space-y-8">

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 text-poster-text mb-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-light">Email</span>
                </div>
                <a
                  href="mailto:monalgupta.bct@gmail.com"
                  className="text-poster-muted font-light hover:text-poster-text transition-colors"
                >
                  monalgupta.bct@gmail.com
                </a>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 text-poster-text mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-light">Location</span>
                </div>
                <p className="text-poster-muted font-light">
                  Bristol, United Kingdom
                </p>
              </motion.div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 text-poster-text mb-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-light">Availability</span>
                </div>
                <p className="text-poster-muted font-light">
                  Open to opportunities
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              {/* 
                Form with Formspree integration
                Replace the action URL with your actual Formspree endpoint:
                action="https://formspree.io/f/YOUR_FORM_ID"
              */}
              <form
                //action="https://formspree.io/f/xqedebej"
                //method="POST"
                onSubmit={handleSubmit} 
                className="space-y-5"
              >
                {/* Name and Email row */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-poster-muted font-light mb-2 block">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-poster-muted font-light mb-2 block">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Subject row */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-poster-muted font-light mb-2 block">
                      Phone <span className="text-poster-muted/50">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (234) 567-8900"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-poster-muted font-light mb-2 block">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* Message textarea */}
                <div>
                  <label className="text-sm text-poster-muted font-light mb-2 block">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                    rows={6}
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex items-center gap-2 disabled:opacity-50 w-full md:w-auto justify-center"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
