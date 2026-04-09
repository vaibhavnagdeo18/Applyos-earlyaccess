import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { PlayCircle, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';

export default function Hero() {
  const [terminalLines, setTerminalLines] = useState(0);

  useEffect(() => {
    // Sequence the terminal output
    const sequence = [
      800,  // start
      2000, // found jobs
      3500, // letters
      5000, // applied
      6500, // scheduled
      8000  // complete
    ];

    sequence.forEach((delay, index) => {
      setTimeout(() => setTerminalLines(index + 1), delay);
    });
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-core/20 blur-[120px] rounded-full pointer-events-none opacity-20 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          
          {/* Left Side: Copy */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-core animate-pulse"></span>
              <span className="text-xs font-medium text-gray-300">Agent V2.0 is now live</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              Your AI Agent That <span className="text-gradient-orange">Applies to Jobs</span> For You
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed"
            >
              Find jobs, generate tailored applications, and apply automatically — all while you sleep.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-orange text-white px-8 py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-orange-glow">
                Get Started Free <ChevronRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <PlayCircle className="w-5 h-5 text-gray-400" /> Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Right Side: Terminal UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full"
          >
            <div className="glass-panel overflow-hidden rounded-2xl shadow-2xl relative bg-[#0a0a0d] border border-white/10">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 text-xs font-mono text-gray-500">
                  <Terminal className="w-3 h-3" /> applyos-agent
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm md:text-base leading-relaxed min-h-[300px] flex flex-col gap-3">
                {terminalLines >= 1 && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-gray-400">
                    <span className="text-orange-core mr-2">❯</span>
                    Starting ApplyOS Agent...
                  </motion.div>
                )}
                
                {terminalLines >= 2 && (
                  <motion.div initial={{opacity:0, x: -10}} animate={{opacity:1, x:0}} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500/80" />
                    Found 28 matching jobs
                  </motion.div>
                )}

                {terminalLines >= 3 && (
                  <motion.div initial={{opacity:0, x: -10}} animate={{opacity:1, x:0}} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500/80" />
                    Generated 28 cover letters
                  </motion.div>
                )}

                {terminalLines >= 4 && (
                  <motion.div initial={{opacity:0, x: -10}} animate={{opacity:1, x:0}} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500/80" />
                    Applied to 22 jobs
                  </motion.div>
                )}

                {terminalLines >= 5 && (
                  <motion.div initial={{opacity:0, x: -10}} animate={{opacity:1, x:0}} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-core" />
                    3 interviews scheduled
                  </motion.div>
                )}

                {terminalLines >= 6 && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.5}} className="mt-4 pt-4 border-t border-white/5 text-gray-500 text-xs">
                    Agent completed in 2m 14s. System standing by.
                    <span className="inline-block w-2 h-4 bg-orange-core ml-2 animate-pulse align-middle"></span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
