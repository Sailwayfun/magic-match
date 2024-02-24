import { twMerge } from "tailwind-merge";
import { clsx, type ClassArray } from "clsx";

export const cn = (...classes: ClassArray) => {
  return twMerge(clsx(classes));
};
