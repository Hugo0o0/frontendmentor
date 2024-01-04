import { GestureIcon } from "~/utils/enum/GestureIcon";
import { nanoid } from "nanoid";
import Gesture from "~/components/Gesture/Gesture";

const pentagonGesturesConfig: {
  position: string;
  iconName: keyof typeof GestureIcon;
}[] = [
  {
    position: "top",
    iconName: "scissors",
  },
  {
    position: "top-right",
    iconName: "paper",
  },
  {
    position: "bottom-right",
    iconName: "rock",
  },
  {
    position: "bottom-left",
    iconName: "lizard",
  },

  {
    position: "top-left",
    iconName: "spock",
  },
];

export const renderPentagonGestures = (styles: CSSModuleClasses) => {
  return (
    <>
      {pentagonGesturesConfig.map((config) => {
        return (
          <div
            className={`${styles["pentagon__icon"]} ${
              styles[`pentagon__${config.position}`]
            }`}
            key={nanoid()}
          >
            <Gesture icon={config.iconName} />
          </div>
        );
      })}
    </>
  );
};

export default renderPentagonGestures;
