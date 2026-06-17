import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const futureItems = [
  {
    icon: '🌏',
    title: 'Singapore, 2025',
    desc: 'Our first international outpost opens in Clarke Quay, Singapore. An Indo-Asian bao meets the city that invented the hawker stall.',
    color: '#ee7222',
    status: 'COMING SOON',
  },
  {
    icon: '🇬🇧',
    title: 'London, 2026',
    desc: 'Bao Bao Shoreditch. Because London deserves a bao that bridges India and Asia right in the heart of the city.',
    color: '#27828d',
    status: 'ANNOUNCED',
  },
  {
    icon: '🏭',
    title: 'The Bao Lab',
    desc: 'Our R&D kitchen in Bengaluru — dedicated to experimenting with new cuisines, fermentation, and the next generation of bao fillings.',
    color: '#dcb052',
    status: 'IN PROGRESS',
  },
  {
    icon: '📱',
    title: 'Bao Bao App',
    desc: 'A new loyalty experience built around storytelling — earn Bao Coins, unlock origin stories, and customize your perfect bao.',
    color: '#d191a8',
    status: 'LAUNCHING 2025',
  },
];

export default function FutureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Animated radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(238,114,34,0.08)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(39,130,141,0.08)_0%,_transparent_60%)] pointer-events-none" />

      {/* Chapter label */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-[#ee7222]/30" />
          <span className="font-bebas text-[#ee7222] tracking-[0.4em] text-sm">Chapter 07</span>
          <div className="h-px w-20 bg-[#ee7222]/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Big headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-dancing text-[#ee7222] text-2xl">The road ahead</span>
          <h2
            className="font-playfair font-bold text-white mt-2 leading-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            The Next Chapter
            <br />
            <span className="text-[#ee7222] italic">is Just Beginning</span>
          </h2>
          <p className="font-dm text-white/50 text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            We've served 5 million baos. We're just getting started. Here's where Bao Bao is heading next.
          </p>
        </motion.div>

        {/* Future grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {futureItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group bg-[#242424] rounded-2xl p-8 border border-white/5 hover:border-white/15 transition-all duration-400 relative overflow-hidden cursor-default"
            >
              {/* Subtle glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-500"
                style={{ background: item.color }}
              />

              {/* Status badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{item.icon}</div>
                <span
                  className="font-bebas text-xs tracking-[0.2em] px-3 py-1 rounded-full"
                  style={{
                    background: `${item.color}20`,
                    color: item.color,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  {item.status}
                </span>
              </div>

              <div className="w-10 h-0.5 rounded-full mb-4" style={{ background: item.color }} />
              <h3 className="font-playfair font-bold text-white text-2xl mb-3">{item.title}</h3>
              <p className="font-dm text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#ee7222] to-[#EC6A37]" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='2' fill='white' opacity='0.6'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 px-10 py-16 text-center">
            <div className="text-5xl mb-6">🥟</div>
            <h3
              className="font-playfair font-bold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Our vision: A Bao in Every City.
              <br />
              A Story in Every Bite.
            </h3>
            <p className="font-dm text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              We want Bao Bao to be the restaurant that made you fall in love with Asian street food. The place you take your first date. The comfort you crave after a hard day.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-[#ee7222] font-dm font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Order Your Bao Today →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
