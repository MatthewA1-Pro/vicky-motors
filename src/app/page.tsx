import Hero from "@/components/home/Hero";
import FeaturedInventory from "@/components/home/FeaturedInventory";
import { Shield, Award, Clock, Headphones, ArrowRight } from "lucide-react";
import Link from "next/link";

const whyChooseUs = [
  {
    icon: Shield,
    title: "Certified Excellence",
    description: "Every vehicle undergoes a rigorous 300-point inspection by master technicians."
  },
  {
    icon: Award,
    title: "Luxury Experience",
    description: "Personalized concierge service tailored to your lifestyle and preferences."
  },
  {
    icon: Clock,
    title: "Global Sourcing",
    description: "Access to the most exclusive and rare automobiles from around the world."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated assistance for all your automotive needs, anytime, anywhere."
  }
];

export default function Home() {
  return (
    <div className="bg-luxury-black">
      {/* Hero Section */}
      <Hero />

      {/* Featured Inventory */}
      <FeaturedInventory />

      {/* Why Choose Us */}
      <section className="py-32 bg-luxury-charcoal relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop" 
                  alt="Dealership Experience" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-luxury-gold/10 backdrop-blur-3xl rounded-full -z-10" />
            </div>

            <div className="space-y-12">
              <div>
                <span className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Our Philosophy</span>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Beyond <br /> Expectation</h2>
                <p className="text-white/60 font-light text-lg leading-relaxed">
                  We don't just sell cars; we curate masterpieces. Our mission is to provide an elite acquisition experience that matches the extraordinary engineering of our vehicles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="space-y-4">
                    <item.icon size={32} className="text-luxury-gold" />
                    <h4 className="text-xl font-serif uppercase tracking-widest">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-luxury-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Vehicles Delivered", value: "2,500+" },
              { label: "Global Branches", value: "12" },
              { label: "Happy Clients", value: "1,800+" },
              { label: "Years Excellence", value: "25" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-serif text-luxury-gold">{stat.value}</div>
                <div className="text-[10px] tracking-[0.4em] uppercase text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop" 
            alt="Interior" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black" />
        </div>
        <div className="relative container mx-auto px-6 text-center space-y-10">
          <h2 className="text-5xl md:text-7xl font-serif max-w-4xl mx-auto leading-tight">
            Ready to Drive the <span className="italic gold-gradient">Extraordinary</span>?
          </h2>
          <p className="text-white/60 text-xl font-light max-w-2xl mx-auto">
            Schedule a private viewing at our showroom or request a personalized virtual tour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-luxury-gold text-black px-12 py-5 text-sm font-bold tracking-[0.3em] uppercase hover:bg-white transition-all"
            >
              Book Private Viewing
            </Link>
            <Link 
              href="/inventory" 
              className="w-full sm:w-auto border border-white/20 px-12 py-5 text-sm font-bold tracking-[0.3em] uppercase hover:border-white transition-all flex items-center justify-center gap-3"
            >
              Virtual Showroom <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
