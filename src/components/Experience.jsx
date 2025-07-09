import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../utils/useIntersectionObserver'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { SectionHeader, GlassCard, AnimatedContainer } from './shared'
import { Button } from './ui/button'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Award,
  Users,
  TrendingUp,
  Star
} from 'lucide-react'

const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef(null)
  const [ref, inView] = useIntersectionObserver()

  // Handle scroll detection for client cards
  const handleScroll = () => {
    setIsScrolling(true)
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false)
    }, 150) // Wait 150ms after scroll stops to re-enable hover
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Infosys',
      location: 'Bengaluru, India',
      period: '2021 - Present',
      description: 'Leading development of enterprise-level applications using React, Node.js, Java, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Led a team of 5 developers to deliver 3 major projects',
        'Improved application performance by 40%',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 3 junior developers to senior level'
      ],
      technologies: ['React', 'Java', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      type: 'work'
    }
  ]

  const education = [
    {
      id: 1,
      title: 'Bachelor of Electrical Engineering',
      institution: 'KIIT University',
      location: 'Bhubaneshwar, India',
      period: '2017 - 2021',
      description: 'Major in Electrical Engineering with minor in Computer Science',
      achievements: [
        'GPA: 8.0/10.0',
        'Computer Science Club President',
        'Internship at Appsbee'
      ],
      type: 'education'
    }
  ]



  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          ref={ref}
          title="My"
          gradientText="Experience"
          subtitle="A journey through my professional experience, education, and continuous learning in the world of technology."
        />

        {/* Work Experience */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Briefcase className="text-white" size={32} />
              Work Experience
            </h3>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white to-gray-400 hidden md:block"></div>
            
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-white to-gray-400 rounded-full border-4 border-zinc-950 z-10 hidden md:block"></div>
                  
                  <div className="md:ml-16 flex-1">
                    <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <CardTitle className="text-2xl text-white mb-2">{exp.title}</CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-gray-400">
                              <div className="flex items-center gap-2">
                                <Briefcase size={16} />
                                <span className="text-white font-medium">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span>{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                          </div>
                          <a href="https://www.infosys.com/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                              <ExternalLink size={16} className="mr-2" />
                              View Company
                            </Button>
                          </a>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Award className="text-yellow-400" size={20} />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + achIndex * 0.1 }}
                                className="flex items-start gap-3 text-gray-300"
                              >
                                <div className="w-2 h-2 bg-gray-300 md:bg-white rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Notable <span className="gradient-text">Clients</span>
            </h3>
            <p className="text-gray-400">Trusted by leading global brands</p>
          </div>
          <div className="relative">
            {/* Desktop: Centered, non-scrollable */}
            <div className="hidden md:flex gap-8 md:gap-12 justify-center">
              {[
                { name: 'Tiffany & Co.', type: 'Luxury Retail' },
                { name: 'GAP', type: 'Fashion Retail' },
                { name: 'CMA-CGM', type: 'Shipping & Logistics' }
              ].map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  className="text-center p-4 min-w-[250px] w-[250px] h-40 flex flex-col justify-center"
                >
                  <div className="text-2xl font-bold text-white mb-2">{client.name}</div>
                  <div className="text-sm text-gray-400">{client.type}</div>
                </motion.div>
              ))}
            </div>

            {/* Mobile: Horizontal scrollable */}
            <div className="md:hidden flex gap-4 md:gap-12 overflow-x-auto scrollbar-hide pb-4 pl-4" onScroll={handleScroll}>
              {[
                { name: 'Tiffany & Co.', type: 'Luxury Retail' },
                { name: 'GAP', type: 'Fashion Retail' },
                { name: 'CMA-CGM', type: 'Shipping & Logistics' }
              ].map((client, index, arr) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  className={`text-center flex-shrink-0 p-0 min-w-[220px] w-[220px] h-40 flex flex-col justify-center${index === arr.length - 1 ? ' pr-4' : ''}`}
                >
                  <div className="text-2xl font-bold text-white mb-2">{client.name}</div>
                  <div className="text-sm text-gray-400">{client.type}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll indicator for mobile */}
            <div className="flex justify-center mt-4 md:hidden">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <TrendingUp className="text-blue-400" size={32} />
              Education
            </h3>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="max-w-2xl w-full"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-white mb-4 text-center">Academic Background</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h4 className="text-xl font-semibold text-white">{education[0].title}</h4>
                    <span className="text-blue-300 font-medium">{education[0].period}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-3">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span className="text-blue-300">{education[0].institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{education[0].location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{education[0].description}</p>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="text-yellow-400" size={18} />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {education[0].achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>



        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '50+', label: 'Team Members Led' },
              { icon: TrendingUp, value: '4+', label: 'Multi-billion Dollar Projects' },
              { icon: Award, value: '8+', label: 'Best Performer' },
              { icon: Star, value: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 rounded-lg glass-effect mb-3 inline-block">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default Experience 