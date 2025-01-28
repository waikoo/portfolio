type Props = {
  src: string
  alt: string
  className?: string
}

const ReactImage = ({ src, alt, className }: Props) => {

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
        className={`xl:cursor-pointer block mx-auto ${className}`}
      />
    </picture>
  )
}

export default ReactImage
