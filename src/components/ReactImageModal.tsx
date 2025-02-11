import ReactIconX from './ReactIconX.tsx'

interface Props {
  children: React.ReactNode
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  showModal: boolean
}

const ReactImageModal = ({ children, showModal, setShowModal }: Props) => {
  if (!showModal) return null
  const modalStyle = showModal ? 'grid' : 'hidden'

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className={`${modalStyle} fixed inset-0 mx-auto bg-black/75 backdrop-blur-xs w-auto h-screen place-items-center z-9999999`} onClick={closeModal}>
      <ReactIconX closeModal={closeModal} iconColor="#fff" />
      {children}
    </div>
  )
}

export default ReactImageModal
