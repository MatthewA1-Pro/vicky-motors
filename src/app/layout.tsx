import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MessageSquare } from "lucide-react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VICC AUTOS | Premium Luxury Car Dealership",
  description: "Experience the pinnacle of luxury automotive excellence. Discover an exclusive collection of the world's most prestigious vehicles including Rolls-Royce, Lamborghini, and Porsche.",
  keywords: ["luxury cars", "prestige automobiles", "exotic cars", "hypercars", "dealership", "Rolls-Royce", "Lamborghini", "Porsche"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-luxury-black text-white font-sans selection:bg-luxury-gold selection:text-black">
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          
          {/* Floating WhatsApp Button */}
          <FloatingWhatsApp />
          <Toaster 
            position="top-center"
            toastOptions={{
              style: {
                background: '#18181b',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '10px',
              },
              success: {
                iconTheme: {
                  primary: '#cfb53b',
                  secondary: '#18181b',
                },
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
