import NumberInput from "../NumberInput/NumberInput";
import styles from "./TimeSettings.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { setTimes } from "~/store/timer/timer-slice";
import { TimesType } from "~/utils/interfaces/interfaces";

interface TimeSettingsControllerType {
  name: keyof TimesType;
  label: string;
}

const timeSettingsControllers: TimeSettingsControllerType[] = [
  {
    name: "pomodoro",
    label: "pomodoro",
  },
  {
    name: "shortBreak",
    label: "short break",
  },
  {
    name: "longBreak",
    label: "long break",
  },
];

const TimeSettings = () => {
  const timer = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();

  const handleTimeSettingsChange = (val?: number, name?: string) => {
    if (!val || !name) return;
    dispatch(
      setTimes({
        ...timer,
        [name]: val,
      })
    );
  };

  return (
    <div className={styles["time-settings"]}>
      <h3 className="heading-4">TIME (MINUTES)</h3>

      <div className={styles["time-settings__controllers"]}>
        {timeSettingsControllers.map((controller) => (
          <div
            key={controller.name}
            className={styles["time-settings__controller"]}
          >
            <label htmlFor={controller.name}>{controller.label}</label>
            <NumberInput
              onchange={handleTimeSettingsChange}
              value={timer[controller.name]}
              name={controller.name}
              id={controller.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSettings;
