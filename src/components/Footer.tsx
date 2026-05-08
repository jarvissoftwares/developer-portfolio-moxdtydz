import { motion } from 'motion/react'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="border-t border-border bg-card/30 mt-16"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <motion.p 
            className="text-muted-foreground flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & TypeScript
          </motion.p>
          <p className="text-sm text-muted-foreground">
            © 2026 Alex Developer. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}