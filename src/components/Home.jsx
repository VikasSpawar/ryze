import {
    motion,
    useScroll,
    useSpring
} from 'framer-motion';
import Button from './Button';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Testimonials from './Testimonials';


const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#da500b] selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Space Grotesk', sans-serif; }
        html { scroll-behavior: smooth; }
        
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Reading Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#da500b] origin-left z-[100]" style={{ scaleX }} />

      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        
        {/* CTA Section */}
        <section className="py-32 px-6 bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#da500b] to-[#b54006] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl shadow-[#da500b]/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none group-hover:bg-white/20 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none group-hover:bg-black/20 transition-colors duration-700" />
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight relative z-10">
              Ready to Ryze?
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto relative z-10 font-medium">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Button variant="secondary" className="bg-white text-[#da500b] hover:bg-gray-100 border-none shadow-xl">Get Started Now</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;



