import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section className="py-32 relative overflow-hidden flex justify-center border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-core/5 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Stop applying manually.<br /> Let <span className="text-gradient-orange">AI</span> do it.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Join early users saving hours daily. Set up your profile in 5 minutes and let ApplyOS fill your interview pipeline.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button className="bg-gradient-orange text-white px-10 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-orange-glow mx-auto group">
            Start Applying Now 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
