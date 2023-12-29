import { GestureIcon } from "~/utils/enum/GestureIcon";

const pentagonGesturesConfig: {
  position: string;
  iconName: keyof typeof GestureIcon;
}[] = [
  {
    position: "top",
    iconName: "scissors",
  },
  {
    position: "top-right",
    iconName: "paper",
  },
  {
    position: "bottom-right",
    iconName: "rock",
  },
  {
    position: "bottom-left",
    iconName: "lizard",
  },

  {
    position: "top-left",
    iconName: "spock",
  },
];

export default pentagonGesturesConfig;
