import { useStoreSelector } from "../../store/hooks";
import styles from "../../styles/Misc/UserVehicles.module.scss";
import UserVehicleCard from "../Cards/UserVehicleCard";

export default function UserVehicles() {
  const userId = useStoreSelector((state) => state.user.user!.id);
  const userCars = useStoreSelector((state) => state.vehicle.vehicles).filter(
    (vehicle) => vehicle.user_id === userId
  );

  return (
    <ul id={styles["user-vehicles"]}>
      {userCars.map((vehicle) => (
        <UserVehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </ul>
  );
}
