import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  MessageSquare,
  Clock,
  Globe,
  Calendar
} from 'lucide-react'

// Add clock component
function formatTime(date, timeZone) {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone,
  })
}

// Calendar component
function CalendarComponent() {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()
  const today = new Date()
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  
  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }
  
  const isToday = (day) => {
    return day === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear()
  }
  
  const isCurrentMonth = () => {
    return currentMonth === today.getMonth() && currentYear === today.getFullYear()
  }
  
  return (
    <div className="text-center">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-1">
          {monthNames[currentMonth]} {currentYear}
        </h3>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-3">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-xs text-gray-400 font-medium p-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`
              p-2 text-sm font-mono transition-all duration-300
              ${day === null 
                ? 'text-transparent' 
                : isToday(day)
                ? 'bg-white/10 text-white rounded-lg border border-white/20'
                : 'text-gray-300 hover:text-white hover:bg-white/5 rounded-lg'
              }
            `}
          >
            {day || ''}
          </div>
        ))}
      </div>
      
      {isCurrentMonth() && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-400">
            Today: {today.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      )}
    </div>
  )
}

function TimeZoneClocks() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])
  const userTime = formatTime(now)
  const indiaTime = formatTime(now, 'Asia/Kolkata')
  const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone
  return (
    <div className="mt-8 p-7">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="flex flex-col items-center">
          <span className="font-mono text-4xl text-gray-400" style={{ fontFamily: 'Geist Mono, monospace', fontSize: '2.25rem' }}>{userTime}</span>
          <span className="text-xs text-gray-400 mt-2">Your Time ({userTZ})</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono text-4xl text-gray-400" style={{ fontFamily: 'Geist Mono, monospace', fontSize: '2.25rem' }}>{indiaTime}</span>
          <span className="text-xs text-gray-400 mt-2">India Time (Asia/Kolkata)</span>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Contact info JSON
  const contactInfo = {
    email: 'deeptadeeproy@yahoo.in',
    phone: '+91 90738-40430',
    location: 'Kolkata, India',
    links: {
      website: 'https://deeptadeep.dev',
      github: 'https://github.com/deeptadeeproy',
      linkedin: 'https://in.linkedin.com/in/deeptadeeproy',
      instagram: 'https://instagram.com/deeptadeeproy'
    }
  };

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: contactInfo.links.github,
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: contactInfo.links.linkedin,
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: contactInfo.links.instagram,
      color: 'hover:text-pink-500'
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendar and Clock */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group bg-transparent">
              <CardHeader className="pb-6 bg-transparent">
                <CardTitle className="text-2xl text-white flex items-center gap-3 group-hover:text-purple-300 transition-colors duration-300">
                  Calendar
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-transparent">
                <CalendarComponent />
              </CardContent>
            </Card>
            <TimeZoneClocks />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group bg-transparent">
              <CardHeader className="pb-6 bg-transparent">
                <CardTitle className="text-2xl text-white flex items-center gap-3 group-hover:text-purple-300 transition-colors duration-300">
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 bg-transparent">
                <p className="text-gray-300 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation.
                </p>
                
                <div className="space-y-4">
                  {/* Email */}
                  <motion.div
                    key="email"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/item"
                  >
                    <div className="p-3 rounded-lg glass-effect text-purple-400 group-hover/item:scale-110 transition-transform duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <a 
                        href={`mailto:${contactInfo.email}`} 
                        className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    key="phone"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/item"
                  >
                    <div className="p-3 rounded-lg glass-effect text-green-400 group-hover/item:scale-110 transition-transform duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <a 
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                        className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    key="location"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/item"
                  >
                    <div className="p-3 rounded-lg glass-effect text-purple-400 group-hover/item:scale-110 transition-transform duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Location</h4>
                      <p className="text-gray-400">{contactInfo.location}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full glass-effect text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default Contact 