import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import { Button } from './ui/button'
import { Github, Linkedin, Mail, Download, Mouse } from 'lucide-react'
import resumeFile from '../assets/resume/DeeptadeepRoy_resume.pdf'

const Hero = () => {

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = resumeFile
    link.download = 'DeeptadeepRoy_resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/deeptadeeproy', label: 'GitHub' },
    { icon: Linkedin, href: 'https://in.linkedin.com/in/deeptadeeproy', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:deeptadeeproy@yahoo.in', label: 'Email' }
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      


      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.p
              className="text-lg md:text-xl text-purple-300 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
            </motion.p>

            {/* Name */}
            <motion.h1
              className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="gradient-text-button">Deeptadeep Roy</span>
            </motion.h1>

            {/* Typewriter effect */}
            <motion.div
              className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium min-h-[2rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Creative Thinker',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Creating digital experiences since 2019.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link to="projects" smooth={true} duration={800}>
                <Button variant="gradient" size="lg" className="text-lg px-8 py-3">
                  View My Work
                </Button>
              </Link>
              <Button variant="glass" size="lg" className="text-lg px-8 py-3" onClick={handleDownloadCV}>
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-col items-center space-y-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex justify-center items-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-effect text-white hover:text-purple-300 transition-all duration-300 hover:scale-110"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
              
              {/* Scroll indicator */}
              <motion.div
                className="pt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
              >
                <Link to="about" smooth={true} duration={800}>
                  <motion.div
                    className="flex flex-col items-center text-white/60 hover:text-white cursor-pointer"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-sm mb-2">Scroll Down</span>
                    <div className="relative">
                      <Mouse size={20} className="mb-1" />
                      <motion.div
                        className="w-1 h-2 bg-white/60 mx-auto mt-1 rounded-full"
                        animate={{ 
                          y: [0, 8, 0],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}

export default Hero 