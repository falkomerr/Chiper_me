import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Pixelify_Sans } from 'next/font/google';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: '700',
});
