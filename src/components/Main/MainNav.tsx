import styles from "../../styles/Main/MainNav.module.scss";
import MainDropdown from "./MainDropdown";
import MainNavLinks from "./MainNavLinks";
import SearchBar from "./SearchBar";
import type ScreenWidth from "../../types/Shared/ScreenWidth";
import { useStoreSelector } from "../../store/hooks";
import Profile from "./Profile";
import LangDropdown from "./LangDropdown";

export default function MainNav({ width }: ScreenWidth) {
  const isLoggedIn = useStoreSelector((state) => state.user.user) !== undefined;

  return (
    <nav id={styles["main-nav"]}>
      <SearchBar width={width} />
      <LangDropdown />
      {width > 720 ? (
        <MainNavLinks />
      ) : isLoggedIn ? (
        <Profile />
      ) : (
        <MainDropdown />
      )}
    </nav>
  );
}
