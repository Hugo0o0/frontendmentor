import { ThemeContext } from "@/components/Context/Theme/ThemeContext";
import { useContext } from "react";

const useTheme = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return { toggle, theme };
};

export default useTheme;
