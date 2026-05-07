"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Settings, 
  Heart, 
  MessageSquare, 
  History, 
  LogOut, 
  ChevronRight,
  Car
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function BuyerDashboard() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [inquiries, setInquiries] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      // Fetch user inquiries
      const fetchInquiries = async () => {
        const { data } = await supabase
          .from('inquiries')
          .select('*, vehicles(*)')
          .eq('email', user.email);
        if (data) setInquiries(data);
      };
      fetchInquiries();
    }
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8">
            <div className="glass p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center">
                  <User size={32} className="text-luxury-gold" />
                </div>
                <div>
                  <h2 className="text-xl font-serif">{user.user_metadata?.full_name || 'Collector'}</h2>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">Verified Member</p>
                </div>
              </div>
              <div className="h-[1px] bg-white/5" />
              <nav className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 rounded-lg bg-luxury-gold/10 text-luxury-gold text-xs tracking-widest uppercase font-bold">
                  <div className="flex items-center gap-3">
                    <History size={16} /> Overview
                  </div>
                  <ChevronRight size={14} />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 text-white/60 text-xs tracking-widest uppercase font-bold transition-all">
                  <div className="flex items-center gap-3">
                    <Heart size={16} /> Wishlist
                  </div>
                  <ChevronRight size={14} />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 text-white/60 text-xs tracking-widest uppercase font-bold transition-all">
                  <div className="flex items-center gap-3">
                    <MessageSquare size={16} /> My Inquiries
                  </div>
                  <ChevronRight size={14} />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 text-white/60 text-xs tracking-widest uppercase font-bold transition-all">
                  <div className="flex items-center gap-3">
                    <Settings size={16} /> Settings
                  </div>
                  <ChevronRight size={14} />
                </button>
              </nav>
              <div className="h-[1px] bg-white/5" />
              <button 
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 p-3 text-red-500/60 hover:text-red-500 text-xs tracking-widest uppercase font-bold transition-all"
              >
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-12">
            <header>
              <h1 className="text-4xl font-serif mb-4">Welcome back, <span className="italic gold-gradient">{user.user_metadata?.full_name?.split(' ')[0] || 'Collector'}</span></h1>
              <p className="text-white/40 text-sm tracking-widest uppercase">Managing your private acquisition journey</p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Active Inquiries', val: inquiries.length, icon: MessageSquare },
                { label: 'Saved Vehicles', val: '0', icon: Heart },
                { label: 'Deliveries', val: '0', icon: Car },
              ].map((stat, i) => (
                <div key={i} className="glass p-8 space-y-4">
                  <stat.icon size={20} className="text-luxury-gold" />
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-white/40">{stat.label}</p>
                    <p className="text-3xl font-serif mt-2">{stat.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Inquiries */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif tracking-widest uppercase">Recent Activity</h3>
                <Link href="/inventory" className="text-[10px] tracking-widest uppercase text-luxury-gold hover:text-white transition-colors">Browse More</Link>
              </div>
              <div className="space-y-4">
                {inquiries.length > 0 ? inquiries.map((iq) => (
                  <div key={iq.id} className="glass p-6 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-luxury-gold">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-12 bg-zinc-900 overflow-hidden">
                         <img src={iq.vehicles?.images[0]} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium tracking-wide">{iq.interest}</p>
                        <p className="text-[10px] tracking-widest uppercase text-white/40 mt-1">Status: {iq.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-[10px] tracking-widest uppercase text-white/30">Submitted</p>
                        <p className="text-xs font-medium mt-1">{new Date(iq.created_at).toLocaleDateString()}</p>
                      </div>
                      <ChevronRight size={18} className="text-white/20" />
                    </div>
                  </div>
                )) : (
                  <div className="glass p-20 text-center space-y-4">
                    <p className="text-white/30 text-sm tracking-widest uppercase">No active inquiries found</p>
                    <Link href="/inventory" className="inline-block text-luxury-gold text-xs tracking-[0.3em] uppercase font-bold border-b border-luxury-gold pb-1">Start Exploring</Link>
                  </div>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
