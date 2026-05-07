"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Menu, X, LayoutDashboard, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Showroom", href: "/inventory" },
  { name: "Heritage", href: "/about" },
  { name: "Experience", href: "/services" },
  { name: "Journal", href: "/blog" },
  { name: "Concierge", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-[100] transition-all duration-700",
      isScrolled ? "bg-luxury-obsidian/90 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-8"
    )}>
      <div className="container mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Back Button */}
          {pathname !== "/" && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => router.back()}
              className="group flex items-center space-x-3 text-[10px] tracking-[0.4em] uppercase font-bold text-white/40 hover:text-luxury-gold transition-colors"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="hidden md:inline">Back</span>
            </motion.button>
          )}

          {/* Logo */}
          <Link href="/" className="group flex flex-col">
          <span className="text-3xl font-serif tracking-[0.3em] font-black uppercase">LUXE</span>
          <span className="text-[8px] tracking-[0.6em] text-luxury-gold uppercase -mt-1 ml-1 font-bold">Auto Gallery</span>
        </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/60 hover:text-luxury-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center space-x-8">
          {user ? (
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/dashboard" className="text-[10px] tracking-[0.3em] uppercase font-bold text-luxury-gold hover:text-white transition-colors flex items-center gap-2">
                <LayoutDashboard size={14} /> Dashboard
              </Link>
              <button onClick={() => signOut()} className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40 hover:text-red-500 transition-colors flex items-center gap-2">
                <LogOut size={14} /> Logout
              </button>
            </div>
          ) : (
            <Link href="/auth/login" className="hidden lg:block border border-white/10 px-8 py-3 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-black transition-all">
              Membership
            </Link>
          )}
          <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-luxury-obsidian z-[200] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <span className="text-2xl font-serif tracking-widest font-black">LUXE</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} className="text-luxury-gold" />
              </button>
            </div>
            <nav className="flex flex-col space-y-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif tracking-[0.1em] uppercase hover:text-luxury-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-white/5 my-10" />
              <Link
                href="/auth/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif tracking-widest uppercase text-luxury-gold"
              >
                Sign In
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
