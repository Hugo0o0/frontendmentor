import styles from "./ModalBody.module.css";

const ModalBody = ({ children }: { children?: React.ReactNode }) => {
  return <div className={styles["modal-body"]}>{children}</div>;
};

export default ModalBody;
