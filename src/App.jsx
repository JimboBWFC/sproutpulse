// src/App.jsx
import React from "react";

const NAV_LINKS = [
  { label: "At a glance", href: "#glance" },
  { label: "Our aims", href: "#aims" },
  { label: "Telegram bot", href: "#telegram-bot" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const BOT_MODES = [
  {
    key: "revival",
    name: "Revival Radar",
    tagline: "Finds tokens showing renewed signs of activity (not predictions).",
    bullets: [
      "Flags renewed volume after a quieter period",
      "Highlights changes in wallet interaction / holder movement worth investigating",
      "Focuses on activity relative to the token’s recent baseline",
    ],
    note: "This is an awareness tool. Signals can be false positives—always verify liquidity, holders, and context.",
  },
  {
    key: "pump",
    name: "Pump Professor",
    tagline: "Post-graduation legitimacy checks to find stronger graduates worth watching.",
    bullets: [
      "Monitors tokens that successfully graduate from launch platforms (e.g. pump.fun)",
      "Evaluates whether the graduate shows a more legitimate, survivable structure",
      "Helps distinguish weak graduates from stronger candidates that may recover after the typical dip",
    ],
    note: "Graduation is not a guarantee. Passing checks does not guarantee success—this highlights structural strength, not future price.",
  },
  {
    key: "rug",
    name: "Rug Checker",
    tagline: "Risk-focused checks with plain-English outputs.",
    bullets: [
      "Surfaces common risk signals (permissions, liquidity concerns, concentration)",
      "Explains why something is flagged—not just a red/green label",
      "Helps you slow down before interacting with contracts",
    ],
    note: "No tool can guarantee safety. This mode helps reduce obvious risk, not eliminate it.",
  },
];

const FAQS = [
  {
    q: "Is SproutPulse financial advice?",
    a: "No. SproutPulse provides information and alerts to support your own research. Crypto is volatile and you can lose money.",
  },
  {
    q: "Is it one bot or three bots?",
    a: "It’s one Telegram bot with three modes: Revival Radar, Pump Professor, and Rug Checker. You switch modes inside the same bot depending on what you’re checking.",
  },
  {
    q: "Do alerts mean a token will go up?",
    a: "No. Alerts are signals worth investigating. They are not predictions or guarantees.",
  },
  {
    q: "Can a token pass checks and still fail?",
    a: "Yes. These checks help reduce obvious risk and improve decision quality, but they can’t eliminate uncertainty.",
  },
];

function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeMode, setActiveMode] = React.useState("revival");

  const mode = BOT_MODES.find((m) => m.key === activeMode) ?? BOT_MODES[0];

  // close mobile menu on hash change (e.g., user taps any anchor)
  React.useEffect(() => {
    const onHashChange = () => setMobileMenuOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#070A0F] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute top-[35%] left-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute bottom-[-180px] right-[-140px] h-[520px] w-[520px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A0F]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-white/10 ring-1 ring-white/10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">SproutPulse</div>
              <div className="text-xs text-white/60">Calm tools for chaotic markets</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#telegram-bot"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 transition"
            >
              Explore the bot
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:border-white/25 transition"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#070A0F]/95">
            <div className="mx-auto w-full max-w-6xl px-4 py-3">
              <div className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-white/75 hover:bg-white/5 hover:text-white transition"
                  >
                    {l.label}
                  </a>
                ))}
                {/* Explicitly requested: FAQ link in mobile menu (already included above via NAV_LINKS),
                    keeping this comment so it's easy to find later. */}
                <a
                  href="#telegram-bot"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 rounded-xl bg-white px-3 py-3 text-base font-medium text-black hover:bg-white/90 transition text-center"
                >
                  Explore the bot
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main id="top" className="relative">
        <section className="mx-auto w-full max-w-6xl px-4 pt-14 pb-10 md:pt-20 md:pb-16">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-white/40" />
                Building in public • Early access coming soon
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                Calm alerts for a noisy crypto world.
              </h1>

              <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
                SproutPulse is a tools-first project built to reduce noise, highlight risk, and surface signals.
                No promises. No hype. Just a cleaner way to do your own research.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#telegram-bot"
                  className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-medium text-black hover:bg-white/90 transition"
                >
                  See the Telegram bot
                </a>
                <a
                  href="#faq"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white/85 hover:border-white/25 transition"
                >
                  Read the FAQ
                </a>
              </div>

              <p className="mt-4 text-xs text-white/55">
                Not financial advice. Crypto is volatile and you can lose money. Always do your own research.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
                <div className="text-sm font-medium text-white/85">What SproutPulse is</div>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  {[
                    "A set of calm, research-first tools",
                    "Focused on signals + risk awareness",
                    "Built around one Telegram bot with switchable modes",
                    "Designed to be useful even when markets are messy",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/50 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-2xl bg-black/30 border border-white/10 p-4">
                  <div className="text-xs text-white/60">Principle</div>
                  <div className="mt-1 text-sm text-white/80">
                    If an alert feels like hype, we don’t ship it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section id="glance" className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16 scroll-mt-24">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Signal first",
                desc: "Surface unusual activity worth investigating—without pretending it’s a prediction.",
              },
              {
                title: "Risk-aware",
                desc: "Make danger obvious, explain why, and encourage calmer decisions.",
              },
              {
                title: "One workflow",
                desc: "One Telegram bot with three modes: discovery, validation, risk review.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6"
              >
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-white/70">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Our aims */}
        <section id="aims" className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16 scroll-mt-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our aims</h2>
            <p className="mt-3 max-w-3xl text-base md:text-lg text-white/70">
              SproutPulse exists to help people make calmer, more informed decisions in fast-moving markets.
              We don’t do predictions. We don’t do guarantees. We build tools that make it easier to research.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <div className="text-sm font-semibold text-white/90">We’re here to</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {[
                    "Reduce noise and highlight meaningful on-chain signals",
                    "Explain risk in plain English",
                    "Encourage patience, caution, and verification",
                    "Build a tool suite that grows over time",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/50 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <div className="text-sm font-semibold text-white/90">We’re not here to</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {[
                    "Promise gains or sell “sure thing” calls",
                    "Encourage reckless trades or FOMO",
                    "Disguise marketing as “alpha”",
                    "Replace your judgement or research",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/50 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-6 text-xs md:text-sm text-white/55">
              Reminder: This project provides information only. Nothing on this site is financial advice.
            </p>
          </div>
        </section>

        {/* ONE BOT / THREE MODES */}
        <section id="telegram-bot" className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16 scroll-mt-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              One Telegram Bot. Three Modes.
            </h2>
            <p className="mt-3 text-base md:text-lg text-white/70 max-w-3xl">
              SproutPulse runs through <span className="text-white font-medium">one</span> Telegram bot that can
              switch between three key functions depending on what you’re trying to check.
              It’s built to reduce noise, highlight risk, and surface signals —{" "}
              <span className="text-white font-medium">not</span> to promise wins.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {BOT_MODES.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setActiveMode(m.key)}
                  className={classNames(
                    "rounded-full px-4 py-2 text-sm md:text-base transition border",
                    activeMode === m.key
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white border-white/20 hover:border-white/40"
                  )}
                  type="button"
                >
                  {m.name}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-black/30 border border-white/10 p-5 md:p-6">
              <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {mode.name}{" "}
                    <span className="text-white/60 text-base md:text-lg font-normal">(Mode)</span>
                  </h3>
                  <p className="mt-2 text-white/70">{mode.tagline}</p>
                </div>
                <div className="text-xs md:text-sm text-white/60">
                  Switch modes inside the same bot
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-white/75">
                {mode.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-white/60 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm md:text-base text-white/55">
                <span className="text-white/70 font-medium">Note:</span> {mode.note}
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16 scroll-mt-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How it works</h2>
            <p className="mt-3 max-w-3xl text-base md:text-lg text-white/70">
              The bot is designed to support a calm workflow: discover signals, validate structure, then assess risk.
              You can use one mode or combine them depending on what you’re trying to check.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  desc: "Use Revival Radar when something shows renewed activity and you want an early heads-up.",
                },
                {
                  step: "2",
                  title: "Validation",
                  desc: "Use Pump Professor on graduates to assess legitimacy and survivable structure beyond the hype.",
                },
                {
                  step: "3",
                  title: "Risk review",
                  desc: "Use Rug Checker before interacting—slow down, verify, and understand red flags.",
                },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-white text-black flex items-center justify-center font-semibold">
                      {s.step}
                    </div>
                    <div className="text-sm font-semibold text-white/90">{s.title}</div>
                  </div>
                  <div className="mt-3 text-sm text-white/70">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold text-white/90">A quick reminder</div>
              <p className="mt-2 text-sm text-white/70">
                SproutPulse alerts are designed to help you research—not to tell you what to buy or sell.
                Crypto markets are volatile and outcomes are uncertain.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ (already exists, now linked from mobile menu too) */}
        <section id="faq" className="mx-auto w-full max-w-6xl px-4 pb-14 md:pb-20 scroll-mt-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
            <div className="mt-6 grid gap-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-white/10 bg-black/25 p-5"
                >
                  <summary className="cursor-pointer list-none text-sm md:text-base font-semibold text-white/90 flex items-center justify-between">
                    <span>{f.q}</span>
                    <span className="text-white/60 group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-white/70">{f.a}</p>
                </details>
              ))}
            </div>

            <p className="mt-6 text-xs md:text-sm text-white/55">
              If you have questions, we’ll keep expanding this FAQ as the project develops.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#070A0F]/70">
          <div className="mx-auto w-full max-w-6xl px-4 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold">SproutPulse</div>
                <div className="mt-1 text-xs text-white/60">
                  Tools that encourage patience, verification, and calm decisions.
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="hover:text-white transition">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 text-xs text-white/50">
              Not financial advice. Crypto is volatile. Do your own research.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}





