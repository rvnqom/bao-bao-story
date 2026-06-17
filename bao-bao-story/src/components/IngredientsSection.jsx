import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ingredients = [
  {
    name: 'Steamed Bao Dough',
    origin: 'Traditional recipe',
    desc: 'Made daily from scratch — high-gluten flour, active yeast, and a touch of sugar, steamed to cloud-like perfection at 100°C.',
    color: '#f4f0e4',
    textColor: '#1a1a1a',
    badge: '🫓',
    tag: 'SIGNATURE',
    tagColor: '#ee7222',
    rotate: '-2deg',
  },
  {
    name: 'Gochujang',
    origin: 'Korea',
    desc: 'Slow-fermented Korean red chili paste. Complex, smoky heat that no sauce bottle can replicate. Our kitchen never runs out.',
    color: '#EC6A37',
    textColor: '#fff',
    badge: '🌶️',
    tag: 'IMPORTED',
    tagColor: '#dcb052',
    rotate: '1.5deg',
  },
  {
    name: 'Kaffir Lime Leaves',
    origin: 'Southeast Asia',
    desc: 'Flown in from Thailand. These leaves give our broths and sauces an unmistakable citrus punch that defines our Thai-inspired baos.',
    color: '#6b958d',
    textColor: '#fff',
    badge: '🍃',
    tag: 'SOURCED',
    tagColor: '#f4f0e4',
    rotate: '-1deg',
  },
  {
    name: 'Smoked Hoisin',
    origin: 'House Recipe',
    desc: 'Our proprietary hoisin — roasted soy beans, star anise, and a hint of tamarind. It took 18 months to perfect this recipe.',
    color: '#1a1a1a',
    textColor: '#fff',
    badge: '✨',
    tag: 'HOUSE-MADE',
    tagColor: '#dcb052',
    rotate: '2deg',
  },
  {
    name: 'Paneer (Fresh)',
    origin: 'Local farms',
    desc: 'Sourced every morning from partner farms in Punjab and Maharashtra. Never frozen, never compromised. Set, firm, and beautifully charred.',
    color: '#dcb052',
    textColor: '#1a1a1a',
    badge: '🧀',
    tag: 'LOCAL',
    tagColor: '#1a1a1a',
    rotate: '-2.5deg',
  },
  {
    name: 'Toasted Sesame Oil',
    origin: 'Japan',
    desc: 'Cold-pressed, roasted golden sesame oil imported from Japan. A few drops transform any bowl into something extraordinary.',
    color: '#be895f',
    textColor: '#fff',
    badge: '🌾',
    tag: 'ARTISAN',
    tagColor: '#f4f0e4',
    rotate: '1deg',
  },
];

export default function IngredientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Chapter label */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <div className="h-px w-20 bg-[#ee7222]/30" />
          <span className="font-bebas text-[#ee7222] tracking-[0.4em] text-sm">Chapter 03</span>
          <div className="h-px w-20 bg-[#ee7222]/30" />
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(238,114,34,0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header + manifesto */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-dancing text-[#ee7222] text-2xl">Keeping it honest</span>
            <h2
              className="font-playfair font-bold text-white mt-2 leading-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
            >
              No Compromise.
              <br />
              <span className="text-[#ee7222] italic">Just Real</span>
              <br />
              Ingredients.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-dm text-white/50 text-lg leading-relaxed mb-6">
              We believe in showing you exactly what goes into your food. No mystery ingredients. No fillers. Every element on this list has a reason, a source, and a story.
            </p>
            <div className="flex flex-wrap gap-3">
              {['No MSG', 'No Artificial Colors', 'No Frozen Fillings', 'No Shortcuts'].map((t) => (
                <span
                  key={t}
                  className="font-dm text-sm font-medium px-4 py-2 rounded-full border border-[#ee7222]/30 text-[#ee7222] bg-[#ee7222]/5"
                >
                  ✓ {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Ingredient scrapbook cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.name}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              animate={inView ? { opacity: 1, y: 0, rotate: ing.rotate } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ rotate: '0deg', scale: 1.03, zIndex: 10 }}
              className="ingredient-card relative rounded-2xl p-6 cursor-default"
              style={{ background: ing.color }}
            >
              {/* Tag ribbon */}
              <div
                className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bebas tracking-widest"
                style={{ background: ing.tagColor, color: ing.tagColor === '#f4f0e4' ? '#1a1a1a' : ing.tagColor === '#dcb052' ? '#1a1a1a' : '#fff' }}
              >
                {ing.tag}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">{ing.badge}</div>

              {/* Divider */}
              <div
                className="w-8 h-0.5 rounded-full mb-3 opacity-40"
                style={{ background: ing.textColor }}
              />

              <h3
                className="font-playfair font-bold text-xl mb-1"
                style={{ color: ing.textColor }}
              >
                {ing.name}
              </h3>
              <p
                className="font-dm text-xs uppercase tracking-widest mb-3 opacity-60"
                style={{ color: ing.textColor }}
              >
                {ing.origin}
              </p>
              <p
                className="font-dm text-sm leading-relaxed opacity-80"
                style={{ color: ing.textColor }}
              >
                {ing.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 rounded-3xl bg-[#ee7222]/10 border border-[#ee7222]/20 p-10 text-center"
        >
          <h3 className="font-playfair font-bold text-white text-3xl mb-3">
            Want to see our full ingredient list?
          </h3>
          <p className="font-dm text-white/50 mb-6">
            We believe in radical transparency. Every ingredient, every source — published.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#EC6A37] hover:bg-[#ee7222] text-white font-dm font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-600/20"
          >
            View Full Ingredient List
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
