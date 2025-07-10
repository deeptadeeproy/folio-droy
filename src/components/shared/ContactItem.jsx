import React from 'react'
import { motion } from 'framer-motion'

const ContactItem = ({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  iconColor = "text-purple-400",
  hoverColor = "text-purple-300",
  delay = 0,
  inView = true 
}) => {
  // Define hover classes based on hoverColor
  const getHoverClass = () => {
    switch (hoverColor) {
      case 'text-blue-300':
        return 'group-hover/item:text-blue-300'
      case 'text-green-300':
        return 'group-hover/item:text-green-300'
      case 'text-purple-300':
        return 'group-hover/item:text-purple-300'
      default:
        return 'group-hover/item:text-purple-300'
    }
  }

  const content = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/item cursor-pointer"
    >
      <div className={`p-3 rounded-lg glass-effect ${iconColor} group-hover/item:scale-110 transition-transform duration-300`}>
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-white font-medium group-hover/item:text-white transition-colors duration-300">{title}</h4>
        <p className={`text-gray-400 ${getHoverClass()} transition-colors duration-300`}>{value}</p>
      </div>
    </motion.div>
  )

  return href ? (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="block focus:outline-none"
    >
      {content}
    </a>
  ) : content
}

export default ContactItem 