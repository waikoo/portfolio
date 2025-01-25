import { useState } from 'react'
import WithMagnifyingGlass from './WithMagnifyingGlass.tsx'
import ReactQuizzicalImage from './ReactQuizzicalImage.tsx'
import ReactIconX from './ReactIconX.tsx'

type Props = {
  imgName: string
}

const ReactQuizzicalSitemap = ({ imgName }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const showModalStyle = showModal ? 'grid' : 'hidden'

  return (
    <div>
      <WithMagnifyingGlass invert={true}>
        <div onClick={() => setShowModal(!showModal)}>
          <ReactQuizzicalImage src={imgName} />
        </div>
      </WithMagnifyingGlass>

      <div className={`${showModalStyle} fixed inset-0 bg-white w-screen h-screen place-items-center z-[9999999] overflow-y-scroll`}>
        <ReactIconX closeModal={() => setShowModal(false)} />
        <ReactQuizzicalImage src={imgName} />
      </div>
    </div>
  )
}

export default ReactQuizzicalSitemap
