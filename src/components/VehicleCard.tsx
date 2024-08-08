import styles from "../styles/Shared/VehicleCard.module.scss";
import VehicleCardProps from "../types/Props/VehicleCardProps";
import Button from "./UI/Button";

export default function VehicleCard({
  id,
  title,
  loc,
  price,
  img,
}: VehicleCardProps) {
  return (
    <article className={styles["vehicle-card"]}>
      <Button to={`/vehicle/${id}`}>
        <img src={img} alt={title} />
      </Button>

      <div className={styles["vehicle-info"]}>
        <p>{loc}</p>
        <p>
          <Button to={`/vehicle/${id}`}>{title}</Button>
        </p>
        <h3>{price} $</h3>
      </div>
    </article>
  );
}
