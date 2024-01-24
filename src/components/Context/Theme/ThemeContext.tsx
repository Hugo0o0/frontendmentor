import { createContext, useEffect, useState } from "react";

type theme = "light" | "dark";

interface ThemeContextProps {
  theme: theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggle: () => {},
});

const saveTheme = (theme: theme) => {
  window.localStorage.setItem("theme", theme);
  document.documentElement.dataset.theme = theme;
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (!localTheme) {
      saveTheme("light");
      return;
    }

    if (localTheme === "light" || localTheme === "dark") {
      setTheme(localTheme as theme);
      document.documentElement.dataset.theme = localTheme;
    }
  }, []);

  const toggle = () => {
    if (theme === "light") {
      saveTheme("dark");
      setTheme("dark");
    } else if (theme === "dark") {
      saveTheme("light");
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
