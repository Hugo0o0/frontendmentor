import ModalBody from "../ModalBody/ModalBody";
import styles from "./ModalContent.module.css";
import ModalHead from "../ModalHead/ModalHead";
import ModalFooter from "../ModalFooter/ModalFooter";

const ModalContent = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["modal-content"]}>{children}</div>;
};

export default ModalContent;

ModalContent.Body = ModalBody;
ModalContent.Head = ModalHead;
ModalContent.Footer = ModalFooter;
