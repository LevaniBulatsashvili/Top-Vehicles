import Container from "../components/UI/Container";
import styles from "./User.module.css";
import img from "../assets/placeholder.png";
import Button from "../components/UI/Button";
import { useStoreDispatch } from "../store/hooks";
import { deleteVehicle as httpDeleteVehicle } from "../http/vehicles";
import { deleteVehicle } from "../store/vehicleSlice";

export default function UserPage() {
  const dispatch = useStoreDispatch();
  const userCars = [
    {
      id: 0,
      title: "Mercedes-Benz",
      description:
        "Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg, Germany.[1] Mercedes-Benz AG produces consumer luxury vehicles and light commercial vehicles badged as Mercedes-Benz. From November 2019 onwards, Mercedes-Benz-badged heavy commercial vehicles (trucks and buses) are managed by Daimler Truck, a former part of the Mercedes-Benz Group turned into an independent company in late 2021. In 2018, Mercedes-Benz was the largest brand of premium vehicles in the world, having sold 2.31 million passenger cars.",
      loc: "Berlin",
      price: 49000,
      img: "TODO",
      views: 135,
    },
    {
      id: 0,
      title: "Mercedes-Benz",
      description:
        "Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg, Germany.[1] Mercedes-Benz AG produces consumer luxury vehicles and light commercial vehicles badged as Mercedes-Benz. From November 2019 onwards, Mercedes-Benz-badged heavy commercial vehicles (trucks and buses) are managed by Daimler Truck, a former part of the Mercedes-Benz Group turned into an independent company in late 2021. In 2018, Mercedes-Benz was the largest brand of premium vehicles in the world, having sold 2.31 million passenger cars.",
      loc: "Berlin",
      price: 49000,
      img: "TODO",
      views: 135,
    },
    {
      id: 0,
      title: "Mercedes-Benz",
      description:
        "Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg, Germany.[1] Mercedes-Benz AG produces consumer luxury vehicles and light commercial vehicles badged as Mercedes-Benz. From November 2019 onwards, Mercedes-Benz-badged heavy commercial vehicles (trucks and buses) are managed by Daimler Truck, a former part of the Mercedes-Benz Group turned into an independent company in late 2021. In 2018, Mercedes-Benz was the largest brand of premium vehicles in the world, having sold 2.31 million passenger cars.",
      loc: "Berlin",
      price: 49000,
      img: "TODO",
      views: 135,
    },
    {
      id: 0,
      title: "Mercedes-Benz",
      description:
        "Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg, Germany.[1] Mercedes-Benz AG produces consumer luxury vehicles and light commercial vehicles badged as Mercedes-Benz. From November 2019 onwards, Mercedes-Benz-badged heavy commercial vehicles (trucks and buses) are managed by Daimler Truck, a former part of the Mercedes-Benz Group turned into an independent company in late 2021. In 2018, Mercedes-Benz was the largest brand of premium vehicles in the world, having sold 2.31 million passenger cars.",
      loc: "Berlin",
      price: 49000,
      img: "TODO",
      views: 135,
    },
    {
      id: 0,
      title: "Mercedes-Benz",
      description:
        "Mercedes-Benz commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg, Germany.[1] Mercedes-Benz AG produces consumer luxury vehicles and light commercial vehicles badged as Mercedes-Benz. From November 2019 onwards, Mercedes-Benz-badged heavy commercial vehicles (trucks and buses) are managed by Daimler Truck, a former part of the Mercedes-Benz Group turned into an independent company in late 2021. In 2018, Mercedes-Benz was the largest brand of premium vehicles in the world, having sold 2.31 million passenger cars.",
      loc: "Berlin",
      price: 49000,
      img: "TODO",
      views: 135,
    },
  ];

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
          <h2>My Vehicles</h2>
          <Button to="/user/vehicle">Post Vehicle</Button>
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
                    Delete
                  </Button>
                  <Button to="/user/vehicle?type=edit">Edit</Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
