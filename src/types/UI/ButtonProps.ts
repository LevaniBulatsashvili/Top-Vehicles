import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { type LinkProps } from "react-router-dom";

type BaseProps = {
  children: ReactNode;
};

export type NavLinkProps = { to?: string } & BaseProps & LinkProps;
export type ButtonProps = { to?: never } & BaseProps &
  ComponentPropsWithoutRef<"button">;
