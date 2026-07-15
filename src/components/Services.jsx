import { motion } from "framer-motion";
import {
  HiSparkles, HiMicrophone, HiChatAlt2, HiCog, HiBookOpen, HiMap,
} from "react-icons/hi";
import { SERVICES } from "../data/portfolio";

const ICONS = {
  sparkles: HiSparkles,
  mic: HiMicrophone,
  chat: HiChatAlt2,
  flow: HiCog,
  book: HiBookOpen,
  compass: HiMap,
};

// Six premium glass service cards with hover elevation.
export default function Services() {
  return (
    <section id="services" className="section-y relative">
      <div className="absolute inset-0 -z-10 grain" />
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-tangerine font-medium">
            Services
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
            Six ways I help teams ship AI in production.
          </h2>
          <p className="mt-4 text-ink-soft">
            Every engagement is opinionated, hands-on, and shaped around the
            outcomes your business measures.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] || HiSparkles;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-6 glass overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-tangerine/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-2xl bg-white/90 border border-white grid place-items-center text-tangerine group-hover:bg-tangerine group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono text-ink-soft opacity-60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-tangerine transition-colors">
                  Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
