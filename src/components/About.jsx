import { motion } from "framer-motion";
import { ABOUT_CARDS } from "../data/portfolio";

// About section: illustrative panel on the left, copy + stat cards on the right.
export default function About() {
  return (
    <section id="about" className="section-y relative">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative aspect-square max-w-[520px] mx-auto w-full"
        >
          {/* Custom SVG-driven illustration: "AI engineer workspace" */}
          <div className="absolute inset-0 rounded-[2rem] mesh-bg grain overflow-hidden">
            <div className="absolute top-8 left-8 right-8 h-24 rounded-2xl glass p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-ink-soft">workspace/agents</span>
                <span className="text-[10px] rounded-full bg-sage/30 text-sage-deep px-2 py-0.5">deployed</span>
              </div>
              <div className="mt-3 flex gap-2">
                {["Voice", "Chat", "RAG"].map((t) => (
                  <span key={t} className="text-[10px] rounded-md bg-white/80 border border-white px-2 py-1">{t}</span>
                ))}
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-10 left-8 w-40 rounded-2xl bg-[oklch(0.2_0_0)] text-white p-3"
            >
              <div className="text-[10px] opacity-60">Latency</div>
              <div className="font-display text-2xl">312<span className="text-xs opacity-60">ms</span></div>
              <div className="mt-2 flex gap-0.5 items-end h-6">
                {[3, 5, 4, 6, 5, 7, 6, 8, 5, 6].map((h, i) => (
                  <span key={i} style={{ height: `${h * 3}px` }} className="w-1 bg-tangerine rounded" />
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, delay: 0.4 }}
              className="absolute bottom-14 right-8 rounded-2xl glass p-3 w-40"
            >
              <div className="text-[10px] text-ink-soft">Uptime · 30d</div>
              <div className="font-display text-2xl">99.98<span className="text-xs text-ink-soft">%</span></div>
              <div className="mt-2 h-1.5 rounded-full bg-black/5">
                <div className="h-full rounded-full bg-sage-deep" style={{ width: "98%" }} />
              </div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-tangerine/25 blur-3xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-tangerine font-medium">
            About Me
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
            Engineering the AI systems modern businesses run on.
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            I am an AI No-Code / Low-Code Systems Engineer specializing in intelligent
            automations, AI agents, voice systems, workflow orchestration, and scalable
            business solutions. My expertise lies in transforming complex operational
            processes into seamless AI-powered experiences using tools like n8n, VAPI,
            OpenAI, Supabase, and modern automation ecosystems.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {ABOUT_CARDS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="soft-card p-5 hover:-translate-y-0.5 transition-transform"
              >
                <div className="text-xs uppercase tracking-widest text-ink-soft">{c.title}</div>
                <div className="mt-1 font-display text-3xl font-medium">{c.value}</div>
                <div className="mt-1 text-sm text-ink-soft">{c.note}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
