import styles from "./Pentagon.module.css";
import { motion } from "framer-motion";
import renderPentagonGestures from "./pentagon-gestures-config";

const Pentagon = () => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      className={styles["pentagon-container"]}
    >
      {renderPentagonGestures(styles)}

      <div className={styles["pentagon"]} />
    </motion.div>
  );
};

export default Pentagon;
