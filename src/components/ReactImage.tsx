import { useContext } from "react"
import { ModalContext } from "../ModalContext"

type Props = {
  src: string
  alt: string
  className?: string
}

const ReactImage = ({ src, alt, className }: Props) => {
  const { showModal } = useContext(ModalContext)
  const stylesOnShow = showModal ? 'h-auto w-auto max-h-[90%] max-w-[90%]' : 'max-w-full'

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
        className={`xl:cursor-pointer block mx-auto ${stylesOnShow} ${className}`}
      />
    </picture>
  )
}

export default ReactImage
