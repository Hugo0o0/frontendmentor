import Button from "~/components/Button/Button";
import styles from "./ModalFooter.module.css";

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return <footer className={styles["modal-footer"]}>{children}</footer>;
};

export default ModalFooter;
