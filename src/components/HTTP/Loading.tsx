import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div id={styles["loading"]}>
      <h1>Loading</h1>
      <div className={styles["loader"]}></div>
    </div>
  );
}
