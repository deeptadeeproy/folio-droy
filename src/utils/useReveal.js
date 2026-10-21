import { useEffect, useRef } from 'react'

const EASE_ROOT_MARGIN = '0px 0px 10% 0px'

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Reveal-on-scroll that cannot flicker.
 *
 * The CSS default is the final, visible state. On mount we add `is-hidden`
 * only to elements that are still below the viewport, then remove it once
 * when they come into view. Reveals never replay on scroll up, resize or
 * rerender, and the observer is disconnected as soon as it fires.
 *
 * @param {number} stagger ms between children of the same group (capped at 240ms total)
 */
export function useReveal(stagger = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.hasAttribute('data-reveal')
      ? [root]
      : Array.from(root.querySelectorAll('[data-reveal]'))

    if (!targets.length) return

    if (prefersReducedMotion()) {
      targets.forEach((el) => el.classList.remove('is-hidden'))
      return
    }

    const viewportH = window.innerHeight
    const pending = targets.filter((el) => el.getBoundingClientRect().top > viewportH)

    // Anything already on screen at init stays visible, untouched.
    pending.forEach((el) => el.classList.add('is-hidden'))
    if (!pending.length) return

    const maxDelay = 240
    const show = (el, index) => {
      const delay = stagger ? Math.min(index * stagger, maxDelay) : 0
      el.style.transitionDelay = `${delay}ms`
      el.classList.remove('is-hidden')
      window.setTimeout(() => {
        if (el.isConnected) el.style.transitionDelay = ''
      }, delay + 900)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.unobserve(entry.target)
          show(entry.target, pending.indexOf(entry.target))
        })
      },
      { threshold: 0, rootMargin: EASE_ROOT_MARGIN }
    )

    pending.forEach((el) => observer.observe(el))

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotionChange = (event) => {
      if (!event.matches) return
      observer.disconnect()
      targets.forEach((el) => {
        el.classList.remove('is-hidden')
        el.style.transitionDelay = ''
      })
    }
    motionQuery.addEventListener('change', onMotionChange)

    return () => {
      observer.disconnect()
      motionQuery.removeEventListener('change', onMotionChange)
      targets.forEach((el) => {
        el.classList.remove('is-hidden')
        el.style.transitionDelay = ''
      })
    }
  }, [stagger])

  return ref
}

export default useReveal
