import styles from "../../styles/HTTP/NoData.module.scss";

export default function NoData() {
  return (
    <div id={styles["no-data"]}>
      <h1>Couldn't find any results</h1>
    </div>
  );
}
