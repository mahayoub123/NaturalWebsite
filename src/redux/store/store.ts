import { configureStore } from "@reduxjs/toolkit";
import exploreSlice from "../slice/exploreSlice";
import cardSlice from "../slice/cardSlice";
export const store = configureStore({
  reducer: {
    explore: exploreSlice,
    card: cardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
