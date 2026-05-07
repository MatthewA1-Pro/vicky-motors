"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Chrome, Apple } from "lucide-react";

export default function LoginPage() {
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
            <h1 className="text-4xl font-serif">Welcome Back</h1>
            <p className="text-white/40 text-sm tracking-widest uppercase">Enter your credentials to access your collection</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="email" 
                  placeholder="NAME@EXAMPLE.COM"
                  className="w-full bg-white/5 border border-white/10 px-14 py-4 text-xs tracking-[0.2em] focus:outline-none focus:border-luxury-gold transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold ml-1">Password</label>
                <Link href="#" className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold hover:text-white transition-colors">Forgot?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 px-14 py-4 text-xs tracking-[0.2em] focus:outline-none focus:border-luxury-gold transition-colors"
                />
              </div>
            </div>

            <button className="w-full bg-white text-black py-5 text-xs font-bold tracking-[0.4em] uppercase hover:bg-luxury-gold transition-all flex items-center justify-center gap-4 group">
              Sign In <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative flex items-center gap-4 py-4">
            <div className="flex-1 h-[1px] bg-white/10" />
            <span className="text-[8px] tracking-[0.4em] text-white/20 uppercase font-bold">Or continue with</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 border border-white/10 py-4 hover:bg-white/5 transition-colors text-[10px] tracking-widest uppercase font-bold">
              <Chrome size={16} /> Google
            </button>
            <button className="flex items-center justify-center gap-3 border border-white/10 py-4 hover:bg-white/5 transition-colors text-[10px] tracking-widest uppercase font-bold">
              <Apple size={16} /> Apple
            </button>
          </div>

          <p className="text-center text-[10px] tracking-[0.2em] text-white/40 uppercase">
            Don't have an account? <Link href="/auth/register" className="text-luxury-gold hover:text-white transition-colors">Create one</Link>
          </p>
        </motion.div>
      </div>

      {/* Right: Image */}
      <div className="hidden lg:block flex-1 relative overflow-hidden bg-zinc-900">
        <img 
          src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop" 
          alt="Login Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-luxury-black via-transparent to-transparent" />
        <div className="absolute bottom-20 left-20 max-w-sm space-y-4">
          <p className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold">Featured Listing</p>
          <h3 className="text-3xl font-serif">Porsche 911 GT3 RS</h3>
          <p className="text-white/60 text-sm leading-relaxed">Built for the track, refined for the road. The purest expression of Porsche motorsport DNA.</p>
        </div>
      </div>
    </div>
  );
}
