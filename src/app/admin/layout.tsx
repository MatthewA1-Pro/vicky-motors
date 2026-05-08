"use client";

import { LayoutDashboard, Car, Users, MessageSquare, BarChart3, Settings, LogOut, Bell, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Inventory", href: "/admin/inventory", icon: Car },
  { name: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-luxury-black overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 bg-luxury-charcoal/50 flex flex-col">
        <div className="p-8">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-serif tracking-[0.2em] font-bold uppercase">VICC AUTOS</span>
            <span className="text-[9px] tracking-[0.4em] text-luxury-gold font-sans uppercase -mt-1 ml-1">
              Admin Portal
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-4 px-6 py-4 rounded-xl text-sm font-medium transition-all group",
                pathname === link.href 
                  ? "bg-luxury-gold text-black" 
                  : "text-white/40 hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon size={20} className={cn(
                pathname === link.href ? "text-black" : "text-luxury-gold group-hover:text-white transition-colors"
              )} />
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="p-8 mt-auto border-t border-white/5">
          <button className="flex items-center gap-4 px-6 py-4 w-full text-sm font-medium text-white/40 hover:text-red-500 transition-colors">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 px-10 flex items-center justify-between bg-luxury-black/50 backdrop-blur-md z-10">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-lg w-96">
            <Search size={18} className="text-white/30" />
            <input 
              type="text" 
              placeholder="Search administration..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-white/20"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-white/40 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-luxury-gold rounded-full" />
            </button>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Alexander Vance</p>
                <p className="text-[10px] text-luxury-gold tracking-widest uppercase">Director</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center text-black font-bold">
                AV
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-10 bg-[#050505]">
          {children}
        </div>
      </main>
    </div>
  );
}
