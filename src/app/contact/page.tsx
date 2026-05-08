"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "GENERAL ENQUIRY",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Inquiry sent successfully. Our concierge will contact you shortly.");
      setFormData({ name: "", email: "", interest: "GENERAL ENQUIRY", message: "" });
      setLoading(false);
    }, 1500);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`Hello VICC AUTOS, my name is ${formData.name || 'a customer'}. I have a ${formData.interest} inquiry: ${formData.message}`);
    window.open(`https://wa.me/2347025731925?text=${text}`, '_blank');
  };
  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <span className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold mb-6 block">Get in Touch</span>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 md:mb-8">Start Your <br /> <span className="italic">Journey</span></h1>
              <p className="text-white/40 text-lg font-light max-w-lg">
                Whether you're looking to acquire a masterpiece or require specialist servicing, our team of experts is ready to assist you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold ml-1">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="ENTER YOUR NAME"
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs tracking-[0.2em] focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="YOUR@EMAIL.COM"
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs tracking-[0.2em] focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold ml-1">Interested In</label>
                <select 
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs tracking-[0.2em] focus:outline-none focus:border-luxury-gold transition-colors appearance-none"
                >
                  <option className="bg-luxury-black">SALES INQUIRY</option>
                  <option className="bg-luxury-black">SERVICE APPOINTMENT</option>
                  <option className="bg-luxury-black">VEHICLE CONSIGNMENT</option>
                  <option className="bg-luxury-black">GENERAL ENQUIRY</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold ml-1">Message</label>
                <textarea 
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="HOW CAN WE ASSIST YOU?"
                  className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs tracking-[0.2em] focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button type="submit" disabled={loading} className="bg-white text-black w-full py-5 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase hover:bg-luxury-gold transition-all flex items-center justify-center gap-4 group disabled:opacity-50">
                  {loading ? 'Sending...' : 'Send Inquiry'} <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button type="button" onClick={openWhatsApp} className="w-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 py-5 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-4 group">
                  Chat on WhatsApp <MessageSquare size={16} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-16"
          >
            {/* Branches */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-4 md:space-y-6 p-6 md:p-10 bg-luxury-charcoal/30 border border-white/5">
                <h3 className="text-lg md:text-xl font-serif text-luxury-gold">New York Showroom</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-white/30 shrink-0" />
                    <p className="text-xs md:text-sm text-white/60 leading-relaxed">725 5th Ave, New York, NY 10022</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={20} className="text-white/30 shrink-0" />
                    <p className="text-xs md:text-sm text-white/60">+1 (800) VICC-NY</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 md:space-y-6 p-6 md:p-10 bg-luxury-charcoal/30 border border-white/5">
                <h3 className="text-lg md:text-xl font-serif text-luxury-gold">London Boutique</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-white/30 shrink-0" />
                    <p className="text-xs md:text-sm text-white/60">15 Berkeley Square, London W1J 6AS</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={20} className="text-white/30 shrink-0" />
                    <p className="text-xs md:text-sm text-white/60">+44 20 7946 0000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Clock size={24} className="text-luxury-gold" />
                <h3 className="text-2xl font-serif uppercase tracking-widest">Business Hours</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-20 gap-y-4 md:gap-y-6">
                {['Monday - Friday', 'Saturday', 'Sunday'].map((day, i) => (
                  <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-[10px] md:text-xs tracking-widest text-white/40 uppercase font-bold">{day}</span>
                    <span className="text-[10px] md:text-xs tracking-widest uppercase">{day === 'Sunday' ? 'By Appointment' : '09:00 - 20:00'}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-zinc-900 border border-white/10 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                alt="Map View" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass px-8 py-4 text-[10px] tracking-[0.4em] uppercase font-bold text-luxury-gold">
                  Explore Virtual Showroom
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
