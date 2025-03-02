import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ShootingStars } from '@/components/stars';
import { StarsBackground } from '@/components/stars-bg';
import { Loader } from '@/components/Loader';
import Cursor from '@/components/Cursor';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'chiper_me',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Cursor />
        <ShootingStars minDelay={100} maxDelay={200} />
        <StarsBackground />
        <Loader />
        {children}
      </body>
    </html>
  );
}
