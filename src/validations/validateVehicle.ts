import type ValidateVehicle from "../types/ValidateVehicle";

function validateText(input: string) {
  return 0 < input.length && input.length <= 255;
}

function validateLongText(input: string) {
  // TODO update minimum chars
  return 0 < input.length;
}

function validatePrice(input: number) {
  return 0 < input;
}

export default function validateVehicle({
  title,
  description,
  loc,
  price,
  img,
}: ValidateVehicle) {
  const errors: string[] = [];

  if (!validateText(title)) errors.push("Title is invalid");
  if (!validateLongText(description)) errors.push("Description is invalid");
  if (!validateText(loc)) errors.push("Location is invalid");
  if (!validatePrice(price)) errors.push("Price is invalid");
  if (!validateText(img)) errors.push("Image is invalid");

  return errors;
}
