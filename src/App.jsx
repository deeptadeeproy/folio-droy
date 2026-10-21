import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Work from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:bg-ink focus:text-canvas focus:rounded-full"
      >
        Skip to content
      </a>

      <Navigation />

      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
