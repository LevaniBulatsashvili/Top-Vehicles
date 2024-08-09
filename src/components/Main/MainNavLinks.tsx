import styles from "../../styles/Main/MainNavLinks.module.scss";
import { useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../../store/hooks";
import Profile from "./Profile";
import Button from "../UI/Button";
import { setUser } from "../../store/userSlice";
import { useTranslation } from "react-i18next";

export default function MainNavLinks() {
  const { t } = useTranslation();
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useStoreSelector((state) => state.user.user) !== undefined;

  function handleAuth() {
    if (isLoggedIn) dispatch(setUser(undefined));
    else navigate("/auth?type=login");
  }

  return (
    <div id={styles["main-nav-links"]}>
      {isLoggedIn ? (
        <Profile />
      ) : (
        <Button onClick={handleAuth}>{t("Sign In")}</Button>
      )}
    </div>
  );
}
