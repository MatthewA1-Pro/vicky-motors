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
  Car,
  Camera,
  Upload
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { vehicles } from "@/data/vehicles";
import { recentBuyers } from "@/data/buyers";
import toast from "react-hot-toast";

export default function BuyerDashboard() {
  const { user, loading, signOut, refreshUser } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<any[]>([]);
  
  // Profile state
  const [profileName, setProfileName] = useState(user?.user_metadata?.full_name || "");
  const [profileLocation, setProfileLocation] = useState(user?.user_metadata?.location || "");
  const [profileBio, setProfileBio] = useState(user?.user_metadata?.bio || "");
  const [avatarUrl, setAvatarUrl] = useState(user?.user_metadata?.avatar_url || "");
  const [coverUrl, setCoverUrl] = useState(user?.user_metadata?.cover_url || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadingCover, setIsUploadingCover] = useState(false);

  useEffect(() => {
    if (user) {
      setProfileName(user.user_metadata?.full_name || "");
      setProfileLocation(user.user_metadata?.location || "");
      setProfileBio(user.user_metadata?.bio || "");
      setAvatarUrl(user.user_metadata?.avatar_url || "");
      setCoverUrl(user.user_metadata?.cover_url || "");
    }
  }, [user]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user, activeTab]);

  const fetchData = async () => {
    if (user?.id === 'demo-user-id') {
      const stored = localStorage.getItem('demo-wishlist');
      const wlIds = stored ? JSON.parse(stored) : [];
      const wlVehicles = vehicles.filter(v => wlIds.includes(v.id));
      
      setInquiries([
        { id: 'demo-1', interest: 'General Inquiry', status: 'Pending', created_at: new Date().toISOString(), vehicles: vehicles[0] }
      ]);
      setWishlist(wlVehicles);
      return;
    }

    // Fetch real inquiries
    const { data: iqData } = await supabase
      .from('inquiries')
      .select('*, vehicles(*)')
      .or(`email.eq.${user?.email},user_id.eq.${user?.id}`)
      .order('created_at', { ascending: false });
    if (iqData) setInquiries(iqData);

    // Fetch real wishlist
    const { data: wlData } = await supabase
      .from('wishlist')
      .select('car_id')
      .eq('user_id', user?.id);
    
    if (wlData) {
      const wlIds = wlData.map(i => i.car_id);
      const wlVehicles = vehicles.filter(v => wlIds.includes(v.id));
      setWishlist(wlVehicles);
    }
  };

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

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size must be less than 2MB.");
      return;
    }

    setIsUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}-${Math.random()}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    try {
      // 1. Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // 3. Update User Metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data: { avatar_url: publicUrl }
      });

      if (updateError) throw updateError;

      setAvatarUrl(publicUrl);
      await refreshUser();
      toast.success("Profile picture updated successfully.");
    } catch (error: any) {
      console.error("Error uploading avatar:", error);
      toast.error(error.message || "Failed to upload image. Please ensure an 'avatars' bucket exists in Supabase.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingCover(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `cover-${user.id}-${Math.random()}.${fileExt}`;
    const filePath = `covers/${fileName}`;

    try {
      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);
      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(filePath);

      const { error: updateError } = await supabase.auth.updateUser({
        data: { cover_url: publicUrl }
      });
      if (updateError) throw updateError;

      setCoverUrl(publicUrl);
      await refreshUser();
      toast.success("Cover photo updated.");
    } catch (error: any) {
      toast.error(error.message || "Failed to upload cover.");
    } finally {
      setIsUploadingCover(false);
    }
  };

  const handleUpdateProfile = async () => {
    setIsUpdating(true);
    try {
      const { error } = await supabase.auth.updateUser({
        data: { 
          full_name: profileName,
          location: profileLocation,
          bio: profileBio
        }
      });
      if (error) throw error;
      await refreshUser();
      toast.success("Profile updated successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-luxury-black">
      <div className="container mx-auto px-4 md:px-6">
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
            <header className="mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-serif mb-4">
                {activeTab === 'overview' && <>Welcome back, <span className="italic gold-gradient">{user.user_metadata?.full_name?.split(' ')[0] || 'Collector'}</span></>}
                {activeTab === 'wishlist' && <>My <span className="italic gold-gradient">Wishlist</span></>}
                {activeTab === 'inquiries' && <>My <span className="italic gold-gradient">Inquiries</span></>}
                {activeTab === 'settings' && <>Account <span className="italic gold-gradient">Settings</span></>}
              </h1>
              <p className="text-white/40 text-xs md:text-sm tracking-widest uppercase leading-relaxed">
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
                        <h3 className="text-xl font-serif tracking-widest uppercase">My Recent Activity</h3>
                        <button onClick={() => setActiveTab('inquiries')} className="text-[10px] tracking-widest uppercase text-luxury-gold hover:text-white transition-colors">View All</button>
                      </div>
                      <div className="space-y-4">
                        {inquiries.length > 0 ? inquiries.slice(0, 3).map((iq) => (
                          <div key={iq.id} className="glass p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-4 border-luxury-gold">
                            <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                              <div className="w-20 h-12 bg-zinc-900 overflow-hidden shrink-0">
                                <img src={iq.vehicles?.images[0]} alt="" className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium tracking-wide truncate max-w-[200px] md:max-w-none">{iq.interest}</p>
                                <p className="text-[10px] tracking-widest uppercase text-white/40 mt-1">Status: {iq.status}</p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between md:justify-end gap-6 md:gap-8 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-white/5 md:border-transparent mt-2 md:mt-0">
                              <div className="text-left md:text-right">
                                <p className="text-[10px] tracking-widest uppercase text-white/30">Submitted</p>
                                <p className="text-xs font-medium mt-1">{new Date(iq.created_at).toLocaleDateString()}</p>
                              </div>
                              <ChevronRight size={18} className="text-white/20" />
                            </div>
                          </div>
                        )) : (
                          <div className="glass p-8 text-center text-white/20 text-[10px] uppercase tracking-[0.2em]">
                            No recent personal activity
                          </div>
                        )}
                      </div>
                    </section>

                    {/* Quick Global Acquisitions Preview */}
                    <section className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-serif tracking-widest uppercase text-luxury-gold">Global Sales Ledger</h3>
                        <button onClick={() => setActiveTab('inquiries')} className="text-[10px] tracking-widest uppercase text-white/40 hover:text-luxury-gold transition-colors">View Full History</button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recentBuyers.slice(0, 4).map((buyer) => (
                          <div key={buyer.id} className="glass p-5 flex items-center justify-between border-l border-white/10 group hover:bg-white/[0.02] transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center border border-luxury-gold/20 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-all">
                                <User size={12} />
                              </div>
                              <div>
                                <p className="text-xs font-bold tracking-wide uppercase">{buyer.name}</p>
                                <p className="text-[9px] tracking-widest uppercase text-white/40">{buyer.vehicle}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-serif text-luxury-gold">{buyer.amount}</p>
                              <p className="text-[9px] text-white/20 uppercase tracking-widest">Verified</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                )}

                {activeTab === 'inquiries' && (
                  <div className="space-y-12">
                    {/* User Inquiries */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-xl font-serif tracking-widest uppercase">My Active Inquiries</h3>
                        <div className="h-[1px] flex-1 bg-white/5" />
                      </div>
                      {inquiries.length > 0 ? inquiries.map((iq) => (
                        <div key={iq.id} className="glass p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-4 border-luxury-gold">
                           <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full md:w-auto">
                            <div className="w-full sm:w-32 h-32 sm:h-20 bg-zinc-900 overflow-hidden shrink-0">
                              <img src={iq.vehicles?.images[0]} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h4 className="text-xl font-serif">{iq.vehicles?.name}</h4>
                              <p className="text-[10px] tracking-widest uppercase text-luxury-gold mt-2">{iq.interest}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:justify-end gap-6 md:gap-12 w-full md:w-auto pt-6 md:pt-0 border-t md:border-t-0 border-white/5">
                            <div className="text-left md:text-center w-1/2 md:w-auto">
                              <p className="text-[9px] tracking-widest uppercase text-white/30">Status</p>
                              <p className="text-xs font-bold mt-2 uppercase">{iq.status}</p>
                            </div>
                            <div className="text-right md:text-center w-1/2 md:w-auto">
                              <p className="text-[9px] tracking-widest uppercase text-white/30">Last Update</p>
                              <p className="text-xs font-bold mt-2">{new Date(iq.created_at).toLocaleDateString()}</p>
                            </div>
                            <a 
                              href={`https://wa.me/2347025731925?text=${encodeURIComponent(`Hello, I'm following up on my inquiry for the ${iq.vehicles?.brand} ${iq.vehicles?.model}.`)}`} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-6 py-3 text-[9px] w-full md:w-auto mt-4 md:mt-0 inline-block text-center flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all duration-300 group tracking-widest uppercase font-bold"
                            >
                              <FaWhatsapp size={14} className="group-hover:scale-110 transition-transform" /> Contact Concierge
                            </a>
                          </div>
                        </div>
                      )) : (
                        <div className="glass p-12 text-center">
                          <p className="text-white/30 uppercase tracking-[0.3em] text-sm">No active inquiries</p>
                        </div>
                      )}
                    </div>

                    {/* Global Sales History Section */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-6">
                        <h3 className="text-xl font-serif tracking-widest uppercase text-luxury-gold">Verified Acquisitions</h3>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-luxury-gold/30 to-transparent" />
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {recentBuyers.map((buyer) => (
                          <div key={buyer.id} className="glass p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors border-l-2 border-white/10 group">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full md:w-auto">
                              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center border border-luxury-gold/20 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-all">
                                <User size={16} />
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-sm font-bold tracking-wide uppercase">{buyer.name}</h4>
                                <p className="text-[10px] tracking-widest uppercase text-white/40">Verified Owner &bull; {buyer.location}</p>
                              </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 w-full md:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-white/5 sm:border-transparent mt-2 sm:mt-0">
                              <div className="text-left sm:text-right min-w-[150px]">
                                <p className="text-[10px] tracking-widest uppercase text-white/30">Vehicle Acquired</p>
                                <p className="text-xs font-bold mt-1 text-luxury-gold uppercase">{buyer.vehicle}</p>
                              </div>
                              <div className="text-left sm:text-right min-w-[100px]">
                                <p className="text-[10px] tracking-widest uppercase text-white/30">Acquisition Price</p>
                                <p className="text-sm font-serif mt-1 text-white">{buyer.amount}</p>
                              </div>
                              <div className="text-left sm:text-right min-w-[80px]">
                                <p className="text-[10px] tracking-widest uppercase text-white/30">Date</p>
                                <p className="text-xs font-bold mt-1 text-white/60">05 / 2026</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div className="space-y-6">
                    {wishlist.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {wishlist.map((car) => (
                          <div key={car.id} className="glass group overflow-hidden">
                            <div className="relative aspect-video overflow-hidden">
                              <img src={car.images[0]} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                              <button 
                                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-luxury-gold"
                                onClick={async () => {
                                  await supabase.from('wishlist').delete().eq('user_id', user.id).eq('car_id', car.id);
                                  setWishlist(prev => prev.filter(v => v.id !== car.id));
                                }}
                              >
                                <Heart size={16} fill="currentColor" />
                              </button>
                            </div>
                            <div className="p-6">
                              <div className="flex justify-between items-start mb-4">
                                <div>
                                  <h4 className="text-xl font-serif">{car.name}</h4>
                                  <p className="text-[10px] tracking-widest uppercase text-white/40 mt-1">{car.brand} &bull; {car.year}</p>
                                </div>
                                <span className="text-sm font-bold text-luxury-gold">${car.price.toLocaleString()}</span>
                              </div>
                              <Link href={`/car/${car.id}`} className="block w-full text-center py-3 border border-white/10 text-[9px] tracking-widest uppercase font-bold hover:bg-white hover:text-black transition-all">View Dossier</Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="glass p-32 text-center">
                        <Heart size={40} className="mx-auto text-white/10 mb-6" />
                        <p className="text-white/30 uppercase tracking-[0.3em] text-sm">Your wishlist is currently empty</p>
                        <Link href="/inventory" className="inline-block mt-8 gold-button px-10 py-4 text-[10px]">Browse Inventory</Link>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="space-y-12">
                    {/* Header Imagery */}
                    <div className="glass overflow-hidden">
                      <div className="relative h-48 md:h-64">
                        {coverUrl ? (
                          <img src={coverUrl} alt="Cover" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-zinc-900 to-zinc-800" />
                        )}
                        <div className="absolute inset-0 bg-black/20" />
                        <label className="absolute top-4 right-4 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 text-[9px] tracking-[0.2em] uppercase font-bold cursor-pointer hover:bg-white hover:text-black transition-all flex items-center gap-2">
                          <Upload size={12} /> {isUploadingCover ? "Uploading..." : "Update Cover"}
                          <input type="file" className="hidden" accept="image/*" onChange={handleCoverUpload} disabled={isUploadingCover} />
                        </label>
                      </div>
                      
                      <div className="p-8 pt-0 -mt-16 flex flex-col sm:flex-row items-end gap-6 relative z-10">
                        <div className="relative group">
                          <div className="w-32 h-32 rounded-full border-4 border-luxury-black bg-zinc-900 overflow-hidden shadow-2xl">
                            {avatarUrl ? (
                              <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-white/10">
                                <User size={48} />
                              </div>
                            )}
                            {isUploading && (
                              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin" />
                              </div>
                            )}
                          </div>
                          <label className="absolute bottom-2 right-2 w-9 h-9 bg-luxury-gold text-black rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                            <Camera size={16} />
                            <input type="file" className="hidden" accept="image/*" onChange={handleAvatarUpload} disabled={isUploading} />
                          </label>
                        </div>
                        <div className="mb-4">
                          <p className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-bold mb-1">Global Identity</p>
                          <h4 className="text-xl font-serif text-white">{profileName || "Anonymous Collector"}</h4>
                        </div>
                      </div>
                    </div>

                    <div className="glass p-8 md:p-12 space-y-10">
                      <div className="space-y-8">
                        <h4 className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold font-bold border-b border-white/5 pb-4">Personal Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[9px] tracking-widest uppercase text-white/40">Full Name</label>
                            <input 
                              type="text" 
                              value={profileName} 
                              onChange={(e) => setProfileName(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold outline-none focus:border-luxury-gold transition-colors" 
                              placeholder="e.g. John Doe"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[9px] tracking-widest uppercase text-white/40">Location</label>
                            <input 
                              type="text" 
                              value={profileLocation} 
                              onChange={(e) => setProfileLocation(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold outline-none focus:border-luxury-gold transition-colors" 
                              placeholder="e.g. Monaco, FR"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] tracking-widest uppercase text-white/40">Collector Bio</label>
                          <textarea 
                            value={profileBio} 
                            onChange={(e) => setProfileBio(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold outline-none focus:border-luxury-gold transition-colors min-h-[100px] resize-none" 
                            placeholder="Share your automotive passion..."
                          />
                        </div>
                      </div>

                      <div className="space-y-8">
                        <h4 className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold font-bold border-b border-white/5 pb-4">Security</h4>
                        <div className="space-y-2">
                          <label className="text-[9px] tracking-widest uppercase text-white/40">Email Address</label>
                          <input 
                            type="text" 
                            readOnly 
                            value={user.email} 
                            className="w-full bg-white/10 border border-white/10 p-4 text-xs font-bold outline-none cursor-not-allowed opacity-60" 
                          />
                        </div>
                      </div>
                      
                      <button 
                        onClick={handleUpdateProfile}
                        disabled={isUpdating}
                        className="gold-button w-full py-5 text-[10px] disabled:opacity-50"
                      >
                        {isUpdating ? "Processing..." : "Save Profile Changes"}
                      </button>
                    </div>
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
