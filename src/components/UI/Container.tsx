import type Children from "../../types/Children";
import styles from "./Container.module.css";

export default function Container({ children }: Children) {
  return <section id={styles["container"]}>{children}</section>;
}
