import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const flavorRegions = [
  {
    city: 'Shanghai',
    country: 'China',
    dish: 'Classic Pork Belly Bao',
    desc: 'Braised pork belly, pickled vegetables, crushed peanuts, and hoisin glaze tucked into a pillowy steamed bao.',
    flavor: 'Savory · Sweet · Rich',
    color: '#EC6A37',
    emoji: '🥩',
    bgColor: '#2d1200',
    dot: { top: '22%', left: '74%' },
  },
  {
    city: 'Bangkok',
    country: 'Thailand',
    dish: 'Thai Basil Chicken Bao',
    desc: 'Stir-fried chicken with holy basil, bird\'s eye chili, lime and fish sauce drizzle — all wrapped in steamed white bao.',
    flavor: 'Spicy · Herbal · Citrusy',
    color: '#27828d',
    emoji: '🌿',
    bgColor: '#0d1a19',
    dot: { top: '45%', left: '68%' },
  },
  {
    city: 'Mumbai',
    country: 'India',
    dish: 'Tandoori Paneer Bao',
    desc: 'Smoky tandoor-charred paneer, mint chutney, pickled onions, and sev — Mumbai\'s street soul in a bao.',
    flavor: 'Smoky · Tangy · Bold',
    color: '#d191a8',
    emoji: '🧀',
    bgColor: '#1a0819',
    dot: { top: '38%', left: '52%' },
  },
  {
    city: 'Seoul',
    country: 'Korea',
    dish: 'Crispy Korean BBQ Bao',
    desc: 'Gochujang-glazed crispy pork, kimchi slaw, sesame seeds, and scallion mayo in a golden pan-fried bao.',
    flavor: 'Umami · Spicy · Caramelized',
    color: '#dcb052',
    emoji: '🥓',
    bgColor: '#1a1200',
    dot: { top: '18%', left: '80%' },
  },
  {
    city: 'Kolkata',
    country: 'India',
    dish: 'Kati Bao',
    desc: 'Our tribute to Kolkata\'s legendary kati roll — egg wrap, spiced mutton, kachumber, and kasundi mustard all reimagined as a bao.',
    flavor: 'Earthy · Spiced · Mustard',
    color: '#6b958d',
    emoji: '🥚',
    bgColor: '#0a1510',
    dot: { top: '42%', left: '58%' },
  },
];

export default function FlavorsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState(0);

  const current = flavorRegions[active];

  return (
    <section ref={ref} id="our-story" className="relative py-28 overflow-hidden bg-[#f4f0e4]">
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      {/* Chapter label */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-[#ee7222]/30" />
          <span className="font-bebas text-[#ee7222] tracking-[0.4em] text-sm">Chapter 02</span>
          <div className="h-px w-20 bg-[#ee7222]/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-dancing text-[#be895f] text-2xl">Flavors from across the continent</span>
          <h2
            className="font-playfair font-bold text-[#1a1a1a] mt-2 leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Where Do Our
            <br />
            <span className="text-[#ee7222] italic">Flavors Come From?</span>
          </h2>
          <p className="font-dm text-[#3a3a3a]/70 text-lg mt-4 max-w-xl mx-auto">
            Every flavor on our menu is a postcard from a city that stole our hearts. Here's the journey.
          </p>
        </motion.div>

        {/* Map + detail layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Flavor selector cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            {flavorRegions.map((f, i) => (
              <motion.button
                key={f.city}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                  active === i
                    ? 'border-[#ee7222] bg-white shadow-lg shadow-orange-200/50'
                    : 'border-transparent bg-white/50 hover:bg-white/80'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${f.color}20` }}
                  >
                    {f.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-playfair font-bold text-[#1a1a1a] text-lg">{f.city}</span>
                      <span className="font-dm text-xs text-white/70 bg-[#1a1a1a]/60 px-2 py-0.5 rounded-full">
                        {f.country}
                      </span>
                    </div>
                    <p className="font-dm text-[#3a3a3a]/60 text-sm truncate">{f.dish}</p>
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                      active === i ? 'scale-150' : 'opacity-30'
                    }`}
                    style={{ background: f.color }}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Active flavor detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-28"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Illustration area */}
              <div
                className="relative h-72 flex items-center justify-center overflow-hidden"
                style={{ background: current.bgColor }}
              >
                <FoodIllustration color={current.color} emoji={current.emoji} />
                {/* City badge */}
                <div className="absolute top-5 left-5">
                  <div
                    className="px-4 py-1.5 rounded-full font-bebas tracking-widest text-white text-sm"
                    style={{ background: current.color }}
                  >
                    {current.city}, {current.country}
                  </div>
                </div>
                {/* Floating flavor tag */}
                <div className="absolute bottom-5 right-5 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                  <p className="font-dm text-white/80 text-xs tracking-wide">{current.flavor}</p>
                </div>
              </div>

              {/* Text content */}
              <div className="p-8">
                <h3 className="font-playfair font-bold text-[#1a1a1a] text-2xl mb-3">{current.dish}</h3>
                <p className="font-dm text-[#3a3a3a]/70 leading-relaxed mb-6">{current.desc}</p>

                <div className="flex gap-3">
                  <a
                    href="#menu"
                    className="flex-1 bg-[#EC6A37] hover:bg-[#ee7222] text-white font-dm font-semibold text-sm px-5 py-3 rounded-full text-center transition-all duration-300 hover:scale-105"
                  >
                    Try This Bao →
                  </a>
                  <div
                    className="px-5 py-3 rounded-full border-2 font-dm text-sm font-medium"
                    style={{ borderColor: current.color, color: current.color }}
                  >
                    #{active + 1} of 5
                  </div>
                </div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {flavorRegions.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    background: active === i ? current.color : '#C8C8C8',
                    transform: active === i ? 'scale(1.4)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FoodIllustration({ color, emoji }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Decorative rings */}
      <div
        className="absolute w-48 h-48 rounded-full border opacity-10"
        style={{ borderColor: color }}
      />
      <div
        className="absolute w-32 h-32 rounded-full border opacity-15"
        style={{ borderColor: color }}
      />
      {/* Glow */}
      <div
        className="absolute w-28 h-28 rounded-full opacity-20 blur-2xl"
        style={{ background: color }}
      />
      {/* Emoji / icon */}
      <div className="relative z-10 text-7xl">{emoji}</div>
      {/* Scatter dots */}
      {[[15,20],[80,15],[75,75],[20,70],[50,10],[10,50]].map(([x,y],i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-30"
          style={{ left: `${x}%`, top: `${y}%`, background: color }}
        />
      ))}
    </div>
  );
}
