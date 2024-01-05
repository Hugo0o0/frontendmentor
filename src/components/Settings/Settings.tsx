import { Settings as SettingsIcon } from "../Icons";
import { useDispatch } from "react-redux";
import { toggle } from "~/store/ui/ui-slice";

const Settings = () => {
  const dispatch = useDispatch();

  return <SettingsIcon onClick={dispatch.bind(null, toggle())} />;
};

export default Settings;
