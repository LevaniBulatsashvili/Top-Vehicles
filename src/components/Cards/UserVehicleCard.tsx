import styles from "../../styles/Cards/userVehicleCard.module.scss";
import img from "../../assets/placeholder.png";
import type Vehicle from "../../types/Shared/Vehicle";
import { useStoreDispatch } from "../../store/hooks";
import { deleteVehicle as httpDeleteVehicle } from "../../http/vehicles";
import { deleteVehicle } from "../../store/vehicleSlice";
import { useTranslation } from "react-i18next";
import Button from "../UI/Button";

export default function UserVehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { t } = useTranslation();
  const dispatch = useStoreDispatch();

  // TODO UPDATE DELETE
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
