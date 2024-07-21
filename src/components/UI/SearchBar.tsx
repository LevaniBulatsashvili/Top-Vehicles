import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/search-icon.svg";
import { useRef } from "react";

export default function SearchBar() {
  const searchBar = useRef<HTMLInputElement>(null);

  function onSearch() {
    if (searchBar.current && !searchBar.current.value)
      searchBar.current.focus();
    else if (searchBar.current) {
      // TODO search the database
    }
  }

  return (
    <div id={styles["search-box"]}>
      <input placeholder="Search" ref={searchBar}></input>
      <button onClick={onSearch}>
        <img src={SearchIcon} width={15} alt="search button" />
      </button>
    </div>
  );
}
