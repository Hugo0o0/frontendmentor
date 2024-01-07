import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimesType } from "~/utils/interfaces/interfaces";

export type CurrentTimerType = "pomodoro" | "shortBreak" | "longBreak";

interface TimerState {
  shortBreak: number;
  longBreak: number;
  isActive: boolean;
  pomodoro: number;
  activeTimer: CurrentTimerType;
  activeTimerMinutes: number;
  activeTimerSeconds: number;
  activeTimerTotal: number;
}

const initalState: TimerState = {
  shortBreak: 5,
  longBreak: 15,
  isActive: false,
  pomodoro: 25,
  activeTimer: "pomodoro",
  activeTimerMinutes: 25,
  activeTimerSeconds: 0,
  activeTimerTotal: 25,
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

    startTimer(state) {
      if (state.activeTimerMinutes === 0 && state.activeTimerSeconds === 0) {
        state.isActive = false;
        state.activeTimerMinutes = state[state.activeTimer];
        state.activeTimerSeconds = 0;
        return;
      }

      if (state.activeTimerSeconds === 0) {
        state.activeTimerMinutes -= 1;
      }

      state.activeTimerSeconds =
        state.activeTimerSeconds === 0 ? 59 : state.activeTimerSeconds - 1;
    },

    changeActiveTimer(state, action: PayloadAction<CurrentTimerType>) {
      if (state.isActive) return;
      state.activeTimer = action.payload;
      state.activeTimerMinutes = state[action.payload];
      state.activeTimerTotal = state[action.payload];
    },

    toggleActive(state) {
      state.isActive = !state.isActive;
    },

    resetTimers(state) {
      state.activeTimerMinutes = state[state.activeTimer];
      state.activeTimerSeconds = 0;
      state.isActive = false;
    },
  },
});

export const {
  setTimes,
  startTimer,
  toggleActive,
  changeActiveTimer,
  resetTimers,
} = timerSlice.actions;
export default timerSlice.reducer;
