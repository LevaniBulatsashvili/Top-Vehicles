import styles from "./UserVehicle.module.css";
import { Form, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/UI/Container";
import { FormEvent, useRef, useState } from "react";
import Button from "../components/UI/Button";
import { useStoreDispatch, useStoreSelector } from "../store/hooks";
import type Vehicle from "../types/Vehicle";
import {
  postVehicle as httpPostVehicle,
  updateVehicle as httpUpdateVehicle,
} from "../http/vehicles";
import { addVehicle, updateVehicle } from "../store/vehicleSlice";
import validateVehicle from "../validations/validateVehicle";

export default function UserVehiclePage() {
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
      <Form id={styles["form"]} onSubmit={handleSubmit}>
        <div id={styles["display"]}>
          <h1>{selectedVehicle ? "Edit" : "Post"}</h1>
          <input
            placeholder="Title"
            defaultValue={selectedVehicle?.title}
            ref={titleRef}
          />
          <input
            placeholder="Description"
            defaultValue={selectedVehicle?.description}
            ref={descriptionRef}
          />
          <input
            placeholder="Location"
            defaultValue={selectedVehicle?.loc}
            ref={locRef}
          />
          <input
            placeholder="Price"
            defaultValue={selectedVehicle?.price}
            type="number"
            ref={priceRef}
          />
          <input hidden type="file" accept="image/*" ref={imageRef} />
          <Button type="button" onClick={() => imageRef.current!.click()}>
            Upload File
          </Button>
          {errors.length > 0 && (
            <div>
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </div>

        <div id={styles["control"]}>
          <div>
            <Button to="/user" type="button">
              Cancel
            </Button>
            <Button type="submit" disabled={isFetching}>
              {selectedVehicle ? "Edit" : "Post"}
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
