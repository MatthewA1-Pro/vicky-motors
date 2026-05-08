"use client";

import { motion } from "framer-motion";
import { vehicles } from "@/data/vehicles";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function FeaturedInventory() {
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

  const handleWishlist = async (e: React.MouseEvent, carId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
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
      toast.success("Removed from wishlist");
    } else {
      await supabase
        .from('wishlist')
        .insert({ user_id: user.id, car_id: carId });
      setWishlistIds(prev => [...prev, carId]);
      toast.success("Added to your wishlist");
    }
  };
  return (
    <section className="py-40 bg-luxury-obsidian relative overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-luxury-gold" />
              <span className="text-premium text-luxury-gold">Curated Showcase</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-serif"
            >
              Masterpieces on <br />
              <span className="italic">Display</span>
            </motion.h2>
          </div>
          <Link href="/inventory" className="group flex items-center gap-6 pb-2 border-b border-white/10 hover:border-luxury-gold transition-all">
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold">The Full Collection</span>
            <ArrowUpRight size={20} className="text-luxury-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {vehicles.slice(0, 4).map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900 hover-reveal">
                <Link href={`/car/${vehicle.id}`} className="block w-full h-full">
                  <img 
                    src={vehicle.images[0]} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-700" />
                  
                  {/* Hover Quick Specs */}
                  <div className="absolute inset-x-12 bottom-12 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/20">
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] tracking-[0.3em] uppercase text-white/40">Performance</span>
                        <span className="text-xs font-bold">{vehicle.hp} HP</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] tracking-[0.3em] uppercase text-white/40">Acceleration</span>
                        <span className="text-xs font-bold">{vehicle.acceleration}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] tracking-[0.3em] uppercase text-white/40">Engine</span>
                        <span className="text-xs font-bold">{vehicle.engine.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                </Link>

                <button 
                  onClick={(e) => handleWishlist(e, vehicle.id)}
                  className={`absolute top-8 right-8 w-14 h-14 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 z-10 ${
                    wishlistIds.includes(vehicle.id) ? "bg-luxury-gold text-black border-luxury-gold opacity-100" : "hover:text-luxury-gold"
                  }`}
                >
                  <Heart size={24} fill={wishlistIds.includes(vehicle.id) ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="mt-12 flex justify-between items-start">
                <div>
                  <h3 className="text-4xl font-serif mb-4 group-hover:gold-gradient transition-all">{vehicle.name}</h3>
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">{vehicle.year} &bull; {vehicle.brand}</span>
                    <div className="w-10 h-[1px] bg-white/10" />
                    <span className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold font-bold">{vehicle.category}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <p className="text-[10px] tracking-[0.5em] uppercase text-white/20 mb-2">Investment</p>
                  <span className="text-2xl font-bold tracking-tighter mb-3">{formatPrice(vehicle.price)}</span>
                  <a 
                    href={`https://wa.me/2347025731925?text=${encodeURIComponent(`Hello, I'm interested in the ${vehicle.year} ${vehicle.brand} ${vehicle.model} from the VICC AUTOS showcase.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase font-bold text-[#25D366] hover:text-white transition-colors"
                  >
                    <MessageCircle size={12} /> Inquire
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute bottom-0 left-0 text-[15vw] font-serif font-black text-white/[0.01] select-none pointer-events-none translate-y-1/2 -rotate-90 origin-left">
        COLLECTION
      </div>
    </section>
  );
}
