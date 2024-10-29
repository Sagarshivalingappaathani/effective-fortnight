"use client"
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });
import { FloatingDockDemo } from './components/helper/ui/dock';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-black">
          {children}
        </main>
      </body>
    </html>
  )
};
