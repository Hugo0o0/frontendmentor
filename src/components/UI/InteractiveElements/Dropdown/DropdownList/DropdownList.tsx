import React from "react";
import List from "./DropdownList.styles";
import DropdownItem from "../DropdownItem/DropdownItem";
import useDropdown from "../utils/useDropdown";
import { AnimatePresence, motion } from "framer-motion";

interface DropdownListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

const DropdownList = ({ children }: DropdownListProps) => {
  const { isOpen } = useDropdown();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          layout
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
        >
          <List>{children}</List>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

DropdownList.DropdownItem = DropdownItem;

export default DropdownList;
