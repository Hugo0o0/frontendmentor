import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
  variant?: "default" | "text";
}

const Button = ({ children, active, variant, ...props }: ButtonProps) => {
  const classes = classNames(styles.btn, {
    [styles["btn--active"]]: active,
    [styles["btn-text"]]: variant === "text",
  });
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
