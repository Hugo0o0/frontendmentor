import styles from "./Input.module.css";

const Input = ({ ...attrs }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...attrs} className={styles.input} />;
};

export default Input;
