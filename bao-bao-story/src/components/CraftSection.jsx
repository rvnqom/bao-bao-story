import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'The Dough',
    subtitle: 'Mixed fresh every morning',
    desc: 'We start at 6 AM. High-gluten flour, active yeast, warm water, and sea salt come together. The dough is kneaded for 12 minutes — no less — until it\'s silky, smooth, and elastic.',
    color: '#ee7222',
    icon: '🤲',
  },
  {
    num: '02',
    title: 'The Proof',
    subtitle: '2 hours of patience',
    desc: 'The dough rests in a warm proofer. This slow rise is non-negotiable. Rushed dough makes flat, dense buns. Our bao needs time to become the cloud it\'s meant to be.',
    color: '#dcb052',
    icon: '⏳',
  },
  {
    num: '03',
    title: 'The Roll & Shape',
    subtitle: 'Hand-folded, always',
    desc: 'Each portion is rolled flat, filled, and folded by hand. The iconic pleated fold at the top — that\'s called a "hua juan" seal. It takes practice. Our team trains for weeks to master it.',
    color: '#6b958d',
    icon: '👐',
  },
  {
    num: '04',
    title: 'The Steam',
    subtitle: '8–12 minutes of pure heat',
    desc: 'Bamboo steamers. 100°C steam. The bao transforms — from raw dough to a glistening, pillowy perfection. This is the moment. No oven, no fry, just clean honest steam.',
    color: '#27828d',
    icon: '💨',
  },
  {
    num: '05',
    title: 'The Filling',
    subtitle: 'Assembled fresh to order',
    desc: 'Fillings are always prepped fresh — never pre-assembled. Your bao is filled the moment you order. Proteins, pickles, sauces, garnishes — all placed with intention.',
    color: '#d191a8',
    icon: '🥢',
  },
  {
    num: '06',
    title: 'The Moment',
    subtitle: 'Served in 90 seconds',
    desc: 'From order to hand, your bao takes less than 90 seconds. It arrives warm, fragrant, and perfectly wrapped in our signature kraft paper sleeve. Ready to be eaten.',
    color: '#EC6A37',
    icon: '🎁',
  },
];

export default function CraftSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} className="relative py-32 bg-[#f4f0e4] overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      {/* Chapter label */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-[#ee7222]/30" />
          <span className="font-bebas text-[#ee7222] tracking-[0.4em] text-sm">Chapter 04</span>
          <div className="h-px w-20 bg-[#ee7222]/30" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-dancing text-[#be895f] text-2xl">The art of making a bao</span>
          <h2
            className="font-playfair font-bold text-[#1a1a1a] mt-2 leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Crafted With
            <br />
            <span className="text-[#ee7222] italic">Purpose & Precision</span>
          </h2>
          <p className="font-dm text-[#3a3a3a]/70 text-lg mt-4 max-w-xl mx-auto">
            Every bao is a 6-step ritual. Here's what happens before it reaches your hands.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#e8e0d0] overflow-hidden hidden md:block">
            <motion.div
              className="w-full origin-top"
              style={{
                height: lineHeight,
                background: 'linear-gradient(to bottom, #ee7222, #EC6A37, #dcb052)',
              }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative md:pl-24 flex gap-6 md:gap-0"
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full items-center justify-center text-white font-bebas text-sm shadow-lg z-10"
                  style={{ background: step.color }}
                >
                  {i + 1}
                </div>

                {/* Card */}
                <div
                  className="flex-1 bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4"
                  style={{ borderLeftColor: step.color }}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: `${step.color}15` }}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="font-bebas text-sm tracking-widest"
                          style={{ color: step.color }}
                        >
                          STEP {step.num}
                        </span>
                        <span className="font-dm text-xs text-[#3a3a3a]/40 italic">{step.subtitle}</span>
                      </div>
                      <h3 className="font-playfair font-bold text-[#1a1a1a] text-xl mb-2">{step.title}</h3>
                      <p className="font-dm text-[#3a3a3a]/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="text-5xl">🥟</div>
            <p className="font-playfair italic text-[#1a1a1a] text-2xl max-w-md text-center">
              "A bao made in a hurry tastes like it was made in a hurry."
            </p>
            <span className="font-dm text-[#3a3a3a]/40 text-sm tracking-widest">— Our Kitchen Manifesto</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
