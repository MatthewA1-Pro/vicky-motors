"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Car, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  MoreVertical
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

const stats = [
  { name: "Total Revenue", value: "$4.2M", change: "+12.5%", trendingUp: true, icon: DollarSign },
  { name: "Active Inventory", value: "48", change: "+4", trendingUp: true, icon: Car },
  { name: "Total Clients", value: "1,284", change: "+24", trendingUp: true, icon: Users },
  { name: "Conversion Rate", value: "3.2%", change: "-0.4%", trendingUp: false, icon: TrendingUp },
];

const recentInquiries = [
  { id: 1, name: "Marcus Thorne", vehicle: "Rolls-Royce Phantom", date: "2 mins ago", status: "Priority" },
  { id: 2, name: "Elena Rossi", vehicle: "Lamborghini Revuelto", date: "15 mins ago", status: "Pending" },
  { id: 3, name: "Julian Vane", vehicle: "Porsche 911 GT3 RS", date: "1 hour ago", status: "Closed" },
  { id: 4, name: "Sophia Chen", vehicle: "Mercedes-AMG G 63", date: "3 hours ago", status: "Pending" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-serif mb-2">Executive Overview</h1>
        <p className="text-white/40 text-sm tracking-widest uppercase">Performance metrics and recent activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-luxury-charcoal/50 border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-luxury-gold/30 transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/5 rounded-xl">
                <stat.icon size={24} className="text-luxury-gold" />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-bold",
                stat.trendingUp ? "text-green-500" : "text-red-500"
              )}>
                {stat.change}
                {stat.trendingUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <div>
              <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2">{stat.name}</p>
              <h3 className="text-3xl font-serif">{stat.value}</h3>
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-luxury-gold/5 blur-3xl rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-luxury-charcoal/30 border border-white/5 rounded-2xl p-8 h-[450px] flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-serif">Revenue Forecast</h3>
            <div className="flex gap-2">
              {['W', 'M', 'Y'].map(t => (
                <button key={t} className={`px-4 py-1 rounded-md text-[10px] tracking-widest uppercase font-bold transition-all ${t === 'M' ? 'bg-luxury-gold text-black' : 'text-white/30 hover:text-white'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 border-b border-l border-white/5 relative">
            {/* Simple Mock Chart Visual */}
            <div className="absolute inset-0 flex items-end justify-around px-10 pb-4">
              {[40, 60, 45, 80, 55, 90, 75, 85, 65, 95, 80, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className="w-8 bg-gradient-to-t from-luxury-gold/10 to-luxury-gold/40 rounded-t-sm relative group"
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    ${h * 5}k
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="bg-luxury-charcoal/30 border border-white/5 rounded-2xl p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-serif">Recent Inquiries</h3>
            <button className="text-white/30 hover:text-white transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
          <div className="flex-1 space-y-6">
            {recentInquiries.map((inquiry) => (
              <div key={inquiry.id} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-luxury-gold font-bold">
                    {inquiry.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold group-hover:text-luxury-gold transition-colors">{inquiry.name}</h4>
                    <p className="text-[10px] text-white/40 tracking-wider uppercase">{inquiry.vehicle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={cn(
                    "text-[8px] tracking-[0.2em] uppercase px-2 py-1 rounded border",
                    inquiry.status === 'Priority' ? "border-red-500/50 text-red-500 bg-red-500/5" :
                    inquiry.status === 'Pending' ? "border-luxury-gold/50 text-luxury-gold bg-luxury-gold/5" :
                    "border-white/20 text-white/40"
                  )}>
                    {inquiry.status}
                  </span>
                  <div className="flex items-center gap-1 text-[8px] text-white/30 uppercase mt-2">
                    <Clock size={10} />
                    {inquiry.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 w-full border border-white/10 py-4 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-black transition-all">
            View All Inquiries
          </button>
        </div>
      </div>
    </div>
  );
}

// Utility function duplicated for this file or imported if available
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
