import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MessageSquare } from "lucide-react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";

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
  title: "LUXE Auto Gallery | Premium Luxury Car Dealership",
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
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-10 right-10 z-40 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          >
            <MessageSquare className="w-6 h-6 text-white" />
          </a>
        </AuthProvider>
      </body>
    </html>
  );
}
