import { useContext } from "react";
import DropDownContext from "../DropdownContext/DropdownContext";

const useDropdown = () => {
  const { isOpen, setIsOpen, itemValue, setItemValue, onChange } =
    useContext(DropDownContext);

  return { isOpen, setIsOpen, itemValue, setItemValue, onChange };
};

export default useDropdown;
