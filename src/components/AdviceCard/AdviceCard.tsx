import { Dice } from "@/Icons";
import styles from "./AdviceCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getRandomAdvice } from "@/api/http-client";
import { motion } from "framer-motion";

const AdviceCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { adviceNumber, adviceText } = useSelector(
    (state: RootState) => state.advice
  );

  const handleGetAdvice = () => {
    dispatch(getRandomAdvice());
  };

  return (
    <div className={styles.card}>
      <motion.h5
        key={adviceNumber}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.card__head}
      >
        Advice #{adviceNumber}{" "}
      </motion.h5>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={adviceText}
        className={styles.card__content}
      >
        {adviceText}
      </motion.h2>

      <div className={styles.card__divider}></div>

      <button
        onClick={handleGetAdvice}
        type="button"
        className={styles.card__action}
      >
        <Dice />
      </button>
    </div>
  );
};

export default AdviceCard;
