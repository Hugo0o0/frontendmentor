import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...atrributes }: Props) => {
  return (
    <button {...atrributes} className={styles.btn}>
      Play Again
    </button>
  );
};

export default Button;
