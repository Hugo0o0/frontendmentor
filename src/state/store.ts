import { configureStore } from "@reduxjs/toolkit";
import networkReducer from "@/state/network/network-slice";

export const store = configureStore({
  reducer: {
    network: networkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
