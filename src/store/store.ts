import { configureStore } from "@reduxjs/toolkit";
import { vehicleSlice } from "./vehicleSlice";

export const store = configureStore({
  reducer: {
    vehicle: vehicleSlice.reducer,
  },
});
