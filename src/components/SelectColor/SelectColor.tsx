import classNames from "classnames";
import styles from "./SelectColor.module.css";
import { Correct } from "../Icons";
import useTheme from "~/utils/hooks/useTheme";

const colorButtons = [
  {
    id: 0,
    color: "tomato",
    classNames: classNames(
      styles["select-color__option"],
      styles["select-color__option--tomato"]
    ),
  },
  {
    id: 1,
    color: "cyan",
    classNames: classNames(
      styles["select-color__option"],
      styles["select-color__option--cyan"]
    ),
  },
  {
    id: 2,
    color: "pink",
    classNames: classNames(
      styles["select-color__option"],
      styles["select-color__option--pink"]
    ),
  },
];

const SelectColor = () => {
  const { theme, dispatch, setTheme } = useTheme();

  const handleChangeColorTheme = (theme: number) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className={styles["select-color"]}>
      <h4 className="heading-4">COLOR</h4>

      <div className={styles["select-color__options"]}>
        {colorButtons.map(({ classNames, id }) => (
          <button
            onClick={handleChangeColorTheme.bind(null, id)}
            key={id}
            className={classNames}
          >
            {theme === id && <Correct />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectColor;
