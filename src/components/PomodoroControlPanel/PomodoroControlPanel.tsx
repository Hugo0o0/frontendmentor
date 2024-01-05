import styles from "./PomodoroControlPanel.module.css";
import Button from "~/components/Button/Button.tsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentTimer } from "~/store/timer/timer-slice";

const buttons = [
  {
    displayName: "pomodoro",
    variableName: "pomodoro",
  },
  {
    displayName: "short break",
    variableName: "shortBreak",
  },
  {
    displayName: "long break",
    variableName: "longBreak",
  },
];

const PomodoroControlPanel = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id;

    dispatch(setCurrentTimer(e.currentTarget.name));
    setActiveBtn(parseInt(id));
  };

  return (
    <div className={styles["control-panel"]}>
      {buttons.map((btn, index) => (
        <Button
          name={btn.variableName}
          id={index.toString()}
          active={activeBtn === index}
          onClick={handleClick}
          key={index}
        >
          {btn.displayName}
        </Button>
      ))}
    </div>
  );
};

export default PomodoroControlPanel;
