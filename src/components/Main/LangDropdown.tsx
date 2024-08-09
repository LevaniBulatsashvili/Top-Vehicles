import { useTranslation } from "react-i18next";
import styles from "../../styles/Main/LangDropdown.module.scss";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import useOnOutsideClicked from "../../hooks/useOnOutsideClicked";

export default function LangDropdown() {
  const { t, i18n } = useTranslation();
  const langDropdown = useRef<HTMLDivElement>(null);
  const langControlRef = useRef<HTMLDivElement>(null);
  const [langControl, setLangControl] = useState(false);
  useOnOutsideClicked(langDropdown, () => setLangControl(false));

  function handleChangeLanguage(lan: string) {
    i18n.changeLanguage(lan);
    setLangControl(false);
  }

  const toggleLangControl = () => setLangControl((state) => !state);

  return (
    <div className={styles["lang-dropdown"]} ref={langDropdown}>
      <Button onClick={toggleLangControl}>{t("Lan")}</Button>

      <CSSTransition
        in={langControl}
        nodeRef={langControlRef}
        classNames={{
          enter: styles["lang-control"],
          enterDone: styles["lang-control"],
          exit: styles["lang-control-exitting"],
        }}
        timeout={300}
        unmountOnExit
      >
        <div ref={langControlRef}>
          <Button onClick={() => handleChangeLanguage("en")}>English</Button>
          <Button onClick={() => handleChangeLanguage("ka")}>ქართული</Button>
        </div>
      </CSSTransition>
    </div>
  );
}
