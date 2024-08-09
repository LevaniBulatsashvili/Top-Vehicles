import styles from "../../styles/Main/SearchBar.module.scss";
import SearchIcon from "../../assets/search-icon.svg";
import { useRef } from "react";
import { searchVehicles } from "../../http/vehicles";
import { useStoreDispatch } from "../../store/hooks";
import { setVehicles } from "../../store/vehicleSlice";
import type ScreenWidth from "../../types/Shared/ScreenWidth";
import { useTranslation } from "react-i18next";

export default function SearchBar({ width }: ScreenWidth) {
  const { t } = useTranslation();
  const dispatch = useStoreDispatch();
  const searchBar = useRef<HTMLInputElement>(null!);

  function onSearch() {
    function handleSearch() {
      searchVehicles(searchBar.current.value).then((vehicles) =>
        dispatch(setVehicles(vehicles))
      );

      searchBar.current.value = "";
    }

    if (width > 720) handleSearch();
    else {
      if (
        searchBar.current.offsetWidth < 1 ||
        searchBar.current.clientWidth < 1
      )
        return searchBar.current.focus();
      handleSearch();
    }
  }

  return (
    <div id={styles["search-bar"]}>
      <input
        onKeyUp={(e) => e.key === "Enter" && onSearch()}
        placeholder={t("Search")}
        ref={searchBar}
      ></input>

      <button onClick={onSearch}>
        <img src={SearchIcon} width={21} alt="search button" />
        <p hidden={width > 720 || width < 520}>{t("Search")}</p>
      </button>
    </div>
  );
}
