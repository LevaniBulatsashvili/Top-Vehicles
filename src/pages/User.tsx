import styles from "../styles/pages/User.module.scss";
import Container from "../components/UI/Container";
import img from "../assets/placeholder.png";
import Button from "../components/UI/Button";
import { useStoreDispatch, useStoreSelector } from "../store/hooks";
import { deleteVehicle as httpDeleteVehicle } from "../http/vehicles";
import { deleteVehicle } from "../store/vehicleSlice";
import { useTranslation } from "react-i18next";

export default function UserPage() {
  const { t } = useTranslation();
  const userId = useStoreSelector((state) => state.user.user!.id);
  const userCars = useStoreSelector((state) => state.vehicle.vehicles).filter(
    (vehicle) => vehicle.user_id === userId
  );
  const dispatch = useStoreDispatch();
  // TODO UPDATE DELETE
  function handleDelete(id: number) {
    httpDeleteVehicle(id).then((vehicleId) =>
      dispatch(deleteVehicle(vehicleId))
    );
  }

  return (
    <Container>
      <div id={styles["user"]}>
        <div id={styles["user-header"]}>
          <h2>{t("My Vehicles")}</h2>
          <Button to="/user/vehicle">{t("Post Vehicle")}</Button>
        </div>
        <ul id={styles["user-vehicles"]}>
          {userCars.map((vehicle) => (
            <li key={vehicle.id} className={styles["user-vehicle"]}>
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
          ))}
        </ul>
      </div>
    </Container>
  );
}
