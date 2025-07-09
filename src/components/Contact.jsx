import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Github, 
  Linkedin, 
  Instagram,
  MessageSquare,
  Clock,
  Globe
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
    <div className="mt-8">
      <Card className="glass-effect border-0 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group bg-transparent rounded-2xl p-8">
        <CardContent className="bg-transparent">
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
        </CardContent>
      </Card>
    </div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

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
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group bg-transparent">
              <CardHeader className="pb-6 bg-transparent">
                <CardTitle className="text-2xl text-white flex items-center gap-3 group-hover:text-purple-300 transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-all duration-300">
                    <MessageSquare className="text-purple-400" size={28} />
                  </div>
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 bg-transparent">
                <p className="text-gray-300 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation.
                </p>
                
                <div className="space-y-4">
                  {/* Replace the old contactInfo and socialLinks arrays with this JSON in the rendering logic. */}
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

                  {/* Website */}
                  <motion.div
                    key="website"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/item"
                  >
                    <div className="p-3 rounded-lg glass-effect text-pink-400 group-hover/item:scale-110 transition-transform duration-300">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Website</h4>
                      <a 
                        href={contactInfo.links.website} 
                        className="text-gray-400 hover:text-purple-300 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contactInfo.links.website}
                      </a>
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group bg-transparent">
              <CardHeader className="pb-6 bg-transparent">
                <CardTitle className="text-2xl text-white flex items-center gap-3 group-hover:text-purple-300 transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-all duration-300">
                    <Send className="text-purple-400" size={28} />
                  </div>
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-transparent">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                          className="w-full bg-white/5 border-white/20 focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                          className="w-full bg-white/5 border-white/20 focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                        className="w-full bg-white/5 border-white/20 focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="w-full bg-white/5 border-white/20 focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send size={20} />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
            <TimeZoneClocks />
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default Contact 