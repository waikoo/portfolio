import { useEffect, useState } from 'react'
import WithMagnifyingGlass from './WithMagnifyingGlass.tsx'
import ReactImageModal from './ReactImageModal.tsx'
import ReactImage from './ReactImage.tsx'

type Props = {
  invertIcon: boolean
  className?: string
  src: string
  alt: string
  imgClassName?: string
}

const ReactImageWrapper = ({ invertIcon, className, src, alt, imgClassName }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [longerThanScreen, setLongerThanScreen] = useState(false)

  const setImageModal = (boolean: boolean) => {
    setShowModal(boolean)
  }

  useEffect(() => {
    const temporaryImg = new Image()
    temporaryImg.src = `/images/${src}.png`

    temporaryImg.onload = () => {
      if (temporaryImg.height > window.innerHeight) {
        setLongerThanScreen(true)
      }
    }
  }, [src])

  return (
    <div className={className}>
      <WithMagnifyingGlass invert={invertIcon}>
        <div onClick={() => { setImageModal(!showModal) }} className="mx-auto" key={`${"modal-closed"}`}>
          <ReactImage
            src={src}
            alt={alt}
            className={imgClassName}
          />

        </div>
      </WithMagnifyingGlass>

      {showModal && (

        <div key={`modal-open`}>
          <ReactImageModal setShowModal={() => setShowModal(false)} showModal={showModal}>

            {longerThanScreen ? (
              <ReactImage
                src={src}
                alt={alt}
                className="h-[90vh]"
              />
            ) : (
              <ReactImage
                src={src}
                alt={alt}
              />
            )
            }

          </ReactImageModal>
        </div>
      )}
    </div>
  )
}

export default ReactImageWrapper
