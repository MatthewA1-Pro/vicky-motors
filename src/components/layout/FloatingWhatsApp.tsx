"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "2347025731925";
  const message = encodeURIComponent("Hello, I'm interested in acquiring a vehicle from VICC AUTOS.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} className="group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-luxury-obsidian border border-white/10 text-white text-[10px] tracking-widest uppercase px-4 py-2 rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none backdrop-blur-md">
            Direct Concierge
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
