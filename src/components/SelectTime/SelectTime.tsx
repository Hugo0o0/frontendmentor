import styles from "./SelectTime.module.css";
import InputGroup from "~/components/InputGroup/InputGroup";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";

const SelectTime = () => {
  const { pomodoro, longBreak, shortBreak } = useSelector(
    (state: RootState) => state.timer
  );

  return (
    <div className={styles.select}>
      <h4 className="heading-4">TIME (MINUTES)</h4>

      <div className={styles.test}>
        <InputGroup value={pomodoro} label="pomodoro" />
        <InputGroup value={shortBreak} label="short break" />
        <InputGroup value={longBreak} label="long break" />
      </div>
    </div>
  );
};

export default SelectTime;
