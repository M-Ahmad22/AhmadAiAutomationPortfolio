import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../data/portfolio";

// Sticky glassmorphism navbar with animated mobile menu.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="container-x pt-4">
        <div
          className={`glass flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all ${
            scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.06)]" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid place-items-center h-8 w-8 rounded-xl bg-[oklch(0.2_0_0)] text-white font-display text-sm">
              MAT
            </span>
            <span className="font-display text-sm font-medium tracking-tight">
              MAT<span className="text-tangerine">.</span>ai.MATalogics
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-ink-soft hover:text-ink transition-colors rounded-full hover:bg-white/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[oklch(0.2_0_0)] text-white px-4 py-2 text-sm font-medium hover:bg-tangerine transition-colors"
            >
              Let's Build AI Systems
              <span aria-hidden>→</span>
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center h-9 w-9 rounded-full bg-white/70 border border-white/70"
            >
              {open ? <HiX /> : <HiMenuAlt4 />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden container-x pt-3"
          >
            <div className="glass rounded-3xl p-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-ink-soft hover:text-ink rounded-2xl hover:bg-white/70"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-2xl bg-[oklch(0.2_0_0)] text-white px-4 py-3 text-sm font-medium"
              >
                Let's Build AI Systems
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
