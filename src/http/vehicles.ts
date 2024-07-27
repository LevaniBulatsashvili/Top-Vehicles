import type Vehicle from "../types/Vehicle";

export async function fetchVehicles() {
  const response = await fetch("http://localhost:5000/vehicles");
  const resData: Vehicle[] = await response.json();

  if (!response.ok) throw new Error("Failed to fetch vehicles");

  return resData;
}

export async function fetchVehicle(id: string) {
  const response = await fetch(`http://localhost:5000/vehicles/${id}`);
  const resData: Vehicle = await response.json();

  if (!response.ok) throw new Error("Failed to fetch the vehicle");

  return resData;
}

export async function searchVehicles(title: string) {
  const response = await fetch("http://localhost:5000/vehicles/search", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ title }),
  });

  const resData: Vehicle[] = await response.json();

  if (!response.ok) throw new Error("Failed to fetch vehicles");

  return resData;
}
