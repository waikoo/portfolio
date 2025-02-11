import { useEffect, useRef } from "react"

type Props = {
  src: string
  alt: string
  className?: string
}

const ReactImage = ({ src, alt, className }: Props) => {
  const imgRef = useRef(null)

  useEffect(() => {
    if (!imgRef.current) return
    const img = imgRef.current as HTMLImageElement
    if (img.height > window.innerHeight) {
      img.classList.add('h-[90vh]')
    }
  }, [])

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`/images/${src}.avif`}
      />
      <source
        type="image/webp"
        srcSet={`/images/${src}.webp`}
      />
      <source
        type="image/jpeg"
        srcSet={`/images/${src}.jpg`}
      />
      <img
        src={`/images/${src}.png`}
        alt={alt}
        ref={imgRef}
        className={`xl:cursor-pointer block mx-auto w-[90%] ${className}`}
      />
    </picture>
  )
}

export default ReactImage
