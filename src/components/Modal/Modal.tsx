import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const Modal = ({ children }: { children?: React.ReactNode }) => {
  const { isLoading } = useSelector((state: RootState) => state.network);

  return createPortal(
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.modal}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal")!
  );
};

export default Modal;
