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
    addVehicle(state, action: PayloadAction<Vehicle>) {
      state.vehicles.unshift(action.payload);
    },
    updateVehicle(state, action: PayloadAction<Vehicle>) {
      const i = state.vehicles.findIndex(
        (vehicle) => vehicle.id === action.payload.id
      );
      state.vehicles[i] = action.payload;
    },
    deleteVehicle(state, action: PayloadAction<number>) {
      const i = state.vehicles.findIndex(
        (vehicle) => vehicle.id === action.payload
      );
      state.vehicles.splice(i, 1);
    },
  },
});

export const {
  setVehicles,
  setVehicle,
  addVehicle,
  updateVehicle,
  deleteVehicle,
} = vehicleSlice.actions;
