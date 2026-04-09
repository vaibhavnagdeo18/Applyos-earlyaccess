import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: '3+ hrs', label: 'Saved daily' },
    { value: '50+', label: 'Applications automated' },
    { value: '1k+', label: 'Early users' },
    { value: '4x', label: 'Faster job search' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`text-center ${idx % 2 === 0 ? 'border-none md:border-l' : ''} ${idx === 0 ? '!border-none' : ''}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
