import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Deep layered background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] via-[#2d1200] to-[#0d1a19]" />
        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%23ee7222' opacity='0.6'/%3E%3Ccircle cx='10' cy='10' r='1' fill='%23dcb052' opacity='0.4'/%3E%3Ccircle cx='50' cy='50' r='1' fill='%23ee7222' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Radial glow center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(238,114,34,0.18)_0%,_transparent_70%)]" />
        {/* Bottom gradient for text contrast */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#0d0500]/90 via-transparent to-transparent" />
      </motion.div>

      {/* Floating decorative orbs */}
      <motion.div
        className="absolute top-32 right-24 w-64 h-64 rounded-full opacity-10 blur-3xl bg-[#ee7222]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-40 left-16 w-48 h-48 rounded-full opacity-10 blur-3xl bg-[#27828d]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Decorative bao illustrations (SVG) */}
      <motion.div
        className="absolute top-24 left-12 opacity-15"
        animate={{ rotate: [0, 8, 0, -5, 0], y: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BaoIllustration size={100} color="#ee7222" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-16 opacity-10"
        animate={{ rotate: [0, -6, 0, 4, 0], y: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      >
        <BaoIllustration size={80} color="#dcb052" />
      </motion.div>

      {/* Floating stamps */}
      <motion.div
        className="absolute top-48 right-32 rotated-stamp floating"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="stamp text-[#dcb052] text-xs font-bebas tracking-widest">
          Est. 2019
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-48 left-20 floating-delay"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div
          className="w-20 h-20 rounded-full border-2 border-[#6b958d] flex items-center justify-center text-center"
          style={{ transform: 'rotate(-15deg)' }}
        >
          <div className="text-[#6b958d]">
            <p className="font-bebas text-[10px] tracking-widest leading-tight">STREET</p>
            <p className="font-bebas text-[10px] tracking-widest leading-tight">FOOD</p>
            <p className="font-bebas text-[10px] tracking-widest leading-tight">CULTURE</p>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-headline pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-[#ee7222]/15 border border-[#ee7222]/30 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#ee7222] animate-pulse" />
          <span className="font-dm text-[#ee7222] text-sm tracking-[0.2em] uppercase font-medium">
            Our Story
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
          className="font-playfair font-black text-white leading-none mb-4"
          style={{ fontSize: 'clamp(52px, 10vw, 120px)' }}
        >
          A Bao Born
          <br />
          <span className="italic text-[#ee7222]">from the Heart</span>
          <br />
          of Asia
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-dm text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mt-6 mb-10"
        >
          Steam. Fold. Love. Every bao we serve carries a story — of street corners in Shanghai, spice markets in Mumbai, and a dream to bring them together.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#chapter-one"
            className="group bg-[#EC6A37] hover:bg-[#ee7222] text-white font-dm font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-orange-500/40 flex items-center gap-2"
          >
            Read Our Story
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <a
            href="#menu"
            className="border border-white/30 hover:border-[#ee7222] text-white/80 hover:text-[#ee7222] font-dm font-medium px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            View Our Menu
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute -bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-dm text-white/30 text-xs tracking-[0.3em] uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ee7222] scroll-dot" />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-[#ee7222]/90 backdrop-blur-sm z-20"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-4">
          {[
            { num: '50+', label: 'Locations Across India' },
            { num: '200+', label: 'Menu Creations' },
            { num: '5M+', label: 'Baos Served' },
            { num: '2019', label: 'Year of Origin' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="font-bebas text-white text-3xl tracking-wider">{s.num}</span>
              <span className="font-dm text-white/70 text-xs uppercase tracking-widest leading-tight max-w-[80px]">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function BaoIllustration({ size = 100, color = '#ee7222' }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="45" ry="28" fill={color} opacity="0.8" />
      <ellipse cx="50" cy="38" rx="35" ry="22" fill={color} />
      <path d="M20 42 Q50 55 80 42" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M30 36 Q50 46 70 36" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
      <ellipse cx="50" cy="35" rx="12" ry="6" fill="white" opacity="0.12" />
    </svg>
  );
}
