import Gesture from "~/components/Gesture/Gesture";
import styles from "./Picked.module.css";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { getRandomGestures } from "~/utils/functions/get-random-gestures";
import { getResult } from "~/utils/functions/get-result";
import useGesture from "~/utils/hooks/useGesture";
import useEffectWithTimeOut from "~/utils/hooks/useEffectWithTimeOut";

const Picked = () => {
  const {
    dispatch,
    userGesture,
    randomGesture,
    setRandomGesture,
    resetGestures,
  } = useGesture();

  useEffectWithTimeOut(
    () => {
      const randomGesture = getRandomGestures();
      dispatch(setRandomGesture(randomGesture));
    },
    3000,
    []
  );

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      className={styles.picked}
    >
      <div className={styles["picked__item"]}>
        <h3>You Picked</h3>
        <Gesture icon={userGesture?.name!} />
      </div>

      <div className={styles["picked__result"]}>
        <h1>{getResult(randomGesture, userGesture)}</h1>
        {randomGesture && (
          <Button onClick={dispatch.bind(this, resetGestures())}>
            PLAY AGAIN
          </Button>
        )}
      </div>

      <div className={styles["picked__item"]}>
        <h3>The House Picked</h3>
        {randomGesture && (
          <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
            <Gesture icon={randomGesture?.name} />
          </motion.div>
        )}
        {!randomGesture && (
          <div className={styles["picked__placeholder"]}></div>
        )}
      </div>
    </motion.div>
  );
};

export default Picked;
