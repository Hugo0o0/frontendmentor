import React from "react";
import Item from "./DropdownItem.styles";
import useDropdown from "../utils/useDropdown";

interface DropdownItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  value?: string;
}

const DropdownItem = ({ children, value }: DropdownItemProps) => {
  if (!value) console.warn("DropdownItem component must have a value prop");

  const { setItemValue, setIsOpen, onChange } = useDropdown();

  return (
    <Item
      onClick={() => {
        if (setItemValue) {
          setItemValue(value ?? "");
          onChange && onChange(value ?? "");
          setIsOpen(false);
        }
      }}
    >
      {children}
    </Item>
  );
};

export default DropdownItem;
