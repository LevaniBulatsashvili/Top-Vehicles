import styles from "../../styles/Main/MainDropdown.module.scss";
import cogIcon from "../../assets/cog-icon.svg";
import { useRef, useState } from "react";
import MainNavLinks from "./MainNavLinks";
import { CSSTransition } from "react-transition-group";
import useOnOutsideClicked from "../../hooks/useOnOutsideClicked";

export default function MainDropdown() {
  const cogRef = useRef<HTMLImageElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  useOnOutsideClicked(cogRef, () => setShowMenu(false));

  function toggleShowMenu() {
    setShowMenu((state) => !state);
  }

  return (
    <div id={styles["main-dropdown"]}>
      <img onClick={toggleShowMenu} src={cogIcon} alt="cog icon" ref={cogRef} />

      <CSSTransition
        nodeRef={nodeRef}
        in={showMenu}
        classNames={{
          enter: styles["dropdown-menu"],
          enterDone: styles["dropdown-menu"],
          exit: styles["dropdown-menu-exitting"],
        }}
        unmountOnExit
        timeout={300}
      >
        <div ref={nodeRef}>
          <MainNavLinks />
        </div>
      </CSSTransition>
    </div>
  );
}
