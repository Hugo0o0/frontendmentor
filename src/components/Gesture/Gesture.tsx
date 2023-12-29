import styles from "./Gesture.module.css";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { setUserGesture } from "~/state/game/game-slices";
import { Gestures, gestures } from "~/utils/functions/get-random-gestures";

const Gesture = ({ icon }: { icon: JSX.Element }) => {
  const dispatch = useDispatch();

  const iconName: keyof typeof Gestures = icon?.type?.name || "Rock";

  if (!iconName) throw new Error("Icon is required");

  const className = classnames(
    styles.container,
    styles[`container__icon--${iconName.toLowerCase()}`]
  );

  return (
    <div
      onClick={dispatch.bind(
        null,
        setUserGesture(gestures[Gestures[iconName]])
      )}
      className={className}
    >
      <div className={styles["container__icon"]}>{icon}</div>
    </div>
  );
};

export default Gesture;
