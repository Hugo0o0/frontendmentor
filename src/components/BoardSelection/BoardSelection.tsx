import useTheme from "@/utils/hooks/useTheme";
import { Board } from "../Icons";
import { Button, Heading } from "../UI";
import classNames from "classnames";

const BoardSelection = () => {
  const { theme } = useTheme();

  const buttonClasses = classNames(
    " w-[95%] flex items-center rounded-l-none gap-6"
  );

  const unstyledButtonClasses = classNames(
    " bg-transparent text-steel-blue hover:text-primary-default",
    {
      "hover:bg-primary-default/10": theme === "light",
      "hover:bg-white": theme === "dark",
    }
  ).concat(buttonClasses);

  return (
    <div className="flex flex-1 flex-col gap-5 mt-10">
      <Heading className="ml-5" size="sm">
        ALL BOARDS (3)
      </Heading>

      <div>
        <Button size="large" className={buttonClasses}>
          <Board />
          Platform Launch
        </Button>

        <Button
          size="large"
          variant="unstyled"
          className={unstyledButtonClasses}
        >
          <Board />
          Marketing Plan
        </Button>

        <Button
          size="large"
          variant="unstyled"
          className={unstyledButtonClasses}
        >
          <Board />
          Roadmap
        </Button>

        <Button
          size="large"
          variant="unstyled"
          className={unstyledButtonClasses}
        >
          <Board />+ Create New Board
        </Button>
      </div>
    </div>
  );
};

export default BoardSelection;
// "  hover:bg-primary-default/10 hover:text-primary-default"
