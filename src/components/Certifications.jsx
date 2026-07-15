import { motion } from "framer-motion";
import { HiCheckBadge } from "react-icons/hi2";
import { CERTIFICATIONS } from "../data/portfolio";

// Bento layout — one large featured card + 6 smaller certification cards.
export default function Certifications() {
  const featured = CERTIFICATIONS.find((c) => c.featured);
  const rest = CERTIFICATIONS.filter((c) => !c.featured);

  return (
    <section id="certifications" className="section-y relative bg-[oklch(0.985_0.005_90)]">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-tangerine font-medium">
            Certifications
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
            Credentials from the platforms I ship on.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-[oklch(0.2_0_0)] text-white p-8 group"
            >
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-tangerine/40 blur-3xl group-hover:bg-tangerine/60 transition-colors" />
              <div className="relative">
                <div className="flex items-center gap-2 text-tangerine text-xs">
                  <HiCheckBadge className="h-5 w-5" />
                  Featured Certification
                </div>
                <div className="mt-8 text-sm text-white/60">{featured.issuer}</div>
                <h3 className="mt-2 font-display text-4xl md:text-5xl font-medium tracking-tight">
                  {featured.title}
                </h3>
                <div className="mt-10 flex items-center gap-8 text-sm">
                  <div>
                    <div className="text-white/50 text-xs">Issued</div>
                    <div>{featured.date}</div>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs">Credential ID</div>
                    <div className="font-mono">{featured.id}</div>
                  </div>
                  <div className="ml-auto rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs">
                    Verified ✓
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {rest.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="soft-card p-5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-tangerine/0 group-hover:bg-tangerine/5 transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-ink-soft">
                    {c.issuer}
                  </span>
                  <HiCheckBadge className="h-4 w-4 text-sage-deep" />
                </div>
                <h4 className="mt-3 font-display text-base font-medium leading-snug">
                  {c.title}
                </h4>
                <div className="mt-4 flex justify-between text-[11px] text-ink-soft">
                  <span>{c.date}</span>
                  <span className="font-mono">{c.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
