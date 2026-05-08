"use client";

import { useParams } from "next/navigation";
import { vehicles } from "@/data/vehicles";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ChevronRight, 
  Gauge, 
  Zap, 
  Fuel, 
  Settings, 
  Calendar, 
  Maximize2, 
  Share2, 
  Heart,
  MessageCircle,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CarDetailsPage() {
  const params = useParams();
  const vehicle = vehicles.find(v => v.id === params.id);
  const [activeImage, setActiveImage] = useState(0);

  if (!vehicle) {
    return (
      <div className="h-screen flex items-center justify-center bg-luxury-black">
        <div className="text-center">
          <h2 className="text-4xl font-serif mb-6">Vehicle Not Found</h2>
          <Link href="/inventory" className="text-luxury-gold uppercase tracking-widest text-xs hover:text-white transition-colors">
            Return to Inventory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-luxury-black min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-12">
        {/* Breadcrumbs */}
        <div className="mb-12 flex items-center gap-4">
          <Link href="/inventory" className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Showroom
          </Link>
          <div className="h-4 w-[1px] bg-white/10" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold">{vehicle.brand} / {vehicle.model}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Gallery Column */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[16/10] bg-zinc-900 overflow-hidden group"
            >
              <img 
                src={vehicle.images[activeImage]} 
                alt={vehicle.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-4">
                <button className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-black transition-all">
                  <Maximize2 size={20} />
                </button>
                <button className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500 transition-all">
                  <Heart size={20} />
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-4 gap-2 md:gap-4">
              {vehicle.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[16/10] relative overflow-hidden border-2 transition-all ${
                    activeImage === i ? "border-luxury-gold" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`${vehicle.name} ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="pt-8 md:pt-12 space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-3xl font-serif">A Masterpiece in Engineering</h3>
              <p className="text-white/60 leading-relaxed text-base md:text-lg font-light">
                {vehicle.description} Each curve and contour of the {vehicle.name} has been meticulously crafted to deliver an experience that transcends mere transportation. From its state-of-the-art {vehicle.engine} to its bespoke interior, this vehicle represents the absolute pinnacle of automotive excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-6 md:pt-8">
                <div>
                  <h4 className="text-luxury-gold tracking-widest uppercase text-xs font-bold mb-6">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                        <CheckCircle2 size={16} className="text-luxury-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-luxury-charcoal/50 p-6 md:p-8 border border-white/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <ShieldCheck size={32} className="text-luxury-gold" />
                    <div>
                      <h4 className="text-sm font-bold tracking-widest uppercase">Factory Warranty</h4>
                      <p className="text-white/40 text-xs">Full coverage until Dec 2027</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/30 leading-relaxed">
                    This vehicle is eligible for our exclusive VICC AUTOS Care program, including global roadside assistance and complimentary maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Actions Column */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <span className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold block">{vehicle.year} &bull; {vehicle.brand}</span>
              <h1 className="text-4xl md:text-5xl font-serif">{vehicle.model}</h1>
              <p className="text-3xl md:text-4xl font-medium tracking-tight text-white/90 pt-2 md:pt-4">{formatPrice(vehicle.price)}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 py-10 border-y border-white/5">
              <div className="flex items-center gap-4">
                <Gauge className="text-luxury-gold" size={24} />
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-white/40 block">Power</span>
                  <span className="text-sm font-medium">{vehicle.hp} HP</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Zap className="text-luxury-gold" size={24} />
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-white/40 block">0-60 MPH</span>
                  <span className="text-sm font-medium">{vehicle.acceleration}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Fuel className="text-luxury-gold" size={24} />
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-white/40 block">Engine</span>
                  <span className="text-sm font-medium">{vehicle.engine.split(' ')[0]}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Settings className="text-luxury-gold" size={24} />
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-white/40 block">Drive</span>
                  <span className="text-sm font-medium">AWD</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <button className="w-full bg-white text-black py-4 md:py-5 text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase hover:bg-luxury-gold transition-colors">
                Enquire Now
              </button>
              <button className="w-full border border-white/20 py-4 md:py-5 text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                Schedule Test Drive
              </button>
              <a 
                href="#"
                className="w-full bg-[#25D366]/10 text-[#25D366] py-4 md:py-5 text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2 md:gap-3 border border-[#25D366]/20"
              >
                <MessageCircle size={20} /> WhatsApp Inquiry
              </a>
            </div>

            {/* Finance Card */}
            <div className="glass p-6 md:p-8 space-y-4 md:space-y-6">
              <h4 className="text-lg font-serif">Financing Estimate</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-xs tracking-widest text-white/40 uppercase">
                  <span>Monthly Payment</span>
                  <span className="text-white">Est. $4,200/mo</span>
                </div>
                <div className="w-full h-[1px] bg-white/5" />
                <div className="flex justify-between text-xs tracking-widest text-white/40 uppercase">
                  <span>Down Payment</span>
                  <span className="text-white">$50,000</span>
                </div>
                <div className="flex justify-between text-xs tracking-widest text-white/40 uppercase">
                  <span>Term Length</span>
                  <span className="text-white">60 Months</span>
                </div>
              </div>
              <button className="w-full text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-bold hover:text-white transition-colors pt-4">
                Get Personalized Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
