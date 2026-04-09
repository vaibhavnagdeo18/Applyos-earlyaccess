import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, FileSignature, TrendingUp } from "lucide-react";

export const BouncyCardsFeatures = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-24 text-white">
      <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-2xl text-4xl font-bold md:text-5xl tracking-tight leading-tight">
          Complete automation with our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#ffcd75]"> intelligent agent</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-white/10 border border-white/20 px-6 py-3 font-medium text-white shadow-xl transition-colors hover:bg-white/20 backdrop-blur-md"
        >
          View All Features
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>AI Job Agent</CardTitle>
          <p className="text-center text-zinc-400 mt-2 max-w-xs mx-auto text-sm md:text-base">Automatically finds and applies to relevant jobs daily.</p>
          <div className="absolute bottom-0 left-4 right-4 top-36 translate-y-8 rounded-t-2xl bg-gradient-to-br from-[#FF5A1F]/20 to-[#FF5A1F]/5 border-t border-l border-r border-[#FF5A1F]/20 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] backdrop-blur-md flex flex-col items-center justify-center">
            <Sparkles className="w-12 h-12 text-[#FF5A1F] mb-3 opacity-80" />
            <span className="block text-center font-bold text-white tracking-wide">
              50+ Apps Daily
            </span>
          </div>
        </BounceCard>
        
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Smart Matching</CardTitle>
          <p className="text-center text-zinc-400 mt-2 max-w-sm mx-auto text-sm md:text-base">Scores and ranks job descriptions purely based on your unique profile.</p>
          <div className="absolute bottom-0 left-4 right-4 top-36 translate-y-8 rounded-t-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/5 border-t border-l border-r border-indigo-500/20 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] backdrop-blur-md flex items-center justify-center gap-8 overflow-hidden">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-indigo-500/30 flex items-center justify-center bg-indigo-500/10">
              <span className="text-3xl sm:text-4xl font-bold text-indigo-400">98%</span>
              <BrainCircuit className="absolute -top-3 -right-3 w-10 h-10 text-indigo-500 opacity-60" />
            </div>
            <div className="hidden sm:block text-left text-indigo-100 font-medium max-w-xs">
              <span className="block text-xl font-bold text-white mb-1">Perfect Fit</span>
              Matches skills, experience, and salary expectations instantly.
            </div>
          </div>
        </BounceCard>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Auto Cover Letters</CardTitle>
          <p className="text-center text-zinc-400 mt-2 max-w-sm mx-auto text-sm md:text-base">Generates highly personalized applications for every single role.</p>
          <div className="absolute bottom-0 left-4 right-4 top-36 translate-y-8 rounded-t-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/5 border-t border-l border-r border-emerald-500/20 p-6 sm:p-8 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] backdrop-blur-md">
            <div className="flex items-center gap-4 mb-5">
              <FileSignature className="w-8 h-8 text-emerald-400" />
              <span className="text-lg font-bold text-emerald-50">Generated Cover Letter</span>
            </div>
            <div className="space-y-3 opacity-60">
              <div className="h-2.5 w-3/4 bg-emerald-100/20 rounded-full"></div>
              <div className="h-2.5 w-full bg-emerald-100/20 rounded-full"></div>
              <div className="h-2.5 w-5/6 bg-emerald-100/20 rounded-full"></div>
            </div>
          </div>
        </BounceCard>
        
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Learns Over Time</CardTitle>
          <p className="text-center text-zinc-400 mt-2 max-w-xs mx-auto text-sm md:text-base">Improves selection criteria automatically based on feedback.</p>
          <div className="absolute bottom-0 left-4 right-4 top-36 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/5 border-t border-l border-r border-amber-500/20 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] backdrop-blur-md flex flex-col items-center justify-center">
            <TrendingUp className="w-12 h-12 text-amber-400 mb-3 opacity-80" />
            <span className="block text-center font-bold text-white tracking-wide">
              4x Higher Success
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.98, rotate: "-1deg" }}
      className={`group relative min-h-[350px] cursor-pointer overflow-hidden rounded-3xl bg-white/[0.03] border border-white/[0.05] p-8 shadow-2xl hover:border-white/10 hover:bg-white/[0.05] transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-2xl font-bold tracking-tight text-white">{children}</h3>
  );
};
