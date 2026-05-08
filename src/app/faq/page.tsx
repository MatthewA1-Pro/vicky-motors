"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "Financing",
    questions: [
      { q: "What financing options do you offer?", a: "We provide bespoke financial solutions including lease-to-own, traditional loans with competitive rates, and customized acquisition plans for international collectors." },
      { q: "Can I finance a vehicle from abroad?", a: "Yes, we specialize in cross-border transactions and can coordinate with international financial institutions to facilitate your acquisition." }
    ]
  },
  {
    category: "Acquisition & Delivery",
    questions: [
      { q: "How do you ensure vehicle quality?", a: "Every vehicle undergoes a meticulous 300-point technical and aesthetic inspection. We only source vehicles with verifiable histories and pristine provenance." },
      { q: "Do you offer enclosed transportation?", a: "Absolutely. All our deliveries, whether local or international, are performed using premium enclosed carriers to ensure your vehicle arrives in showroom condition." }
    ]
  },
  {
    category: "Ownership",
    questions: [
      { q: "Do you offer maintenance programs?", a: "Our VICC AUTOS Care program provides comprehensive maintenance packages, including factory-trained technicians and genuine manufacturer parts." },
      { q: "Can I trade in my current vehicle?", a: "We accept high-end trade-ins and consignments. Our specialists will provide a professional valuation based on current global market trends." }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggle = (idx: string) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="pt-32 bg-luxury-black min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mb-24">
          <span className="text-luxury-gold tracking-[0.4em] uppercase text-xs font-bold mb-6 block">Assistance</span>
          <h1 className="text-6xl font-serif mb-10 leading-tight">Common <br /> <span className="italic">Inquiries</span></h1>
          <p className="text-white/40 text-xl font-light leading-relaxed">
            Detailed information regarding our acquisition process, financial solutions, and world-class services.
          </p>
        </div>

        <div className="space-y-20 mb-32">
          {faqs.map((group, groupIdx) => (
            <div key={groupIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <h2 className="text-2xl font-serif text-luxury-gold tracking-widest uppercase">{group.category}</h2>
              </div>
              <div className="lg:col-span-8 space-y-4">
                {group.questions.map((faq, faqIdx) => {
                  const idx = `${groupIdx}-${faqIdx}`;
                  const isOpen = openIndex === idx;
                  return (
                    <div key={faqIdx} className="border-b border-white/5">
                      <button 
                        onClick={() => toggle(idx)}
                        className="w-full flex justify-between items-center py-8 text-left group"
                      >
                        <span className={`text-xl font-serif transition-colors ${isOpen ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                          {faq.q}
                        </span>
                        {isOpen ? <Minus size={20} className="text-luxury-gold" /> : <Plus size={20} className="text-white/20" />}
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-white/40 leading-relaxed font-light text-lg max-w-2xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="glass p-16 text-center space-y-8">
          <h3 className="text-3xl font-serif">Still Have Questions?</h3>
          <p className="text-white/40 max-w-xl mx-auto font-light">
            Our private concierges are available 24/7 to provide personalized assistance for all your requirements.
          </p>
          <button className="bg-luxury-gold text-black px-12 py-5 text-xs font-bold tracking-[0.3em] uppercase hover:bg-white transition-all">
            Contact Specialist
          </button>
        </div>
      </div>
    </div>
  );
}
