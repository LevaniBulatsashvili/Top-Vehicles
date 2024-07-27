import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type VehicleState from "../types/store/VehicleState";
import type Vehicle from "../types/Vehicle";
import { vehicle } from "./InitialState";

const initialState: VehicleState = {
  vehicles: [],
  vehicle,
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    setVehicles(state, action: PayloadAction<Vehicle[]>) {
      state.vehicles = action.payload;
    },
    setVehicle(state, action: PayloadAction<Vehicle>) {
      state.vehicle = action.payload;
    },
  },
});

export const { setVehicles, setVehicle } = vehicleSlice.actions;
