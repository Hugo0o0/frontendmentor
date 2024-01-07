import useTheme from "~/utils/hooks/useTheme";
import styles from "./SelectFont.module.css";

const fontButtons = [
  {
    classNames: `${styles["select-font__option"]}   ${styles["select-font__option--kumbh"]}`,
    id: 0,
  },
  {
    classNames: `${styles["select-font__option"]}  ${styles["select-font__option--roboto"]}`,
    id: 1,
  },
  {
    classNames: `${styles["select-font__option"]}  ${styles["select-font__option--space"]}`,
    id: 2,
  },
];

const SelectFont = () => {
  const { setFont, font, dispatch } = useTheme();

  const activeClassName = styles["select-font__option--active"];

  const handleChangeFont = (font: number) => {
    dispatch(setFont(font));
  };

  return (
    <div className={styles["select-font"]}>
      <h3 className="heading-4">FONT</h3>

      <div className={styles["select-font__options"]}>
        {fontButtons.map(({ classNames, id }) => (
          <button
            onClick={handleChangeFont.bind(null, id)}
            key={classNames}
            className={`${classNames} ${id === font && activeClassName}`}
          >
            Aa
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectFont;
