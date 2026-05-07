"use client";

import { motion } from "framer-motion";
import { 
  Truck, 
  Wallet, 
  Search, 
  Settings, 
  RefreshCcw, 
  ShieldCheck, 
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Truck,
    title: "Global Transport",
    description: "Insured, enclosed vehicle transportation to any corner of the world. Your masterpiece remains pristine.",
    image: "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: Wallet,
    title: "Bespoke Financing",
    description: "Customized financial solutions and acquisition strategies for high-net-worth individuals.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: Settings,
    title: "Elite Servicing",
    description: "Factory-trained technicians providing meticulous maintenance using only original manufacturer parts.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: Search,
    title: "Consignment & Sourcing",
    description: "Let our specialists find your dream vehicle or manage the sale of your current collection.",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      <div className="container mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <span className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold mb-6 block">Our Solutions</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 leading-tight">Elevated <br /> <span className="italic text-stroke">Experience</span></h1>
          <p className="text-white/60 text-xl font-light leading-relaxed">
            We provide a comprehensive ecosystem of services designed to ensure that every aspect of vehicle ownership is as seamless and prestigious as the machines themselves.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-8">
                <div className="w-16 h-16 bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center">
                  <service.icon size={32} className="text-luxury-gold" />
                </div>
                <h2 className="text-4xl font-serif tracking-wide">{service.title}</h2>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  {service.description} Our commitment to excellence ensures that we handle every detail with the utmost discretion and professionalism.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-4 text-xs tracking-[0.4em] uppercase font-bold hover:text-luxury-gold transition-colors group"
                >
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-[16/10] overflow-hidden grayscale group hover:grayscale-0 transition-all duration-1000">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/5 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <section className="bg-luxury-charcoal/50 py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: "Secured Transactions", desc: "Highest level of financial security." },
              { icon: HeartHandshake, title: "Bespoke Consulting", desc: "Expert guidance for your collection." },
              { icon: RefreshCcw, title: "Seamless Trade-in", desc: "Top value for your luxury assets." },
              { icon: Truck, title: "White Glove Delivery", desc: "Pristine arrival of your vehicle." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <item.icon size={24} className="text-luxury-gold" />
                <h4 className="text-sm tracking-widest uppercase font-bold">{item.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
