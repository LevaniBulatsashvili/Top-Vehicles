import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type VehicleState from "../types/store/VehicleState";

const initialState: VehicleState = {
  // TODO
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    // todo(state, action: PayloadAction<T>) {},
  },
});

export const {} = vehicleSlice.actions;
