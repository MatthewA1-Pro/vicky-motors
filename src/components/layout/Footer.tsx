"use client";

import Link from "next/link";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight,
  Globe
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-obsidian border-t border-white/5 pt-32 pb-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-12">
            <Link href="/" className="flex flex-col">
              <span className="text-4xl font-serif tracking-[0.3em] font-black uppercase">LUXE</span>
              <span className="text-[10px] tracking-[0.6em] text-luxury-gold uppercase -mt-1 ml-1 font-bold">Auto Gallery</span>
            </Link>
            <p className="text-white/40 text-lg leading-relaxed max-w-md font-light">
              Curating the world's most exceptional automotive masterpieces for the most discerning collectors since 1998.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Youtube, Globe].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-white/20 font-bold">Navigation</h4>
            <nav className="flex flex-col space-y-4">
              {["Showroom", "Heritage", "Experience", "Journal", "Concierge"].map((link) => (
                <Link key={link} href="#" className="text-sm font-medium hover:text-luxury-gold transition-colors">{link}</Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5 space-y-10">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-white/20 font-bold">Contact Us</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-[9px] tracking-widest uppercase text-luxury-gold font-bold">Global Headquarters</p>
                <p className="text-sm leading-relaxed text-white/60">
                  888 Prestige Boulevard<br />
                  Beverly Hills, CA 90210
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-[9px] tracking-widest uppercase text-luxury-gold font-bold">Direct Inquiries</p>
                <div className="space-y-2">
                  <Link href="tel:+18005550199" className="block text-sm hover:text-luxury-gold transition-colors">+1 (800) LUXE-AUTO</Link>
                  <Link href="mailto:concierge@luxeauto.com" className="block text-sm hover:text-luxury-gold transition-colors">concierge@luxeauto.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-bold">
            &copy; 2026 Luxe Auto Gallery. All Rights Reserved.
          </p>
          <div className="flex gap-12">
            <Link href="#" className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-bold hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-bold hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-bold hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
