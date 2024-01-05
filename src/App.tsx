import styles from "./App.module.css";
import Logo from "./components/Logo/Logo.tsx";
import PomodoroControlPanel from "~/components/PomodoroControlPanel/PomodoroControlPanel.tsx";
import Timer from "~/components/Timer/Timer.tsx";
import Settings from "~/components/Settings/Settings.tsx";
import Modal from "~/components/Modal/Modal.tsx";

const App = () => {
  return (
    <div className={styles.app}>
      <Modal>asdasd</Modal>
      <Logo />
      <PomodoroControlPanel />
      <Timer />
      <Settings />
    </div>
  );
};

export default App;
