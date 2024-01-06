import styles from "./App.module.css";
import Logo from "~/components/Logo/Logo.tsx";
import PomodoroControlPanel from "~/components/PomodoroControlPanel/PomodoroControlPanel.tsx";
import Timer from "~/components/Timer/Timer.tsx";
import Settings from "~/components/Settings/Settings.tsx";
import SettingsModal from "~/components/SettingsModal/SettingsModal.tsx";
import { useEffect } from "react";
import useTheme from "~/utils/hooks/useTheme";

const App = () => {
  const { dispatch, setFont, setTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedFont = localStorage.getItem("font");

    if (storedTheme) {
      dispatch(setTheme(+storedTheme));
    }

    if (storedFont) {
      dispatch(setFont(+storedFont));
    }
  }, []);

  return (
    <div className={styles.app}>
      <SettingsModal />
      <Logo />
      <PomodoroControlPanel />
      <Timer />
      <Settings />
    </div>
  );
};

export default App;
