import React, { useEffect, useRef, useState } from 'react'
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { navItems, site } from '../lib/site'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const sheetRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        height: 'var(--nav-h)',
        backgroundColor: scrolled || open ? 'var(--canvas)' : 'transparent',
        borderBottom: `1px solid ${scrolled || open ? 'var(--divider)' : 'transparent'}`,
        transition: 'background-color 200ms ease-out, border-color 200ms ease-out',
      }}
    >
      <div className="shell h-full flex items-center justify-between gap-6">
        <a href="#top" className="leading-none">
          <span className="block text-[15px] md:text-[18px] font-semibold uppercase tracking-[0.18em]">
            Deeptadeep Roy
          </span>
          <span className="hidden md:block mt-1 text-[11px] uppercase tracking-[0.2em] text-muted">
            Senior Full Stack Engineer
          </span>
        </a>

        <nav aria-label="Sections" className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? 'true' : undefined}
              className="relative text-[12px] font-medium uppercase tracking-[0.16em] py-2"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-0.5 h-0.5 w-full origin-left bg-accent transition-transform duration-200"
                style={{ transform: active === item.href ? 'scaleX(1)' : 'scaleX(0)' }}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.resume}
            download={site.resumeFileName}
            className="hidden sm:inline-flex items-center gap-2 h-10 px-5 rounded-full border border-controlBorder text-[13px] font-semibold hover:bg-ink/5 transition-colors duration-150"
          >
            <ArrowDownTrayIcon className="w-4 h-4" aria-hidden="true" />
            Resume
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="lg:hidden w-11 h-11 -mr-2 inline-flex items-center justify-center"
          >
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={sheetRef}
          className="lg:hidden fixed inset-x-0 bg-canvas overflow-y-auto"
          style={{ top: 'var(--nav-h)', bottom: 0 }}
        >
          <div className="shell py-10 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[40px] font-semibold tracking-[-0.03em] border-b border-divider"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <a href={`mailto:${site.email}`} className="btn btn-primary w-full">
                Email me
                <span className="arrow" aria-hidden="true">&#8594;</span>
              </a>
              <a href={site.resume} download={site.resumeFileName} className="btn btn-outline w-full">
                <ArrowDownTrayIcon className="w-5 h-5" aria-hidden="true" />
                Download resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
