import React from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../utils/useIntersectionObserver'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { User, Code, Palette, Target, Award, Heart } from 'lucide-react'
import { SectionHeader, GlassCard, AnimatedContainer } from './shared'

const About = () => {
  const [ref, inView] = useIntersectionObserver()

  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Award, value: '4+', label: 'Years Experience' },
    { icon: Heart, value: '100%', label: 'Client Satisfaction' },
    { icon: Target, value: '24/7', label: 'Support Available' }
  ]

  const skills = [
    'React & Next.js', 'Node.js & Express', 'Java & Spring Boot', 'PostgreSQL & MongoDB',
    'TypeScript', 'Tailwind CSS', 'Docker & Firebase', 'GraphQL & REST APIs'
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          ref={ref}
          title="About"
          gradientText="Me"
          subtitle="Passionate full-stack developer with a love for creating beautiful, functional, and user-centric digital experiences."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Stats */}
          <AnimatedContainer
            direction="left"
            delay={0.2}
            inView={inView}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="p-4 rounded-lg glass-effect mb-3 inline-block">
                    <stat.icon size={32} className="text-[#d6c95fc6]" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedContainer>

          {/* Right side - Content */}
          <AnimatedContainer
            direction="right"
            delay={0.4}
            inView={inView}
            className="space-y-6"
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <User className="text-[#d6c95fc6]" size={28} />
                  Who I Am
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  I'm a dedicated full-stack software developer with a passion for creating innovative digital solutions. 
                  With over 4 years of experience in web development, I specialize in building scalable applications 
                  that deliver exceptional user experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Palette className="text-[#d6c95fc6]" size={28} />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Combining beautiful design with powerful functionality. From concept to Production.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-[#d6c95fc6] rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedContainer>
        </div>

        {/* Values section */}
        <AnimatedContainer
          delay={0.6}
          inView={inView}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            Core <span className="gradient-text">Values</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Constantly exploring new technologies and creative solutions to solve complex problems.'
              },
              {
                title: 'Quality',
                description: 'Committed to writing clean, efficient, and maintainable code that stands the test of time.'
              },
              {
                title: 'Collaboration',
                description: 'Believe in the power of teamwork and open communication to deliver exceptional results.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="p-6 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedContainer>
      </div>
    </section>
  )
}

export default About 