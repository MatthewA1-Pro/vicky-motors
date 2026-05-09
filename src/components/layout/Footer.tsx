"use client";

import Link from "next/link";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaXTwitter, 
  FaLinkedinIn, 
  FaTiktok, 
  FaTelegram,
  FaWhatsapp 
} from "react-icons/fa6";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const socialLinks = [
    { Icon: FaInstagram, href: "https://instagram.com/viccautos", label: "Instagram", color: "hover:text-[#E4405F] hover:border-[#E4405F]/50" },
    { Icon: FaFacebookF, href: "https://facebook.com/viccautos", label: "Facebook", color: "hover:text-[#1877F2] hover:border-[#1877F2]/50" },
    { Icon: FaXTwitter, href: "https://x.com/viccautos", label: "X (Twitter)", color: "hover:text-white hover:border-white/50" },
    { Icon: FaYoutube, href: "https://youtube.com/viccautos", label: "YouTube", color: "hover:text-[#FF0000] hover:border-[#FF0000]/50" },
    { Icon: FaTiktok, href: "https://tiktok.com/@viccautos", label: "TikTok", color: "hover:text-[#00F2EA] hover:border-[#00F2EA]/50" },
    { Icon: FaLinkedinIn, href: "https://linkedin.com/company/viccautos", label: "LinkedIn", color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50" },
    { Icon: FaTelegram, href: "https://t.me/viccautos", label: "Telegram", color: "hover:text-[#26A5E4] hover:border-[#26A5E4]/50" },
  ];

  return (
    <footer className="bg-luxury-obsidian border-t border-white/5 pt-32 pb-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-12">
            <Link href="/" className="group flex items-center">
              <div className="relative h-24 w-64 transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="/logo.png" 
                  alt="VICC Autos Official Logo" 
                  className="w-full h-full object-contain brightness-125"
                />
                <div className="absolute inset-0 bg-luxury-gold blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </div>
            </Link>
            <p className="text-white/40 text-lg leading-relaxed max-w-md font-light">
              Curating the world's most exceptional automotive masterpieces for the most discerning collectors since 1998.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ Icon, href, label, color }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label={label}
                  className={cn(
                    "w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group relative overflow-hidden",
                    color
                  )}
                >
                  <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <Icon size={18} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-md bg-current transition-opacity duration-500" />
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
                  <Link href="tel:+2347025731925" className="block text-sm hover:text-luxury-gold transition-colors">+234 702 573 1925</Link>
                  <Link href="mailto:olamilekanjohn@gmail.com" className="block text-sm hover:text-luxury-gold transition-colors">olamilekanjohn@gmail.com</Link>
                  <a href="https://wa.me/2347025731925?text=Hello%2C%20I%20would%20like%20to%20make%20a%20general%20inquiry." target="_blank" rel="noreferrer" className="block text-sm hover:text-luxury-gold transition-all text-[#25D366] flex items-center gap-2 mt-2 group">
                    <FaWhatsapp size={16} className="group-hover:scale-110 transition-transform" /> Chat on WhatsApp
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
