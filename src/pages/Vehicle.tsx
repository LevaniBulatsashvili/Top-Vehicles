import styles from "./Vehicle.module.css";
import { useParams } from "react-router-dom";
import vehicleImg from "../assets/placeholder.png";
import Container from "../components/UI/Container";
import { useFetch } from "../hooks/useFetch";
import { fetchVehicle } from "../http/vehicles";
import HttpContainer from "../components/HTTP/HttpContainer";
import { useStoreSelector } from "../store/hooks";

export default function VehichlePage() {
  const { id } = useParams<{ id: string }>();

  if (id !== undefined && !isNaN(Number(id))) {
    const vehicle = useStoreSelector((state) => state.vehicle.vehicle);
    const { isFetching, error } = useFetch(
      () => fetchVehicle(id),
      "setVehicle"
    );

    return (
      <Container>
        <HttpContainer
          isFetching={isFetching}
          noData={!vehicle.id}
          message={error?.message}
        >
          <div id={styles["vehicle"]}>
            <img src={vehicleImg} alt={vehicle.title} />
            <div id={styles["vehicle-details"]}>
              <h2>{vehicle.title}</h2>
              <p>{vehicle.loc}</p>
              <p>{vehicle.price}$</p>
            </div>
            <p>{vehicle.description}</p>
          </div>
        </HttpContainer>
      </Container>
    );
  }
}
