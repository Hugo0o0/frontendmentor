import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color, Font } from "~/utils/enums/enums";

const initalState = {
  theme: Color.tomato,
  font: Font.kumbh,
  isModalOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initalState,
  reducers: {
    setTheme(state, action: PayloadAction<Color>) {
      state.theme = action.payload;
    },

    setFont(state, action: PayloadAction<Font>) {
      state.font = action.payload;
    },

    storeChanges(state) {
      localStorage.setItem("theme", state.theme.toString());
      localStorage.setItem("font", state.font.toString());
    },

    setModal(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setFont, setTheme, storeChanges, setModal } = uiSlice.actions;

export default uiSlice.reducer;
