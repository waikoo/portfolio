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

  return (
    <div className={className}>
      <WithMagnifyingGlass invert={invertIcon}>
        <div onClick={() => setShowModal(!showModal)}>
          {children}
        </div>
      </WithMagnifyingGlass>

      <div className={`${modalStyle} fixed inset-0 bg-white w-screen h-screen place-items-center z-[9999999] overflow-y-scroll`}>
        <ReactIconX closeModal={() => setShowModal(false)} />
        {children}
      </div>
    </div>
  )
}

export default ReactQuizzicalImageWrapper
