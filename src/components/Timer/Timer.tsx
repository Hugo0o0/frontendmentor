import { useDispatch, useSelector } from "react-redux";
import styles from "./Timer.module.css";
import ProgressBar from "~/components/ProgressBar/ProgressBar.tsx";
import { RootState } from "~/store/store";
import { useEffect, useMemo } from "react";
import { startTimer, toggleActive } from "~/store/timer/timer-slice";

const Timer = () => {
  const { activeTimerMinutes, activeTimerSeconds, isActive, activeTimerTotal } =
    useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        dispatch(startTimer());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isActive]);

  const progressValue =
    ((activeTimerMinutes * 60 + activeTimerSeconds) / (activeTimerTotal * 60)) *
    100;

  return (
    <div className={styles["timer-container"]}>
      <div className={styles.timer}>
        <div className={styles.timer__progress}>
          <ProgressBar value={progressValue} />
        </div>
        <h1 className="heading-1">
          {activeTimerMinutes.toString().padStart(2, "0")}:
          {activeTimerSeconds.toString().padStart(2, "0")}
        </h1>
        <button onClick={dispatch.bind(null, toggleActive())}>
          <h3 className="heading-3">{isActive ? "PAUSE" : "START"}</h3>
        </button>
      </div>
    </div>
  );
};

export default Timer;
