import React from 'react'
import { motion } from 'framer-motion'

const AnimatedContainer = ({ 
  children, 
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  delay = 0,
  className = "",
  inView = true,
  direction = "up", // up, down, left, right
  ...props 
}) => {
  const getInitialAnimation = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -50 }
      case "right":
        return { opacity: 0, x: 50 }
      case "down":
        return { opacity: 0, y: -30 }
      case "up":
      default:
        return { opacity: 0, y: 30 }
    }
  }

  const getAnimateAnimation = () => {
    switch (direction) {
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      case "up":
      case "down":
      default:
        return { opacity: 1, y: 0 }
    }
  }

  const finalInitial = JSON.stringify(initial) === JSON.stringify({ opacity: 0, y: 30 }) ? getInitialAnimation() : initial
  const finalAnimate = JSON.stringify(animate) === JSON.stringify({ opacity: 1, y: 0 }) ? getAnimateAnimation() : animate

  return (
    <motion.div
      initial={finalInitial}
      animate={inView ? finalAnimate : {}}
      transition={{ ...transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedContainer 