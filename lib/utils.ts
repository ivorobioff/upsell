import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Outcome {
  ok: boolean;
  message: string;
}

export const success = (): Outcome => ({ ok: true, message: '' });
export const fail = (message: string): Outcome => ({ ok: false, message });