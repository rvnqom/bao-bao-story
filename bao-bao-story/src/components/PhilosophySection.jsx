import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    icon: '🌏',
    title: 'Rooted in Asia',
    desc: 'Every recipe traces back to the authentic street stalls of Shanghai, Taipei, and Hong Kong. We study the craft, not just the cuisine.',
    color: '#27828d',
  },
  {
    icon: '🌶️',
    title: 'Spiced for India',
    desc: 'We speak your palate\'s language. Bold, spicy, tangy, umami — our flavors bridge two great culinary civilizations.',
    color: '#EC6A37',
  },
  {
    icon: '🫶',
    title: 'Folded with Care',
    desc: 'No conveyor belts. No shortcuts. Each bao is hand-folded, freshly steamed, and assembled to order every single time.',
    color: '#d191a8',
  },
  {
    icon: '🌿',
    title: 'Honest Ingredients',
    desc: 'We source every ingredient with purpose. If it can\'t be traced back to a real farm or forest, it doesn\'t belong in our kitchen.',
    color: '#6b958d',
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #ee7222 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ee7222] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-dancing text-[#ee7222] text-2xl">What we believe in</span>
          <h2
            className="font-playfair font-bold text-white mt-2 leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Four Pillars of the
            <br />
            <span className="text-[#ee7222] italic">Bao Bao Way</span>
          </h2>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#242424] rounded-2xl p-8 border border-white/5 hover:border-white/15 transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-400"
                style={{ background: `radial-gradient(circle at 50% 0%, ${p.color}, transparent 70%)` }}
              />

              {/* Number */}
              <div
                className="absolute top-4 right-5 font-bebas text-6xl opacity-10 leading-none"
                style={{ color: p.color }}
              >
                0{i + 1}
              </div>

              <div className="text-4xl mb-5">{p.icon}</div>

              <div
                className="w-10 h-1 rounded-full mb-5"
                style={{ background: p.color }}
              />

              <h3 className="font-playfair font-bold text-white text-xl mb-3">{p.title}</h3>
              <p className="font-dm text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Big quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 text-center relative"
        >
          <div className="text-[120px] font-playfair text-[#ee7222]/10 leading-none select-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">"</div>
          <blockquote
            className="font-playfair italic text-white/80 relative z-10 max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
          >
            We don't just make food. We make{' '}
            <span className="text-[#ee7222]">moments worth remembering.</span>
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-white/20" />
            <span className="font-dm text-white/40 text-sm tracking-widest uppercase">Bao Bao Founders</span>
            <div className="h-px w-16 bg-white/20" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ee7222] to-transparent" />
    </section>
  );
}
