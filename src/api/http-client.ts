import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AdviceSlip {
  id: number;
  advice: string;
}

export const getRandomAdvice = createAsyncThunk(
  "advice/getRandomAdvice",
  async (): Promise<AdviceSlip> => {
    const { data } = await axios.get("https://api.adviceslip.com/advice", {
      signal: new AbortController().signal,
    });
    return data.slip;
  }
);
