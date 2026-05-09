"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import Logo from "../layout/Logo";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-luxury-obsidian pt-24 md:pt-32">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2500&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        
        {/* Waving Flag Backdrop */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 1, 0] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        >
          <img 
            src="/flag.png" 
            alt="Heritage Flag"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-luxury-obsidian/80 via-transparent to-luxury-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-obsidian via-transparent to-luxury-obsidian/40" />
        
        {/* Logo Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-[0.03] pointer-events-none select-none">
          <Logo className="w-full h-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-6 mb-8"
          >
            <span className="h-[1px] w-20 bg-luxury-gold" />
            <span className="text-premium text-luxury-gold">Legacy in Every Detail</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[15vw] md:text-[8vw] lg:text-[7vw] leading-[1] font-serif mb-8 md:mb-12"
          >
            Defining the <br />
            <span className="italic gold-gradient">Exceptional</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-6 md:gap-10 w-full sm:w-auto"
          >
            <Link 
              href="/inventory" 
              className="gold-button px-8 md:px-12 py-5 md:py-6 text-[10px] md:text-xs group flex items-center justify-center gap-4 text-center"
            >
              Explore Collection
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>

            <a 
              href="https://wa.me/2347025731925?text=Hello%2C%20I%20am%20interested%20in%20acquiring%20a%20luxury%20vehicle."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-4 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#25D366] group-hover:bg-[#25D366]/10 transition-all duration-500 text-white group-hover:text-[#25D366] relative overflow-hidden">
                <FaWhatsapp size={20} className="md:w-6 md:h-6 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </div>
              <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-white/60 group-hover:text-white transition-colors">Chat on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 md:gap-6"
      >
        <span className="text-[7px] md:text-[8px] tracking-[0.5em] uppercase text-white/20 vertical-text">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>

      {/* Decorative Text */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 text-[25vw] font-serif font-black text-white/[0.02] select-none pointer-events-none uppercase">
        V2
      </div>
    </section>
  );
}
