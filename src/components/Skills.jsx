import React, { useRef, useState } from 'react'
import { useReveal } from '../utils/useReveal'
import ReactIcon from '../assets/icons/react.svg?react'
import TypescriptIcon from '../assets/icons/typescript.svg?react'
import NodejsIcon from '../assets/icons/nodejs.svg?react'
import ExpressIcon from '../assets/icons/express.svg?react'
import JavaIcon from '../assets/icons/java.svg?react'
import MavenIcon from '../assets/icons/maven.svg?react'
import PostgresqlIcon from '../assets/icons/postgresql.svg?react'
import MongodbIcon from '../assets/icons/mongodb.svg?react'
import FirebaseIcon from '../assets/icons/firebase.svg?react'
import DockerIcon from '../assets/icons/docker.svg?react'
import JenkinsIcon from '../assets/icons/jenkins.svg?react'
import GitIcon from '../assets/icons/git.svg?react'
import CloudflareIcon from '../assets/icons/cloudflare.svg?react'

const groups = [
  {
    id: 'frontend',
    name: 'Frontend',
    caption: 'React, Next.js, TypeScript and Tailwind CSS. Accessible components and state that stays predictable.',
    tools: [
      { label: 'React', Icon: ReactIcon },
      { label: 'TypeScript', Icon: TypescriptIcon },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    caption: 'Node.js with Express and Java with Spring Boot and Maven. REST and GraphQL APIs, authentication and background jobs.',
    tools: [
      { label: 'Node.js', Icon: NodejsIcon },
      { label: 'Express', Icon: ExpressIcon },
      { label: 'Java', Icon: JavaIcon },
      { label: 'Maven', Icon: MavenIcon },
    ],
  },
  {
    id: 'data',
    name: 'Data',
    caption: 'PostgreSQL and MongoDB for most work, and Firebase when a project needs realtime sync quickly.',
    tools: [
      { label: 'PostgreSQL', Icon: PostgresqlIcon },
      { label: 'MongoDB', Icon: MongodbIcon },
      { label: 'Firebase', Icon: FirebaseIcon },
    ],
  },
  {
    id: 'tooling',
    name: 'Tooling',
    caption: 'Docker, Jenkins and Git for builds and delivery, AWS and Cloudflare for hosting.',
    tools: [
      { label: 'Docker', Icon: DockerIcon },
      { label: 'Jenkins', Icon: JenkinsIcon },
      { label: 'Git', Icon: GitIcon },
      { label: 'Cloudflare', Icon: CloudflareIcon },
    ],
  },
]

const ToolRow = ({ tools }) => (
  <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
    {tools.map(({ label, Icon }) => (
      <li key={label} className="inline-flex items-center gap-2 text-[14px] text-muted">
        <Icon className="w-7 h-7" style={{ filter: 'grayscale(1)', opacity: 0.85 }} aria-hidden="true" />
        {label}
      </li>
    ))}
  </ul>
)

const Skills = () => {
  const [activeId, setActiveId] = useState(groups[0].id)
  const ref = useReveal(80)
  const tabsRef = useRef([])

  const active = groups.find((group) => group.id === activeId) ?? groups[0]

  const onKeyDown = (event, index) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }
    const step = keys[event.key]
    if (!step) return
    event.preventDefault()
    const next = (index + step + groups.length) % groups.length
    setActiveId(groups[next].id)
    tabsRef.current[next]?.focus()
  }

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="shell">
        <h2 className="sr-only">Skills and tools</h2>

        <div className="grid gap-12 lg:grid-cols-[64fr_27fr] lg:gap-[9%]">
          {/* Stacked discipline list */}
          <div role="tablist" aria-label="Skill groups" aria-orientation="vertical">
            {groups.map((group, index) => {
              const selected = group.id === activeId
              return (
                <div key={group.id} data-reveal className="reveal">
                  <button
                    ref={(node) => { tabsRef.current[index] = node }}
                    role="tab"
                    id={`skills-tab-${group.id}`}
                    aria-selected={selected}
                    aria-controls="skills-panel"
                    tabIndex={selected ? 0 : -1}
                    onFocus={() => setActiveId(group.id)}
                    onMouseEnter={() => setActiveId(group.id)}
                    onClick={() => setActiveId(group.id)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    className="block w-full text-left font-semibold tracking-[-0.035em] leading-[1] py-1 transition-colors duration-200 text-[clamp(40px,7vw,112px)]"
                    style={{ color: selected ? 'var(--ink)' : 'rgba(21,17,10,0.3)' }}
                  >
                    {group.name}
                  </button>

                  {/* Mobile: every group keeps its own caption and tools */}
                  <div className="lg:hidden pb-8 pt-2">
                    <p className="text-[17px] text-muted max-w-prose">{group.caption}</p>
                    <div className="mt-4">
                      <ToolRow tools={group.tools} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop companion panel */}
          <div className="hidden lg:block">
            <div className="aspect-square p-8 flex flex-col justify-end" style={{ background: 'var(--surface-alt)' }}>
              <p className="text-[13px] uppercase tracking-[0.16em] text-muted">Toolkit</p>
              <p className="mt-3 display text-[clamp(24px,2vw,34px)] leading-[1.08]">
                The same stack, from the browser down to the build.
              </p>
            </div>
            <div
              id="skills-panel"
              role="tabpanel"
              aria-live="polite"
              aria-labelledby={`skills-tab-${active.id}`}
              className="mt-7 min-h-[180px]"
            >
              <p className="text-[clamp(18px,1.5vw,24px)] leading-snug">{active.caption}</p>
              <div className="mt-6">
                <ToolRow tools={active.tools} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
