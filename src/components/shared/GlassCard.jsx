import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const GlassCard = ({ 
  children, 
  title, 
  icon: Icon,
  className = "",
  hoverEffects = true,
  fullWidth = false,
  initialAnimation = { opacity: 0, y: 30 },
  animationDelay = 0,
  inView = true
}) => {
  const baseClasses = "glass-effect border-white/10 transition-all duration-300 bg-transparent"
  const hoverClasses = hoverEffects ? "hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10" : ""
  const widthClasses = fullWidth ? "w-full" : ""
  
  return (
    <motion.div
      initial={initialAnimation}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: animationDelay }}
    >
      <Card className={`${baseClasses} ${hoverClasses} ${widthClasses} ${className}`}>
        {title && (
          <CardHeader className="pb-6 bg-transparent">
            <CardTitle className="text-2xl text-white flex items-center gap-3 group-hover:text-purple-300 transition-colors duration-300">
              {Icon && <Icon size={28} className="text-[#d6c95fc6]" />}
              {title}
            </CardTitle>
          </CardHeader>
        )}
        <CardContent className="bg-transparent">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default GlassCard 