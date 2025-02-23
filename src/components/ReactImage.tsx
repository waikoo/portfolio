type Props = {
  src: string
  alt: string
  className?: string
  style?: string
  noPointer?: boolean
}

const ReactImage = ({ src, alt, className, style, noPointer }: Props) => {
  const pointerStyle = noPointer ? '' : 'xl:cursor-pointer'

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
        style={{ maxHeight: style }}
        className={`${pointerStyle} block mx-auto ${className}`}
      />
    </picture>
  )
}

export default ReactImage
