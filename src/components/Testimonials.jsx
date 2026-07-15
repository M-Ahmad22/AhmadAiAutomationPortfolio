import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { TESTIMONIALS } from "../data/portfolio";

// Elegant testimonial cards with avatar, rating and quote.
export default function Testimonials() {
  return (
    <section id="testimonials" className="section-y relative">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-tangerine font-medium">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
            Trusted by founders shipping real products.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="soft-card p-7 flex flex-col gap-5"
            >
              <div className="flex gap-0.5 text-tangerine">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <HiStar key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-sage to-sage-deep text-white grid place-items-center font-display text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-ink-soft">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
