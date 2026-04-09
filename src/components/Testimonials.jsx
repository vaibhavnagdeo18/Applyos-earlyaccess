import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Saved me hours every day. I used to dread applying, now I just wake up to interviews.",
      author: "Alex M.",
      role: "Software Engineer",
    },
    {
      quote: "Finally applying consistently. ApplyOS keeps my pipeline full without me lifting a finger.",
      author: "Sarah K.",
      role: "Product Manager",
    },
    {
      quote: "Feels like having a placement assistant. The tailored cover letters are incredibly accurate.",
      author: "David R.",
      role: "Data Scientist",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-bg-darker relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-orange-core uppercase mb-3">Wall of Love</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Don't just take our word for it.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between hover:bg-white/[0.04] transition-colors"
            >
              <div className="mb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-core" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">"{test.quote}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center text-white font-bold text-sm">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium">{test.author}</div>
                  <div className="text-gray-500 text-sm">{test.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
