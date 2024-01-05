import NumberInput from "~/components/NumberInput/NumberInput";
import styles from "./InputGroup.module.css";

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputGroup = ({ label = "LABEL", ...props }: InputGroupProps) => {
  return (
    <div className={styles["input-group"]}>
      <label htmlFor={label}>{label}</label>
      <NumberInput {...props} id={label} />
    </div>
  );
};

export default InputGroup;
