import styles from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...attributes }: Props) => {
  return (
    <button {...attributes} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
