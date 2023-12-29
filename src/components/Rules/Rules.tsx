import { createPortal } from "react-dom";
import styles from "./Rules.module.css";
import { Close, Rules as RulesIcon } from "~/components/Icons/index";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/state/store";
import { toggleModal } from "~/state/modal/modal-slice";

const Rules = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const className = classNames(styles.rules, {
    [styles["rules--open"]]: isOpen,
  });
  return createPortal(
    <div className={className}>
      <div className={styles["rules__content"]}>
        <h1>RULES</h1>
        <Close
          className={styles["rules__close"]}
          fill="#cccdd1"
          onClick={dispatch.bind(null, toggleModal())}
        />

        <RulesIcon className={styles["rules__instructions"]} />
      </div>
    </div>,
    document.getElementById("modal")!
  );
};

export default Rules;
