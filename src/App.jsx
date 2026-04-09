import Navbar from './components/Navbar';
import HeroSection from './components/ui/glassmorphism-trust-hero';
import Stats from './components/Stats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductPreview from './components/ProductPreview';
import Testimonials from './components/Testimonials';
import { CinematicFooter } from './components/ui/motion-footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-gray-100 font-inter font-light overflow-x-hidden">
      <Navbar />
      <main className="relative z-10 w-full min-h-screen bg-bg-dark rounded-b-[40px] border-b border-white/10 shadow-2xl pb-24">
        <HeroSection />
        <Stats />
        <Features />
        <HowItWorks />
        <ProductPreview />
        <Testimonials />
      </main>
      <CinematicFooter />
    </div>
  );
}

export default App;
