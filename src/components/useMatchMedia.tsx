import { useState, useEffect } from 'react'

export default function useMatchMedia(preferredMinWidth: number) {
  const [matches, setMatches] = useState(
    window.matchMedia(
      `(min-width: ${preferredMinWidth}px)`
    ).matches)

  useEffect(() => {
    const listener = () => setMatches(window.matchMedia(`(min-width: ${preferredMinWidth}px)`).matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)

  }, [])

  return matches
}
