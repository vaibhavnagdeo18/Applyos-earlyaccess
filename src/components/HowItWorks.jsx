import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Zap, Target } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <UploadCloud className="w-8 h-8 text-white" />,
      title: "Upload your profile",
      desc: "Connect your resume, LinkedIn, and set your preferences once."
    },
    {
      num: "02",
      icon: <Target className="w-8 h-8 text-white" />,
      title: "AI finds & scores jobs",
      desc: "Our agent scrapes the web and scores roles out of 100 based on your fit."
    },
    {
      num: "03",
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Applies automatically",
      desc: "It personalizes answers, writes cover letters, and submits."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white/[0.02] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-orange-core uppercase mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">3 steps to complete automation</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Subtle connector line (hidden on mobile) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="relative text-center flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-8 relative z-10 mx-auto group">
                <div className="absolute inset-0 rounded-full border border-orange-core/20 bg-orange-core/5 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="text-gray-300 group-hover:text-orange-core transition-colors duration-300">
                  {step.icon}
                </div>
              </div>
              <div className="text-xs font-mono text-orange-core font-semibold tracking-widest mb-3">STEP {step.num}</div>
              <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-gray-400 text-sm md:text-base px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
