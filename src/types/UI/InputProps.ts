import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  title: string;
} & ComponentPropsWithoutRef<"input">;

export default InputProps;
