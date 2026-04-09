import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Play, 
  Target, 
  CheckCircle2,
  Terminal,
  Bot,
  Briefcase,
  Send,
  CalendarDays,
  TrendingUp,
  Globe,
  BriefcaseBusiness,
  LayoutTemplate,
  Building,
  Building2
} from "lucide-react";

// --- PLATFORMS SIMULATING TECH LOGOS ---
const PLATFORMS = [
  { name: "LinkedIn", icon: Building2 },
  { name: "Wellfound", icon: Globe },
  { name: "Y Combinator", icon: LayoutTemplate },
  { name: "Internshala", icon: BriefcaseBusiness },
  { name: "Unstop", icon: Target },
  { name: "Google Jobs", icon: Building },
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label, icon: Icon }: { value: string | React.ReactNode; label: string; icon?: React.ElementType }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default bg-white/[0.02] p-4 rounded-xl border border-white/5">
    {Icon && <Icon className="w-4 h-4 text-zinc-500 mb-2" />}
    <span className="text-2xl font-bold text-white sm:text-3xl mb-1 tracking-tight">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-[11px] text-center leading-tight">{label}</span>
  </div>
);

// --- MAIN COMPONENT ---
export default function HeroSection() {
  const [terminalLines, setTerminalLines] = useState<number>(0);

  useEffect(() => {
    // Typing and progressive reveal sequence
    const sequence = [800, 2000, 3500, 5000, 6500];
    sequence.forEach((delay, index) => {
      setTimeout(() => setTerminalLines(index + 1), delay);
    });
  }, []);

  return (
    <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans pt-12">
      {/* 
        SCOPED ANIMATIONS 
      */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes shine {
          from { background-position: 200% center; }
          to { background-position: -200% center; }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 4s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Abstract Background Blurs for Depth */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 h-[800px] w-[800px] rounded-full bg-[#FF5A1F] blur-[200px] opacity-[0.10] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-[600px] w-[600px] rounded-full bg-[#FF5A1F] blur-[150px] opacity-[0.08] mix-blend-screen pointer-events-none" />

      {/* Background Image with Gradient Mask (Optional, keeping structural consistency) */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-10"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-28 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            
            {/* Badge */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse"></span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  AI Job Application Agent
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 
              className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1]"
            >
              Your AI Agent<br />That <span className="bg-gradient-to-br from-[#FF5A1F] via-[#ff8a5c] to-[#FF5A1F] bg-clip-text text-transparent animate-shine">Applies to Jobs</span><br />For You
            </h1>

            {/* Description */}
            <p className="animate-fade-in delay-300 max-w-lg text-lg text-zinc-400 leading-relaxed font-light">
              ApplyOS finds jobs, generates tailored applications, and applies automatically — all while you sleep.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
              <button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#ff8a5c] px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(255,90,31,0.25)] hover:shadow-[0_0_40px_rgba(255,90,31,0.4)] active:scale-[0.98]">
                Start Applying Free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20">
                <Play className="w-4 h-4 text-zinc-400 fill-zinc-400 group-hover:text-white" />
                Watch Demo
              </button>
            </div>

            {/* Features Pills */}
            <div className="animate-fade-in delay-500 pt-4 flex flex-wrap gap-2.5">
              {['Auto Apply', 'Smart Matching', 'AI Cover Letters', 'Learns Over Time'].map((feature, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-400 transition-colors hover:bg-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A1F]" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-6 space-y-6 lg:mt-6">
            
            {/* Stats/Dashboard Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-[#080808]/80 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-[#FF5A1F]/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5A1F]/10 ring-1 ring-[#FF5A1F]/20">
                      <Bot className="h-5 w-5 text-[#FF5A1F]" />
                    </div>
                    <div>
                      <div className="font-extrabold tracking-tight text-white flex items-center text-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        Applyos<span className="text-[#FF5A1F]">.</span> <span className="font-semibold text-zinc-300 ml-1 font-sans">Pipeline</span>
                      </div>
                      <div className="text-xs text-zinc-500 font-medium mt-0.5">Fully Autonomous</div>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5A1F]/20 bg-[#FF5A1F]/10 px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-wider text-[#FF5A1F]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A1F] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A1F]"></span>
                    </span>
                    AGENT RUNNING
                  </div>
                </div>

                {/* Progress Bar Section */}
                <div className="space-y-3 mb-8 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                  <div className="flex justify-between text-xs sm:text-sm font-medium">
                    <span className="text-zinc-400">Daily Goal Progress</span>
                    <span className="text-[#FF5A1F] font-bold">88%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/80">
                    <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#ff8a5c] relative">
                       {/* Animated pattern over progress bar */}
                       <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[shine_2s_linear_infinite]" style={{backgroundSize: '20px 20px', animation: 'marquee 1.5s linear infinite'}}></div>
                    </div>
                  </div>
                </div>

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                  <StatItem value="28" label="Jobs Found" icon={Briefcase} />
                  <StatItem value="22" label="Apps Sent" icon={Send} />
                  <StatItem value="3" label="Interviews" icon={CalendarDays} />
                  <StatItem 
                    value={<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#ffcd75]">18%</span>} 
                    label="Success Rate" 
                    icon={TrendingUp} 
                  />
                </div>

                {/* Terminal Window */}
                <div className="bg-black/60 rounded-xl border border-white/5 p-4 font-mono text-xs sm:text-sm shadow-inner overflow-hidden">
                  <div className="flex items-center gap-2 text-zinc-500 mb-3 border-b border-white/5 pb-2 uppercase tracking-widest text-[10px] font-bold">
                    <Terminal className="w-3.5 h-3.5" /> applyos.log
                  </div>
                  <div className="flex flex-col gap-2.5 min-h-[140px] pt-1">
                    {terminalLines >= 1 && (
                      <div className="text-zinc-400 animate-in fade-in duration-500">
                        <span className="text-[#FF5A1F] mr-2">❯</span>
                        Starting ApplyOS Agent...
                      </div>
                    )}
                    {terminalLines >= 2 && (
                      <div className="flex items-center gap-2 text-zinc-300 animate-fade-in delay-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Found 28 matching jobs
                      </div>
                    )}
                    {terminalLines >= 3 && (
                      <div className="flex items-center gap-2 text-zinc-300 animate-fade-in delay-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Generated 28 cover letters
                      </div>
                    )}
                    {terminalLines >= 4 && (
                      <div className="flex items-center gap-2 text-zinc-300 animate-fade-in delay-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Applied to 22 jobs
                      </div>
                    )}
                    {terminalLines >= 5 && (
                      <div className="flex items-center gap-2 text-white font-semibold animate-fade-in delay-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A1F]" /> 3 interviews scheduled
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* Marquee Platform Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] py-6 backdrop-blur-xl">
              <h3 className="mb-5 px-8 text-xs font-semibold text-zinc-500 uppercase tracking-widest text-center">Replaces manual applying on</h3>
              
              <div 
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4 w-max">
                  {/* Triple list for seamless horizontal scroll */}
                  {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((platform, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2.5 opacity-40 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                    >
                      <platform.icon className="h-5 w-5 text-zinc-300" />
                      <span className="text-base font-bold text-zinc-300 tracking-tight">
                        {platform.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
