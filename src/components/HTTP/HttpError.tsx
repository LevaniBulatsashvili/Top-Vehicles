import styles from "./HttpError.module.css";
import { type ReactNode } from "react";

export default function HttpError({ children }: { children: ReactNode }) {
  return (
    <div id={styles["error"]}>
      <h1>{children}</h1>
    </div>
  );
}
