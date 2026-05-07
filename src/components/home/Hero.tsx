"use client";

import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import Link from "next/link";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
    title: "Elegance Redefined",
    subtitle: "Experience the Pinnacle of Luxury",
    brand: "Rolls-Royce Phantom",
  },
  {
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
    title: "Raw Performance",
    subtitle: "Beyond the Speed of Light",
    brand: "Lamborghini Revuelto",
  },
  {
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
    title: "Timeless Precision",
    subtitle: "Mastering Every Curve",
    brand: "Porsche 911 GT3 RS",
  }
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="relative w-full h-full"
        >
          <img
            src={heroSlides[0].image}
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-luxury-gold tracking-[0.6em] uppercase text-xs font-bold mb-6 block">
              Luxury Automotive Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[1.1] mb-10"
          >
            The Art of <br />
            <span className="italic gold-gradient tracking-tight">Movement</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/60 text-lg md:text-xl font-light mb-12 max-w-xl leading-relaxed"
          >
            Curating the world's most exclusive collection of prestige automobiles for the most discerning collectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              href="/inventory"
              className="bg-white text-black px-10 py-5 text-sm font-bold tracking-[0.3em] uppercase hover:bg-luxury-gold transition-colors flex items-center group"
            >
              Explore Inventory
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <button className="border border-white/20 hover:border-white px-10 py-5 text-sm font-bold tracking-[0.3em] uppercase flex items-center transition-all group backdrop-blur-sm">
              <Play className="mr-3 fill-white group-hover:fill-luxury-gold group-hover:text-luxury-gold transition-colors" size={16} />
              Watch Film
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 rotate-90 origin-left ml-4">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>

      {/* Social Sidebar */}
      <div className="absolute left-10 bottom-20 hidden lg:flex flex-col gap-8 text-white/40">
        {["IG", "FB", "YT", "TW"].map((social) => (
          <Link key={social} href="#" className="text-[10px] font-bold tracking-widest hover:text-luxury-gold transition-colors">
            {social}
          </Link>
        ))}
      </div>
    </section>
  );
}
