"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Menu, X, LayoutDashboard, LogOut, MessageCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

const desktopNavLinks = [
  { name: "Showroom", href: "/inventory" },
  { name: "Heritage", href: "/about" },
  { name: "Experience", href: "/services" },
  { name: "Journal", href: "/blog" },
  { name: "Concierge", href: "/contact" },
];

const mobileNavLinks = [
  { name: "Home", href: "/" },
  { name: "Inventory", href: "/inventory" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-700",
        isScrolled ? "bg-luxury-obsidian/90 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-4 md:py-8"
      )}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
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
              <span className="text-2xl md:text-3xl font-serif tracking-[0.3em] font-black uppercase text-white">VICC</span>
              <span className="text-[7px] md:text-[8px] tracking-[0.6em] text-luxury-gold uppercase -mt-1 ml-1 font-bold">Autos</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-12">
            {desktopNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[10px] tracking-[0.4em] uppercase font-bold transition-colors",
                    isActive ? "text-luxury-gold" : "text-white/60 hover:text-luxury-gold"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-6 md:space-x-8">
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
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-white/80 hover:text-luxury-gold transition-colors p-2">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-[100dvh] w-[85vw] sm:w-[350px] bg-[#0a0a0a] border-l border-white/10 z-[200] flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex flex-col">
                <span className="text-xl font-serif tracking-[0.3em] font-black uppercase text-white">VICC</span>
                <span className="text-[6px] tracking-[0.6em] text-luxury-gold uppercase mt-0 ml-1 font-bold">Autos</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/60 hover:text-luxury-gold transition-colors rounded-full hover:bg-white/5"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col py-8 px-8 space-y-6 flex-1">
              {mobileNavLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group relative flex items-center"
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="active-nav-indicator"
                        className="absolute -left-4 w-1 h-1 rounded-full bg-luxury-gold" 
                      />
                    )}
                    <span className={cn(
                      "text-xl font-serif tracking-[0.15em] uppercase transition-colors duration-300",
                      isActive ? "text-luxury-gold" : "text-white/80 group-hover:text-white"
                    )}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
              
              <div className="h-[1px] w-full bg-white/10 my-4" />
              
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif tracking-[0.1em] uppercase text-white/80 hover:text-white flex items-center gap-3 transition-colors"
                  >
                    <LayoutDashboard size={18} /> Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-lg font-serif tracking-[0.1em] uppercase text-white/40 hover:text-red-500 flex items-center gap-3 transition-colors w-full text-left"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/auth/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-[0.1em] uppercase text-luxury-gold hover:text-white transition-colors"
                >
                  Login / Register
                </Link>
              )}

              <a
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-auto pt-8 flex items-center justify-center gap-3 bg-[#25D366]/10 text-[#25D366] py-4 rounded-xl font-medium tracking-wide hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

