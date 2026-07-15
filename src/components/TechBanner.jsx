import { TECH_MARQUEE } from "../data/portfolio";

// Infinite horizontal marquee of tech names. Duplicated once for seamless loop.
export default function TechBanner() {
  const list = [...TECH_MARQUEE, ...TECH_MARQUEE];
  return (
    <section className="py-14 border-y border-black/5 bg-white/60 backdrop-blur-sm overflow-hidden">
      <div className="container-x mb-6 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
          Built with the modern AI stack
        </p>
        <div className="hidden md:flex items-center gap-2 text-xs text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-sage-deep animate-pulse" />
          18+ integrations
        </div>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap gap-4 will-change-transform">
          {list.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-ink"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-tangerine" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
