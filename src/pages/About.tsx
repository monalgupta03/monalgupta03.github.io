/**
 * =============================================================================
 * ABOUT PAGE COMPONENT
 * =============================================================================
 * 
 * Personal introduction page with bio, toolkit, interests, and social links.
 * Layout: Two columns on desktop
 *   - Left: Profile photo, Toolkit, Currently Learning
 *   - Right: Bio, Interests, Social Links
 * Mobile: Single column with order - Photo, Bio, Toolkit, Learning, Interests, Socials
 * 
 * =============================================================================
 */

import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Twitter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import profilePhoto from '@/assets/profile-photo.jpeg';

// -----------------------------------------------------------------------------
// DATA CONFIGURATION
// -----------------------------------------------------------------------------

/**
 * Technical skills organized by category
 * Each category contains an array of technology/tool names
 */
const techStack = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Rust'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'] },
  { category: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Linux'] },
];

/**
 * Personal interests displayed on the about page
 */
const interests = [
  'Collecting vintage postcards',
  'Urban sketching & watercolors',
  'Reading sci-fi novels',
  'Making playlists for every mood',
  'Exploring local coffee shops',
  'Film photography',
];

/**
 * Topics/skills currently being learned
 */
const currentlyLearning = [
  'Generative art with p5.js',
  'Rust for systems programming',
  'Japanese calligraphy basics',
];

/**
 * Social media links
 * Each has a platform name, URL, and corresponding Lucide icon
 */
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/monalgupta', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/monalgupta', icon: Linkedin },
  { name: 'YouTube', url: 'https://youtube.com/@monalgupta', icon: Youtube },
  { name: 'Twitter', url: 'https://twitter.com/monalgupta', icon: Twitter },
];

// -----------------------------------------------------------------------------
// ABOUT PAGE COMPONENT
// -----------------------------------------------------------------------------

const About = () => {
  return (
    <div className="min-h-screen py-20 px-6 md:px-12">
      {/* Navigation bar - fixed position, appears on all pages except home */}
      <Navigation />
      
      {/* Theme toggle button - fixed position bottom right */}
      <ThemeToggle />
      
      {/* Main content container with max width */}
      <div className="max-w-5xl mx-auto pt-12">
        {/* Page title with fade-in animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif text-poster-text mb-12"
        >
          About Me
        </motion.h1>

        {/* Two-column layout on desktop */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          
          {/* LEFT COLUMN - Profile, Toolkit, Currently Learning */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Profile Photo */}
            <div className="aspect-square max-w-xs bg-poster-border/50 rounded-2xl overflow-hidden border border-poster-border">
              <img 
                src={profilePhoto} 
                alt="Monal Gupta" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Bio Section - Shows here on mobile only */}
            <div className="md:hidden">
              <h2 className="text-sm font-mono uppercase tracking-widest text-poster-muted mb-4">
                Bio
              </h2>
              <p className="text-poster-text leading-relaxed font-light">
                Hello! I'm Monal, a creative developer based in Bristol, UK. I believe that the 
                web is more than just a platform—it's a canvas for expression. My work sits at the 
                intersection of technology and art, where clean code meets thoughtful design.
              </p>
              <p className="text-poster-text leading-relaxed font-light mt-4">
                When I'm not coding, you'll find me sketching in cafés, curating playlists, or 
                hunting for vintage ephemera. I'm passionate about building cozy digital spaces 
                that feel warm and inviting.
              </p>
            </div>

            {/* Connect Section - Shows on mobile after Bio */}
            <div className="md:hidden">
              <h2 className="text-sm font-mono uppercase tracking-widest text-poster-muted mb-4">
                Connect
              </h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-poster-border/40 rounded-lg border border-poster-border hover:bg-poster-border/60 transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-poster-text group-hover:text-poster-accent transition-colors" />
                      <span className="text-sm text-poster-text font-light">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Toolkit Section */}
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-poster-muted mb-6">
                Toolkit
              </h2>
              <div className="space-y-6">
                {techStack.map((stack, stackIndex) => (
                  <motion.div
                    key={stack.category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + stackIndex * 0.1 }}
                  >
                    {/* Category label */}
                    <h3 className="text-xs font-mono text-poster-muted mb-2">
                      {stack.category}
                    </h3>
                    {/* Technology chips */}
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 bg-poster-border/40 text-poster-text text-sm font-light rounded-lg border border-poster-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Currently Learning Section */}
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-poster-muted mb-4">
                Currently Learning
              </h2>
              <ul className="space-y-3">
                {currentlyLearning.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="text-poster-text font-light flex items-start gap-3"
                  >
                    <span className="text-poster-accent mt-1">→</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Interests Section - Mobile only (after Currently Learning) */}
            <div className="md:hidden">
              <h2 className="text-sm font-mono uppercase tracking-widest text-poster-muted mb-4">
                Interests
              </h2>
              <ul className="space-y-2">
                {interests.map((interest, index) => (
                  <motion.li
                    key={interest}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="text-poster-text font-light flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-poster-accent" />
                    {interest}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Bio, Interests, Socials (hidden bio on mobile as it's shown above) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-10"
          >
            {/* Bio Section - Desktop only */}
            <div className="hidden md:block">
              <h2 className="text-sm font-mono uppercase tracking-widest text-poster-muted mb-4">
                Bio
              </h2>
              <p className="text-poster-text leading-relaxed font-light">
                Hello! I'm Monal, a creative developer based in Bristol, UK. I believe that the 
                web is more than just a platform—it's a canvas for expression. My work sits at the 
                intersection of technology and art, where clean code meets thoughtful design.
              </p>
              <p className="text-poster-text leading-relaxed font-light mt-4">
                When I'm not coding, you'll find me sketching in cafés, curating playlists, or 
                hunting for vintage ephemera. I'm passionate about building cozy digital spaces 
                that feel warm and inviting.
              </p>
            </div>

            {/* Interests Section - Desktop only */}
            <div className="hidden md:block">
              <h2 className="text-sm font-mono uppercase tracking-widest text-poster-muted mb-4">
                Interests
              </h2>
              <ul className="space-y-2">
                {interests.map((interest, index) => (
                  <motion.li
                    key={interest}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="text-poster-text font-light flex items-center gap-2"
                  >
                    {/* Bullet point */}
                    <span className="w-1.5 h-1.5 rounded-full bg-poster-accent" />
                    {interest}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Links Section - Desktop only */}
            <div className="hidden md:block">
              <h2 className="text-sm font-mono uppercase tracking-widest text-poster-muted mb-4">
                Connect
              </h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 px-4 py-2 bg-poster-border/40 rounded-lg border border-poster-border hover:bg-poster-border/60 transition-colors group"
                    >
                      <Icon className="w-4 h-4 text-poster-text group-hover:text-poster-accent transition-colors" />
                      <span className="text-sm text-poster-text font-light">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
