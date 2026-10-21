import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { site } from '../lib/site'
import { GithubMark, LinkedinMark } from './icons'
import { AdminConsole } from './renders'

const Hero = () => (
  <section
    id="top"
    className="relative overflow-hidden"
    style={{ paddingTop: 'calc(var(--nav-h) + 24px)' }}
  >
    <div
      className="relative w-full mx-auto lg:min-h-[82svh] flex flex-col justify-center py-10 lg:py-14"
      style={{ maxWidth: '1760px', paddingInline: 'var(--gutter)' }}
    >
      {/* Headline left, tilted card right. The card has its own grid column,
          so the headline can run as large as its column allows without
          ever passing under the card. */}
      <div className="grid gap-10 lg:grid-cols-[1fr_37%] lg:items-center lg:gap-14">
        <h1 className="display text-ink text-center lg:text-left text-[clamp(52px,11vw,88px)] lg:text-[clamp(56px,8.4vw,144px)]">
          <span className="enter block" style={{ animationDelay: '140ms' }}>
            Careful software,
          </span>
          <span className="enter block" style={{ animationDelay: '210ms' }}>
            end to end.
          </span>
        </h1>

        {/* Card stack */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[78%] sm:w-[56%] lg:w-full max-w-[460px]">
            <div
              aria-hidden="true"
              className="enter-card absolute inset-0 rounded-[20px]"
              style={{
                '--tilt': '-4deg',
                background: '#141311',
                animationDelay: '300ms',
                marginLeft: 12,
                marginTop: 14,
              }}
            />
            <article
              className="enter-card relative rounded-[20px] overflow-hidden shadow-[0_24px_60px_-40px_rgba(21,17,10,0.55)]"
              style={{ '--tilt': '-7deg', animationDelay: '360ms' }}
            >
              <div className="aspect-[3/2.4]">
                <AdminConsole compact />
              </div>
              <div className="p-5 band-ink">
                <p className="text-[10px] uppercase tracking-[0.2em] on-ink-muted">Deeptadeep Roy</p>
                <p className="mt-2 text-[17px] leading-snug on-ink">
                  Personal project: an e-commerce store with an admin console.
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.16em] on-ink-muted">
                  React &middot; Node.js &middot; MongoDB &middot; Stripe
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Footer row of the hero */}
      <div className="relative mt-14 lg:mt-16 grid gap-8 lg:grid-cols-2 lg:items-end">
        <div className="enter" style={{ animationDelay: '430ms' }}>
          <p className="max-w-[38ch] text-[17px] text-muted">
            I build React, Node.js and Java/Spring applications for enterprise clients at Infosys,
            and I care how they read, run and age.
          </p>
          <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted leading-relaxed">
            Senior Full Stack Engineer
            <br />
            Infosys, Bengaluru
          </p>
          <span className="mt-5 block w-[60px] h-px bg-divider" aria-hidden="true" />
        </div>

        <div
          className="enter flex flex-wrap items-center gap-x-7 gap-y-4 lg:justify-end"
          style={{ animationDelay: '500ms' }}
        >
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
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            Email me
            <span className="arrow" aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
