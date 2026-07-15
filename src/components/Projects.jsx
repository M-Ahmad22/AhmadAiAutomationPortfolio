import { motion } from "framer-motion";
import { PROJECTS } from "../data/portfolio";

// Renders a mini mockup inside each project card based on `kind`.
function ProjectVisual({ kind, payload, accent }) {
  const accentClass =
    accent === "tangerine" ? "text-tangerine" :
    accent === "sage" ? "text-sage-deep" :
    "text-white";

  if (kind === "voice") {
    return (
      <div className="rounded-2xl bg-[oklch(0.15_0_0)] text-white p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-tangerine grid place-items-center text-xs">🎙</div>
            <div>
              <div className="text-xs font-medium">{payload.agent}</div>
              <div className="text-[10px] text-white/50">{payload.platform} · Live</div>
            </div>
          </div>
          <div className="flex gap-0.5 items-end h-6">
            {[3, 5, 4, 7, 4, 6, 3, 5].map((h, i) => (
              <motion.span
                key={i}
                animate={{ height: [`${h * 2}px`, `${h * 3.5}px`, `${h * 2}px`] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.07 }}
                className="w-1 bg-tangerine rounded"
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div className="rounded-lg bg-white/5 p-2">
            <div className="text-white/50">Calls</div>
            <div className="font-display text-lg">{payload.callsHandled}</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="text-white/50">Uptime</div>
            <div className="font-display text-lg">{payload.availability}</div>
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="text-white/50">Accuracy</div>
            <div className={`font-display text-lg ${accentClass}`}>{payload.accuracy}</div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "chat") {
    return (
      <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white p-4 space-y-2">
        <div className="flex items-start gap-2">
          <div className="h-7 w-7 rounded-full bg-sage/30 grid place-items-center text-xs">👤</div>
          <div className="rounded-2xl rounded-tl-none bg-white px-3 py-2 text-xs max-w-[75%]">
            Do you have a table for 4 tonight at 8?
          </div>
        </div>
        <div className="flex items-start gap-2 flex-row-reverse">
          <div className="h-7 w-7 rounded-full bg-tangerine grid place-items-center text-xs text-white">AI</div>
          <div className="rounded-2xl rounded-tr-none bg-[oklch(0.2_0_0)] text-white px-3 py-2 text-xs max-w-[75%]">
            Yes — booked 8:15pm under your number. Confirmation sent ✓
          </div>
        </div>
        <div className="pt-2 text-[10px] font-mono text-ink-soft border-t border-black/5">
          {Object.entries(payload).map(([k, v]) => (
            <div key={k}><span className="text-tangerine">{k}</span>: <span>{String(v)}</span></div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "schedule") {
    return (
      <div className="rounded-2xl bg-white border border-black/5 p-4">
        <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-ink-soft mb-2">
          {["M","T","W","T","F","S","S"].map((d,i)=>(<div key={i}>{d}</div>))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 21 }).map((_, i) => (
            <div
              key={i}
              className={`h-6 rounded-md ${
                [4, 8, 11, 14, 17].includes(i)
                  ? "bg-tangerine/80"
                  : [3, 9, 15].includes(i)
                  ? "bg-sage-deep"
                  : "bg-black/5"
              }`}
            />
          ))}
        </div>
        <div className="mt-3 text-[10px] font-mono text-ink-soft space-y-0.5">
          <div><span className="text-tangerine">bookings</span>: {payload.bookings}</div>
          <div><span className="text-tangerine">noShowDrop</span>: {payload.noShowDrop}</div>
        </div>
      </div>
    );
  }

  // rag / default: JSON snippet card
  return (
    <div className="rounded-2xl bg-[oklch(0.15_0_0)] text-white/90 p-4 font-mono text-[11px] leading-relaxed">
      <div className="text-white/40 mb-2">// {payload.workflow || "config"}.json</div>
      <div>{"{"}</div>
      {Object.entries(payload).map(([k, v]) => (
        <div key={k} className="pl-3">
          <span className="text-tangerine">"{k}"</span>:{" "}
          {Array.isArray(v) ? (
            <span className="text-sage">["{v.join('", "')}"]</span>
          ) : typeof v === "number" ? (
            <span className="text-white">{v}</span>
          ) : (
            <span className="text-sage">"{String(v)}"</span>
          )}
          ,
        </div>
      ))}
      <div>{"}"}</div>
    </div>
  );
}

// Bento grid of projects — each card contains a bespoke mockup.
export default function Projects() {
  return (
    <section id="projects" className="section-y relative">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-tangerine font-medium">
              Selected Work
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
              Systems built to run — quietly, every day.
            </h2>
          </div>
          <a href="#contact" className="text-sm font-medium hover:text-tangerine">
            Start a project →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(280px,auto)] gap-5">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-3xl overflow-hidden border border-black/5 bg-white p-5 flex flex-col gap-4 ${p.span}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-ink-soft">
                  {p.tag}
                </span>
                <span className="h-2 w-2 rounded-full bg-sage-deep animate-pulse" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-medium leading-tight">
                {p.title}
              </h3>
              <div className="flex-1 flex flex-col justify-end">
                <ProjectVisual kind={p.kind} payload={p.payload} accent={p.accent} />
              </div>
              <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-tangerine/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
