import { getRandomAdvice } from "@/api/http-client";
import { createSlice } from "@reduxjs/toolkit";

interface Adviceslice {
  adviceNumber: number;
  adviceText: string;
  isLoading: boolean;
}

const initalState: Adviceslice = {
  adviceNumber: 47,
  adviceText:
    "If you need cheering up, try searching online for photos of kittens.",
  isLoading: false,
};

const adviceSlice = createSlice({
  name: "advice",
  initialState: initalState,
  reducers: {
    setAdvice(state, action) {
      state.adviceNumber = action.payload.adviceNumber;
      state.adviceText = action.payload.adviceText;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getRandomAdvice.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getRandomAdvice.fulfilled, (state, action) => {
      state.adviceNumber = action.payload.id;
      state.adviceText = action.payload.advice;
      state.isLoading = false;
    });
  },
});

export default adviceSlice.reducer;
