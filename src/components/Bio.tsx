import { motion } from 'motion/react'

export default function Bio() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center space-y-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1"
      >
        <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary">
          AD
        </div>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
      >
        Full Stack Developer
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
      >
        Passionate about creating beautiful, functional web applications with modern technologies. 
        I specialize in React, TypeScript, and Node.js, bringing ideas to life through clean code and intuitive design.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="flex flex-wrap justify-center gap-3 mt-8"
      >
        {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS'].map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  )
}