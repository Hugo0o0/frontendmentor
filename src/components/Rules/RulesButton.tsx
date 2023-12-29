import { useDispatch } from "react-redux";
import styles from "./Rules.module.css";
import { toggleModal } from "~/state/modal/modal-slice";

const RulesButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={dispatch.bind(null, toggleModal())}
      className={styles["rules-button"]}
    >
      Rules
    </button>
  );
};

export default RulesButton;
