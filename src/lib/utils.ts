import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#FFA500", // Orange
  "#800080", // Purple
  "#008000", // Dark Green
  "#000080"  // Navy Blue
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function ConnectionIdToColor(connectionId: number): string {
 return COLORS[connectionId % COLORS.length]
}
