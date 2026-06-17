import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Our Story', 'Menu', 'Ingredients', 'Locations', 'Careers'];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-[#ee7222] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="font-bebas text-white text-lg tracking-wider">BB</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bebas text-white text-2xl tracking-[0.12em]">BAO BAO</span>
            <span className="font-dm text-[#dcb052] text-[9px] tracking-[0.3em] uppercase">Asian Street Bao</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className={`font-dm text-sm font-medium tracking-wide transition-all duration-200 hover:text-[#ee7222] ${
                link === 'Our Story'
                  ? 'text-[#ee7222] border-b-2 border-[#ee7222] pb-0.5'
                  : scrolled ? 'text-white/80' : 'text-white/90'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#order"
            className="bg-[#EC6A37] hover:bg-[#ee7222] text-white font-dm font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30"
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1a1a]/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-dm text-white/80 hover:text-[#ee7222] transition-colors py-2 border-b border-white/5"
                >
                  {link}
                </a>
              ))}
              <a
                href="#order"
                className="bg-[#EC6A37] text-white font-dm font-semibold text-sm px-5 py-3 rounded-full text-center mt-2"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
