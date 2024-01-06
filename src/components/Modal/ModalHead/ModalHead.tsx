import { Close } from "~/components/Icons";
import styles from "./ModalHead.module.css";

interface ModalHeadProps {
  title: string;
  onClose: React.MouseEventHandler<HTMLOrSVGElement>;
}
const ModalHead = ({ title, onClose }: ModalHeadProps) => {
  return (
    <header className={styles["modal__head"]}>
      <h2 className="heading-2">{title}</h2>
      <Close onClick={onClose} className={styles["modal__head-icon"]} />
    </header>
  );
};

export default ModalHead;
