import { motion } from 'motion/react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts with beautiful visualizations and location-based services.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'A comprehensive analytics platform for social media metrics with data visualization, reporting, and automated insights generation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['Python', 'Django', 'React', 'D3.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
]

export default function ProjectGallery() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="space-y-8"
    >
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
      >
        Featured Projects
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={`Screenshot preview for ${project.title}`}
                loading="lazy"
                decoding="async"
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <div className="p-6 space-y-4">
              <h4 className="text-xl font-semibold text-card-foreground">{project.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 pt-4">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}