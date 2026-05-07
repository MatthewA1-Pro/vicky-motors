"use client";

import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Sir Richard Hamilton",
    role: "Art Collector",
    content: "The level of professionalism and discretion at LUXE is unparalleled. They didn't just find me a car; they secured a piece of automotive history that perfectly complements my collection.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    vehicle: "Rolls-Royce Phantom"
  },
  {
    name: "Dr. Elena Vance",
    role: "Tech Entrepreneur",
    content: "Acquiring my Revuelto through LUXE was a flawless experience. Their deep technical knowledge and transparent communication made the complex process of international sourcing feel effortless.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    vehicle: "Lamborghini Revuelto"
  },
  {
    name: "James Sterling",
    role: "Motorsport Enthusiast",
    content: "I've dealt with many showrooms globally, but none match the curatorial eye of Julian and his team. Every vehicle they present is of the highest possible pedigree.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    vehicle: "Porsche 911 GT3 RS"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <span className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold block">Voice of Experience</span>
          <h1 className="text-5xl md:text-7xl font-serif">Client <span className="italic">Perspectives</span></h1>
          <p className="text-white/40 text-lg font-light leading-relaxed">
            We are honored to serve the world's most discerning collectors and enthusiasts. Their trust is our most valuable asset.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 relative flex flex-col items-center text-center space-y-8 group hover:border-luxury-gold/30 transition-all"
            >
              <Quote size={40} className="text-luxury-gold/20 absolute top-8 left-8" />
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-luxury-gold p-1">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-luxury-gold text-luxury-gold" />)}
              </div>
              <p className="text-white/70 italic leading-relaxed text-lg font-light italic">
                "{t.content}"
              </p>
              <div>
                <h4 className="text-xl font-serif">{t.name}</h4>
                <p className="text-luxury-gold text-[10px] tracking-[0.3em] uppercase mt-1">{t.role}</p>
              </div>
              <div className="pt-8 border-t border-white/5 w-full">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30">Acquired Vehicle</p>
                <p className="text-sm font-medium mt-1">{t.vehicle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Section Placeholder */}
        <section className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif">Cinematic Stories</h2>
              <p className="text-white/40 leading-relaxed font-light text-lg">
                Go beyond the words. Experience the delivery moments and collection stories through our high-production cinematic shorts.
              </p>
              <button className="flex items-center gap-4 text-xs tracking-[0.4em] uppercase font-bold hover:text-luxury-gold transition-colors">
                Watch Deliveries <ArrowRight size={16} />
              </button>
            </div>
            <div className="relative aspect-video bg-zinc-900 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop" 
                alt="Video" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-luxury-gold group-hover:border-transparent transition-all">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-black border-b-[10px] border-b-transparent ml-2" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
