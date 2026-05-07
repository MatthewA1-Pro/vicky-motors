"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-obsidian">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2500&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-obsidian/80 via-transparent to-luxury-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-obsidian via-transparent to-luxury-obsidian/40" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
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
            className="text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[1] font-serif mb-12"
          >
            Defining the <br />
            <span className="italic gold-gradient">Exceptional</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-10"
          >
            <Link 
              href="/inventory" 
              className="gold-button px-12 py-6 text-xs group flex items-center gap-4"
            >
              Explore Collection
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>

            <button className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxury-gold transition-colors">
                <Play size={20} fill="currentColor" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/60 group-hover:text-white">Watch Film</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <span className="text-[8px] tracking-[0.5em] uppercase text-white/20 vertical-text">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>

      {/* Decorative Text */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 text-[25vw] font-serif font-black text-white/[0.02] select-none pointer-events-none uppercase">
        V2
      </div>
    </section>
  );
}
