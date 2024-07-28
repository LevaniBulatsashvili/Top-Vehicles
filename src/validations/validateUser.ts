function validateEmail(email: string) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function validatePassword(password: string) {
  return password.length >= 6;
}

export default function validateUser(
  email: string,
  password: string,
  confirm: string
) {
  const errors: string[] = [];
  if (!validatePassword(password))
    errors.push("Password must be at least 6 characters long");
  if (password !== confirm) errors.push("Passwords don't match");
  if (!validateEmail(email)) errors.push("Email is invalid.");

  return errors;
}
