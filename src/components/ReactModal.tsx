import { useEffect, useRef } from "react";
import IconX from "./ReactIconX";

interface Props {
  children: React.ReactNode
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  showModal: boolean
}

export default function ReactModal({ children, setShowModal, showModal }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (showModal) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [showModal]);

  return (
    <dialog
      ref={dialogRef}
      className="overlay fixed bg-white w-screen h-screen place-items-center z-[99999]"
      id="quizzical-state-modal"
    >
      <div onClick={() => setShowModal(false)}>
        <IconX id="close-quizzical-state-modal" />
      </div>
      {children}
    </dialog>
  );
}

