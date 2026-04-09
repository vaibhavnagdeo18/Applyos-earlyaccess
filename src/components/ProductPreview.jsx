import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

export default function ProductPreview() {
  const mockJobs = [
    { title: "Frontend Engineer", company: "Vercel", location: "Remote", score: 98, status: "Auto-applied" },
    { title: "React Developer", company: "Stripe", location: "San Francisco", score: 94, status: "Auto-applied" },
    { title: "Full Stack Engineer", company: "Linear", location: "Remote", score: 91, status: "Applying..." },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-core/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">See exactly what the agent is doing.</h2>
          <p className="text-gray-400 md:text-lg">Clean, transparent dashboard to track every application.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-2 md:p-4 rounded-3xl border border-white/10 shadow-2xl relative"
        >
          {/* Mac window header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ED6A5E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F4BF4F]"></div>
              <div className="w-3 h-3 rounded-full bg-[#61C554]"></div>
            </div>
            <div className="mx-auto flex gap-6 text-sm font-medium text-gray-500 pl-4 hidden md:flex">
              <span className="text-white">Dashboard</span>
              <span>Jobs Log</span>
              <span>Settings</span>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-4 md:p-8 bg-[#0a0a0a] rounded-2xl">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Activity Log</h3>
                <p className="text-sm text-gray-400">Your agent is currently active and scanning.</p>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-sm text-gray-400 mb-1">Total Applied</div>
                <div className="text-3xl font-bold text-white">1,248</div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {mockJobs.map((job, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors gap-4">
                  <div className="flex items-center gap-5">
                    {/* Score Circle */}
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-orange-core/30">
                      <span className="text-sm font-bold text-orange-core text-gradient-orange">{job.score}%</span>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{job.title}</h4>
                      <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                        <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {job.company}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {job.status === 'Applying...' ? (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span> {job.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400">
                        <CheckCircle className="w-3 h-3" /> {job.status}
                      </span>
                    )}
                    <button className="p-2 rounded-md hover:bg-white/10 text-gray-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
