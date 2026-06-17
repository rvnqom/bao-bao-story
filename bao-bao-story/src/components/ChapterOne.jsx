import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.18 } },
};

export default function ChapterOne() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="chapter-one" ref={ref} className="relative py-32 overflow-hidden bg-[#f4f0e4]">
      {/* Background texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      {/* Chapter label top */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-[#ee7222]/30" />
          <span className="font-bebas text-[#ee7222] tracking-[0.4em] text-sm">Chapter 01</span>
          <div className="h-px w-20 bg-[#ee7222]/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Scrapbook collage */}
          <div className="relative h-[600px]">
            {/* Main photo card */}
            <motion.div
              variants={fadeUp}
              className="absolute top-0 left-0 w-72 bg-white p-3 shadow-2xl"
              style={{ transform: 'rotate(-2deg)' }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 tape" />
              {/* Placeholder photo - street market illustration */}
              <div
                className="w-full h-52 rounded-sm overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1a0a00 0%, #2d1200 40%, #0d1a19 100%)' }}
              >
                <div className="w-full h-full flex items-center justify-center p-4">
                  <StreetSceneIllustration />
                </div>
              </div>
              <p className="font-dancing text-[#be895f] text-sm mt-2 text-center">Street markets of Asia, 2018</p>
            </motion.div>

            {/* Second card */}
            <motion.div
              variants={fadeUp}
              className="absolute top-44 right-0 w-64 bg-white p-3 shadow-xl"
              style={{ transform: 'rotate(3deg)' }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-4 left-8 tape" style={{ transform: 'rotate(5deg)' }} />
              <div
                className="w-full h-44 rounded-sm overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #3d1a0a 0%, #5a2a10 100%)' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <BaoDumplingIllustration />
                </div>
              </div>
              <p className="font-dancing text-[#be895f] text-sm mt-2 text-center">The first perfect bao ✦</p>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              variants={fadeUp}
              className="absolute bottom-20 left-8 floating"
            >
              <div className="w-24 h-24 rounded-full bg-[#EC6A37] flex items-center justify-center shadow-xl shadow-orange-500/30">
                <div className="text-center text-white">
                  <p className="font-bebas text-2xl leading-none">MADE</p>
                  <p className="font-bebas text-2xl leading-none">WITH</p>
                  <p className="font-dancing text-lg leading-none">love</p>
                </div>
              </div>
            </motion.div>

            {/* Handwritten note */}
            <motion.div
              variants={fadeUp}
              className="absolute bottom-0 right-4 bg-[#dcb052]/20 border-l-4 border-[#dcb052] p-4 max-w-48 shadow-md"
              style={{ transform: 'rotate(1deg)' }}
            >
              <p className="font-dancing text-[#8B6914] text-sm leading-relaxed">
                "What if we brought the soul of Asian street food to every Indian city?"
              </p>
              <p className="font-dancing text-[#be895f] text-xs mt-2">— Founder's Journal, 2018</p>
            </motion.div>

            {/* Stamp overlay */}
            <motion.div
              variants={fadeUp}
              className="absolute top-32 right-12 opacity-40"
              style={{ transform: 'rotate(15deg)' }}
            >
              <div className="stamp text-[#EC6A37] font-bebas text-xs tracking-widest px-3 py-1">
                AUTHENTIC
              </div>
            </motion.div>
          </div>

          {/* Right: Story text */}
          <motion.div variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp}>
              <span className="font-dancing text-[#ee7222] text-2xl">Where it all began...</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-playfair font-bold text-[#1a1a1a] leading-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
            >
              A Journey That
              <br />
              <span className="text-[#ee7222] italic">Crossed Borders</span>
              <br />
              & Cultures
            </motion.h2>

            <motion.p variants={fadeUp} className="font-dm text-[#3a3a3a] text-lg leading-relaxed">
              In 2018, our founders set out on a food journey through the bustling street markets of Shanghai, Hong Kong, and Bangkok. What they found wasn't just food — it was a philosophy. A bao isn't just a bun. It's a canvas. A folded universe of flavor, culture, and craft.
            </motion.p>

            <motion.p variants={fadeUp} className="font-dm text-[#3a3a3a] text-lg leading-relaxed">
              Back in India, they asked a bold question: <strong className="text-[#EC6A37]">What if we married the artistry of Asian bao with the bold, familiar flavors of India?</strong> What if every bite felt like discovering a new city?
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-start gap-4 bg-[#ee7222]/8 rounded-2xl p-5 border border-[#ee7222]/15">
              <div className="w-10 h-10 rounded-full bg-[#ee7222] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-lg">✦</span>
              </div>
              <p className="font-dm text-[#3a3a3a] leading-relaxed">
                The name <strong>Bao Bao</strong> — a term of endearment in Mandarin meaning "precious" or "treasure" — felt perfect. Because every bao we make is a little treasure, crafted with intention.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {['Street Food Soul', 'Asian Artistry', 'Indian Boldness', 'Made Fresh Daily'].map((tag) => (
                <span
                  key={tag}
                  className="font-dm text-sm font-medium px-4 py-1.5 rounded-full border border-[#ee7222]/30 text-[#ee7222] bg-[#ee7222]/5"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StreetSceneIllustration() {
  return (
    <svg viewBox="0 0 280 200" className="w-full h-full opacity-90" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <rect width="280" height="130" fill="#1a0800" />
      {/* Stars */}
      {[20,60,100,140,180,220,260,40,80,160,200,240].map((x,i) => (
        <circle key={i} cx={x} cy={10+(i%5)*18} r="1.5" fill="#dcb052" opacity="0.8" />
      ))}
      {/* Buildings silhouette */}
      <rect x="0" y="70" width="50" height="60" fill="#0d0500" />
      <rect x="10" y="55" width="30" height="20" fill="#0d0500" />
      <rect x="60" y="50" width="40" height="80" fill="#150800" />
      <rect x="70" y="35" width="20" height="20" fill="#150800" />
      <rect x="110" y="65" width="35" height="65" fill="#0d0500" />
      <rect x="155" y="45" width="45" height="85" fill="#180900" />
      <rect x="165" y="30" width="25" height="20" fill="#180900" />
      <rect x="210" y="60" width="40" height="70" fill="#0d0500" />
      <rect x="255" y="75" width="25" height="55" fill="#150800" />
      {/* Lanterns */}
      {[35,85,135,185,235].map((x,i) => (
        <g key={i}>
          <line x1={x} y1="40" x2={x} y2="55" stroke="#dcb052" strokeWidth="1" />
          <ellipse cx={x} cy="60" rx="8" ry="10" fill="#ee7222" opacity="0.9" />
          <line x1={x-4} y1="70" x2={x-4} y2="76" stroke="#ee7222" strokeWidth="1.5" />
          <line x1={x} y1="70" x2={x} y2="78" stroke="#ee7222" strokeWidth="1.5" />
          <line x1={x+4} y1="70" x2={x+4} y2="76" stroke="#ee7222" strokeWidth="1.5" />
        </g>
      ))}
      {/* Street */}
      <rect x="0" y="130" width="280" height="70" fill="#1f0e00" />
      {/* Stalls */}
      <rect x="10" y="120" width="70" height="50" fill="#2d1500" rx="2" />
      <path d="M5,120 L80,120 L85,115 L5,115 Z" fill="#ee7222" />
      <text x="25" y="148" fontFamily="sans-serif" fontSize="8" fill="#dcb052">BAO 包</text>
      <rect x="110" y="115" width="70" height="55" fill="#1a0c00" rx="2" />
      <path d="M105,115 L185,115 L188,108 L102,108 Z" fill="#EC6A37" />
      <rect x="200" y="118" width="65" height="52" fill="#2d1500" rx="2" />
      <path d="M196,118 L268,118 L271,112 L193,112 Z" fill="#dcb052" opacity="0.8" />
      {/* People silhouettes */}
      {[50, 150, 175, 230].map((x,i) => (
        <g key={i}>
          <circle cx={x} cy="152" r="5" fill="#0d0500" />
          <rect x={x-4} y="157" width="8" height="15" fill="#0d0500" rx="1" />
        </g>
      ))}
      {/* Steam from bao */}
      <path d="M40,118 Q42,112 40,106" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M46,118 Q50,110 46,102" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
    </svg>
  );
}

function BaoDumplingIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="200" height="160" fill="#2d1200" />
      {/* Steam */}
      <path d="M80,60 Q82,50 78,40 Q76,30 80,20" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M100,55 Q105,42 100,30 Q96,18 102,8" stroke="white" strokeWidth="2" fill="none" opacity="0.25" />
      <path d="M120,60 Q122,48 118,36" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
      {/* Bao bun */}
      <ellipse cx="100" cy="100" rx="55" ry="35" fill="#f4f0e4" />
      <ellipse cx="100" cy="85" rx="48" ry="32" fill="white" />
      {/* Fold lines */}
      <path d="M60,85 Q100,100 140,85" stroke="#e0d8c8" strokeWidth="1.5" fill="none" />
      <path d="M70,78 Q100,90 130,78" stroke="#e0d8c8" strokeWidth="1" fill="none" />
      {/* Sesame seeds */}
      {[[85,75],[95,72],[105,73],[115,76],[90,80],[110,79]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="2.5" ry="1.5" fill="#dcb052" opacity="0.7" />
      ))}
      {/* Filling peek */}
      <path d="M75,90 Q100,98 125,90 L125,95 Q100,104 75,95 Z" fill="#ee7222" opacity="0.8" />
      {/* Shadow */}
      <ellipse cx="100" cy="118" rx="45" ry="10" fill="#1a0a00" opacity="0.4" />
      {/* Chopstick */}
      <line x1="145" y1="55" x2="165" y2="115" stroke="#be895f" strokeWidth="3" strokeLinecap="round" />
      <line x1="155" y1="50" x2="170" y2="110" stroke="#be895f" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
