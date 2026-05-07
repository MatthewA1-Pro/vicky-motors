"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Hypercars: Hybrid Power Unleashed",
    excerpt: "Exploring how electrification is redefining performance in the most exclusive automotive segment.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop",
    date: "May 15, 2026",
    author: "Julian Vane",
    category: "Insights"
  },
  {
    id: 2,
    title: "The Art of Restoration: Reviving Legends",
    excerpt: "A behind-the-scenes look at our master technicians' process for classic prestige car restoration.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop",
    date: "May 10, 2026",
    author: "Alexander Vance",
    category: "Craftsmanship"
  },
  {
    id: 3,
    title: "Rolls-Royce Spectre: A New Chapter in Luxury",
    excerpt: "Our first driving impressions of the most anticipated electric luxury coupe of the decade.",
    image: "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=1200&auto=format&fit=crop",
    date: "May 05, 2026",
    author: "Elena Rossi",
    category: "Reviews"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mb-24">
          <span className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold mb-6 block">Journal</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 leading-tight">Automotive <br /> <span className="italic">Perspective</span></h1>
          <p className="text-white/40 text-xl font-light leading-relaxed">
            Exclusive insights into the world of luxury automobiles, from engineering breakthroughs to investment trends.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-[21/9] overflow-hidden mb-32 group"
        >
          <img 
            src={blogPosts[0].image} 
            alt="Featured" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 max-w-2xl space-y-6">
            <span className="bg-luxury-gold text-black px-4 py-1 text-[10px] tracking-widest uppercase font-bold">Featured Story</span>
            <h2 className="text-4xl md:text-5xl font-serif">{blogPosts[0].title}</h2>
            <Link 
              href={`/blog/${blogPosts[0].id}`}
              className="inline-flex items-center gap-4 text-xs tracking-[0.4em] uppercase font-bold hover:text-luxury-gold transition-colors"
            >
              Read Full Article <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-32">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group space-y-8"
            >
              <div className="aspect-[4/3] overflow-hidden bg-zinc-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-[10px] tracking-widest uppercase text-white/40 font-bold">
                  <span className="flex items-center gap-2"><Tag size={12} className="text-luxury-gold" /> {post.category}</span>
                  <span className="flex items-center gap-2"><Clock size={12} className="text-luxury-gold" /> {post.date}</span>
                </div>
                <h3 className="text-2xl font-serif group-hover:text-luxury-gold transition-colors leading-tight">{post.title}</h3>
                <p className="text-white/40 font-light leading-relaxed line-clamp-2">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase font-bold text-luxury-gold hover:text-white transition-colors pt-4"
                >
                  Continue Reading <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
