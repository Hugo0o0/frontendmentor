import useModal from "~/utils/hooks/useModal";
import { Settings as SettingsIcon } from "../Icons";
import styles from "./Settings.module.css";

const Settings = () => {
  const { dispatch, setModal } = useModal();
  return (
    <SettingsIcon
      onClick={() => dispatch(setModal(true))}
      className={styles.settings}
    />
  );
};

export default Settings;
