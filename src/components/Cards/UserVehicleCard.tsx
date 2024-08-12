import styles from "../../styles/Cards/UserVehicleCard.module.scss";
import img from "../../assets/placeholder.png";
import { useStoreDispatch } from "../../store/hooks";
import { deleteVehicle as httpDeleteVehicle } from "../../http/vehicles";
import { deleteVehicle } from "../../store/vehicleSlice";
import { useTranslation } from "react-i18next";
import Button from "../UI/Button";
import type UserVehicleCardProps from "../../types/Cards/UserVehicleCardProps";

export default function UserVehicleCard({ vehicle }: UserVehicleCardProps) {
  const { t } = useTranslation();
  const dispatch = useStoreDispatch();

  function handleDelete(id: number) {
    httpDeleteVehicle(id).then((vehicleId) =>
      dispatch(deleteVehicle(vehicleId))
    );
  }

  return (
    <li className={styles["user-vehicle"]}>
      <img src={img} alt={vehicle.title} />
      <div>
        <div className={styles["vehicle-info"]}>
          <h1>{vehicle.title}</h1>
          <p>{vehicle.description.slice(0, 200)}</p>
        </div>

        <div className={styles["vehicle-control"]}>
          <Button onClick={() => handleDelete(vehicle.id)}>
            {t("Delete")}
          </Button>
          <Button to="/user/vehicle?type=edit" state={vehicle}>
            {t("Edit")}
          </Button>
        </div>
      </div>
    </li>
  );
}
