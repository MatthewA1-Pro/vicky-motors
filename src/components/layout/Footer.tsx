import Link from "next/link";
import { Camera, Send, MessageCircle, Play, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col">
              <span className="text-3xl font-serif tracking-[0.2em] font-bold uppercase">LUXE</span>
              <span className="text-[10px] tracking-[0.5em] text-luxury-silver font-sans uppercase -mt-1 ml-1">
                Auto Gallery
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-light">
              Redefining the standard of luxury automotive excellence. Discover an exclusive collection of the world's most prestigious vehicles.
            </p>
            <div className="flex space-x-5">
              {[Camera, MessageCircle, Play, Send].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-all">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-gold font-serif text-lg tracking-widest mb-8 uppercase">Showroom</h4>
            <ul className="space-y-4">
              {["Inventory", "Featured", "Latest Arrivals", "Pre-owned", "Special Editions"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white transition-colors tracking-wide text-sm uppercase">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-luxury-gold font-serif text-lg tracking-widest mb-8 uppercase">Experience</h4>
            <ul className="space-y-4">
              {["About Us", "Our Services", "Financing", "Test Drive", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white transition-colors tracking-wide text-sm uppercase">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-luxury-gold font-serif text-lg tracking-widest mb-8 uppercase">Contact</h4>
            <div className="flex items-start space-x-4">
              <MapPin size={20} className="text-luxury-gold flex-shrink-0 mt-1" />
              <p className="text-white/60 text-sm leading-relaxed">
                725 5th Ave, New York,<br />NY 10022, United States
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={20} className="text-luxury-gold flex-shrink-0" />
              <p className="text-white/60 text-sm">+1 (800) LUXE-AUTO</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail size={20} className="text-luxury-gold flex-shrink-0" />
              <p className="text-white/60 text-sm">sales@luxeauto.com</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-y border-white/5 py-12 mb-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-serif mb-2">Join the Inner Circle</h3>
            <p className="text-white/40 text-sm tracking-wide">Subscribe for exclusive updates on rare arrivals and events.</p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS"
              className="bg-transparent border border-white/10 px-6 py-4 w-full sm:w-80 focus:outline-none focus:border-luxury-gold text-xs tracking-[0.2em] transition-colors"
            />
            <button className="bg-luxury-gold text-black font-bold text-xs tracking-[0.3em] px-10 py-4 hover:bg-white transition-colors uppercase">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] tracking-[0.3em] text-white/30 uppercase">
          <p>&copy; {currentYear} LUXE AUTO GALLERY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
