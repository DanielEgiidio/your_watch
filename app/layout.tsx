

import type { Metadata } from 'next';
import './globals.css'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: {
    default: "Jairo Cap",
    template: "%s | Jairo Cap",
  },

  icons: [
    {
      url: "/icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}