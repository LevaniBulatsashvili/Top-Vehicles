import styles from "../styles/pages/User.module.scss";
import Container from "../components/UI/Container";
import Button from "../components/UI/Button";
import { useTranslation } from "react-i18next";
import UserVehicles from "../components/Misc/UserVehicles";

export default function UserPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <div id={styles["user"]}>
        <div id={styles["user-header"]}>
          <h2>{t("My Vehicles")}</h2>
          <Button to="/user/vehicle">{t("Post Vehicle")}</Button>
        </div>

        <UserVehicles />
      </div>
    </Container>
  );
}
