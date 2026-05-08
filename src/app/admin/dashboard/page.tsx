"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Users, Car, DollarSign, ArrowUpRight, ArrowDownRight,
  Clock, MoreVertical, LayoutDashboard, Database, MessageSquare, 
  Settings as SettingsIcon, Plus, Trash, Edit, Image as ImageIcon
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { vehicles as initialVehicles } from "@/data/vehicles";
import toast from "react-hot-toast";

const stats = [
  { name: "Total Revenue", value: "$4.2M", change: "+12.5%", trendingUp: true, icon: DollarSign },
  { name: "Active Inventory", value: "48", change: "+4", trendingUp: true, icon: Car },
  { name: "Total Clients", value: "1,284", change: "+24", trendingUp: true, icon: Users },
  { name: "Conversion Rate", value: "3.2%", change: "-0.4%", trendingUp: false, icon: TrendingUp },
];

const initialInquiries = [
  { id: 1, name: "Marcus Thorne", vehicle: "Rolls-Royce Phantom", date: "2 mins ago", status: "Priority" },
  { id: 2, name: "Elena Rossi", vehicle: "Lamborghini Revuelto", date: "15 mins ago", status: "Pending" },
  { id: 3, name: "Julian Vane", vehicle: "Porsche 911 GT3 RS", date: "1 hour ago", status: "Closed" },
  { id: 4, name: "Sophia Chen", vehicle: "Mercedes-AMG G 63", date: "3 hours ago", status: "Pending" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [inventory, setInventory] = useState(initialVehicles);
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [isAddingVehicle, setIsAddingVehicle] = useState(false);
  const [newVehicle, setNewVehicle] = useState({ name: "", brand: "", price: "", year: "", category: "Luxury" });

  const handleDeleteVehicle = (id: string) => {
    setInventory(inventory.filter(v => v.id !== id));
    toast.success("Vehicle removed from inventory.");
  };

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    if(!newVehicle.name || !newVehicle.price) {
      toast.error("Please fill required fields.");
      return;
    }
    const vehicle = {
      id: Math.random().toString(36).substr(2, 9),
      ...newVehicle,
      price: parseInt(newVehicle.price) || 0,
      images: ["https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop"],
      hp: "TBD", acceleration: "TBD", topSpeed: "TBD", engine: "TBD", mileage: 0, description: "New vehicle added."
    };
    setInventory([vehicle as any, ...inventory]);
    setIsAddingVehicle(false);
    setNewVehicle({ name: "", brand: "", price: "", year: "", category: "Luxury" });
    toast.success("Vehicle successfully added to inventory.");
  };

  const handleStatusChange = (id: number, status: string) => {
    setInquiries(inquiries.map(iq => iq.id === id ? { ...iq, status } : iq));
    toast.success("Inquiry status updated.");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Sidebar */}
      <aside className="lg:w-64 space-y-2">
        {[
          { id: 'overview', name: 'Overview', icon: LayoutDashboard },
          { id: 'inventory', name: 'Inventory Management', icon: Database },
          { id: 'inquiries', name: 'Inquiries', icon: MessageSquare },
          { id: 'settings', name: 'Settings', icon: SettingsIcon },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 p-4 rounded-xl text-xs tracking-widest uppercase font-bold transition-all ${
              activeTab === tab.id ? 'bg-luxury-gold text-black' : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            <tab.icon size={18} /> {tab.name}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-10"
          >
            {activeTab === 'overview' && (
              <>
                <div>
                  <h1 className="text-4xl font-serif mb-2">Executive Overview</h1>
                  <p className="text-white/40 text-sm tracking-widest uppercase">Performance metrics and recent activity</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, i) => (
                    <div key={stat.name} className="bg-luxury-charcoal/50 border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:border-luxury-gold/30 transition-all">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/5 rounded-xl"><stat.icon size={24} className="text-luxury-gold" /></div>
                        <div className={cn("flex items-center gap-1 text-xs font-bold", stat.trendingUp ? "text-green-500" : "text-red-500")}>
                          {stat.change} {stat.trendingUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        </div>
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2">{stat.name}</p>
                        <h3 className="text-3xl font-serif">{stat.value}</h3>
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-luxury-gold/5 blur-3xl rounded-full" />
                    </div>
                  ))}
                </div>

                <div className="bg-luxury-charcoal/30 border border-white/5 rounded-2xl p-8">
                  <h3 className="text-xl font-serif mb-8">Recent Inquiries</h3>
                  <div className="space-y-4">
                    {inquiries.slice(0, 3).map((inquiry) => (
                      <div key={inquiry.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-luxury-gold font-bold">
                            {inquiry.name[0]}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold">{inquiry.name}</h4>
                            <p className="text-[10px] text-white/40 tracking-wider uppercase">{inquiry.vehicle}</p>
                          </div>
                        </div>
                        <span className={cn("text-[8px] tracking-[0.2em] uppercase px-3 py-1 rounded border", inquiry.status === 'Priority' ? "border-red-500 text-red-500 bg-red-500/10" : "border-luxury-gold text-luxury-gold bg-luxury-gold/10")}>
                          {inquiry.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'inventory' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-serif">Inventory Management</h2>
                  <button onClick={() => setIsAddingVehicle(!isAddingVehicle)} className="gold-button px-6 py-3 text-[10px] flex items-center gap-2">
                    <Plus size={14} /> Add Vehicle
                  </button>
                </div>

                {isAddingVehicle && (
                  <form onSubmit={handleAddVehicle} className="bg-luxury-charcoal/30 p-8 border border-white/10 rounded-2xl space-y-6">
                    <h3 className="text-lg font-serif text-luxury-gold">New Vehicle Entry</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" placeholder="Vehicle Name" value={newVehicle.name} onChange={e => setNewVehicle({...newVehicle, name: e.target.value})} className="bg-white/5 border border-white/10 p-4 text-xs tracking-widest outline-none" required />
                      <input type="text" placeholder="Brand" value={newVehicle.brand} onChange={e => setNewVehicle({...newVehicle, brand: e.target.value})} className="bg-white/5 border border-white/10 p-4 text-xs tracking-widest outline-none" required />
                      <input type="number" placeholder="Price ($)" value={newVehicle.price} onChange={e => setNewVehicle({...newVehicle, price: e.target.value})} className="bg-white/5 border border-white/10 p-4 text-xs tracking-widest outline-none" required />
                      <select value={newVehicle.category} onChange={e => setNewVehicle({...newVehicle, category: e.target.value})} className="bg-white/5 border border-white/10 p-4 text-xs tracking-widest outline-none appearance-none">
                        <option className="bg-luxury-black">Luxury</option>
                        <option className="bg-luxury-black">Sports</option>
                        <option className="bg-luxury-black">Hypercar</option>
                      </select>
                    </div>
                    <div className="flex gap-4">
                      <button type="submit" className="bg-white text-black px-8 py-3 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-luxury-gold transition-colors">Save Vehicle</button>
                      <button type="button" onClick={() => setIsAddingVehicle(false)} className="px-8 py-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors">Cancel</button>
                    </div>
                  </form>
                )}

                <div className="bg-luxury-charcoal/30 border border-white/5 rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-white/5 text-[10px] tracking-[0.3em] uppercase text-white/40">
                        <tr>
                          <th className="p-6">Vehicle</th>
                          <th className="p-6">Category</th>
                          <th className="p-6">Price</th>
                          <th className="p-6 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {inventory.map((vehicle: any) => (
                          <tr key={vehicle.id} className="hover:bg-white/5 transition-colors">
                            <td className="p-6 flex items-center gap-4">
                              <img src={vehicle.images[0]} alt={vehicle.name} className="w-16 h-10 object-cover rounded" />
                              <div>
                                <p className="font-bold text-sm">{vehicle.name}</p>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest">{vehicle.brand} • {vehicle.year}</p>
                              </div>
                            </td>
                            <td className="p-6 text-xs uppercase tracking-widest">{vehicle.category}</td>
                            <td className="p-6 font-serif">{formatPrice(vehicle.price)}</td>
                            <td className="p-6">
                              <div className="flex justify-end gap-3">
                                <button className="p-2 text-white/40 hover:text-luxury-gold transition-colors"><Edit size={16} /></button>
                                <button onClick={() => handleDeleteVehicle(vehicle.id)} className="p-2 text-white/40 hover:text-red-500 transition-colors"><Trash size={16} /></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'inquiries' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-serif">Inquiry Management</h2>
                <div className="bg-luxury-charcoal/30 border border-white/5 rounded-2xl overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-white/5 text-[10px] tracking-[0.3em] uppercase text-white/40">
                      <tr>
                        <th className="p-6">Client</th>
                        <th className="p-6">Vehicle of Interest</th>
                        <th className="p-6">Date</th>
                        <th className="p-6">Status</th>
                        <th className="p-6 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {inquiries.map((iq) => (
                        <tr key={iq.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-6 font-bold text-sm">{iq.name}</td>
                          <td className="p-6 text-xs text-white/60 tracking-wider uppercase">{iq.vehicle}</td>
                          <td className="p-6 text-xs text-white/40">{iq.date}</td>
                          <td className="p-6">
                            <select 
                              value={iq.status} 
                              onChange={(e) => handleStatusChange(iq.id, e.target.value)}
                              className="bg-black border border-white/20 text-[10px] tracking-widest uppercase p-2 outline-none"
                            >
                              <option>Pending</option>
                              <option>Priority</option>
                              <option>Closed</option>
                            </select>
                          </td>
                          <td className="p-6 text-right">
                            <a href={`https://wa.me/2347025731925?text=Hello%20${iq.name.split(' ')[0]}`} target="_blank" rel="noreferrer" className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#25D366] hover:text-white transition-colors">
                              WhatsApp
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6 max-w-2xl">
                <h2 className="text-3xl font-serif">Platform Settings</h2>
                <div className="bg-luxury-charcoal/30 border border-white/5 rounded-2xl p-8 space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Admin Email</label>
                    <input type="email" defaultValue="admin@viccautos.com" className="w-full bg-white/5 border border-white/10 p-4 text-xs outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">WhatsApp Concierge Number</label>
                    <input type="text" defaultValue="+2347025731925" className="w-full bg-white/5 border border-white/10 p-4 text-xs outline-none" />
                  </div>
                  <button onClick={() => toast.success("Settings saved.")} className="gold-button px-8 py-4 text-[10px]">Save Configuration</button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
