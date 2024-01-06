import styles from "./PomodoroControlPanel.module.css";
import Button from "~/components/Button/Button.tsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";

const buttons = ["pomodoro", "short break", "long break"];

const PomodoroControlPanel = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  const { pomodoro } = useSelector((state: RootState) => state.timer);

  console.log(Date.now() - pomodoro);

  return (
    <div className={styles["control-panel"]}>
      {buttons.map((btn, index) => (
        <Button
          id={index.toString()}
          active={activeBtn === index}
          onClick={setActiveBtn.bind(null, index)}
          key={index}
          variant={activeBtn !== index ? "text" : "default"}
        >
          {btn}
        </Button>
      ))}
    </div>
  );
};

export default PomodoroControlPanel;
