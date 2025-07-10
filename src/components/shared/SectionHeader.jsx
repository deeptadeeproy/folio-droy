import React from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../utils/useIntersectionObserver'

const SectionHeader = ({ 
  title, 
  subtitle, 
  gradientText, 
  className = "", 
  delay = 0,
  ref: externalRef 
}) => {
  const [ref, inView] = useIntersectionObserver()
  const finalRef = externalRef || ref

  return (
    <motion.div
      ref={finalRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={`text-center mb-16 cursor-default ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cursor-default">
        {title} {gradientText && <span className="gradient-text">{gradientText}</span>}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-400 max-w-3xl mx-auto cursor-default">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader 