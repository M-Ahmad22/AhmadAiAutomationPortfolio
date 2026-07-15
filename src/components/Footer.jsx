import { NAV_LINKS } from "../data/portfolio";

// Minimal footer: logo, quick links, socials, copyright.
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 py-14 bg-white">
      <div className="container-x grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-[oklch(0.2_0_0)] text-white font-display">
              MAT
            </span>
            <span className="font-display text-base">
              Muhammd Ahmad Tahir<span className="text-tangerine">.</span>ai
            </span>
          </div>
          <p className="mt-4 text-sm text-ink-soft max-w-xs">
            AI No-Code / Low-Code Systems Engineer — building the automations modern businesses run
            on.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-ink-soft mb-3">Explore</div>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-tangerine">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-ink-soft mb-3">Social</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://linkedin.com" className="hover:text-tangerine">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" className="hover:text-tangerine">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:hello@yourdomain.com" className="hover:text-tangerine">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-10 pt-6 border-t border-black/5 flex justify-between flex-wrap gap-2 text-xs text-ink-soft">
        <span>© {year} Muhammad Ahmad Tahir.ai — All rights reserved.</span>
        <span>Designed & built with care.</span>
      </div>
    </footer>
  );
}
