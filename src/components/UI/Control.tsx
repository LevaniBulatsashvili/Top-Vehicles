import styles from "../../styles/UI/Control.module.scss";
import type Children from "../../types/Shared/Children";

export default function Control({ children }: Children) {
  return <div id={styles["control"]}>{children}</div>;
}
