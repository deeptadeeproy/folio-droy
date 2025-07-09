import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
    ...options
  })
  
  const [hasTriggered, setHasTriggered] = useState(false)
  
  useEffect(() => {
    // If the element is already in view on page load, trigger the animation
    if (inView && !hasTriggered) {
      setHasTriggered(true)
    }
    
    // Fallback: if after 100ms the element hasn't triggered and is visible, force trigger
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setHasTriggered(true)
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [inView, hasTriggered])
  
  return [ref, inView || hasTriggered]
} 