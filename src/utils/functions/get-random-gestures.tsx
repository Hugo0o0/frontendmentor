import { Lizard, Paper, Rock, Scissors, Spock } from "~/components/Icons";

export enum Gestures {
  Rock,
  Paper,
  Scissors,
  Spock,
  Lizard,
}

export const gestures = [
  {
    name: "rock",
    icon: <Rock />,
    beats: [Gestures.Scissors, Gestures.Lizard],
    index: 0,
  },
  {
    name: "paper",
    icon: <Paper />,
    beats: [Gestures.Rock, Gestures.Spock],
    index: 1,
  },
  {
    name: "scissors",
    icon: <Scissors />,
    beats: [Gestures.Paper, Gestures.Lizard],
    index: 2,
  },
  {
    name: "spock",
    icon: <Spock />,
    beats: [Gestures.Rock, Gestures.Scissors],
    index: 3,
  },
  {
    name: "lizard",
    icon: <Lizard />,
    beats: [Gestures.Spock, Gestures.Paper],
    index: 4,
  },
];

export const getRandomGestures = () => {
  const randomIndex = Math.floor(Math.random() * gestures.length);
  return gestures[randomIndex];
};
