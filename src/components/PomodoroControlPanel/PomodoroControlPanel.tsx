import styles from "./PomodoroControlPanel.module.css";
import Button from "~/components/Button/Button.tsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CurrentTimerType,
  changeActiveTimer,
  resetTimers,
} from "~/store/timer/timer-slice";
import { RootState } from "~/store/store";

const buttons = [
  {
    displayName: "pomodoro",
    varName: "pomodoro",
  },
  {
    displayName: "short break",
    varName: "shortBreak",
  },
  {
    displayName: "long break",
    varName: "longBreak",
  },
];

const PomodoroControlPanel = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  const dispatch = useDispatch();

  const { isActive } = useSelector((state: RootState) => state.timer);

  const handleClick = (name: CurrentTimerType) => {
    dispatch(changeActiveTimer(name));
    dispatch(resetTimers());
  };

  return (
    <div className={styles["control-panel"]}>
      {buttons.map((btn, index) => (
        <Button
          id={index.toString()}
          active={activeBtn === index}
          onClick={() => {
            if (isActive) {
              alert("You can't change timer while it's running");
              return;
            }
            setActiveBtn(index);
            handleClick(btn.varName as CurrentTimerType);
          }}
          key={index}
          variant={activeBtn !== index ? "text" : "default"}
        >
          {btn.displayName}
        </Button>
      ))}
    </div>
  );
};

export default PomodoroControlPanel;
