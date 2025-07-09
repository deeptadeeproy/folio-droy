import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntersectionObserver } from '../utils/useIntersectionObserver'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { 
  ExternalLink, 
  Github, 
  Code, 
  Globe, 
  Smartphone, 
  Database,
  Palette,
  Zap
} from 'lucide-react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [ref, inView] = useIntersectionObserver()

  const categories = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'fullstack', name: 'Full Stack', icon: Database },
    { id: 'ui', name: 'UI/UX Design', icon: Palette }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.',
      image: '🛒',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/deeptadeep/ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://task-app-demo.com',
      githubUrl: 'https://github.com/deeptadeep/task-app',
      featured: true
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      description: 'A cross-platform mobile app for fitness tracking with workout plans, progress analytics, and social features.',
      image: '💪',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'],
      liveUrl: 'https://fitness-app-demo.com',
      githubUrl: 'https://github.com/deeptadeep/fitness-app',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website Design',
      description: 'Modern portfolio website design with glass morphism effects, smooth animations, and responsive design.',
      image: '🎨',
      category: 'ui',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
      liveUrl: 'https://portfolio-design.com',
      githubUrl: null,
      featured: false
    },
    {
      id: 5,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with WebSocket integration, file sharing, and group chat functionality.',
      image: '💬',
      category: 'web',
      technologies: ['React', 'Socket.io', 'Express.js', 'MongoDB'],
      liveUrl: 'https://chat-app-demo.com',
      githubUrl: 'https://github.com/deeptadeep/chat-app',
      featured: false
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with real-time data, interactive maps, and weather forecasting.',
      image: '🌤️',
      category: 'web',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
      liveUrl: 'https://weather-dashboard.com',
      githubUrl: 'https://github.com/deeptadeep/weather-app',
      featured: false
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            mobile applications, and UI/UX design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "gradient" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              <category.icon size={16} />
              {category.name}
            </Button>
          ))}
        </motion.div>



        {/* All Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="glass-effect border-white/10 h-full hover:border-white/20 transition-all duration-300 hover:scale-105 overflow-hidden bg-transparent">
                  <CardHeader className="pb-3 bg-transparent">
                    <CardTitle className="text-lg text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 bg-transparent">
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  )
}

export default Projects 