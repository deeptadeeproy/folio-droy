import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { site } from '../lib/site'
import { useReveal } from '../utils/useReveal'
import tiffanyLogo from '../assets/logos/tiffany.svg'
import gapLogo from '../assets/logos/gap.svg'
import cmacgmLogo from '../assets/logos/cmacgm.svg'

const entries = [
  {
    id: 'role',
    title: 'Senior Full Stack Developer, Infosys',
    meta: '2021 to present · Bengaluru',
    body: 'I build and maintain enterprise applications for Infosys clients with React, Node.js, Java and AWS. I also review code, mentor newer engineers and help run the CI/CD pipelines our teams ship through.',
  },
  {
    id: 'own',
    title: 'What I own day to day',
    body: 'Features from end to end: API design in Node.js or Spring Boot, the React interface, PostgreSQL schemas and the Docker build that ships them.',
  },
  {
    id: 'stack',
    title: 'Stack at work',
    body: 'React, TypeScript, Java with Spring Boot, Node.js, PostgreSQL, Docker and AWS.',
  },
  {
    id: 'team',
    title: 'How I work with a team',
    body: 'Small pull requests, written-down decisions and reviews that explain the why. New teammates get pairing time, not just a wiki link.',
  },
  {
    id: 'education',
    title: 'Education: B.Tech, Electrical Engineering',
    meta: 'KIIT University, Bhubaneswar · 2017 to 2021',
    body: 'Electrical engineering core with coursework in computer science, data structures and systems architecture.',
  },
]

const clients = [
  { name: 'Tiffany & Co.', sector: 'Luxury retail', logo: tiffanyLogo },
  { name: 'GAP', sector: 'Fashion retail', logo: gapLogo },
  { name: 'CMA CGM', sector: 'Shipping and logistics', logo: cmacgmLogo },
]

const Row = ({ entry, index }) => (
  <div data-reveal className="reveal border-b border-divider py-7 flex items-start gap-5">
    <span className="tabular text-[15px] text-muted pt-1 w-[52px] flex-none">
      {String(index + 1).padStart(2, '0')}
    </span>
    <div className="flex-1 min-w-0">
      <h3 className="text-[clamp(18px,1.6vw,20px)] font-semibold leading-snug">
        {entry.title}
      </h3>
      {entry.meta && <p className="mt-1 text-[14px] text-muted">{entry.meta}</p>}
      <p className="mt-3 max-w-prose text-[17px] text-muted">{entry.body}</p>
    </div>
  </div>
)

const Experience = () => {
  const ref = useReveal(60)
  const bandRef = useReveal(0)

  return (
    <>
      <section id="experience" className="section" ref={ref}>
        <div className="shell">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 lg:gap-8">
            <h2 className="label order-1 lg:order-2">Experience</h2>
            <span aria-hidden="true" className="hidden lg:block order-2 w-px h-10 bg-divider" />
            <p className="order-2 lg:order-1 headline">Where I work</p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[63fr_28fr] lg:gap-16">
            <div className="border-t border-divider">
              {entries.map((entry, index) => (
                <Row key={entry.id} entry={entry} index={index} />
              ))}
            </div>

            <aside data-reveal className="reveal">
              <div
                className="rounded-[12px] p-7 aspect-[1/0.93] flex flex-col justify-between"
                style={{ background: 'var(--surface-alt)' }}
              >
                <p className="text-[13px] uppercase tracking-[0.16em] text-muted">Since 2021</p>
                <p className="display text-[clamp(28px,3vw,40px)] leading-[1.05]">
                  Five years of enterprise delivery, one page of it here.
                </p>
              </div>
              <h3 className="mt-8 text-[clamp(26px,2.4vw,36px)] font-bold leading-[1.05] tracking-[-0.03em]">
                Want the full
                <br />
                history?
              </h3>
              <a
                href={site.resume}
                download={site.resumeFileName}
                className="mt-6 w-full h-14 rounded-[8px] band-ink inline-flex items-center justify-between px-6 text-[14px] font-semibold uppercase tracking-[0.14em] hover:opacity-90 transition-opacity duration-150"
              >
                Download resume
                <span className="w-8 h-8 rounded-full bg-accent inline-flex items-center justify-center text-onAccent">
                  <ArrowDownTrayIcon className="w-4 h-4" aria-hidden="true" />
                </span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Client engagements band */}
      <section className="band-ink py-16 md:py-24" ref={bandRef} aria-labelledby="clients-heading">
        <div className="shell">
          <h2 id="clients-heading" className="sr-only">
            Client engagements through Infosys
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <span aria-hidden="true" className="hidden md:flex flex-1 items-center gap-2">
              <span className="flex-1 h-px bg-white/30" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
            </span>
            <p className="text-[13px] uppercase tracking-[0.16em] on-ink flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-accent" aria-hidden="true" />
              Client engagements
              <span style={{ color: 'var(--accent)' }}>//</span>
              <span className="on-ink-muted">via Infosys</span>
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.18)' }}>
            {clients.map((client) => (
              <li
                key={client.name}
                data-reveal
                className="reveal band-ink aspect-square p-5 flex flex-col justify-between"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-[45%] max-h-[38%] object-contain object-left"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  loading="lazy"
                />
                <span className="text-[13px] on-ink-muted">
                  <span className="block on-ink font-medium">{client.name}</span>
                  {client.sector}
                </span>
              </li>
            ))}
            <li data-reveal className="reveal band-ink aspect-square p-5 flex flex-col justify-between">
              <span className="text-[26px] font-semibold on-ink">Infosys</span>
              <span className="text-[13px] on-ink-muted">
                <span className="block on-ink font-medium">Employer</span>
                2021 to present
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Experience
