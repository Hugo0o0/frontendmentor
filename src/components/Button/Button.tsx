import styles from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

const Button = ({ children, active, ...props }: ButtonProps) => {
  const classes = classNames(styles.btn, {
    [styles["btn--active"]]: active,
  });
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
