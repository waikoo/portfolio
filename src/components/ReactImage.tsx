import { useContext } from "react"
import { ModalContext } from "../ModalContext"

type Props = {
  src: string
  alt: string
  className?: string
}

const ReactImage = ({ src, alt, className }: Props) => {
  const { showModal } = useContext(ModalContext)
  const onPage = className || 'max-w-full'
  const stylesOnShow = showModal ? 'h-auto w-auto max-h-[90%] max-w-[90%]' : onPage

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
        className={`xl:cursor-pointer block mx-auto ${stylesOnShow}`}
      />
    </picture>
  )
}

export default ReactImage
