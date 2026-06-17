import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeStrip from './components/MarqueeStrip';
import ChapterOne from './components/ChapterOne';
import PhilosophySection from './components/PhilosophySection';
import FlavorsSection from './components/FlavorsSection';
import IngredientsSection from './components/IngredientsSection';
import CraftSection from './components/CraftSection';
import TimelineSection from './components/TimelineSection';
import CultureSection from './components/CultureSection';
import FutureSection from './components/FutureSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const marqueeItems = [
  'Steamed Fresh Daily',
  'Inspired by Asia',
  'Made with Love',
  'No Shortcuts',
  'Bold Flavors',
  '50+ Locations',
  'Hand-Folded',
  'Farm to Bao',
];

const marqueeItems2 = [
  'Shanghai',
  'Bangkok',
  'Mumbai',
  'Seoul',
  'Kolkata',
  'Hong Kong',
  'Tokyo',
  'Bengaluru',
];

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Marquee 1 */}
      <MarqueeStrip items={marqueeItems} bg="#ee7222" textColor="#fff" />

      {/* Chapter 1: Origins */}
      <ChapterOne />

      {/* Divider */}
      <div className="wiggle-divider bg-[#f4f0e4]" />

      {/* Philosophy */}
      <PhilosophySection />

      {/* Marquee 2 */}
      <MarqueeStrip items={marqueeItems2} bg="#f4f0e4" textColor="#ee7222" reverse />

      {/* Flavors */}
      <FlavorsSection />

      {/* Ingredients */}
      <IngredientsSection />

      {/* Craft / Process */}
      <CraftSection />

      {/* Marquee 3 */}
      <MarqueeStrip items={marqueeItems} bg="#1a1a1a" textColor="#dcb052" />

      {/* Timeline / Growth */}
      <TimelineSection />

      {/* Culture / Values */}
      <CultureSection />

      {/* Future */}
      <FutureSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
