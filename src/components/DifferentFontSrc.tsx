import { useEffect, useState } from "react";
import ReactImage from "./ReactImage.tsx";
import useMatchMedia from "./useMatchMedia.tsx";

interface Props {
  className?: string
}

const TAILWIND_XL = 1280
const TAILWIND_2XL = 1536

const DifferentFontSrc = ({ className }: Props) => {
  const [src, setSrc] = useState<'quizzical_font_desktop' | 'quizzical_font_mobile_tablet' | 'quizzical_font_semi_desktop' | null>(null)
  const matches = useMatchMedia(TAILWIND_XL)
  const matchesLargeDesktop = useMatchMedia(TAILWIND_2XL)

  useEffect(() => {
    matchesLargeDesktop ? setSrc('quizzical_font_desktop') : matches ?
      setSrc('quizzical_font_semi_desktop') : setSrc('quizzical_font_mobile_tablet');
  }, [matches, matchesLargeDesktop])

  return (
    <div className={className}>
      <ReactImage src={src || 'quizzical_font_desktop'}
        alt="different fonts used in the quizzical app"
        className={`my-[20px] sm:rotate-90 xl:rotate-0 block xl:h-auto mx-auto ${matches ? 'auto' : 'h-[540px]'}`}
      />
    </div>

  )
}

export default DifferentFontSrc
