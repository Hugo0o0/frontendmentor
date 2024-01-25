import useTheme from "@/utils/hooks/useTheme";
import classNames from "classnames";
import { Button } from "../UI";
import { Eye, EyeSlash } from "../Icons";

interface HideSiderBarProps {
  toggleSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen?: boolean;
}

const HideSiderBar = ({ toggleSidebar, isOpen }: HideSiderBarProps) => {
  const { theme } = useTheme();

  const buttonClasses = classNames(
    "w-[28rem]  fixed bottom-10 flex items-center rounded-l-none gap-6 text-steel-blue",
    {
      "hover:bg-primary-default/10": theme === "light" && isOpen,
      "hover:bg-white": theme === "dark" && isOpen,
      "bg-primary-default": !isOpen,
      "w-[5.6rem]": !isOpen,
    }
  );

  return (
    <Button
      onClick={() => {
        toggleSidebar && toggleSidebar((prevState) => !prevState);
      }}
      size="large"
      variant={isOpen ? "unstyled" : "primary"}
      className={buttonClasses}
    >
      {isOpen ? <EyeSlash /> : <Eye />}
      {isOpen && <span>Hide Sidebar</span>}
    </Button>
  );
};

export default HideSiderBar;
