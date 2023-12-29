import { GestureIcon } from "~/utils/enum/GestureIcon";
import { Lizard, Paper, Rock, Scissors, Spock } from "~/components/Icons";

export const getIconByName = (name: keyof typeof GestureIcon) => {
  if (!name) throw new Error("Name is required");

  switch (name) {
    case "rock":
      return <Rock />;
    case "paper":
      return <Paper />;
    case "lizard":
      return <Lizard />;
    case "scissors":
      return <Scissors />;
    case "spock":
      return <Spock />;
  }
};
