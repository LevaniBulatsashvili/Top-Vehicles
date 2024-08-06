import styles from "../styles/SHARED/Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../store/hooks";
import { setUser } from "../store/userSlice";
import Button from "./UI/Button";
import SearchBar from "./UI/SearchBar";
import Profile from "./Profile";

export default function Header() {
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const user = useStoreSelector((state) => state.user.user);

  function handleChangeLanguage() {
    // TODO
  }

  function handleAuth() {
    if (user) dispatch(setUser(undefined));
    else navigate("/auth?type=login");
  }

  return (
    <header id={styles["header"]}>
      <Button to="/">
        <h1>TopVehicle</h1>
      </Button>

      <nav>
        <SearchBar />
        <ul>
          <li>
            <Button onClick={handleChangeLanguage}>
              <span>EN</span>
            </Button>
          </li>
          <li>
            {user ? (
              <Profile handleLogout={handleAuth} />
            ) : (
              <Button onClick={handleAuth}>
                <span>Sign In</span>
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
