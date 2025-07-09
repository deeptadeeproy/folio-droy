import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import anime from 'animejs'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import { ChevronUp } from 'lucide-react'

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
    // Initialize anime.js animations
    anime.timeline({ loop: false })
      .add({
        targets: '.hero-title',
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 200
      })
      .add({
        targets: '.hero-subtitle',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo',
        delay: 400
      }, '-=600')
      .add({
        targets: '.hero-cta',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutExpo',
        delay: 600
      }, '-=400')

    // Parallax effect for background elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroSection = document.getElementById('hero')
      const heroHeight = heroSection ? heroSection.offsetHeight : 0
      
      // Show scroll-to-top button only when scrolled past hero section
      setShowScrollToTop(scrolled > heroHeight * 0.5)
      
      const parallax = document.querySelectorAll('.parallax')
      parallax.forEach(element => {
        const speed = element.dataset.speed || 0.5
        element.style.transform = `translateY(${scrolled * speed}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden dark">
      {/* Minimal background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/2 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Scroll to top button */}
      {showScrollToTop && (
      <motion.button
        onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full gradient-bg text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <ChevronUp size={24} />
      </motion.button>
      )}

      {/* Smooth scroll links */}
      <div className="hidden">
        <Link to="hero" smooth={true} duration={800} />
        <Link to="about" smooth={true} duration={800} />
        <Link to="skills" smooth={true} duration={800} />
        <Link to="projects" smooth={true} duration={800} />
        <Link to="experience" smooth={true} duration={800} />
        <Link to="contact" smooth={true} duration={800} />
      </div>
    </div>
  )
}

export default App 