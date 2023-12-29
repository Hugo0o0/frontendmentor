import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal/modal-slice";
import gameSlices from "./game/game-slices";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    game: gameSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
