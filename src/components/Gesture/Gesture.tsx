import styles from "./Gesture.module.css";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { setUserGesture } from "~/state/game/game-slices";
import { gestures } from "~/utils/functions/get-random-gestures";
import { GestureIcon } from "~/utils/enum/GestureIcon";
import { getIconByName } from "~/utils/functions/get-icon-by-name";

const Gesture = ({ icon }: { icon: keyof typeof GestureIcon }) => {
  const dispatch = useDispatch();

  const className = classnames(
    styles.container,
    styles[`container__icon--${icon.toLowerCase()}`]
  );

  return (
    <div
      onClick={dispatch.bind(null, setUserGesture(gestures[GestureIcon[icon]]))}
      className={className}
    >
      <div className={styles["container__icon"]}>{getIconByName(icon)}</div>
    </div>
  );
};

export default Gesture;
