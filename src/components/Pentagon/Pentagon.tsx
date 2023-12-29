import Gesture from "~/components/Gesture/Gesture";
import styles from "./Pentagon.module.css";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import gestures from "./gestures";

const Pentagon = () => {
  return (
    <motion.div
      key="modal"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      className={styles["pentagon-container"]}
    >
      {gestures.map((gesture) => {
        return (
          <div
            className={`${styles["pentagon__icon"]} ${
              styles[`pentagon__${gesture.position}`]
            }`}
            key={nanoid()}
          >
            <Gesture icon={gesture.icon} />
          </div>
        );
      })}

      <div className={styles["pentagon"]} />
    </motion.div>
  );
};

export default Pentagon;
