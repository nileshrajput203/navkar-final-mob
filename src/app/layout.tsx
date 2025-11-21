import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Preloader } from '@/components/common/Preloader';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Navkar Living',
  description: 'Crafting Landmarks that Elevate City Skylines',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-body antialiased`}>
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
