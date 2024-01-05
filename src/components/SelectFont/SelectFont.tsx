import { useEffect, useRef, useState } from "react";
import styles from "./SelectFont.module.css";

const SelectFont = () => {
  const [activeFont, setActiveFont] = useState("kumbh");

  useEffect(() => {
    const font = localStorage.getItem("font");
    if (font) {
      setActiveFont(font);
    }
  }, []);

  const handleFontChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.getAttribute("name");

    if (!name) return;

    document.documentElement.setAttribute("data-font", name);
    setActiveFont(name);
    localStorage.setItem("font", name);
  };

  const isKumbh = activeFont === "kumbh";
  const isRoboto = activeFont === "roboto";
  const isSpace = activeFont === "space";

  return (
    <div className={styles["select-font"]}>
      <h4 className="heading-4">FONT</h4>
      <div className={styles["select-font__fonts"]}>
        <button
          name="kumbh"
          onClick={handleFontChange}
          className={`${styles["select-font__font"]} ${
            isKumbh && styles["select-font__font--active"]
          }`}
        >
          <p>Aa</p>
        </button>

        <button
          name="roboto"
          onClick={handleFontChange}
          className={`${styles["select-font__font"]} ${
            styles["select-font__font--roboto"]
          }  ${isRoboto && styles["select-font__font--active"]}`}
        >
          <p>Aa</p>
        </button>

        <button
          name="space"
          onClick={handleFontChange}
          className={`${styles["select-font__font"]}  ${
            isSpace && styles["select-font__font--active"]
          }`}
        >
          <p>Aa</p>
        </button>
      </div>
    </div>
  );
};

export default SelectFont;
