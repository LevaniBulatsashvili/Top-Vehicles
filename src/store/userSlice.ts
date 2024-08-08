import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type UserState from "../types/Store/UserState";
import type User from "../types/Shared/User";

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | undefined>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
