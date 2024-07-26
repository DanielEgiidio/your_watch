// RootLayout.tsx
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SelectedProductsProvider } from "@/contexts/SelectedProductsContext";

export const metadata = {
  title: {
    default: "Your Watch",
    template: "%s | Your Watch",
  },
  icons: [
    {
      url: "/watchVintage.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SelectedProductsProvider>
          <Navbar />
          <main id="main-content" className="relative overflow-hidden">
            {children}
          </main>
          <Footer />
        </SelectedProductsProvider>
      </body>
    </html>
  );
}
