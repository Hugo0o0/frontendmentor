import { Gesture } from "~/state/game/game-slices";
import { GestureIcon } from "~/utils/enum/GestureIcon";

export const gestures: Gesture[] = [
  {
    name: "rock",
    beats: [GestureIcon.scissors, GestureIcon.lizard],
    index: GestureIcon.rock,
  },
  {
    name: "paper",
    beats: [GestureIcon.rock, GestureIcon.spock],
    index: GestureIcon.paper,
  },
  {
    name: "scissors",
    beats: [GestureIcon.paper, GestureIcon.lizard],
    index: GestureIcon.scissors,
  },
  {
    name: "spock",
    beats: [GestureIcon.rock, GestureIcon.scissors],
    index: GestureIcon.spock,
  },
  {
    name: "lizard",
    beats: [GestureIcon.spock, GestureIcon.paper],
    index: GestureIcon.lizard,
  },
];

export const getRandomGestures = () => {
  const randomIndex = Math.floor(Math.random() * gestures.length);
  return gestures[randomIndex];
};
