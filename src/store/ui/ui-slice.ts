import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  isOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initalState,
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = uiSlice.actions;

export default uiSlice.reducer;
