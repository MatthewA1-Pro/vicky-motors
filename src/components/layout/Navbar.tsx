"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User, Heart, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Inventory", href: "/inventory" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6",
        isScrolled ? "bg-luxury-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-2xl font-serif tracking-[0.2em] font-bold uppercase group-hover:text-luxury-gold transition-colors">
              LUXE
            </span>
            <span className="text-[10px] tracking-[0.5em] text-luxury-silver font-sans uppercase -mt-1 ml-1">
              Auto Gallery
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase hover:text-luxury-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <button className="text-white hover:text-luxury-gold transition-colors">
            <Search size={20} />
          </button>
          <Link href="/auth/login" className="text-white hover:text-luxury-gold transition-colors">
            <User size={20} />
          </Link>
          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-luxury-black z-[60] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-serif tracking-widest font-bold">LUXE</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} className="text-luxury-gold" />
              </button>
            </div>
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif tracking-widest uppercase hover:text-luxury-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex space-x-10">
              <div className="flex flex-col">
                <span className="text-luxury-gold text-xs tracking-widest mb-2 uppercase">Inquiries</span>
                <span className="text-xl">+1 (800) LUXE-AUTO</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
