import styles from "./Home.module.css";
import VehicleCard from "../components/VehicleCard";
import vehicleImg from "../assets/placeholder.png";
import Container from "../components/UI/Container";
import { useFetch } from "../hooks/useFetch";
import { fetchVehicles } from "../http/vehicles";
import HttpContainer from "../components/HTTP/HttpContainer";
import { useStoreSelector } from "../store/hooks";

export default function HomePage() {
  const vehicles = useStoreSelector((state) => state.vehicle.vehicles);
  const { isFetching, error } = useFetch(fetchVehicles, "setVehicles");

  return (
    <Container>
      <HttpContainer
        isFetching={isFetching}
        noData={!vehicles.length}
        message={error?.message}
      >
        <div id={styles["home"]}>
          <ul id={styles["vehicle-display"]}>
            {vehicles.map((vehicle) => (
              <li key={vehicle.id}>
                <VehicleCard
                  id={vehicle.id}
                  title={vehicle.title}
                  loc={vehicle.loc}
                  price={vehicle.price}
                  img={vehicleImg}
                />
              </li>
            ))}
          </ul>
        </div>
      </HttpContainer>
    </Container>
  );
}
