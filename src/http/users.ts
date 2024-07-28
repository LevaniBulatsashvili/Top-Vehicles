import type User from "../types/User";

export async function register(
  email: string,
  password: string,
  confirm: string
) {
  if (password === confirm) {
    const response = await fetch("http://localhost:5000/users/register", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const resData: User = await response.json();

    if (!response.ok && response.status !== 422)
      throw new Error("Oops something went wrong please try again.");

    return resData;
  }
}

export async function login(email: string, password: string) {
  const response = await fetch("http://localhost:5000/users/login", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  const resData: User | { message: string } = await response.json();

  if (!response.ok && response.status !== 401 && response.status !== 404)
    throw new Error("Oops something went wrong please try again.");

  return resData;
}
