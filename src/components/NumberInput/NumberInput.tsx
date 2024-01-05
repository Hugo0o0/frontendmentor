import { ArrowDown, ArrowUp } from "~/components/Icons";
import styles from "./NumberInput.module.css";

const NumberInput = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles["input-container"]}>
      <input {...props} type="number" className={styles.input} />
      <div className={styles.input__icons}>
        <button>
          <ArrowUp />
        </button>
        <button>
          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
