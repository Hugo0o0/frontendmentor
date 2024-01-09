import React, { useEffect, useState } from "react";
import { DropdownWrapper } from "./Dropdown.styles";
import DropdownButton from "./DropdownButton/DropdownButton";
import DropdownList from "./DropdownList/DropdownList";
import DropDownContext from "./DropdownContext/DropdownContext";

interface DropdownProps {
  children: React.ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const Dropdown = ({ children, defaultValue, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemValue, setItemValue] = useState("");

  useEffect(() => {
    if (defaultValue && children) {
      setItemValue(defaultValue);
    }
  }, []);

  return (
    <DropDownContext.Provider
      value={{ isOpen, setIsOpen, itemValue, setItemValue, onChange }}
    >
      <DropdownWrapper>{children}</DropdownWrapper>
    </DropDownContext.Provider>
  );
};

Dropdown.Button = DropdownButton;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownList.DropdownItem;

export default Dropdown;
