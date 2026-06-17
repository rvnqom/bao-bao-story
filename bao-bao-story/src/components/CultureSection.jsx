import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const values = [
  {
    icon: '🤝',
    title: 'Community Over Commerce',
    desc: 'We source 60% of our produce from small Indian farmers. Because their livelihood matters as much as our flavor.',
    accent: '#6b958d',
  },
  {
    icon: '♻️',
    title: 'Zero Waste Kitchen',
    desc: 'Vegetable trimmings become broths. Day-old dough becomes croutons. Our target: zero food waste by 2027.',
    accent: '#27828d',
  },
  {
    icon: '👩‍🍳',
    title: 'Female-First Kitchens',
    desc: '70% of our kitchen leadership are women. We invest in training, promote from within, and pay above industry standards.',
    accent: '#d191a8',
  },
  {
    icon: '🎭',
    title: 'Culture as Design',
    desc: 'Every restaurant is an ode to a different Asian neighborhood — from neon-lit Hong Kong alleys to the lantern-hung streets of Kyoto.',
    accent: '#dcb052',
  },
];

const teamQuotes = [
  {
    name: 'Priya Sharma',
    role: 'Head of Sourcing',
    quote: 'We don\'t just source ingredients. We build relationships with the farmers who grow them.',
    initial: 'P',
    color: '#6b958d',
  },
  {
    name: 'Raj Mehta',
    role: 'Co-Founder & CEO',
    quote: 'Bao Bao isn\'t a restaurant. It\'s a bridge between two food cultures I\'ve always loved.',
    initial: 'R',
    color: '#ee7222',
  },
  {
    name: 'Lin Wei',
    role: 'Executive Chef',
    quote: 'The first bao I learned to make was my grandmother\'s. Every recipe starts there.',
    initial: 'L',
    color: '#27828d',
  },
];

export default function CultureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 bg-[#f4f0e4] overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      {/* Chapter label */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-[#ee7222]/30" />
          <span className="font-bebas text-[#ee7222] tracking-[0.4em] text-sm">Chapter 06</span>
          <div className="h-px w-20 bg-[#ee7222]/30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-dancing text-[#be895f] text-2xl">More than food</span>
          <h2
            className="font-playfair font-bold text-[#1a1a1a] mt-2 leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            What Bao Bao
            <br />
            <span className="text-[#ee7222] italic">Stands For</span>
          </h2>
          <p className="font-dm text-[#3a3a3a]/70 text-lg mt-4 max-w-xl mx-auto">
            We're not just building a restaurant chain. We're building a culture of care — for food, for people, and for the planet.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-400 flex gap-6 items-start"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${v.accent}15` }}
              >
                {v.icon}
              </div>
              <div>
                <div
                  className="w-8 h-0.5 rounded-full mb-3"
                  style={{ background: v.accent }}
                />
                <h3 className="font-playfair font-bold text-[#1a1a1a] text-xl mb-2">{v.title}</h3>
                <p className="font-dm text-[#3a3a3a]/70 leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team quotes - scrapbook layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="font-playfair font-bold text-[#1a1a1a] text-3xl">
              Voices Behind the <span className="text-[#ee7222] italic">Bao</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamQuotes.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={inView ? { opacity: 1, y: 0, rotate: i % 2 === 0 ? '-1deg' : '1.5deg' } : {}}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.15 }}
                whileHover={{ rotate: '0deg', scale: 1.02 }}
                className="relative bg-white p-7 rounded-2xl shadow-lg"
              >
                {/* Quote mark */}
                <div className="font-playfair text-6xl text-[#ee7222]/20 leading-none mb-3">"</div>
                <p className="font-dm text-[#3a3a3a]/80 leading-relaxed italic mb-6">{t.quote}</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bebas text-lg"
                    style={{ background: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-dm font-semibold text-[#1a1a1a] text-sm">{t.name}</p>
                    <p className="font-dm text-[#3a3a3a]/50 text-xs">{t.role}</p>
                  </div>
                </div>

                {/* Tape */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 rounded-sm opacity-60"
                  style={{ background: '#dcb052', transform: `translateX(-50%) rotate(${i % 2 === 0 ? -3 : 4}deg)` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
