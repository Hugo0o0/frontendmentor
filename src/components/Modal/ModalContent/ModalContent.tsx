import ModalBody from "../ModalBody/ModalBody";
import styles from "./ModalContent.module.css";
import ModalHead from "../ModalHead/ModalHead";
import ModalFooter from "../ModalFooter/ModalFooter";
import useModal from "~/utils/hooks/useModal";
import { AnimatePresence } from "framer-motion";
import { Slide } from "~/components/Animations";
import { useEffect, useRef } from "react";
import useOutSideClick from "~/utils/hooks/useOutSideClick";
import useKeyPress from "~/utils/hooks/useKeyPress";

const ModalContent = ({ children }: { children: React.ReactNode }) => {
  const { isModalOpen, dispatch, setModal } = useModal();
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    const isRefNull = modalContentRef.current !== null;
    const isOutsideClick =
      isRefNull && !modalContentRef.current.contains(e.target as Node);

    if (isOutsideClick) {
      dispatch(setModal(false));
    }
  };

  useOutSideClick(modalContentRef, handleOutsideClick);

  useKeyPress("Escape", () => dispatch(setModal(false)));

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Slide className={styles["modal-content"]} ref={modalContentRef}>
          {children}
        </Slide>
      )}
    </AnimatePresence>
  );
};

export default ModalContent;

ModalContent.Body = ModalBody;
ModalContent.Head = ModalHead;
ModalContent.Footer = ModalFooter;
