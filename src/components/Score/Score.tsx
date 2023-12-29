import { useSelector } from "react-redux";
import styles from "./Score.module.css";
import { RootState } from "~/state/store";

const Score = () => {
  const { points } = useSelector((state: RootState) => state.game);
  return (
    <div className={styles.score}>
      <h5 className={styles["score__text"]}>Score</h5>
      <h1 className={styles["score__point"]}>{points}</h1>
    </div>
  );
};

export default Score;
