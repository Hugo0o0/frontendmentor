import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import ModalContent from "./ModalContent/ModalContent";

interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

const Modal = ({ children, isOpen }: ModalProps) => {
  return createPortal(
    <>{isOpen && <div className={styles.modal}>{children}</div>}</>,
    document.getElementById("modal")!
  );
};

Modal.Content = ModalContent;
Modal.Head = ModalContent.Head;
Modal.Body = ModalContent.Body;
Modal.Footer = ModalContent.Footer;

export default Modal;
