import { useSelector } from "react-redux";
import styles from "./IpInfo.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { RootState } from "@/state/store";

const IpInfo = () => {
  const network = useSelector((state: RootState) => state.network);

  return (
    <AnimatePresence>
      {network.ip && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.ipinfo}
        >
          <div className={styles.ipinfo__detail}>
            <h5 className={styles["ipinfo__detail--title"]}>Ip Address</h5>
            <h1 className={styles["ipinfo__detail--info"]}>{network.ip}</h1>
          </div>

          <div className={styles.ipinfo__detail}>
            <h5 className={styles["ipinfo__detail--title"]}>Location</h5>
            <h1 className={styles["ipinfo__detail--info"]}>
              {network.location}
            </h1>
          </div>

          <div className={styles.ipinfo__detail}>
            <h5 className={styles["ipinfo__detail--title"]}>Timezone</h5>
            <h1 className={styles["ipinfo__detail--info"]}>
              {network.timezone}
            </h1>
          </div>

          <div className={styles.ipinfo__detail}>
            <h5 className={styles["ipinfo__detail--title"]}>ISP</h5>
            <h1 className={styles["ipinfo__detail--info"]}>{network.isp}</h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IpInfo;
