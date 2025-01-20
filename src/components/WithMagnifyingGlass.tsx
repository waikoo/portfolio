import React, { useEffect, useState } from "react";
import MagnifyingGlass from "./MagnifyingGlass.tsx";

interface Props {
  children: React.ReactNode
  invert: boolean
  className?: string
}

export default function WithMagnifyingGlass({ children, invert, className }: Props) {
  const [text, setText] = useState<'Click' | 'Tap' | null>(null)
  const invertFlex = invert ? 'flex-row-reverse' : ''

  useEffect(() => {
    const TAILWIND_XL = 1280
    const setMyText = () => {
      window.matchMedia(`(min-width: ${TAILWIND_XL}px)`).matches ? setText('Click') : setText('Tap')
    }
    setMyText()
    window.addEventListener('resize', setMyText)

    return () => setMyText()
  })

  return (
    <figure>
      {children}
      <figcaption
        className={`pt-[20px] text-[13px] text-[#8d8d8d] sm:text-[14px] flex ${invertFlex} gap-2  items-center justify-center ${className}`}
      >
        <MagnifyingGlass />
        <span>{text} to enlarge</span>
      </figcaption>
    </figure>

  )
}
