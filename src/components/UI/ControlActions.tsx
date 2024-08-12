import styles from "../../styles/UI/ControlActions.module.scss";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import type ControlActionsProps from "../../types/UI/ControlActionsProps";

export default function ControlActions({
  onCancel,
  disabled,
  submitText,
}: ControlActionsProps) {
  const { t } = useTranslation();

  return (
    <div id={styles["control-actions"]}>
      <Button to={onCancel} type="button">
        {t("Cancel")}
      </Button>
      <Button type="submit" disabled={disabled}>
        {submitText}
      </Button>
    </div>
  );
}
