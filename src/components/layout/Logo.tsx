"use client";

import { motion } from "framer-motion";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 500 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Car Silhouette - Top Accent */}
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M80 90C150 40 350 50 450 100" 
          stroke="#cfb53b" 
          strokeWidth="4" 
          strokeLinecap="round"
        />
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          d="M100 100C160 60 330 65 420 105" 
          stroke="#cfb53b" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* Main Text VICC */}
        <motion.text
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          x="50%" 
          y="150" 
          textAnchor="middle" 
          className="font-serif"
          fill="url(#goldGradient)"
          style={{ 
            fontSize: '110px', 
            fontWeight: 900, 
            letterSpacing: '0.2em',
            filter: 'drop-shadow(0 0 10px rgba(207, 181, 59, 0.3))'
          }}
        >
          VICC
        </motion.text>
        
        {/* Subtitle AUTOS */}
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          x="50%" 
          y="185" 
          textAnchor="middle" 
          className="font-sans"
          fill="#cfb53b"
          style={{ 
            fontSize: '24px', 
            fontWeight: 700, 
            letterSpacing: '1.2em',
            textTransform: 'uppercase'
          }}
        >
          AUTOS
        </motion.text>

        {/* Gradients */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="50%" stopColor="#cfb53b" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
