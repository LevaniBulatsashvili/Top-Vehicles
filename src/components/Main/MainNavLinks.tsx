import styles from "../../styles/Main/MainNavLinks.module.scss";
import { useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../store/hooks";
import Profile from "./Profile";
import Button from "../UI/Button";
import { setUser } from "../../store/userSlice";
import type ScreenWidth from "../../types/Shared/ScreenWidth";

export default function MainNavLinks({ width }: ScreenWidth) {
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useStoreSelector((state) => state.user.user) !== undefined;

  function handleChangeLanguage() {
    // TODO
  }

  function handleAuth() {
    if (isLoggedIn) dispatch(setUser(undefined));
    else navigate("/auth?type=login");
  }

  return (
    <ul id={styles["main-nav-links"]}>
      <li hidden={isLoggedIn}>
        <Button onClick={handleChangeLanguage}>
          <span>Lang</span>
        </Button>
      </li>

      <li>
        {isLoggedIn ? (
          width > 720 ? (
            <Profile />
          ) : (
            <Button onClick={handleAuth}>
              <span>Logout</span>
            </Button>
          )
        ) : (
          <Button onClick={handleAuth}>
            <span>Sign In</span>
          </Button>
        )}
      </li>
    </ul>
  );
}
