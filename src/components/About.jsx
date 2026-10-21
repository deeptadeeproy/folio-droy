import React from 'react'
import { site } from '../lib/site'
import { useReveal } from '../utils/useReveal'

const details = [
  ['Current role', 'Senior Full Stack Developer'],
  ['Company', 'Infosys, Bengaluru'],
  ['Working since', '2021'],
  ['Core stack', 'React, Node.js, Java'],
  ['Also works with', 'TypeScript, Spring Boot, PostgreSQL'],
  ['Builds and delivery', 'Docker, Jenkins, AWS'],
  ['Education', 'B.Tech, KIIT University'],
  ['Based in', 'Bengaluru, India'],
]

const About = () => {
  const ref = useReveal(80)

  return (
    <section id="about" className="band-ink py-20 md:py-28" ref={ref}>
      <div className="shell grid gap-12 lg:grid-cols-[52fr_40fr] lg:gap-[8%] lg:items-center">
        <div data-reveal className="reveal">
          <p className="text-[13px] uppercase tracking-[0.16em] flex items-center gap-3 on-ink">
            <span className="w-2.5 h-2.5 bg-accent" aria-hidden="true" />
            About
          </p>

          <h2 className="mt-7 display text-[clamp(34px,4.4vw,64px)] leading-[1.04] on-ink">
            I would rather ship something
            <br className="hidden md:block" /> small and solid than something
            <br className="hidden md:block" /> clever and brittle.
          </h2>

          <p className="mt-8 text-[18px] on-ink-muted max-w-prose">
            I have spent about five years at Infosys building enterprise applications, mostly in
            React, Node.js and Java. The parts I enjoy are the unglamorous ones: naming things well,
            keeping a schema honest, making a slow page fast and leaving the codebase easier to
            read than I found it. Outside work I build side projects to try a platform or an API I
            have not used yet.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              Email me
              <span className="arrow" aria-hidden="true">&#8594;</span>
            </a>
            <a
              href="#work"
              className="btn"
              style={{ border: '1px solid rgba(246,241,232,0.45)', color: '#F6F1E8' }}
            >
              See the work
            </a>
          </div>
        </div>

        <div data-reveal className="reveal">
          <div
            className="rounded-[14px] p-7 md:p-9"
            style={{ background: 'var(--canvas)', color: 'var(--ink)' }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[30px] font-bold tracking-[-0.03em]">Deeptadeep Roy</p>
                <p className="text-[14px] text-muted">Senior full stack engineer</p>
              </div>
              <span className="w-2.5 h-2.5 mt-3 bg-accent" aria-hidden="true" />
            </div>

            <span className="block mt-6 h-px bg-divider" aria-hidden="true" />

            <dl className="mt-5 space-y-3">
              {details.map(([key, value]) => (
                <div key={key} className="flex items-baseline justify-between gap-6 text-[16px]">
                  <dt className="text-muted flex-none">{key}</dt>
                  <dd className="font-semibold text-right">{value}</dd>
                </div>
              ))}
            </dl>

            <span className="block mt-5 h-px bg-divider" aria-hidden="true" />

            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <span className="text-[16px] text-muted">Open to</span>
              <span className="text-[20px] font-bold tracking-[-0.02em] text-right">
                Senior engineering roles
              </span>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="mt-5 flex items-center justify-between gap-4 text-[15px] font-medium hover:text-accentText transition-colors duration-150"
            >
              {site.email}
              <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
