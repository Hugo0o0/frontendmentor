import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimesType } from "~/utils/interfaces/interfaces";

const initalState = {
  shortBreak: 5,
  longBreak: 15,
  isActive: false,
  pomodoro: 25,
};

const timerSlice = createSlice({
  name: "timer",
  initialState: initalState,
  reducers: {
    setTimes(state, action: PayloadAction<TimesType>) {
      state.longBreak = action.payload.longBreak;
      state.pomodoro = action.payload.pomodoro;
      state.shortBreak = action.payload.shortBreak;
    },

    applyTimes(state) {
      localStorage.setItem("pomodoro", state.pomodoro.toString());
      localStorage.setItem("shortBreak", state.shortBreak.toString());
      localStorage.setItem("longBreak", state.longBreak.toString());
    },
  },
});

export const { setTimes, applyTimes } = timerSlice.actions;
export default timerSlice.reducer;
