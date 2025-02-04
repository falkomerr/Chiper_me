import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IBM_Plex_Serif } from 'next/font/google';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: '500',
  style: 'italic',
});
