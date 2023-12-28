import { Input } from "~/components/Input/Input";
import styles from "./Form.module.css";
import Button from "~/components/Button/Button";
import isEmail from "validator/lib/isEmail";
import { useState } from "react";

const Form = ({
  setIsSuccess,
  setEmail: _setEmail,
}: {
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email) return setError("The field is left empty");

    if (!isEmail(email)) {
      return setError("The email address is not formatted correctly");
    }

    setError("");
    setIsSuccess(true);
    _setEmail(email);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles["form__left"]}>
        <div className={styles["form__head"]}>
          <h1 className={styles["form__heading"]}>Stay Updated!</h1>
          <p className={styles["form__paragraph"]}>
            Join 60,000+ products manager receiving monthly updates on:
          </p>

          <ul className={styles["form__list"]}>
            <li>Product discovery and building what matter</li>
            <li>Measuring to ensure updates are a success </li>
            <li>And much more</li>
          </ul>
        </div>

        <div className={styles["form__actions"]}>
          <div className={styles["form__input-group"]}>
            <div className={styles["form__label-group"]}>
              <label htmlFor="email">Email Address</label>
              <label className={styles["form__label-error"]} htmlFor="email">
                {error}
              </label>
            </div>
            <Input
              $error={Boolean(error)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="email@company.com"
            />
          </div>

          <Button>Subscribe to monthly newsletter</Button>
        </div>
      </div>

      <img
        src="/src/assets/images/illustration-sign-up-desktop.svg"
        alt="Illustration sign up desktop"
        className={styles.desktop}
      />

      <img
        src="/src/assets/images/illustration-sign-up-mobile.svg"
        alt="Illustration sign up desktop"
        className={styles.mobile}
        width={"100%"}
      />
    </form>
  );
};

export default Form;
