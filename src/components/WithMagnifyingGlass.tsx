import React, { useEffect, useState } from "react";
import MagnifyingGlass from "./MagnifyingGlass.tsx";
import useMatchMedia from "./useMatchMedia.tsx";

interface Props {
  children: React.ReactNode
  invert: boolean
  className?: string
  hideOnXl?: boolean
}
const TAILWIND_XL = 1280

export default function WithMagnifyingGlass({ children, invert, className, hideOnXl }: Props) {
  const [text, setText] = useState<'Click' | 'Tap' | null>(null)
  const invertFlex = invert ? 'flex-row-reverse' : ''
  const matches = useMatchMedia(TAILWIND_XL)

  useEffect(() => {
    setText(matches ? 'Click' : 'Tap');
  }, [matches]);

  return (
    <figure className={className}>
      <div className="mb-[20px]">
        {children}
      </div>
      <figcaption
        className={`text-[13px] text-[#8d8d8d] sm:text-[16px] flex ${invertFlex} gap-2  items-center justify-center ${hideOnXl ? 'xl:hidden' : ''}`}
      >
        <MagnifyingGlass />
        <span className="text-[#8d8d8d]">{text} to enlarge</span>
      </figcaption>
    </figure>

  )
}
