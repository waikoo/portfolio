import WithMagnifyingGlass from './WithMagnifyingGlass.tsx'
import ModalImage from "react-modal-image"

type Props = {
  invertIcon: boolean
  className?: string
  src: string
  alt: string
  imgClassName?: string
}

const ReactImageWrapper = ({ invertIcon, className, src, alt }: Props) => {

  return (
    <div className={className}>
      <WithMagnifyingGlass invert={invertIcon}>
        <ModalImage
          small={`/images/${src}.avif`}
          medium={`/images/${src}.webp`}
          large={`/images/${src}.png`}
          hideDownload={true}
          hideZoom={true}
          alt={alt}
        />
      </WithMagnifyingGlass>

    </div>
  )
}

export default ReactImageWrapper
