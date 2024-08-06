import styles from "../../styles/UI/Container.module.scss";
import type Children from "../../types/Children";

export default function Container({ children }: Children) {
  return <section id={styles["container"]}>{children}</section>;
}
