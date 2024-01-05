import styles from "./Timer.module.css";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import ProgressBar from "~/components/ProgressBar/ProgressBar.tsx";
import { RootState } from "~/store/store";

const Timer = () => {
  const timer = useSelector((state: RootState) => state.timer);

  return (
    <div className={styles["timer-container"]}>
      <div className={styles.timer}>
        <div className={styles.timer__progress}>
          <ProgressBar value={100} />
        </div>
        <h1 className="heading-1">
          {timer[timer.currentTimer as keyof typeof timer]}:00
        </h1>
        <button>
          <h3 className="heading-3">{timer.isActive ? "PAUSE" : "START"}</h3>
        </button>
      </div>
    </div>
  );
};

export default Timer;
