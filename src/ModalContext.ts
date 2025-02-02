import { createContext } from "react";

export const ModalContext = createContext<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}>({ showModal: false, setShowModal: () => { } });
