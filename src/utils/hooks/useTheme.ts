import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { setTheme, setFont, storeChanges } from "~/store/ui/ui-slice";

const useTheme = () => {
  const dispatch = useDispatch();

  const { font, theme } = useSelector((state: RootState) => state.ui);

  return { font, theme, dispatch, setTheme, setFont, storeChanges };
};

export default useTheme;
