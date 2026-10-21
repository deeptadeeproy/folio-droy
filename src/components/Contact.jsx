import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { site } from '../lib/site'
import { useReveal } from '../utils/useReveal'
import { GithubMark, LinkedinMark } from './icons'

const Contact = () => {
  const ref = useReveal(90)

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="shell">
        <div
          data-reveal
          className="reveal rounded-[24px] overflow-hidden px-6 py-20 md:py-28 text-center"
          style={{ background: 'var(--surface-alt)' }}
        >
          <p className="text-[14px] tracking-[0.04em] text-muted">
            Deeptadeep Roy &mdash; open to senior engineering roles
          </p>

          <h2 className="mt-6 display text-[clamp(36px,5.4vw,80px)] leading-[1.03] max-w-[18ch] mx-auto">
            Tell me what you are building.
          </h2>

          <a href={`mailto:${site.email}`} className="btn btn-primary mt-10 h-14 px-8 text-[15px] uppercase tracking-[0.12em]">
            {site.email}
            <span className="arrow" aria-hidden="true">&#8594;</span>
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a href={site.resume} download={site.resumeFileName} className="link-u inline-flex items-center gap-2 text-[15px]">
              <ArrowDownTrayIcon className="w-4 h-4" aria-hidden="true" />
              Download resume
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="link-u inline-flex items-center gap-2 text-[15px]">
              <GithubMark className="w-4 h-4" />
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="link-u inline-flex items-center gap-2 text-[15px]">
              <LinkedinMark className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <p className="mt-8 text-[15px] text-muted">
            Based in Bengaluru, India. Happy to work with teams in other time zones.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
