import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { Close } from "~/components/Icons";
import Divider from "~/components/Divider/Divider.tsx";
import SelectTime from "~/components/SelectTime/SelectTime.tsx";
import SelectFont from "~/components/SelectFont/SelectFont";
import SelectColor from "~/components/SelectColor/SelectColor";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "~/store/ui/ui-slice";
import { RootState } from "~/store/store";
import Button from "~/components/Button/Button";

interface ModalProps {
  children?: React.ReactNode;
  headText?: string;
}
const Modal = ({ headText = "Settings" }: ModalProps) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.ui);
  return createPortal(
    isOpen && (
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <div className={styles["modal__content--head"]}>
            <h2 className="heading-2">{headText}</h2>
            <Close onClick={dispatch.bind(null, toggle())} />
          </div>
          <Divider />

          <SelectTime />
          <Divider />

          <SelectFont />
          <Divider />
          <SelectColor />
        </div>
      </div>
    ),
    document.getElementById("modal")!
  );
};

export default Modal;
