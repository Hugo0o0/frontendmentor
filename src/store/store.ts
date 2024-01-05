import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/ui-slice";
import timerReducer from "./timer/timer-slice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
