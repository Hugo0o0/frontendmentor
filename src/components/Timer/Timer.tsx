import styles from "./Timer.module.css";
import ProgressBar from "~/components/ProgressBar/ProgressBar.tsx";

const Timer = () => {
  return (
    <div className={styles["timer-container"]}>
      <div className={styles.timer}>
        <div className={styles.timer__progress}>
          <ProgressBar value={100} />
        </div>
        <h1 className="heading-1">25:00</h1>
        <button>
          <h3 className="heading-3">START</h3>
        </button>
      </div>
    </div>
  );
};

export default Timer;
