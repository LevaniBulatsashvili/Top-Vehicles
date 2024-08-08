import { type ComponentPropsWithoutRef } from "react";
import { type LinkProps } from "react-router-dom";
import type Children from "../Shared/Children";

export type NavLinkProps = { to?: string } & Children & LinkProps;
export type ButtonProps = { to?: never } & Children &
  ComponentPropsWithoutRef<"button">;
