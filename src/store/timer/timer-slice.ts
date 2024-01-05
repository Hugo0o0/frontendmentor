import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  shortBreak: 5,
  longBreak: 15,
  isActive: false,
  pomodoro: 25,
  currentTimer: "pomodoro",
};

const timerSlice = createSlice({
  name: "timer",
  initialState: initalState,
  reducers: {
    setCurrentTimer(state, action) {
      state.currentTimer = action.payload;
    },
  },
});

export const { setCurrentTimer } = timerSlice.actions;
export default timerSlice.reducer;
