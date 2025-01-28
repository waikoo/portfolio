import { useState, cloneElement } from 'react'
import WithMagnifyingGlass from './WithMagnifyingGlass.tsx'
import ReactImageModal from './ReactImageModal.tsx'

interface ReactImageProps {
  showModal: boolean
}

type Props = {
  invertIcon: boolean
  children: React.ReactElement<ReactImageProps>
  className?: string
}

const ReactImageWrapper = ({ invertIcon, children, className }: Props) => {
  const [showModal, setShowModal] = useState(false)

  // const childWithProps = cloneElement(children, { showModal })

  return (
    <div className={className}>
      <WithMagnifyingGlass invert={invertIcon}>
        <div onClick={() => setShowModal(!showModal)} className="mx-auto">
          {children}
        </div>
      </WithMagnifyingGlass>

      <ReactImageModal showModal={showModal} setShowModal={setShowModal}>
        {children}
      </ReactImageModal>
    </div>
  )
}

export default ReactImageWrapper
