import { ChevronDown } from "~/components/Icons";
import Button from "./DropdownButton.styles";
import useDropdown from "../utils/useDropdown";
import { motion } from "framer-motion";

interface DropdownButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const DropdownButton = ({ children }: DropdownButtonProps) => {
  const { setIsOpen, isOpen, itemValue } = useDropdown();

  return (
    <Button onClick={() => setIsOpen((prev) => !prev)}>
      {itemValue ? itemValue : children}

      <motion.span animate={{ rotate: isOpen ? "180deg" : "0deg" }}>
        <ChevronDown />
      </motion.span>
    </Button>
  );
};

export default DropdownButton;
