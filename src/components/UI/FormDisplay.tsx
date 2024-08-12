import { useTranslation } from "react-i18next";
import styles from "../../styles/UI/FormDisplay.module.scss";
import type FormDisplayProps from "../../types/UI/FormDisplayProps";

export default function FormDisplay({
  title,
  errors,
  children,
}: FormDisplayProps) {
  const { t } = useTranslation();

  return (
    <div id={styles["form-display"]}>
      <h1>{title}</h1>
      {children}
      {errors.length > 0 && (
        <div className={styles["errors"]}>
          {errors.map((error) => (
            <p key={error}>{t(error)}</p>
          ))}
        </div>
      )}
    </div>
  );
}
