interface Props {
  children: React.ReactNode
  imgSelector: string
  modalSelector: string
  modalClose: string
}

export default function ReactEnlargedPicture({ children, imgSelector, modalSelector, modalClose }: Props) {
  return (

    <dialog
      className="overlay fixed hidden bg-white w-screen h-screen place-items-center"
      id={modalSelector}
    >
      {/* <IconX id={modalClose} /> */}
      <slot />
    </dialog>
  )
}

