"use client";

import { motion } from "framer-motion";
import { vehicles } from "@/data/vehicles";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight, Gauge, Zap, Fuel } from "lucide-react";

export default function FeaturedInventory() {
  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 text-[20vw] font-serif font-bold text-white/[0.02] select-none pointer-events-none leading-none -translate-y-1/4 translate-x-1/4">
        SHINOBI
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
            >
              The Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif"
            >
              Featured <span className="italic">Showcase</span>
            </motion.h2>
          </div>
          <Link
            href="/inventory"
            className="group flex items-center space-x-3 text-sm tracking-[0.3em] uppercase hover:text-luxury-gold transition-colors"
          >
            <span>View Full Inventory</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {vehicles.slice(0, 4).map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                
                {/* Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-luxury-black/80 backdrop-blur-md border border-white/10 text-[10px] tracking-[0.2em] uppercase font-bold">
                  {vehicle.category}
                </div>
              </div>

              {/* Info */}
              <div className="pt-12 px-2">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-serif tracking-widest group-hover:text-luxury-gold transition-colors naruto-glow">{vehicle.name}</h3>
                    <p className="text-white/40 text-[11px] tracking-[0.4em] uppercase mt-4">{vehicle.year} &bull; {vehicle.brand}</p>
                  </div>
                  <span className="text-2xl font-bold tracking-widest text-luxury-gold">{formatPrice(vehicle.price)}</span>
                </div>

                <div className="grid grid-cols-3 gap-10 border-t border-white/10 pt-10 mt-10">
                  <div className="flex flex-col gap-2">
                    <Gauge size={16} className="text-luxury-gold" />
                    <span className="text-[10px] tracking-widest uppercase text-white/40">Power</span>
                    <span className="text-sm font-medium">{vehicle.hp} HP</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Zap size={16} className="text-luxury-gold" />
                    <span className="text-[10px] tracking-widest uppercase text-white/40">0-60</span>
                    <span className="text-sm font-medium">{vehicle.acceleration}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Fuel size={16} className="text-luxury-gold" />
                    <span className="text-[10px] tracking-widest uppercase text-white/40">Engine</span>
                    <span className="text-sm font-medium truncate">{vehicle.engine.split(' ')[0]}</span>
                  </div>
                </div>

                <Link
                  href={`/car/${vehicle.id}`}
                  className="mt-8 w-full border border-white/10 py-4 flex items-center justify-center text-xs tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-black transition-all"
                >
                  View Specifications
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
