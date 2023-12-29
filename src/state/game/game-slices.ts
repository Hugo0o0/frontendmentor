import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GestureIcon } from "~/utils/enum/GestureIcon";

export interface Gesture {
  name: keyof typeof GestureIcon;
  index: number;
  beats: number[];
}

interface GameState {
  points: number;
  userGesture?: Gesture;
  randomGesture?: Gesture;
}

const initialState: GameState = {
  points: 0,
  userGesture: undefined,
  randomGesture: undefined,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setUserGesture(state, action: PayloadAction<Gesture>) {
      if (!state.randomGesture) {
        state.userGesture = action.payload;
      }
    },
    setRandomGesture(state, action: PayloadAction<Gesture>) {
      state.randomGesture = action.payload;
    },
    resetGestures(state) {
      state.userGesture = undefined;
      state.randomGesture = undefined;
    },
    setPoint(state) {
      if (!state.randomGesture || !state.userGesture) {
        return;
      }
      if (state.randomGesture.index === state.userGesture.index) return;
      if (state.randomGesture?.beats.includes(state.userGesture?.index ?? 0)) {
        state.points = state.points === 0 ? 0 : state.points - 1;
      } else {
        state.points += 1;
      }
    },
  },
});

export const { setUserGesture, setRandomGesture, resetGestures, setPoint } =
  gameSlice.actions;
export default gameSlice.reducer;
