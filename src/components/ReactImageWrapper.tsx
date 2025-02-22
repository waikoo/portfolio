import { useState } from 'react'

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import WithMagnifyingGlass from './WithMagnifyingGlass.tsx'
import ReactImage from "./ReactImage.tsx"

type Props = {
  invertIcon: boolean
  className?: string
  src: string
  alt: string
  imgClassName?: string
  noMagnifyingGlass?: boolean
}

const ReactImageWrapper = ({ invertIcon, className, src, alt, imgClassName, noMagnifyingGlass }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={className} onClick={() => setOpen(true)}>
        {!noMagnifyingGlass ? (
          <WithMagnifyingGlass invert={invertIcon}>
            <ReactImage src={src} alt={alt} className={imgClassName} />
          </WithMagnifyingGlass>
        ) : (
          <ReactImage src={src} alt={alt} className={imgClassName} />
        )}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: `/images/${src}.avif` },
        ]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        className="z-[99999999999999]"
      />
    </>
  )
}

export default ReactImageWrapper
