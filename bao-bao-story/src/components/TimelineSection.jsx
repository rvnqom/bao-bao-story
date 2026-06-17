import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: '2018',
    month: 'Jan',
    title: 'The Idea',
    desc: 'On a rainy night in Bengaluru, over bowls of instant noodles, two food obsessives sketched the concept for Bao Bao on a paper napkin.',
    icon: '💡',
    color: '#dcb052',
    side: 'left',
  },
  {
    year: '2018',
    month: 'Sep',
    title: 'The Research Trip',
    desc: 'A 3-week journey through Shanghai, Hong Kong, and Bangkok. 60+ baos eaten. Hundreds of notes taken. One clear vision formed.',
    icon: '✈️',
    color: '#27828d',
    side: 'right',
  },
  {
    year: '2019',
    month: 'Mar',
    title: 'First Kitchen',
    desc: 'A 300 sq. ft. cloud kitchen in HSR Layout, Bengaluru. No dine-in. Just delivery. Our first menu had 7 baos. All 7 sold out in 3 hours.',
    icon: '🍳',
    color: '#ee7222',
    side: 'left',
  },
  {
    year: '2019',
    month: 'Nov',
    title: 'First Restaurant',
    desc: 'Bao Bao opens its first dine-in space in Indiranagar, Bengaluru. 28 seats. 3-hour wait times on weekends. We knew we were onto something.',
    icon: '🏠',
    color: '#EC6A37',
    side: 'right',
  },
  {
    year: '2020',
    month: 'Apr',
    title: 'Surviving the Pandemic',
    desc: 'COVID-19 shut restaurants globally. We pivoted to DIY Bao Kits — customers steamed baos at home. We delivered 10,000 kits in one month.',
    icon: '💪',
    color: '#6b958d',
    side: 'left',
  },
  {
    year: '2021',
    month: 'Jul',
    title: 'Series A Funding',
    desc: 'Raised ₹18 Cr. in Series A. Investors believed in the mission: bring authentic Asian street food to every Indian city.',
    icon: '📈',
    color: '#d191a8',
    side: 'right',
  },
  {
    year: '2022',
    month: 'Feb',
    title: 'Pan-India Expansion',
    desc: 'Mumbai, Delhi, Pune, Hyderabad — 12 restaurants opened in one year. Each one designed to feel like a different Asian city neighborhood.',
    icon: '🗺️',
    color: '#be895f',
    side: 'left',
  },
  {
    year: '2023',
    month: 'Aug',
    title: '5 Million Baos',
    desc: 'We served our 5 millionth bao. A landmark. The lucky customer got a year of free baos — and we threw a party for the entire city.',
    icon: '🎉',
    color: '#dcb052',
    side: 'right',
  },
  {
    year: '2024',
    month: 'Jan',
    title: '50 Locations',
    desc: '50 restaurants across 18 Indian cities. From Chandigarh to Kochi. The dream is becoming real, one bao at a time.',
    icon: '🏆',
    color: '#ee7222',
    side: 'left',
  },
  {
    year: '2025',
    month: 'NOW',
    title: 'The Next Chapter',
    desc: 'International expansion. Singapore is next. Then London, then Dubai. Bao Bao is going global — and bringing India\'s love for bold flavors with it.',
    icon: '🌏',
    color: '#EC6A37',
    side: 'right',
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Chapter label */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-[#ee7222]/30" />
          <span className="font-bebas text-[#ee7222] tracking-[0.4em] text-sm">Chapter 05</span>
          <div className="h-px w-20 bg-[#ee7222]/30" />
        </div>
      </div>

      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(238,114,34,1) 1px, transparent 1px), linear-gradient(90deg, rgba(238,114,34,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="font-dancing text-[#ee7222] text-2xl">A decade in the making</span>
          <h2
            className="font-playfair font-bold text-white mt-2 leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            How Bao Bao
            <br />
            <span className="text-[#ee7222] italic">Grew Up</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ee7222] via-[#EC6A37] to-[#dcb052] -translate-x-1/2" />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={`${m.year}-${m.month}`}
                initial={{ opacity: 0, x: m.side === 'left' ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative flex items-center ${
                  m.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
                } flex-col md:gap-0 gap-4`}
              >
                {/* Content card — takes up one side */}
                <div className={`w-full md:w-[45%] ${m.side === 'right' ? 'md:text-right' : ''}`}>
                  <div
                    className="bg-[#242424] rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all duration-300 group"
                    style={{ borderLeftColor: m.side === 'left' ? m.color : undefined, borderLeft: m.side === 'left' ? `3px solid ${m.color}` : undefined, borderRightColor: m.side === 'right' ? m.color : undefined, borderRight: m.side === 'right' ? `3px solid ${m.color}` : undefined }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${m.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-2xl">{m.icon}</span>
                      <div>
                        <span
                          className="font-bebas text-sm tracking-widest block"
                          style={{ color: m.color }}
                        >
                          {m.month} {m.year}
                        </span>
                        <h3 className="font-playfair font-bold text-white text-lg">{m.title}</h3>
                      </div>
                    </div>
                    <p className="font-dm text-white/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-[10%] justify-center">
                  <div
                    className="w-5 h-5 rounded-full border-4 border-[#1a1a1a] shadow-lg z-10"
                    style={{ background: m.color, boxShadow: `0 0 12px ${m.color}60` }}
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
