"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
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

  if (!isVisible) return null;

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 group"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-luxury-charcoal border border-white/10 text-white text-[10px] tracking-widest uppercase px-4 py-2 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with Concierge
      </span>
    </motion.a>
  );
}
