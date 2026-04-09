import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-darker/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
          <span className="font-extrabold text-2xl tracking-tight text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Applyos<span className="text-[#FF5A1F]">.</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How it Works</a>
          <a href="#testimonials" className="text-sm text-gray-400 hover:text-white transition-colors">Wall of Love</a>
        </div>
        <div>
          <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-orange-subtle hover:shadow-orange-glow hover:border-orange-core/30">
            Get Started Free
          </button>
        </div>
      </div>
    </nav>
  );
}
