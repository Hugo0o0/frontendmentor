import styles from "./Score.module.css";
import useGesture from "~/utils/hooks/useGesture";

const Score = () => {
  const { points } = useGesture();
  return (
    <div className={styles.score}>
      <h5 className={styles["score__text"]}>Score</h5>
      <h1 className={styles["score__point"]}>{points}</h1>
    </div>
  );
};

export default Score;
