import React from 'react'
import { motion } from 'framer-motion'

const ContactItem = ({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  iconColor = "text-purple-400",
  delay = 0,
  inView = true 
}) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/item"
    >
      <div className={`p-3 rounded-lg glass-effect ${iconColor} group-hover/item:scale-110 transition-transform duration-300`}>
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-white font-medium">{title}</h4>
        {href ? (
          <a 
            href={href} 
            className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-400">{value}</p>
        )}
      </div>
    </motion.div>
  )

  return content
}

export default ContactItem 