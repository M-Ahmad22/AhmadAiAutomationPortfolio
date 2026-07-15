import { motion } from "framer-motion";
import { SKILLS } from "../data/portfolio";

// Categorized skill groups with interactive pills and proficiency bars.
export default function Skills() {
  return (
    <section id="skills" className="section-y relative bg-[oklch(0.985_0.005_90)]">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-tangerine font-medium">
            Skills
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
            A stack tuned for AI-native delivery.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: gi * 0.06 }}
              className="soft-card p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-medium">{group.category}</h3>
                <span className="text-[10px] uppercase tracking-widest text-ink-soft">
                  {group.items.length} tools
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s.name}
                    className="text-xs rounded-full border border-black/5 bg-white px-3 py-1.5 hover:bg-tangerine hover:text-white hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {s.name}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {group.items.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-ink-soft">{s.name}</span>
                      <span className="font-mono text-ink">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-black/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-sage-deep via-sage to-tangerine"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
