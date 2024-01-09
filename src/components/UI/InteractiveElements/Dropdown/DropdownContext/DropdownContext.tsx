import { createContext } from "react";

interface DropdownContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

  itemValue?: string;
  setItemValue?: React.Dispatch<React.SetStateAction<string>>;

  onChange?: (value: string) => void;
}

const DropDownContext = createContext<DropdownContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  itemValue: "",
  setItemValue: () => {},
  onChange: () => {},
});

export default DropDownContext;
