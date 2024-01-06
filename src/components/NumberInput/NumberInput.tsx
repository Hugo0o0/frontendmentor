import { ArrowDown, ArrowUp } from "~/components/Icons";
import styles from "./NumberInput.module.css";
import { useRef } from "react";

interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onchange?: (val?: number, name?: string) => void;
}

const NumberInput = ({ onchange, ...props }: NumberInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value < 0) return onchange && onchange(0);
    onchange && onchange(+e.target.value, e.target.name);
  };

  const handleArrowUp = () => {
    if (inputRef.current) {
      inputRef.current.value = (+inputRef.current.value + 1).toString();
      onchange && onchange(+inputRef.current.value, inputRef.current.name);
    }
  };

  const handleArrowDown = () => {
    if (inputRef.current) {
      inputRef.current.value = (+inputRef.current.value - 1).toString();
      onchange && onchange(+inputRef.current.value, inputRef.current.name);
    }
  };

  return (
    <div className={styles["input-container"]}>
      <input
        ref={inputRef}
        onChange={handleChange}
        {...props}
        type="number"
        className={styles.input}
      />
      <div className={styles.input__icons}>
        <button onClick={handleArrowUp}>
          <ArrowUp />
        </button>
        <button onClick={handleArrowDown}>
          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
