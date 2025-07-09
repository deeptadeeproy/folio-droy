import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code } from 'lucide-react'
import { Button } from './ui/button'
import resumeFile from '../assets/resume/DeeptadeepRoy_resume.pdf'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = resumeFile
    link.download = 'DeeptadeepRoy_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Close mobile menu when scrolling
      if (isOpen) {
        setIsOpen(false)
      }
      
      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' }
  ]

  return (
          <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 backdrop-blur-md ${scrollProgress > 0 ? 'md:bg-black/20' : ''}`}
      >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div>
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Deeptadeep Roy</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            ))}
            <Button variant="gradient" size="sm" onClick={handleDownloadCV}>
              Download CV
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 glass-effect rounded-lg overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      smooth={true}
                      duration={800}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                ))}
                <div className="px-4 pt-2">
                  <Button variant="gradient" size="sm" className="w-full" onClick={handleDownloadCV}>
                    Download CV
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation 