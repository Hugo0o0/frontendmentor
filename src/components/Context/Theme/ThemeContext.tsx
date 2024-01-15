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

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (!localTheme) return;

    setTheme(localTheme as theme);
    document.documentElement.dataset.theme = localTheme;
  }, []);

  const toggle = () => {
    console.log(theme);

    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.dataset.theme = "dark";
      setTheme("dark");
    } else if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.dataset.theme = "light";
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
