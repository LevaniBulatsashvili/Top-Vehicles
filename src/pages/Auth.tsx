import styles from "../styles/pages/Auth.module.scss";
import { Form, useNavigate, useSearchParams } from "react-router-dom";
import Container from "../components/UI/Container";
import { FormEvent, useRef, useState } from "react";
import Button from "../components/UI/Button";
import { login, register } from "../http/users";
import { useStoreDispatch } from "../store/hooks";
import { setUser } from "../store/userSlice";
import validateUser from "../validations/validateUser";
import { useTranslation } from "react-i18next";
import ControlActions from "../components/UI/ControlActions";
import Control from "../components/UI/Control";
import FormDisplay from "../components/UI/FormDisplay";

export default function AuthPage() {
  const { t } = useTranslation();
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

  function switchAuthType() {
    setErrors([]);
    navigate(`/auth?type=${type === "register" ? t("login") : t("register")}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormDisplay
          title={type === "login" ? t("Login") : t("Register")}
          errors={errors}
        >
          <input name="email" placeholder={t("Email")} ref={emailRef} />
          <input
            type="password"
            name="password"
            placeholder={t("Password")}
            ref={passwordRef}
          />
          {type === "register" && (
            <input
              type="password"
              name="confirm"
              placeholder={t("Confirm")}
              ref={confirmRef}
            />
          )}
        </FormDisplay>
        <Control>
          <ControlActions
            onCancel="/"
            disabled={isFetching}
            submitText={type === "register" ? t("Register") : t("Login")}
          />

          <Button id={styles["guide"]} type="button" onClick={switchAuthType}>
            {type === "login"
              ? t("Create account, Register")
              : t("Have an account? Login")}
          </Button>
        </Control>
      </Form>
    </Container>
  );
}
