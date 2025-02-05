import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 export function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60);
  return `${minutes}`;
}

export const formatAddress = (address?: string): string => {
  if (!address) return "Address not available"; // Handle missing address

  const segments = address.split(",");
  if (segments.length >= 2) {
    return segments.slice(-2).map((s) => s.trim()).join(", ");
  }
  
  return address.trim(); // Ensure trimmed output for single-part addresses
};