import { Modal } from "~/components/Modal/";
import TimeSettings from "~/components/TimeSettings/TimeSettings";
import SelectFont from "~/components/SelectFont/SelectFont";
import SelectColor from "~/components/SelectColor/SelectColor";
import Button from "~/components/Button/Button";
import styles from "./SettingsModal.module.css";
import useModal from "~/utils/hooks/useModal";
import { storeChanges } from "~/store/ui/ui-slice";
import useTheme from "~/utils/hooks/useTheme";
import { Color, Font } from "~/utils/enums/enums";

const SettingsModal = () => {
  const { isModalOpen, dispatch, setModal } = useModal();
  const { font, theme } = useTheme();

  const handleApply = () => {
    dispatch(storeChanges());

    document.documentElement.style.setProperty(
      "--ff-primary",
      `var(--ff-${Font[font]})`
    );

    document.documentElement.style.setProperty(
      "--clr-primary",
      `var(--clr-${Color[theme]})`
    );

    dispatch(setModal(false));
  };

  return (
    <Modal isOpen={isModalOpen}>
      <Modal.Content>
        <Modal.Head
          onClose={() => dispatch(setModal(false))}
          title="Settings"
        />
        <Modal.Body>
          <TimeSettings />
          <SelectFont />
          <SelectColor />
        </Modal.Body>

        <Modal.Footer>
          <div className={styles["settings-modal-footer"]}>
            <Button onClick={handleApply}>Apply</Button>
          </div>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default SettingsModal;
