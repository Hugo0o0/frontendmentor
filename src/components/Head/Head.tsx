import Score from "~/components/Score/Score";
import styles from "./Head.module.css";
import { nanoid } from "nanoid";

const gestures = ["rock", "paper", "scissors", "lizard", "spock"];

const Head = () => {
  return (
    <div className={styles.head}>
      <div className={styles["head__gestures"]}>
        {gestures.map((gesture) => (
          <h1 key={nanoid()}>{gesture.toUpperCase()}</h1>
        ))}
      </div>
      <Score />
    </div>
  );
};

export default Head;
