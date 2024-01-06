import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store/store";
import { setModal } from "~/store/ui/ui-slice";

const useModal = () => {
  const { isModalOpen } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  return { isModalOpen, dispatch, setModal };
};

export default useModal;
