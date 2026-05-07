"use client";

import { motion } from "framer-motion";
import { Award, History, Users, MapPin, ShieldCheck, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold mb-6 block"
            >
              Our Heritage
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif mb-10 leading-tight"
            >
              Legacy of <br /> <span className="italic">Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-xl font-light leading-relaxed mb-12"
            >
              Founded in 1999, LUXE Auto Gallery has been the premier destination for the world's most discerning automotive enthusiasts. We specialize in curating an elite collection of prestige vehicles that represent the absolute pinnacle of engineering and design.
            </motion.p>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop" 
                alt="Our Showroom" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 glass p-10 space-y-2 hidden md:block">
              <span className="text-4xl font-serif text-luxury-gold">25+</span>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/60">Years of Luxury Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-luxury-charcoal/30 py-32 border-y border-white/5 mb-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif mb-4">The LUXE Standard</h2>
            <div className="w-20 h-[1px] bg-luxury-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { 
                icon: ShieldCheck, 
                title: "Absolute Integrity", 
                desc: "Every interaction is built on transparency, trust, and uncompromising honesty." 
              },
              { 
                icon: Star, 
                title: "Bespoke Service", 
                desc: "We tailor our concierge approach to fit the unique lifestyle of every individual client." 
              },
              { 
                icon: Award, 
                title: "Quality Perfection", 
                desc: "Only the finest examples of each model make it into our exclusive collection." 
              }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 group hover:border-luxury-gold transition-colors">
                  <value.icon size={32} className="text-luxury-gold group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-serif">{value.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-4xl md:text-6xl font-serif">The <span className="italic">Visionaries</span></h2>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold max-w-xs text-right hidden md:block">
            Our team of specialists shares a deep passion for automotive art.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { name: "Julian Vane", role: "Chief Executive", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
            { name: "Marcus Thorne", role: "Head of Acquisitions", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
            { name: "Elena Rossi", role: "Client Concierge", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" },
            { name: "Alexander Vance", role: "Service Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" }
          ].map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="space-y-6 group"
            >
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div>
                <h4 className="text-xl font-serif">{member.name}</h4>
                <p className="text-luxury-gold text-[10px] tracking-[0.3em] uppercase mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
