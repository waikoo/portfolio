import WithMagnifyingGlass from './WithMagnifyingGlass.tsx'
import ModalImage from "react-modal-image"

type Props = {
  invertIcon: boolean
  className?: string
  src: string
  imgClassName?: string
}

const ReactImageWrapper = ({ invertIcon, className, src, imgClassName }: Props) => {

  return (
    <div className={className}>
      <WithMagnifyingGlass invert={invertIcon}>
        <ModalImage
          small={`/images/${src}.avif`}
          medium={`/images/${src}.webp`}
          large={`/images/${src}.png`}
          hideDownload={true}
          hideZoom={true}
          className={imgClassName}
        />
      </WithMagnifyingGlass>
    </div>
  )
}

export default ReactImageWrapper
