import styles from "../../styles/HTTP/HttpError.module.scss";
import type Children from "../../types/Shared/Children";

export default function HttpError({ children }: Children) {
  return (
    <div id={styles["error"]}>
      <h1>{children}</h1>
    </div>
  );
}
