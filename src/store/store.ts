import { configureStore } from "@reduxjs/toolkit";
import { vehicleSlice } from "./vehicleSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    vehicle: vehicleSlice.reducer,
    user: userSlice.reducer,
  },
});
