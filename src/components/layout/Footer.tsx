"use client";

import Link from "next/link";
import { 
  Camera, 
  Share2, 
  Play, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight,
  Globe,
  MessageSquare
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-obsidian border-t border-white/5 pt-32 pb-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-12">
            <Link href="/" className="flex flex-col">
              <span className="text-4xl font-serif tracking-[0.3em] font-black uppercase">VICC</span>
              <span className="text-[10px] tracking-[0.6em] text-luxury-gold uppercase -mt-1 ml-1 font-bold">Autos</span>
            </Link>
            <p className="text-white/40 text-lg leading-relaxed max-w-md font-light">
              Curating the world's most exceptional automotive masterpieces for the most discerning collectors since 1998.
            </p>
            <div className="flex gap-6">
              {[
                { Icon: Camera, href: "https://instagram.com/viccautos" },
                { Icon: Share2, href: "https://facebook.com/viccautos" },
                { Icon: Play, href: "https://youtube.com/viccautos" },
                { Icon: Globe, href: "https://viccautos.com" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-white/20 font-bold">Navigation</h4>
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Showroom", path: "/inventory" },
                { name: "Heritage", path: "/about" },
                { name: "Experience", path: "/services" },
                { name: "Journal", path: "/blog" },
                { name: "Concierge", path: "/contact" }
              ].map((link) => (
                <Link key={link.name} href={link.path} className="text-sm font-medium hover:text-luxury-gold transition-colors">{link.name}</Link>
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
                  <Link href="tel:+18005550199" className="block text-sm hover:text-luxury-gold transition-colors">+1 (800) VICC-AUTO</Link>
                  <Link href="mailto:concierge@viccautos.com" className="block text-sm hover:text-luxury-gold transition-colors">concierge@viccautos.com</Link>
                  <a href="https://wa.me/2347025731925?text=Hello%2C%20I%20would%20like%20to%20make%20a%20general%20inquiry." target="_blank" rel="noreferrer" className="block text-sm hover:text-luxury-gold transition-colors text-[#25D366] flex items-center gap-2 mt-2">
                    <MessageSquare size={14} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-bold">
            &copy; 2026 VICC AUTOS. All Rights Reserved.
          </p>
          <div className="flex gap-12">
            <Link href="/privacy" className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-bold hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-bold hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="text-[9px] tracking-[0.4em] uppercase text-white/20 font-bold hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
