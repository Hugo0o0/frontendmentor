import SuccessIcon from "~/components/Icons/Success";
import styles from "./SuccessCard.module.css";
import Button from "~/components/Button/Button";

const SuccessCard = ({
  setIsSuccess,
  email,
}: {
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles["card__content"]}>
        <SuccessIcon />

        <h1 className={styles["card__heading"]}>Thanks For Subscribing!</h1>

        <p>
          A confirmation email has been sen to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
      </div>

      <Button onClick={() => setIsSuccess(false)}>Dismiss message</Button>
    </div>
  );
};

export default SuccessCard;
