import styles from "../../styles/Main/Header.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Button from "../UI/Button";
import MainNav from "./MainNav";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  return (
    <header id={styles["main-header"]}>
      {width > 720 && (
        <Button to="/">
          <h1>{t("TopVehicle")}</h1>
        </Button>
      )}

      <MainNav width={width} />
    </header>
  );
}
