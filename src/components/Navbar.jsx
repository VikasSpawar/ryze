import { Menu, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Features', 'How it Works', 'Pricing', 'Testimonials'];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="size-9 bg-[#da500b] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#da500b]/20 transition-transform group-hover:rotate-12">
            <Zap size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Ryze</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="px-4">Sign In</Button>
          <Button variant="primary" className="px-5 py-2.5 text-sm">Get Started</Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((item) => (
                <a key={item} href="#" className="text-lg font-medium text-white py-2 border-b border-white/5">
                  {item}
                </a>
              ))}
              <Button variant="primary" className="w-full justify-center mt-4">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;