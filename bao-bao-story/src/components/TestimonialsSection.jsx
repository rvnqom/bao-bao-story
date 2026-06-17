import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Ananya K.',
    city: 'Bengaluru',
    rating: 5,
    text: 'The pork belly bao literally changed my life. I\'ve eaten bao in Hong Kong and this is genuinely better. The dough is so pillowy I wanted to cry.',
    color: '#ee7222',
  },
  {
    name: 'Dev S.',
    city: 'Mumbai',
    rating: 5,
    text: 'The tandoori paneer bao is peak India-meets-Asia food. The mint chutney with hoisin glaze combo? Genius. Absolute genius.',
    color: '#27828d',
  },
  {
    name: 'Meera R.',
    city: 'Delhi',
    rating: 5,
    text: 'I took my Korean colleague here and she couldn\'t believe the gochujang bao was made in India. Said it tasted just like Seoul. High praise.',
    color: '#d191a8',
  },
  {
    name: 'Rohan P.',
    city: 'Hyderabad',
    rating: 5,
    text: 'The interiors alone are worth visiting. Every Bao Bao feels different — like traveling to a different street in Asia without leaving India.',
    color: '#dcb052',
  },
  {
    name: 'Sneha T.',
    city: 'Pune',
    rating: 5,
    text: 'I come here when I need comfort food that doesn\'t make me feel guilty. Fresh ingredients, honest portions, and every bao tells a story.',
    color: '#6b958d',
  },
  {
    name: 'Arjun M.',
    city: 'Chennai',
    rating: 5,
    text: 'The Thai basil chicken bao is everything. Fresh lime, holy basil, and that homemade fish sauce drizzle — it\'s like Bangkok in a bun.',
    color: '#be895f',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % reviews.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} className="relative py-32 bg-[#f4f0e4] overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-dancing text-[#be895f] text-2xl">What people say</span>
          <h2
            className="font-playfair font-bold text-[#1a1a1a] mt-2"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            Stories From Our
            <br />
            <span className="text-[#ee7222] italic">Community</span>
          </h2>
        </motion.div>

        {/* Featured review */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-white rounded-3xl p-10 shadow-xl relative">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#dcb052] text-xl">★</span>
              ))}
            </div>

            <blockquote className="font-playfair italic text-[#1a1a1a] text-xl leading-relaxed mb-8">
              "{reviews[active].text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bebas text-lg"
                  style={{ background: reviews[active].color }}
                >
                  {reviews[active].name[0]}
                </div>
                <div>
                  <p className="font-dm font-semibold text-[#1a1a1a]">{reviews[active].name}</p>
                  <p className="font-dm text-xs text-[#3a3a3a]/50">{reviews[active].city}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: active === i ? reviews[active].color : '#C8C8C8',
                      transform: active === i ? 'scale(1.5)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {reviews.filter((_, i) => i !== active).slice(0, 3).map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActive(reviews.indexOf(r))}
              className="bg-white/60 hover:bg-white rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#dcb052] text-sm">★</span>
                ))}
              </div>
              <p className="font-dm text-[#3a3a3a]/70 text-sm leading-relaxed line-clamp-2 mb-3">"{r.text}"</p>
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bebas text-sm"
                  style={{ background: r.color }}
                >
                  {r.name[0]}
                </div>
                <p className="font-dm text-xs text-[#3a3a3a]/60">{r.name} · {r.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
