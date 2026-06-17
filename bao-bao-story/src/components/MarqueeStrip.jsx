export default function MarqueeStrip({ items, bg = '#ee7222', textColor = '#fff', reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-3 select-none"
      style={{ background: bg }}
    >
      <div
        className="flex gap-0"
        style={{
          animation: `marquee ${reverse ? 'marquee-reverse' : 'marquee'} 25s linear infinite`,
          animationName: reverse ? 'marquee-reverse' : 'marquee',
          display: 'flex',
          width: 'max-content',
          animationDuration: '25s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-4"
            style={{ color: textColor }}
          >
            <span className="font-bebas text-lg tracking-[0.15em] whitespace-nowrap">{item}</span>
            <span style={{ color: textColor, opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
