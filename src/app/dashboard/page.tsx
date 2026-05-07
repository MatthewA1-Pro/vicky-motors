"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeTab, setActiveTab] = useState("overview");
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        // Fetch inquiries
        const { data: iqData } = await supabase
          .from('inquiries')
          .select('*, vehicles(*)')
          .eq('email', user.email);
        if (iqData) setInquiries(iqData);

        // Mock wishlist for now or fetch if table exists
        setWishlist([]); 
      };
      fetchData();
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
                {[
                  { id: 'overview', name: 'Overview', icon: History },
                  { id: 'wishlist', name: 'Wishlist', icon: Heart },
                  { id: 'inquiries', name: 'My Inquiries', icon: MessageSquare },
                  { id: 'settings', name: 'Settings', icon: Settings },
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all text-xs tracking-widest uppercase font-bold ${
                      activeTab === item.id 
                        ? "bg-luxury-gold/10 text-luxury-gold" 
                        : "hover:bg-white/5 text-white/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={16} /> {item.name}
                    </div>
                    <ChevronRight size={14} className={activeTab === item.id ? "opacity-100" : "opacity-0"} />
                  </button>
                ))}
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
              <h1 className="text-4xl font-serif mb-4">
                {activeTab === 'overview' && <>Welcome back, <span className="italic gold-gradient">{user.user_metadata?.full_name?.split(' ')[0] || 'Collector'}</span></>}
                {activeTab === 'wishlist' && <>My <span className="italic gold-gradient">Wishlist</span></>}
                {activeTab === 'inquiries' && <>My <span className="italic gold-gradient">Inquiries</span></>}
                {activeTab === 'settings' && <>Account <span className="italic gold-gradient">Settings</span></>}
              </h1>
              <p className="text-white/40 text-sm tracking-widest uppercase">
                {activeTab === 'overview' && "Managing your private acquisition journey"}
                {activeTab === 'wishlist' && "Your curated selection of potential masterpieces"}
                {activeTab === 'inquiries' && "Track your ongoing conversations with our concierge"}
                {activeTab === 'settings' && "Manage your profile and security preferences"}
              </p>
            </header>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'overview' && (
                  <div className="space-y-12">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        { label: 'Active Inquiries', val: inquiries.length, icon: MessageSquare },
                        { label: 'Saved Vehicles', val: wishlist.length, icon: Heart },
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
                        <button onClick={() => setActiveTab('inquiries')} className="text-[10px] tracking-widest uppercase text-luxury-gold hover:text-white transition-colors">View All</button>
                      </div>
                      <div className="space-y-4">
                        {inquiries.slice(0, 3).map((iq) => (
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
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'inquiries' && (
                  <div className="space-y-6">
                    {inquiries.length > 0 ? inquiries.map((iq) => (
                      <div key={iq.id} className="glass p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                         <div className="flex items-center gap-8">
                          <div className="w-32 h-20 bg-zinc-900 overflow-hidden">
                            <img src={iq.vehicles?.images[0]} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="text-xl font-serif">{iq.vehicles?.name}</h4>
                            <p className="text-[10px] tracking-widest uppercase text-luxury-gold mt-2">{iq.interest}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-12">
                          <div className="text-center">
                            <p className="text-[9px] tracking-widest uppercase text-white/30">Status</p>
                            <p className="text-xs font-bold mt-2 uppercase">{iq.status}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-[9px] tracking-widest uppercase text-white/30">Last Update</p>
                            <p className="text-xs font-bold mt-2">{new Date(iq.created_at).toLocaleDateString()}</p>
                          </div>
                          <button className="gold-button px-6 py-3 text-[9px]">Contact Concierge</button>
                        </div>
                      </div>
                    )) : (
                      <div className="glass p-32 text-center">
                        <p className="text-white/30 uppercase tracking-[0.3em] text-sm">No active inquiries</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div className="glass p-32 text-center">
                    <Heart size={40} className="mx-auto text-white/10 mb-6" />
                    <p className="text-white/30 uppercase tracking-[0.3em] text-sm">Your wishlist is currently empty</p>
                    <Link href="/inventory" className="inline-block mt-8 gold-button px-10 py-4 text-[10px]">Browse Inventory</Link>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="glass p-12 max-w-2xl space-y-10">
                    <div className="space-y-6">
                      <h4 className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold font-bold">Personal Information</h4>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[9px] tracking-widest uppercase text-white/40">Full Name</label>
                          <input type="text" readOnly value={user.user_metadata?.full_name} className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] tracking-widest uppercase text-white/40">Email</label>
                          <input type="text" readOnly value={user.email} className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold outline-none" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold font-bold">Preferences</h4>
                      <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                        <span className="text-[10px] tracking-widest uppercase">Exclusive Newsletter</span>
                        <div className="w-10 h-5 bg-luxury-gold rounded-full relative">
                          <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                    <button className="gold-button w-full py-4 text-[10px]">Update Profile</button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
