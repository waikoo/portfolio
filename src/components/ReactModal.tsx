import { useEffect, useRef } from "react";
import IconX from "./ReactIconX";

interface Props {
  children: React.ReactNode
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  showModal: boolean
  bgColor: string
}

export default function ReactModal({ children, setShowModal, showModal, bgColor }: Props) {
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
      className={`overlay fixed ${bgColor} w-screen h-screen place-items-center z-99999`}
      id="quizzical-state-modal"
    >
      <IconX closeModal={() => setShowModal(false)} iconColor="white" />
      {children}
    </dialog>
  );
}

