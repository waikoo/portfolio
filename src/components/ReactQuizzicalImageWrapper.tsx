import { useState } from 'react'
import WithMagnifyingGlass from './WithMagnifyingGlass.tsx'
import ReactIconX from './ReactIconX.tsx'

type Props = {
  invertIcon: boolean
  children: React.ReactNode
  className?: string
}

const ReactQuizzicalImageWrapper = ({ invertIcon, children, className }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const modalStyle = showModal ? 'grid' : 'hidden'

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className={className}>
      <WithMagnifyingGlass invert={invertIcon}>
        <div onClick={() => setShowModal(!showModal)} className="mx-auto">
          {children}
        </div>
      </WithMagnifyingGlass>

      <div className={`${modalStyle} fixed inset-0 mx-auto bg-black/75 backdrop-blur-sm w-auto h-screen place-items-center z-[9999999]`} onClick={closeModal}>
        <ReactIconX closeModal={closeModal} iconColor="#fff" />
        {children}
      </div>
    </div>
  )
}

export default ReactQuizzicalImageWrapper
