import styles from "./Auth.module.css";
import { Form, useNavigate, useSearchParams } from "react-router-dom";
import Container from "../components/UI/Container";
import { FormEvent, useRef, useState } from "react";
import Button from "../components/UI/Button";
import { login, register } from "../http/users";
import { useStoreDispatch } from "../store/hooks";
import { setUser } from "../store/userSlice";
import validateUser from "../validations/validateUser";

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors([]);
    const email = emailRef.current!.value.trim();
    const password = passwordRef.current!.value.trim();
    const confirm = confirmRef.current?.value.trim();

    let user;
    setIsFetching(true);

    if (type === "register") {
      const validationErrors = validateUser(email, password, confirm!);
      if (validationErrors.length) {
        setErrors((prev) => [...prev, ...validationErrors]);
        return setIsFetching(false);
      }
      user = await register(email, password, confirm!);
    } else user = await login(email, password);
    setIsFetching(false);
    if ("message" in user!) return setErrors([user.message]);
    dispatch(setUser(user));
    navigate("/");
  }

  return (
    <Container>
      <Form id={styles["form"]} onSubmit={handleSubmit}>
        <div id={styles["display"]}>
          <h1>{type === "login" ? "Login" : "Register"}</h1>
          <input name="email" placeholder="Email" ref={emailRef} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
          />
          {type === "register" && (
            <input
              type="password"
              name="confirm"
              placeholder="Confirm"
              ref={confirmRef}
            />
          )}
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
            <Button to="/" type="button">
              Cancel
            </Button>
            <Button type="submit" disabled={isFetching}>
              {type === "register" ? "Register" : "Login"}
            </Button>
          </div>
          <Button
            to={`/auth?type=${type === "register" ? "login" : "register"}`}
          >
            {type === "login"
              ? "Create account, Register"
              : "Have an account? Login"}
          </Button>
        </div>
      </Form>
    </Container>
  );
}
