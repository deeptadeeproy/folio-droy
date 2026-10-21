import React from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { navItems, site } from '../lib/site'
import { GithubMark, LinkedinMark } from './icons'

const Footer = () => (
  <footer className="band-ink p-4 md:p-8">
    <div className="rounded-[20px] md:rounded-[28px] bg-canvas text-ink px-6 py-12 md:px-14 md:py-16">
      <div className="grid gap-12 lg:grid-cols-[40fr_20fr_30fr]">
        <div>
          <p className="display text-[clamp(26px,2.6vw,38px)] leading-[1.12] max-w-[20ch]">
            Senior full stack engineer, available for the next build.
          </p>
          <a href={`mailto:${site.email}`} className="btn btn-primary mt-8">
            Email me
            <span className="arrow" aria-hidden="true">&#8594;</span>
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="text-[14px] text-muted">Sections</p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[17px] hover:text-accentText transition-colors duration-150">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[14px] text-muted">Elsewhere</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={`mailto:${site.email}`} className="text-[17px] hover:text-accentText transition-colors duration-150">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[17px] hover:text-accentText transition-colors duration-150">
                <GithubMark className="w-4 h-4" /> github.com/deeptadeeproy
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[17px] hover:text-accentText transition-colors duration-150">
                <LinkedinMark className="w-4 h-4" /> linkedin.com/in/deeptadeeproy
              </a>
            </li>
            <li className="text-[17px] text-muted">Bengaluru, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-divider flex flex-wrap items-center justify-between gap-4">
        <p className="text-[14px] text-muted">
          &copy; {new Date().getFullYear()} Deeptadeep Roy
        </p>
        <a href="#top" className="link-u inline-flex items-center gap-2 text-[14px]">
          <ArrowUpIcon className="w-4 h-4" aria-hidden="true" />
          Back to top
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
