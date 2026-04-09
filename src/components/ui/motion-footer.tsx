import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ChevronRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES
// -------------------------------------------------------------------------
const STYLES = `

.cinematic-footer-wrapper {
  --pill-bg-1: rgba(255,255,255, 0.03);
  --pill-bg-2: rgba(255,255,255, 0.01);
  --pill-shadow: rgba(0,0,0, 0.5);
  --pill-highlight: rgba(255,255,255, 0.1);
  --pill-inset-shadow: rgba(0,0,0, 0.8);
  --pill-border: rgba(255,255,255, 0.08);
  
  --pill-bg-1-hover: rgba(255,255,255, 0.08);
  --pill-bg-2-hover: rgba(255,255,255, 0.02);
  --pill-border-hover: rgba(255,255,255, 0.2);
  --pill-shadow-hover: rgba(0,0,0, 0.7);
  --pill-highlight-hover: rgba(255,255,255, 0.2);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.1; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.3; }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(255, 90, 31, 0.5)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px rgba(255, 90, 31, 0.8)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(255,255,255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255, 0.03) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(255, 90, 31, 0.25) 0%, 
    rgba(255, 138, 92, 0.1) 40%, 
    transparent 70%
  );
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 20px 40px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
  color: #fff;
}

.footer-giant-bg-text {
  font-size: 24vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255, 0.03);
  background: linear-gradient(180deg, rgba(255,255,255, 0.08) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, #fff 0%, rgba(255,255,255, 0.4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px rgba(255,255,255, 0.15));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<any, any>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    },[]);

    const finalClassName = `cursor-pointer ${className || ''}`;

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={finalClassName}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [accessLevel, setAccessLevel] = useState<'granted' | 'queued' | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "15vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, formRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 60%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  },[]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setFormState('submitting');
    
    try {
      // Connect to our generated Express backend
      const response = await fetch('http://localhost:3001/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setAccessLevel(data.status); // 'granted' or 'queued'
        setFormState('success');
      } else {
        alert(data.error || "An error occurred");
        setFormState('idle');
      }
    } catch(err) {
      console.error("Backend error:", err);
      alert("Uh oh! The waitlist server is currently down. Are you running the backend server?");
      setFormState('idle');
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      {/* The "Curtain Reveal" Wrapper */}
      <div
        ref={wrapperRef}
        className="relative h-[80vh] sm:h-screen w-full bg-[#050505]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-[80vh] sm:h-screen w-full flex-col justify-between overflow-hidden bg-[#050505] text-white cinematic-footer-wrapper">
          
          {/* Ambient Light & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            APPLYOS
          </div>

          {/* Main Center Content (Form) */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-12 w-full max-w-lg mx-auto">
            <h2
              ref={headingRef}
              className="text-4xl md:text-6xl font-bold footer-text-glow tracking-tighter mb-8 text-center"
            >
              Get Early Access
            </h2>

            <div ref={formRef} className="w-full">
              {formState === 'success' ? (
                <div className="footer-glass-pill p-10 rounded-3xl flex flex-col items-center justify-center text-center space-y-4 animate-in zoom-in duration-500">
                  <div className={`w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2 ${accessLevel === 'granted' ? 'text-emerald-400' : 'text-[#FF5A1F]'}`}>
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {accessLevel === 'granted' ? 'Access Granted!' : "You're on the list!"}
                  </h3>
                  <p className="text-zinc-400">
                    {accessLevel === 'granted' 
                      ? "Congratulations! You secured one of the first 100 spots in ApplyOS." 
                      : `Keep an eye on ${formData.email} for your exclusive invite once more spots open up.`}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="footer-glass-pill p-8 md:p-10 rounded-3xl flex flex-col gap-5 w-full">
                  <div className="space-y-1.5 focus-within:text-white text-zinc-400 transition-colors">
                    <label className="text-xs font-semibold tracking-wider ml-1 uppercase">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="Jane Doe" 
                      className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F]/50 transition-all rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none"
                    />
                  </div>
                  <div className="space-y-1.5 focus-within:text-white text-zinc-400 transition-colors">
                    <label className="text-xs font-semibold tracking-wider ml-1 uppercase">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@example.com" 
                      className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F]/50 transition-all rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className={`mt-4 w-full bg-gradient-to-r from-[#FF5A1F] to-[#ff8a5c] text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 transition-all ${formState === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 shadow-[0_0_30px_rgba(255,90,31,0.3)] hover:-translate-y-0.5'}`}
                  >
                    {formState === 'submitting' ? 'Securing Spot...' : 'Join Waitlist'}
                    {formState !== 'submitting' && <ChevronRight className="w-5 h-5" />}
                  </button>
                </form>
              )}

              {/* Secondary Links */}
              <div className="flex flex-wrap justify-center gap-4 w-full mt-8">
                <a href="#" className="text-zinc-500 font-medium text-xs md:text-sm hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-zinc-500 font-medium text-xs md:text-sm hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-zinc-500 font-medium text-xs md:text-sm hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar / Credits */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-zinc-500 text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              © 2026 ApplyOS. All rights reserved.
            </div>

            {/* "Made with Love" Badge */}
            <div className="footer-glass-pill px-6 py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default border-white/10">
              <span className="text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Built in</span>
              <span className="animate-footer-heartbeat text-sm md:text-base font-bold text-[#FF5A1F]">India</span>
              <span className="text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">by</span>
              <span className="text-white font-black text-xs md:text-sm tracking-normal ml-1">Agentic Labs</span>
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-zinc-400 hover:text-white group order-3 border-white/10"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </MagneticButton>

          </div>
        </footer>
      </div>
    </>
  );
}
