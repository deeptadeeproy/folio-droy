import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  Code, 
  Database, 
  Palette, 
  Cloud, 
  Smartphone, 
  Globe,
  Zap,
  Shield
} from 'lucide-react'
import ReactIcon from '../assets/icons/react.svg?react';
import NodejsIcon from '../assets/icons/nodejs.svg?react';
import TypescriptIcon from '../assets/icons/typescript.svg?react';
import JavaIcon from '../assets/icons/java.svg?react';
import MavenIcon from '../assets/icons/maven.svg?react';
import DockerIcon from '../assets/icons/docker.svg?react';
import JenkinsIcon from '../assets/icons/jenkins.svg?react';
import GitIcon from '../assets/icons/git.svg?react';
import MongodbIcon from '../assets/icons/mongodb.svg?react';
import PostgresqlIcon from '../assets/icons/postgresql.svg?react';
import FirebaseIcon from '../assets/icons/firebase.svg?react';
import ExpressIcon from '../assets/icons/express.svg?react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'HTML/CSS'
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        'Node.js',
        'Express.js',
        'Java',
        'Spring Boot',
        'REST APIs'
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-white to-gray-400',
      skills: [
        'Figma',
        'Adobe XD',
        'Prototyping',
        'User Research',
        'Design Systems'
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        'Docker',
        'Firebase',
        'CI/CD',
        'Git',
        'Linux'
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-white to-gray-400',
      skills: [
        'React Native',
        'Flutter',
        'Mobile UI',
        'App Store',
        'Performance'
      ]
    },
    {
      title: 'Other Technologies',
      icon: Globe,
      color: 'from-teal-500 to-blue-500',
      skills: [
        'GraphQL',
        'MongoDB',
        'PostgreSQL',
        'Redis',
        'WebSockets'
      ]
    }
  ]

  const technologies = [
    { name: 'React', icon: ReactIcon },
    { name: 'Node.js', icon: NodejsIcon },
    { name: 'TypeScript', icon: TypescriptIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'Maven', icon: MavenIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'Firebase', icon: FirebaseIcon },
    { name: 'Jenkins', icon: JenkinsIcon },
    { name: 'Git', icon: GitIcon },
    { name: 'MongoDB', icon: MongodbIcon },
    { name: 'PostgreSQL', icon: PostgresqlIcon },
    { name: 'Express JS', icon: ExpressIcon }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and domains.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-full hover:border-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-3">
                    <category.icon size={24} className={`text-gradient-to-r ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-12">
            Technology <span className="gradient-text">Stack</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-4xl mb-3 flex items-center justify-center h-12">
                    <tech.icon className="h-10 w-10 text-[#d6c95fc6]" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{tech.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="w-full">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 w-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Zap className="text-yellow-400" size={28} />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Problem Solving', 'Communication', 'Team Leadership', 'Time Management',
                    'Critical Thinking', 'Adaptability', 'Creativity', 'Attention to Detail'
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 