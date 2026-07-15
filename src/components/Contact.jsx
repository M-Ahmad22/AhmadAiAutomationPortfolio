import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import { CONTACT_INFO } from "../data/portfolio";

// Contact section: info column + premium contact form with animated submit.
export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [form, setForm] = useState({
    name: "", email: "", company: "", type: "AI Automation", message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    // Placeholder: wire to your backend / email service later.
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", company: "", type: "AI Automation", message: "" });
      }, 2600);
    }, 900);
  };

  return (
    <section id="contact" className="section-y relative">
      <div className="absolute inset-0 -z-10 mesh-bg" />
      <div className="container-x grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <span className="text-xs uppercase tracking-[0.2em] text-tangerine font-medium">
            Contact
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
            Let's build your next AI system.
          </h2>
          <p className="mt-4 text-ink-soft">
            Reply within one business day. Available for freelance engagements,
            fractional roles and advisory work.
          </p>

          <ul className="mt-8 space-y-3">
            {CONTACT_INFO.map((c) => (
              <li key={c.label} className="soft-card px-4 py-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-ink-soft">
                  {c.label}
                </span>
                {c.href ? (
                  <a href={c.href} className="text-sm font-medium hover:text-tangerine">
                    {c.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium">{c.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
            <Field label="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
            <Field label="Company" name="company" value={form.company} onChange={handleChange} />
            <div>
              <label className="text-[11px] uppercase tracking-widest text-ink-soft">
                Project Type
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="mt-1 w-full rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm focus:border-tangerine focus:outline-none"
              >
                <option>AI Automation</option>
                <option>Voice Agent</option>
                <option>WhatsApp Assistant</option>
                <option>RAG / Knowledge</option>
                <option>Consulting</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-[11px] uppercase tracking-widest text-ink-soft">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm focus:border-tangerine focus:outline-none resize-none"
              placeholder="Tell me about the workflow you'd like to automate…"
            />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-[11px] text-ink-soft">
              By submitting, you agree to be contacted about this inquiry.
            </p>
            <motion.button
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={status !== "idle"}
              className="relative inline-flex items-center gap-2 rounded-full bg-[oklch(0.2_0_0)] text-white px-6 py-3 text-sm font-medium hover:bg-tangerine transition-colors shadow-[0_10px_30px_rgba(242,133,0,0.25)] overflow-hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "idle" && (
                  <motion.span key="idle" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="inline-flex items-center gap-2">
                    Send Message <span>→</span>
                  </motion.span>
                )}
                {status === "loading" && (
                  <motion.span key="loading" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                    Sending…
                  </motion.span>
                )}
                {status === "success" && (
                  <motion.span key="success" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="inline-flex items-center gap-2">
                    <HiCheckCircle className="h-4 w-4" /> Message sent
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", required }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-widest text-ink-soft">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 w-full rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm focus:border-tangerine focus:outline-none"
      />
    </div>
  );
}
