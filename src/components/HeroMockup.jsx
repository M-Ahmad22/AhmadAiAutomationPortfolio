import { motion } from "framer-motion";

// Floating AI dashboard mockup for the hero right side.
// Composed of stacked glass cards showing n8n-style workflow, VAPI call,
// Supabase row, JSON snippet and an OpenAI/API status pill.
export default function HeroMockup() {
  return (
    <div className="relative h-[560px] w-full">
      {/* Tangerine glow behind card */}
      <div className="absolute inset-6 rounded-[2rem] bg-tangerine/20 blur-2xl" />

      {/* Main dashboard card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-[2rem] glass p-5 flex flex-col gap-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-tangerine" />
            <span className="h-2.5 w-2.5 rounded-full bg-sage" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.02_90)]" />
          </div>
          <span className="text-[10px] font-mono text-ink-soft">agent.control</span>
        </div>

        {/* n8n workflow row */}
        <div className="rounded-2xl bg-white/80 border border-white/80 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium">n8n · Lead Automation</span>
            <span className="text-[10px] text-sage-deep font-medium">● Live</span>
          </div>
          <div className="flex items-center gap-2">
            {["WA", "GPT", "SB", "SH"].map((n, i) => (
              <div key={n} className="flex items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-lg grid place-items-center text-[10px] font-semibold ${
                    i === 0
                      ? "bg-sage/30 text-sage-deep"
                      : i === 1
                        ? "bg-tangerine/20 text-tangerine"
                        : i === 2
                          ? "bg-[oklch(0.2_0_0)] text-white"
                          : "bg-sand text-ink"
                  }`}
                >
                  {n}
                </div>
                {i < 3 && <div className="h-px w-4 bg-ink-soft/30" />}
              </div>
            ))}
          </div>
        </div>

        {/* VAPI voice agent */}
        <div className="rounded-2xl bg-[oklch(0.2_0_0)] text-white p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-tangerine grid place-items-center text-xs">
                🎙
              </div>
              <div>
                <div className="text-[11px] font-medium">VAPI · Restaurant AI</div>
                <div className="text-[10px] text-white/60">Inbound · 00:42</div>
              </div>
            </div>
            <div className="flex gap-0.5 items-end h-5">
              {[3, 5, 4, 7, 4, 6, 3].map((h, i) => (
                <motion.span
                  key={i}
                  animate={{ height: [`${h * 2}px`, `${h * 3}px`, `${h * 2}px`] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
                  className="w-0.5 bg-tangerine rounded"
                />
              ))}
            </div>
          </div>
        </div>

        {/* JSON snippet */}
        <div className="rounded-2xl bg-[oklch(0.15_0_0)] text-white/90 p-3 font-mono text-[10px] leading-relaxed flex-1 overflow-hidden">
          <div className="text-white/40 mb-1">// response.json</div>
          <div>{"{"}</div>
          <div className="pl-3">
            <span className="text-tangerine">"agent"</span>:{" "}
            <span className="text-sage">"Restaurant AI"</span>,
          </div>
          <div className="pl-3">
            <span className="text-tangerine">"platform"</span>:{" "}
            <span className="text-sage">"VAPI"</span>,
          </div>
          <div className="pl-3">
            <span className="text-tangerine">"callsHandled"</span>:{" "}
            <span className="text-white">2451</span>,
          </div>
          <div className="pl-3">
            <span className="text-tangerine">"accuracy"</span>:{" "}
            <span className="text-sage">"98.7%"</span>
          </div>
          <div>{"}"}</div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-white/80 border border-white/80 p-2">
            <div className="text-[9px] text-ink-soft">Supabase</div>
            <div className="text-xs font-medium">1.2k rows</div>
          </div>
          <div className="rounded-xl bg-white/80 border border-white/80 p-2">
            <div className="text-[9px] text-ink-soft">OpenAI</div>
            <div className="text-xs font-medium">gpt-4o</div>
          </div>
          <div className="rounded-xl bg-white/80 border border-white/80 p-2">
            <div className="text-[9px] text-ink-soft">WhatsApp</div>
            <div className="text-xs font-medium">Online</div>
          </div>
        </div>
      </motion.div>

      {/* Floating pill top-right */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute -top-4 -right-2 glass rounded-full px-3 py-1.5 text-[10px] font-medium flex items-center gap-1.5"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-sage-deep animate-pulse" />
        API 200 · 312ms
      </motion.div>

      {/* Floating flow card bottom-left */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute -bottom-9 -left-4 glass rounded-2xl px-3 py-2  text-[10px] font-medium  "
      >
        <div className="text-ink-soft mb-1">Flow · rag.query</div>
        <div className="flex items-center gap-1">
          <span className="px-2 py-0.5 rounded bg-sage/20 text-sage-deep">embed</span>
          <span>→</span>
          <span className="px-2 py-0.5 rounded bg-tangerine/20 text-tangerine">qdrant</span>
          <span>→</span>
          <span className="px-2 py-0.5 rounded bg-[oklch(0.2_0_0)] text-white">gpt</span>
        </div>
      </motion.div>
    </div>
  );
}
