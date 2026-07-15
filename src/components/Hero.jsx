import { motion } from "framer-motion";
import { HERO_METRICS } from "../data/portfolio";
import HeroMockup from "./HeroMockup";

// Full-viewport hero with 60/40 split, animated metrics and a floating mockup.
export default function Hero() {
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 mesh-bg" />
      <div className="absolute -z-10 top-24 -left-24 h-[420px] w-[420px] rounded-full bg-sage/30 blur-3xl animate-pulse-glow" />
      <div className="absolute -z-10 bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-tangerine/20 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-0 -z-10 grain" />

      <div className="container-x grid lg:grid-cols-5 gap-12 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="lg:col-span-3"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-ink-soft"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-tangerine animate-pulse" />
            AI • Automation • No-Code • Low-Code
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02] tracking-tight"
          >
            Building{" "}
            <span className="text-gradient-tangerine">Intelligent Systems</span>{" "}
            <br className="hidden md:block" />
            Without Limits.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg text-ink-soft leading-relaxed"
          >
            I design and deploy AI-powered automations, voice agents, workflows, and
            enterprise-grade no-code systems using modern AI technologies.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[oklch(0.2_0_0)] text-white px-6 py-3 text-sm font-medium hover:bg-tangerine transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(242,133,0,0.25)]"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/80 px-6 py-3 text-sm font-medium hover:-translate-y-0.5 transition-all"
            >
              Schedule a Call
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {HERO_METRICS.map((m) => (
              <div key={m.label} className="soft-card p-5">
                <div className="font-display text-3xl md:text-4xl font-medium tracking-tight">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-ink-soft leading-snug">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-2 relative"
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}
