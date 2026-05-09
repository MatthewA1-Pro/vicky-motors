"use client";

import Hero from "@/components/home/Hero";
import FeaturedInventory from "@/components/home/FeaturedInventory";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-luxury-obsidian">
      <Hero />
      
      {/* Brand Story Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-obsidian/20" />
            </div>
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="h-[1px] w-12 bg-luxury-gold" />
                <span className="text-premium text-luxury-gold">The Heritage</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif leading-[1.1]">
                A Pursuit of <br />
                <span className="italic gold-gradient">Perfection</span>
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-xl">
                Founded on the belief that a car is more than just transportation—it is a piece of art. At VICC AUTOS, we don't just sell vehicles; we facilitate the acquisition of a legacy. Each car in our collection is hand-selected for its rarity, condition, and soul.
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-12 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-3xl md:text-4xl font-serif gold-gradient mb-2">25+</h4>
                  <p className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Years of Excellence</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-serif gold-gradient mb-2">1k+</h4>
                  <p className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Collectors Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedInventory />

      {/* CTA Section */}
      <section className="py-40 md:py-60 relative overflow-hidden bg-black text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2500&auto=format&fit=crop" 
            alt="The Acquisition" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-premium text-luxury-gold mb-8 block uppercase tracking-[0.5em] text-[10px] md:text-xs">The Final Step</span>
            <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-serif mb-16 md:mb-24 leading-none">
              Start Your <br />
              <span className="italic gold-gradient">Acquisition</span>
            </h2>
            <Link 
              href="/inventory" 
              className="group relative overflow-hidden inline-flex items-center justify-center gap-6 bg-white text-black px-12 md:px-20 py-6 md:py-10 text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold transition-all hover:bg-luxury-gold hover:text-black"
            >
              <span className="relative z-10">Enter the Showroom</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-4 transition-transform duration-500" />
              <div className="absolute inset-0 bg-luxury-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>
        
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] md:text-[30vw] font-serif font-black text-white/[0.02] select-none pointer-events-none uppercase whitespace-nowrap">
          VICC AUTOS
        </div>
      </section>
    </main>
  );
}
