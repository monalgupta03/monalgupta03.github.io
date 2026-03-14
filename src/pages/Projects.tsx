import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projectsData';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ThemeToggle />

      <main className="section-container pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-serif text-poster-text mb-4">Projects</h1>
          <p className="text-poster-muted font-light mb-16 max-w-xl">
            A collection of things I've built - tools, experiments and side projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group block rounded-lg border border-poster-border bg-card overflow-hidden transition-all duration-300 hover:border-poster-muted/50 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-poster-text group-hover:text-poster-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-poster-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>

                <p className="text-sm text-poster-muted font-light leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-light px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
