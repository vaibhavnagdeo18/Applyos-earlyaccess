import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  PlayCircle, 
  ChevronRight, 
  Briefcase, 
  Send, 
  CalendarDays, 
  TrendingUp, 
  Bot, 
  GraduationCap,
  Users
} from 'lucide-react';

const Hero = () => {
  const [terminalLines, setTerminalLines] = useState<number>(0);

  useEffect(() => {
    // Typing and progressive reveal sequence
    const sequence = [800, 2000, 3500, 5000, 6500];
    sequence.forEach((delay, index) => {
      setTimeout(() => setTerminalLines(index + 1), delay);
    });
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-zinc-950 text-white font-sans">
      {/* Background & Effects */}
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      
      {/* Subtle Glow Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5A1F] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5A1F] rounded-full mix-blend-screen filter blur-[150px] opacity-10 hidden md:block"></div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy */}
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse"></span>
              <span className="text-xs font-medium text-zinc-300">AI Job Application Agent</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Your AI Agent That <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF5A1F] to-[#ff8a5c]">Applies to Jobs</span> For You
            </h1>

            {/* Subtext */}
            <p className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed">
              ApplyOS finds jobs, generates tailored applications, and applies automatically — all while you sleep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-[#FF5A1F] to-[#ff8a5c] text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-[0_0_30px_rgba(255,90,31,0.3)] hover:shadow-[0_0_40px_rgba(255,90,31,0.5)] hover:-translate-y-0.5">
                Start Applying Free <ChevronRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all hover:-translate-y-0.5">
                <PlayCircle className="w-5 h-5 text-zinc-400" /> Watch Demo
              </button>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap gap-3 mb-12">
              {['Auto Apply', 'Smart Matching', 'AI Cover Letters', 'Learns Over Time'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-zinc-800 text-xs text-zinc-400 transition-colors hover:border-zinc-600 hover:bg-white/10">
                  <CheckCircle2 className="w-3 h-3 text-[#FF5A1F]" /> {feature}
                </div>
              ))}
            </div>

            {/* Trust Section */}
            <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 pt-6 border-t border-white/5">
              <span>Trusted by students and early professionals</span>
              <div className="flex gap-3">
                <GraduationCap className="w-4 h-4" />
                <Users className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Side: Product Card UI */}
          <div className="w-full relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#FF5A1F]/20 to-transparent rounded-3xl blur-xl pb-10"></div>
            
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl hover:border-white/20 transition-colors">
              
              {/* Card Header */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#FF5A1F]" />
                  <span className="font-semibold text-zinc-200">ApplyOS Pipeline</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-pulse"></span>
                  <span className="text-xs font-medium text-[#FF5A1F] whitespace-nowrap">Agent Running</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-zinc-400 mb-2">
                    <Briefcase className="w-4 h-4" /> <span className="text-xs font-semibold uppercase tracking-wider">Jobs Found</span>
                  </div>
                  <div className="text-3xl font-bold text-white">28</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-zinc-400 mb-2">
                    <Send className="w-4 h-4" /> <span className="text-xs font-semibold uppercase tracking-wider">Apps Sent</span>
                  </div>
                  <div className="text-3xl font-bold text-white">22</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-zinc-400 mb-2">
                    <CalendarDays className="w-4 h-4" /> <span className="text-xs font-semibold uppercase tracking-wider">Interviews</span>
                  </div>
                  <div className="text-3xl font-bold text-white">3</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-zinc-400 mb-2">
                    <TrendingUp className="w-4 h-4" /> <span className="text-xs font-semibold uppercase tracking-wider">Success Rate</span>
                  </div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#ff8a5c]">18%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-zinc-400 mb-2">
                  <span className="font-medium">Daily Goal Progress</span>
                  <span className="text-[#FF5A1F] font-bold">88%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#FF5A1F] to-[#ff8a5c] w-[88%] rounded-full relative">
                    {/* Animated shine on progress bar */}
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[slide_1s_linear_infinite]"></div>
                  </div>
                </div>
              </div>

              {/* Terminal Section inside Card */}
              <div className="bg-zinc-950/80 rounded-xl border border-white/5 p-4 font-mono text-sm shadow-inner relative overflow-hidden">
                <div className="flex items-center gap-2 text-zinc-500 mb-3 text-xs border-b border-white/5 pb-2">
                  <Terminal className="w-3 h-3" /> applyos.log
                </div>
                <div className="flex flex-col gap-2 min-h-[140px]">
                  {terminalLines >= 1 && (
                    <div className="text-zinc-400 animate-in fade-in duration-500">
                      <span className="text-[#FF5A1F] mr-2">❯</span>
                      Starting ApplyOS Agent...
                    </div>
                  )}
                  {terminalLines >= 2 && (
                    <div className="flex items-center gap-2 text-zinc-300 animate-in slide-in-from-left-2 fade-in duration-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500/80" /> Found 28 jobs
                    </div>
                  )}
                  {terminalLines >= 3 && (
                    <div className="flex items-center gap-2 text-zinc-300 animate-in slide-in-from-left-2 fade-in duration-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500/80" /> Generated 28 cover letters
                    </div>
                  )}
                  {terminalLines >= 4 && (
                    <div className="flex items-center gap-2 text-zinc-300 animate-in slide-in-from-left-2 fade-in duration-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500/80" /> Applied to 22 jobs
                    </div>
                  )}
                  {terminalLines >= 5 && (
                    <div className="flex items-center gap-2 text-white font-medium animate-in slide-in-from-left-2 fade-in duration-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A1F]" /> 3 interviews scheduled
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Custom Global/Inline Animations if needed */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          from { background-position: 20px 0; }
          to { background-position: 0 0; }
        }
      `}} />
    </section>
  );
};

export default Hero;
