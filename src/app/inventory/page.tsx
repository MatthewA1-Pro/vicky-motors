"use client";

import { useState } from "react";
import { vehicles } from "@/data/vehicles";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { Search, SlidersHorizontal, Grid, List, ArrowUpDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

  const categories = ["All", "Sports", "Luxury", "SUV", "Hypercar", "Electric"];

  const filteredVehicles = vehicles.filter(v => 
    (category === "All" || v.category === category) &&
    (v.name.toLowerCase().includes(search.toLowerCase()) || v.brand.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-20 min-h-screen bg-luxury-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Virtual <span className="italic">Showroom</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/40 max-w-2xl text-lg font-light"
          >
            Explore our meticulously curated collection of world-class automobiles. Each vehicle is a testament to engineering excellence and bespoke luxury.
          </motion.p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-12 border-b border-white/5 pb-8">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH BY MODEL OR BRAND"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-12 py-4 text-xs tracking-[0.2em] focus:outline-none focus:border-luxury-gold transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-6 w-full lg:w-auto">
            <div className="flex bg-white/5 p-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-bold transition-all ${
                    category === cat ? "bg-luxury-gold text-black" : "hover:text-luxury-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 ml-auto">
              <button 
                onClick={() => setViewType("grid")}
                className={`p-2 transition-colors ${viewType === "grid" ? "text-luxury-gold" : "text-white/30 hover:text-white"}`}
              >
                <Grid size={20} />
              </button>
              <button 
                onClick={() => setViewType("list")}
                className={`p-2 transition-colors ${viewType === "list" ? "text-luxury-gold" : "text-white/30 hover:text-white"}`}
              >
                <List size={20} />
              </button>
              <div className="h-6 w-[1px] bg-white/10 mx-2" />
              <button className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-white/60 hover:text-white">
                <ArrowUpDown size={16} />
                Sort By
              </button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30">
            Showing <span className="text-white">{filteredVehicles.length}</span> Results
          </p>
        </div>

        {/* Grid */}
        <div className={viewType === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" : "flex flex-col gap-8"}>
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group bg-luxury-charcoal/30 border border-white/5 overflow-hidden hover:border-white/20 transition-all ${
                  viewType === "list" ? "flex flex-col md:flex-row h-auto md:h-80" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden bg-zinc-900 ${viewType === "list" ? "w-full md:w-[40%] h-64 md:h-full" : "aspect-[16/10]"}`}>
                  <img 
                    src={vehicle.images[0]} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-[9px] tracking-widest uppercase border border-white/10">
                    {vehicle.category}
                  </div>
                </div>

                {/* Info */}
                <div className={`p-10 flex flex-col justify-between ${viewType === "list" ? "flex-1" : ""}`}>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif tracking-wide group-hover:text-luxury-gold transition-colors">{vehicle.name}</h3>
                    </div>
                    <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-10">{vehicle.year} &bull; {vehicle.brand}</p>
                    
                    <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-10">
                      <div>
                        <span className="text-[9px] tracking-[0.4em] uppercase text-white/40 block mb-2">Price</span>
                        <span className="text-base font-medium tracking-wider">{formatPrice(vehicle.price)}</span>
                      </div>
                      <div>
                        <span className="text-[9px] tracking-[0.4em] uppercase text-white/40 block mb-2">Mileage</span>
                        <span className="text-base font-medium tracking-wider">{vehicle.mileage.toLocaleString()} mi</span>
                      </div>
                      <div>
                        <span className="text-[9px] tracking-[0.4em] uppercase text-white/40 block mb-2">HP</span>
                        <span className="text-base font-medium tracking-wider">{vehicle.hp}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <Link 
                      href={`/car/${vehicle.id}`}
                      className="text-[10px] tracking-[0.3em] uppercase font-bold text-luxury-gold hover:text-white transition-colors flex items-center gap-2 group/link"
                    >
                      View Details <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <button className="text-white/30 hover:text-luxury-gold transition-colors">
                      <SlidersHorizontal size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredVehicles.length === 0 && (
          <div className="py-40 text-center">
            <h3 className="text-2xl font-serif mb-4 text-white/40">No vehicles match your search</h3>
            <button 
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="text-luxury-gold uppercase tracking-widest text-xs hover:text-white"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
