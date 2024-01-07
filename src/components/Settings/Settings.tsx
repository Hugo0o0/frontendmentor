import useModal from "~/utils/hooks/useModal";
import { Settings as SettingsIcon } from "../Icons";
import styles from "./Settings.module.css";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";

const Settings = () => {
  const { dispatch, setModal } = useModal();
  const { isActive } = useSelector((state: RootState) => state.timer);
  return (
    <SettingsIcon
      onClick={() => !isActive && dispatch(setModal(true))}
      className={styles.settings}
    />
  );
};

export default Settings;
