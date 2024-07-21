import styles from "./Button.module.css";
import { NavLink } from "react-router-dom";
import {
  type ButtonProps,
  type NavLinkProps,
} from "../../types/UI/ButtonProps";

function isNavLink(props: NavLinkProps | ButtonProps): props is NavLinkProps {
  return "to" in props;
}

export default function Button(props: NavLinkProps | ButtonProps) {
  if (isNavLink(props)) {
    return (
      <NavLink className={styles["btn"]} {...props}>
        {props.children}
      </NavLink>
    );
  }

  return (
    <button className={styles["btn"]} {...props}>
      {props.children}
    </button>
  );
}
