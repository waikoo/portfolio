import { useState } from 'react'
import WithMagnifyingGlass from './WithMagnifyingGlass.tsx'
import ReactImageModal from './ReactImageModal.tsx'
import { ModalContext } from '../ModalContext.ts'
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
  const setImageModal = (boolean: boolean) => {
    setShowModal(boolean)
  }

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      <div className={className}>
        <WithMagnifyingGlass invert={invertIcon}>
          <div onClick={() => { setImageModal(!showModal) }} className="mx-auto" key={`${"modal-closed"}`}>
            <ReactImage
              src={src}
              alt={alt}
              className={imgClassName}
              showModal={showModal}
            />

          </div>
        </WithMagnifyingGlass>

        {showModal && (

          <div key={`modal-open`}>
            <ReactImageModal>

              <ReactImage
                src={src}
                alt={alt}
                showModal={showModal}
              />

            </ReactImageModal>
          </div>
        )}
      </div>
    </ModalContext.Provider>
  )
}

export default ReactImageWrapper
