import { useEffect, useState } from "react";
import styles from "./SelectColor.module.css";
import { Correct } from "~/components/Icons";

const SelectColor = () => {
  const [activeColor, setActiveColor] = useState("tomato");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setActiveColor(theme);
    }
  }, []);

  const handleColorChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.getAttribute("name");

    if (!name) return;

    document.documentElement.setAttribute("data-theme", name);
    localStorage.setItem("theme", name);
    setActiveColor(name);
  };

  return (
    <div className={styles["select-color"]}>
      <h4 className="heading-4">COLOR</h4>

      <div className={styles["select-color__colors"]}>
        <button
          name="tomato"
          onClick={handleColorChange}
          className={`${styles["select-color__color"]} ${styles["select-color__color--tomato"]}`}
        >
          {activeColor === "tomato" && <Correct />}
        </button>
        <button
          name="cyan"
          onClick={handleColorChange}
          className={`${styles["select-color__color"]} ${styles["select-color__color--cyan"]}`}
        >
          {activeColor === "cyan" && <Correct />}
        </button>
        <button
          name="pink"
          onClick={handleColorChange}
          className={`${styles["select-color__color"]} ${styles["select-color__color--pink"]}`}
        >
          {activeColor === "pink" && <Correct />}
        </button>
      </div>
    </div>
  );
};

export default SelectColor;
