import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import ModalContent from "./ModalContent/ModalContent";
import { AnimatePresence } from "framer-motion";
import { Fade } from "~/components/Animations";

interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

const Modal = ({ children, isOpen }: ModalProps) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && <Fade className={styles.modal}>{children}</Fade>}
    </AnimatePresence>,
    document.getElementById("modal")!
  );
};

Modal.Content = ModalContent;
Modal.Head = ModalContent.Head;
Modal.Body = ModalContent.Body;
Modal.Footer = ModalContent.Footer;

export default Modal;
