import type UserState from "./UserState";
import type VehicleState from "./VehicleState";

type RootState = {
  vehicle: VehicleState;
  user: UserState;
};

export default RootState;
