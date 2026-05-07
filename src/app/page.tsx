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
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
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
              <h2 className="text-6xl font-serif leading-[1.1]">
                A Pursuit of <br />
                <span className="italic gold-gradient">Perfection</span>
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-xl">
                Founded on the belief that a car is more than just transportation—it is a piece of art. At Luxe Auto Gallery, we don't just sell vehicles; we facilitate the acquisition of a legacy. Each car in our collection is hand-selected for its rarity, condition, and soul.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-4xl font-serif gold-gradient mb-2">25+</h4>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Years of Excellence</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif gold-gradient mb-2">1k+</h4>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Collectors Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedInventory />

      {/* CTA Section */}
      <section className="py-60 relative overflow-hidden bg-white text-black">
        <div className="container mx-auto px-8 text-center relative z-10">
          <span className="text-premium text-black/40 mb-10 block">Ready to Begin?</span>
          <h2 className="text-7xl md:text-9xl font-serif mb-20">
            Start Your <br />
            <span className="italic">Acquisition</span>
          </h2>
          <Link 
            href="/inventory" 
            className="inline-flex items-center gap-6 bg-black text-white px-16 py-8 text-xs tracking-[0.5em] uppercase font-bold hover:bg-luxury-gold transition-all group"
          >
            Enter Showroom
            <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
        
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black text-black/[0.03] select-none pointer-events-none uppercase">
          LUXE
        </div>
      </section>
    </main>
  );
}
