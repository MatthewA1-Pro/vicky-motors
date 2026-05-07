"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Globe, Command } from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        }
      }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      // Optional: router.push("/dashboard") if email confirmation is disabled
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Content */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20 lg:px-40 bg-luxury-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full mx-auto space-y-12"
        >
          <div className="space-y-4">
            <Link href="/" className="flex flex-col mb-12">
              <span className="text-3xl font-serif tracking-[0.2em] font-bold uppercase">LUXE</span>
              <span className="text-[10px] tracking-[0.5em] text-luxury-gold font-sans uppercase -mt-1 ml-1">
                Auto Gallery
              </span>
            </Link>
            <h1 className="text-4xl font-serif">Join the Inner Circle</h1>
            <p className="text-white/40 text-sm tracking-widest uppercase">Create an account for exclusive access</p>
          </div>

          <form className="space-y-6" onSubmit={handleRegister}>
            {error && <p className="text-red-500 text-xs tracking-widest uppercase">{error}</p>}
            {success && (
              <div className="bg-luxury-gold/10 border border-luxury-gold/20 p-6 space-y-2">
                <p className="text-luxury-gold text-xs tracking-widest uppercase font-bold">Registration Successful</p>
                <p className="text-white/60 text-[10px] tracking-widest uppercase">Please check your email to confirm your account before signing in.</p>
                <Link href="/auth/login" className="inline-block text-white text-[10px] tracking-widest uppercase underline mt-2">Go to Login</Link>
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ALEXANDER VANCE"
                  className="w-full bg-white/5 border border-white/10 px-14 py-4 text-xs tracking-[0.2em] focus:outline-none focus:border-luxury-gold transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="NAME@EXAMPLE.COM"
                  className="w-full bg-white/5 border border-white/10 px-14 py-4 text-xs tracking-[0.2em] focus:outline-none focus:border-luxury-gold transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 px-14 py-4 text-xs tracking-[0.2em] focus:outline-none focus:border-luxury-gold transition-colors"
                  required
                />
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-white text-black py-5 text-xs font-bold tracking-[0.4em] uppercase hover:bg-luxury-gold transition-all flex items-center justify-center gap-4 group"
            >
              {loading ? "CREATING ACCOUNT..." : "REGISTER"} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative flex items-center gap-4 py-4">
            <div className="flex-1 h-[1px] bg-white/10" />
            <span className="text-[8px] tracking-[0.4em] text-white/20 uppercase font-bold">Or register with</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 border border-white/10 py-4 hover:bg-white/5 transition-colors text-[10px] tracking-widest uppercase font-bold">
              <Globe size={16} /> Google
            </button>
            <button className="flex items-center justify-center gap-3 border border-white/10 py-4 hover:bg-white/5 transition-colors text-[10px] tracking-widest uppercase font-bold">
              <Command size={16} /> Apple
            </button>
          </div>

          <p className="text-center text-[10px] tracking-[0.2em] text-white/40 uppercase">
            Already have an account? <Link href="/auth/login" className="text-luxury-gold hover:text-white transition-colors">Sign in</Link>
          </p>
        </motion.div>
      </div>

      {/* Right: Image */}
      <div className="hidden lg:block flex-1 relative overflow-hidden bg-zinc-900">
        <img 
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop" 
          alt="Register Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-luxury-black via-transparent to-transparent" />
        <div className="absolute bottom-20 left-20 max-w-sm space-y-4">
          <p className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold">Bespoke Collection</p>
          <h3 className="text-3xl font-serif">Rolls-Royce Spectre</h3>
          <p className="text-white/60 text-sm leading-relaxed">The world's first ultra-luxury electric super coupé. A spiritual successor to the Phantom Coupé.</p>
        </div>
      </div>
    </div>
  );
}
