import type Children from "../../types/Children";
import styles from "./HttpError.module.css";

export default function HttpError({ children }: Children) {
  return (
    <div id={styles["error"]}>
      <h1>{children}</h1>
    </div>
  );
}
