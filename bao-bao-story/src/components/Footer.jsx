import { motion } from 'framer-motion';

const footerLinks = {
  'Our World': ['Our Story', 'The Menu', 'Ingredients', 'Sustainability', 'Blog'],
  'Visit Us': ['Find a Location', 'Franchise', 'Careers', 'Press Kit', 'Contact'],
  'Community': ['Loyalty Program', 'Gift Cards', 'Catering', 'Events', 'Merch'],
};

const socials = [
  { name: 'Instagram', icon: '📸', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'YouTube', icon: '📺', url: '#' },
  { name: 'Zomato', icon: '🍽️', url: '#' },
  { name: 'Swiggy', icon: '🛵', url: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0500] relative overflow-hidden">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-[#ee7222] via-[#dcb052] to-[#EC6A37]" />

      {/* Newsletter section */}
      <div className="bg-[#ee7222]/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-playfair font-bold text-white text-2xl mb-1">
                Get Bao Bao updates
              </h3>
              <p className="font-dm text-white/50 text-sm">
                New locations, limited edition baos, stories from our kitchen.
              </p>
            </div>
            <div className="flex gap-0 w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 border border-white/10 text-white placeholder:text-white/30 font-dm text-sm px-5 py-3 rounded-l-full focus:outline-none focus:border-[#ee7222] transition-colors"
              />
              <button className="bg-[#EC6A37] hover:bg-[#ee7222] text-white font-dm font-semibold text-sm px-6 py-3 rounded-r-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#ee7222] flex items-center justify-center">
                <span className="font-bebas text-white text-xl tracking-wider">BB</span>
              </div>
              <div>
                <span className="font-bebas text-white text-2xl tracking-[0.12em]">BAO BAO</span>
                <p className="font-dm text-white/30 text-[9px] tracking-[0.3em] uppercase">Asian Street Bao</p>
              </div>
            </div>
            <p className="font-dm text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Steam. Fold. Love. Born in India, inspired by Asia. Building a bridge between two great food cultures, one bao at a time.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  title={s.name}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ee7222]/20 flex items-center justify-center text-base transition-all duration-300 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bebas text-[#ee7222] tracking-[0.2em] text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-dm text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm text-white/20 text-xs">
            © 2025 Bao Bao Foods Pvt. Ltd. All rights reserved. Made with 🥟 in India.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-dm text-white/20 hover:text-white/50 text-xs transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bao bg */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] text-[300px] leading-none select-none pointer-events-none">
        🥟
      </div>
    </footer>
  );
}
