import styles from "../styles/pages/UserVehicle.module.scss";
import { Form, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/UI/Container";
import { FormEvent, useRef, useState } from "react";
import Button from "../components/UI/Button";
import { useStoreDispatch, useStoreSelector } from "../store/hooks";
import type Vehicle from "../types/Shared/Vehicle";
import {
  postVehicle as httpPostVehicle,
  updateVehicle as httpUpdateVehicle,
} from "../http/vehicles";
import { addVehicle, updateVehicle } from "../store/vehicleSlice";
import validateVehicle from "../validations/validateVehicle";
import { useTranslation } from "react-i18next";
import ControlActions from "../components/UI/ControlActions";
import Control from "../components/UI/Control";
import FormDisplay from "../components/UI/FormDisplay";

export default function UserVehiclePage() {
  const { t } = useTranslation();
  const user_id = useStoreSelector((state) => state.user.user!.id);
  const selectedVehicle: Vehicle | null = useLocation().state;
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();
  const [errors, setErrors] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const locRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors([]);
    const title = titleRef.current!.value.trim();
    const description = descriptionRef.current!.value.trim();
    const loc = locRef.current!.value.trim();
    const price = +priceRef.current!.value;
    const img = "TODO";

    const vehicle = { user_id, title, description, loc, price, img };
    let updatedVehicle: Vehicle;
    setIsFetching(true);
    const validationErrors = validateVehicle(vehicle);

    if (validationErrors.length) {
      setErrors((prev) => [...prev, ...validationErrors]);
      return setIsFetching(false);
    }

    if (selectedVehicle) {
      updatedVehicle = await httpUpdateVehicle(vehicle, selectedVehicle.id);
      dispatch(updateVehicle(updatedVehicle));
    } else {
      updatedVehicle = await httpPostVehicle(vehicle);
      dispatch(addVehicle(updatedVehicle));
    }
    setIsFetching(false);
    // if ("message" in user!) return setErrors([user.message]);
    navigate("/user");
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormDisplay
          title={selectedVehicle ? t("Edit") : t("Post")}
          errors={errors}
        >
          <input
            placeholder={t("Title")}
            defaultValue={selectedVehicle?.title}
            ref={titleRef}
          />
          <input
            placeholder={t("Description")}
            defaultValue={selectedVehicle?.description}
            ref={descriptionRef}
          />
          <input
            placeholder={t("Location")}
            defaultValue={selectedVehicle?.loc}
            ref={locRef}
          />
          <input
            placeholder={t("Price")}
            defaultValue={selectedVehicle?.price}
            type="number"
            ref={priceRef}
          />
          <input hidden type="file" accept="image/*" ref={imageRef} />
          <Button
            id={styles["image-upload"]}
            type="button"
            onClick={() => imageRef.current!.click()}
          >
            {t("Upload File")}
          </Button>
        </FormDisplay>

        <Control>
          <ControlActions
            onCancel="/user"
            disabled={isFetching}
            submitText={selectedVehicle ? t("Edit") : t("Post")}
          />
        </Control>
      </Form>
    </Container>
  );
}
