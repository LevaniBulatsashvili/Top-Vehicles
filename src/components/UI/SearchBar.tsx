import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/search-icon.svg";
import { useRef } from "react";
import { searchVehicles } from "../../http/vehicles";
import { useStoreDispatch } from "../../store/hooks";
import { setVehicles } from "../../store/vehicleSlice";

export default function SearchBar() {
  const dispatch = useStoreDispatch();
  const searchBar = useRef<HTMLInputElement>(null);

  function onSearch() {
    if (searchBar.current) {
      searchVehicles(searchBar.current.value).then((vehicles) =>
        dispatch(setVehicles(vehicles))
      );
    }
  }

  return (
    <div id={styles["search-box"]}>
      <input
        onKeyUp={(e) => e.key === "Enter" && onSearch()}
        placeholder="Search"
        ref={searchBar}
      ></input>
      <button onClick={onSearch}>
        <img src={SearchIcon} width={15} alt="search button" />
      </button>
    </div>
  );
}
