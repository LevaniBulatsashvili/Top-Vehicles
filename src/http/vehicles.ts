import type HttpVehicleData from "../types/HTTP/HttpVehicleData";
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

export async function postVehicle(vehicle: HttpVehicleData) {
  const response = await fetch("http://localhost:5000/vehicles", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(vehicle),
  });

  const resData: Vehicle = await response.json();

  if (!response.ok) throw new Error("Failed to post vehicle");

  return resData;
}

export async function updateVehicle(
  vehicle: HttpVehicleData,
  vehicleId: number
) {
  const response = await fetch(`http://localhost:5000/vehicles/${vehicleId}`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify(vehicle),
  });

  const resData: Vehicle = await response.json();

  if (!response.ok) throw new Error("Failed to update vehicle");

  return resData;
}

export async function deleteVehicle(id: number) {
  const response = await fetch(`http://localhost:5000/vehicles/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Failed to delete vehicle");

  return id;
}
