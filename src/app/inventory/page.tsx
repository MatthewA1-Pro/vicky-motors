"use client";

import { useState, useEffect } from "react";
import { vehicles } from "@/data/vehicles";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { Search, Grid, List, ChevronRight, Heart, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const { user } = useAuth();
  const router = useRouter();
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  const fetchWishlist = async () => {
    const { data } = await supabase
      .from('wishlist')
      .select('car_id')
      .eq('user_id', user?.id);
    if (data) setWishlistIds(data.map(i => i.car_id));
  };

  const handleWishlist = async (carId: string) => {
    if (!user) {
      router.push('/auth/login');
      return;
    }

    if (wishlistIds.includes(carId)) {
      await supabase
        .from('wishlist')
        .delete()
        .eq('user_id', user.id)
        .eq('car_id', carId);
      setWishlistIds(prev => prev.filter(id => id !== carId));
    } else {
      await supabase
        .from('wishlist')
        .insert({ user_id: user.id, car_id: carId });
      setWishlistIds(prev => [...prev, carId]);
    }
  };

  const categories = ["All", "Sports", "Luxury", "SUV", "Hypercar", "Electric"];

  const filteredVehicles = vehicles.filter(v => 
    (category === "All" || v.category === category) &&
    (v.name.toLowerCase().includes(search.toLowerCase()) || v.brand.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-40 pb-32 min-h-screen bg-luxury-obsidian">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-luxury-gold" />
              <span className="text-premium text-luxury-gold">The Collection</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-9xl font-serif"
            >
              Virtual <span className="italic">Showroom</span>
            </motion.h1>
          </div>
          <p className="text-white/40 max-w-sm text-sm tracking-widest uppercase leading-loose">
            Explore our meticulously curated selection of world-class automobiles.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start lg:items-center justify-between mb-12 md:mb-20 border-y border-white/5 py-6 md:py-10">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH BY MODEL OR BRAND"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 px-16 py-5 text-[10px] tracking-[0.3em] focus:outline-none focus:border-luxury-gold transition-colors font-bold"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 w-full lg:w-auto">
            <nav className="flex gap-6 md:gap-10 overflow-x-auto pb-2 w-full max-w-full lg:pb-0 whitespace-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`text-[10px] tracking-[0.4em] uppercase font-bold transition-all ${
                    category === cat ? "text-luxury-gold" : "text-white/40 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>

            <div className="h-8 w-[1px] bg-white/10 hidden lg:block" />

            <div className="flex items-center gap-6">
              <button 
                onClick={() => setViewType("grid")}
                className={`transition-colors ${viewType === "grid" ? "text-luxury-gold" : "text-white/20 hover:text-white"}`}
              >
                <Grid size={20} />
              </button>
              <button 
                onClick={() => setViewType("list")}
                className={`transition-colors ${viewType === "list" ? "text-luxury-gold" : "text-white/20 hover:text-white"}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className={viewType === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16" : "flex flex-col gap-12"}>
          <AnimatePresence mode="popLayout">
            {filteredVehicles.slice(0, 12).map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`group flex flex-col ${viewType === "list" ? "md:flex-row h-auto md:h-96" : ""}`}
              >
                <div className={`relative overflow-hidden bg-zinc-900 ${viewType === "list" ? "w-full md:w-[45%]" : "aspect-[16/10]"}`}>
                  <img 
                    src={vehicle.images[0]} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Wishlist Heart */}
                  <button 
                    onClick={() => handleWishlist(vehicle.id)}
                    className={`absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-500 hover:scale-110 z-10 ${
                      wishlistIds.includes(vehicle.id) ? "bg-luxury-gold text-black border-luxury-gold" : "hover:text-luxury-gold"
                    }`}
                  >
                    <Heart size={18} fill={wishlistIds.includes(vehicle.id) ? "currentColor" : "none"} />
                  </button>

                  <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md text-[9px] tracking-widest uppercase border border-white/10 font-bold">
                    {vehicle.category}
                  </div>
                </div>

                <div className="py-10 flex flex-col justify-between flex-1 md:px-6">
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-6 gap-4">
                      <h3 className="text-2xl md:text-3xl font-serif tracking-widest group-hover:gold-gradient transition-all">{vehicle.name}</h3>
                      <span className="text-xl font-bold tracking-tighter text-luxury-gold">{formatPrice(vehicle.price)}</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 md:gap-8 border-y border-white/5 py-6 md:py-8 mt-4">
                      <div>
                        <span className="text-[8px] tracking-[0.4em] uppercase text-white/30 block mb-2">Power</span>
                        <span className="text-xs font-bold">{vehicle.hp} HP</span>
                      </div>
                      <div>
                        <span className="text-[8px] tracking-[0.4em] uppercase text-white/30 block mb-2">0-60 MPH</span>
                        <span className="text-xs font-bold">{vehicle.acceleration}</span>
                      </div>
                      <div>
                        <span className="text-[8px] tracking-[0.4em] uppercase text-white/30 block mb-2">Mileage</span>
                        <span className="text-xs font-bold">{vehicle.mileage.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex items-center justify-between">
                    <Link 
                      href={`/car/${vehicle.id}`}
                      className="text-[10px] tracking-[0.4em] uppercase font-bold text-luxury-gold hover:text-white transition-colors flex items-center gap-3 group/link"
                    >
                      View Dossier <ChevronRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                    <a 
                      href={`https://wa.me/2347025731925?text=${encodeURIComponent(`Hello, I'm interested in the ${vehicle.year} ${vehicle.brand} ${vehicle.model} from the VICC AUTOS inventory.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#25D366] hover:text-[#128C7E] transition-colors flex items-center gap-2"
                    >
                      <MessageCircle size={14} /> Inquire
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
