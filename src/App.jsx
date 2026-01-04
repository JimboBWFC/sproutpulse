import React from "react";
import sproutLogo from "./assets/sproutpulse-logo.png";

const NAV_LINKS = [
  { label: "At a glance", href: "#glance" },
  { label: "Our aims", href: "#aims" },
  { label: "Telegram bot", href: "#telegram-bot" },
  { label: "$SPROUT access", href: "#token" },
  { label: "Growing tools", href: "#growing-tools" },
  { label: "FAQ", href: "#faq" },
];

const BOT_MODES = [
  {
    key: "revival",
    name: "Revival Radar",
    tagline: "Early awareness when activity returns.",
    bullets: [
      "Detects renewed volume after a quieter period",
      "Highlights changes in wallet and holder behaviour",
      "Focuses on activity relative to the token’s recent baseline",
    ],
    note:
      "Awareness tool, not a prediction. Always verify liquidity, holders, and context.",
  },
  {
    key: "pump",
    name: "Pump Professor",
    tagline: "Post-graduation structure checks for legitimacy.",
    bullets: [
      "Monitors tokens that successfully graduate from platforms like pump.fun",
      "Filters out common rug patterns near graduation and weak post-graduate structure",
      "Highlights graduates with stronger, survivable structure worth watching",
    ],
    note:
      "Graduation is not a guarantee. This highlights structure, not future price.",
  },
  {
    key: "rug",
    name: "Rug Checker",
    tagline: "Risk-focused scans with plain-English explanations.",
    bullets: [
      "Surfaces common risk signals (permissions, liquidity concerns, concentration)",
      "Explains why something is flagged — not just a red/green label",
      "Helps you slow down before interacting with contracts",
    ],
    note:
      "No tool can guarantee safety. This mode helps reduce obvious risk, not eliminate it.",
  },
];

const FAQS = [
  {
    q: "Is SproutPulse financial advice?",
    a: "No. SproutPulse provides information and alerts to support your own research. Crypto is volatile and you can lose money.",
  },
  {
    q: "Is it one bot or three bots?",
    a: "It’s one Telegram bot with three switchable modes: Revival Radar, Pump Professor, and Rug Checker.",
  },
  {
    q: "What is Pump Professor actually checking?",
    a: "It focuses on tokens that graduate and checks whether they show signs of more legitimate, survivable structure, because many tokens rug near graduation or dump hard shortly after.",
  },
  {
    q: "Does holding $SPROUT guarantee returns?",
    a: "No. Holding $SPROUT (when enabled) is intended as an access method to tools. It is not an investment promise or guarantee.",
  },
];

const cx = (...c) => c.filter(Boolean).join(" ");

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeMode, setActiveMode] = React.useState("revival");
  const mode = BOT_MODES.find((m) => m.key === activeMode) ?? BOT_MODES[0];

  React.useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <div
      id="top"
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url('/images/sproutback.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="min-h-screen bg-black/65">
        {/* Subtle glow accents */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
          <div className="absolute top-[35%] left-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-[140px]" />
          <div className="absolute bottom-[-180px] right-[-140px] h-[520px] w-[520px] rounded-full bg-white/5 blur-[140px]" />
        </div>

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
            <a href="#top" className="flex items-center gap-3">
              <img
                src={sproutLogo}
                alt="SproutPulse logo"
                className="h-9 w-9 rounded-xl object-contain"
              />
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">
                  SproutPulse
                </div>
                <div className="text-xs text-white/60">
                  Calm tools for chaotic markets
                </div>
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

          {/* Mobile menu (includes FAQ) */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-black/60">
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

        <main className="relative">
          {/* HERO */}
          <section className="mx-auto w-full max-w-6xl px-4 pt-14 pb-10 md:pt-20 md:pb-16">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                {/* In testing badge (requested) */}
                <div className="inline-flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    <span className="h-2 w-2 rounded-full bg-white/40" />
                    Building in public
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    In testing
                  </span>
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                  Calm alerts for a noisy crypto world.
                </h1>

                <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
                  SproutPulse is a tools-first project designed to reduce noise,
                  highlight risk, and surface signals. No promises. No hype.
                  Just a cleaner way to do your own research.
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
                  Not financial advice. Crypto is volatile and you can lose
                  money. Always do your own research.
                </p>
              </div>

              {/* VIDEO */}
              <div className="md:col-span-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6">
                  <div className="text-sm font-medium text-white/85">
                    SproutPulse in motion
                  </div>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <video
                      src="/sproutpulsebanvid.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="mt-4 text-sm text-white/70">
                    One bot • Three modes • Shipped carefully
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AT A GLANCE */}
          <section
            id="glance"
            className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16 scroll-mt-24"
          >
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

          {/* OUR AIMS */}
          <section
            id="aims"
            className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16 scroll-mt-24"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Our aims
              </h2>
              <p className="mt-3 max-w-3xl text-base md:text-lg text-white/70">
                SproutPulse exists to help people make calmer, more informed
                decisions in fast-moving markets. We don’t do predictions. We
                don’t do guarantees. We build tools that make research simpler.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <div className="text-sm font-semibold text-white/90">
                    We’re here to
                  </div>
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
                  <div className="text-sm font-semibold text-white/90">
                    We’re not here to
                  </div>
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
                Reminder: This project provides information only. Nothing on
                this site is financial advice.
              </p>
            </div>
          </section>

          {/* TELEGRAM BOT */}
          <section
            id="telegram-bot"
            className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16 scroll-mt-24"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                One Telegram Bot. Three Modes.
              </h2>
              <p className="mt-3 text-base md:text-lg text-white/70 max-w-3xl">
                SproutPulse runs through{" "}
                <span className="text-white font-medium">one</span> Telegram bot
                that can switch between three key functions depending on what
                you’re trying to check. Built to reduce noise, highlight risk,
                and surface signals —{" "}
                <span className="text-white font-medium">not</span> to promise
                wins.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {BOT_MODES.map((m) => (
                  <button
                    key={m.key}
                    onClick={() => setActiveMode(m.key)}
                    className={cx(
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
                      <span className="text-white/60 text-base md:text-lg font-normal">
                        (Mode)
                      </span>
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
                  <span className="text-white/70 font-medium">Note:</span>{" "}
                  {mode.note}
                </p>
              </div>
            </div>
          </section>

          {/* TOKEN */}
          <section
            id="token"
            className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16 scroll-mt-24"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                $SPROUT Token Access (Optional)
              </h2>
              <p className="mt-3 max-w-3xl text-base md:text-lg text-white/70">
                We’ll run an initial{" "}
                <span className="text-white font-medium">testing period</span>{" "}
                when the bot launches to ensure it performs reliably in real
                conditions. After that, access will include a simple option:
                holding a small amount of{" "}
                <span className="text-white font-medium">$SPROUT</span> in your
                wallet.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <div className="text-sm font-semibold text-white/90">
                    Why a token at all?
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {[
                      "Simple access control: holding = access (no passwords or logins)",
                      "Aligned incentives: users who value the tool hold the access key",
                      "Fair and open: access without “VIP hype” tiers",
                      "Sustainable support: helps fund infrastructure and ongoing development",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-white/50 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
                  <div className="text-sm font-semibold text-white/90">
                    Important notes
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {[
                      "Holding $SPROUT is intended as tool access, not an investment promise",
                      "Access details may evolve during testing as we improve reliability and safety",
                      "Crypto is volatile—always verify and manage risk carefully",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-white/50 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-white/55">
                    Holding $SPROUT doesn’t guarantee returns. It’s an access key
                    to tools — not a promise of profit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* GROWING TOOLS */}
          <section
            id="growing-tools"
            className="mx-auto w-full max-w-6xl px-4 pb-12 md:pb-16 scroll-mt-24"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Growing tools over time
              </h2>
              <p className="mt-3 max-w-3xl text-base md:text-lg text-white/70">
                SproutPulse will continue expanding. We’ll add new checks, new
                modes, and chain support where it genuinely improves signal
                quality — and we’ll ship carefully, without hype.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Revival Radar expansion",
                    desc: "Add support beyond Solana — starting with a BNB version of Revival Radar where it makes sense.",
                  },
                  {
                    title: "Rug Checker improvements",
                    desc: "Clearer plain-English explanations and stronger risk context so users can slow down and verify.",
                  },
                  {
                    title: "New tools as we learn",
                    desc: "We’ll keep building research tools. If it’s not reliable and useful, it doesn’t go live.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-white/10 bg-black/25 p-5"
                  >
                    <div className="text-sm font-semibold text-white/90">
                      {c.title}
                    </div>
                    <div className="mt-2 text-sm text-white/70">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="mx-auto w-full max-w-6xl px-4 pb-14 md:pb-20 scroll-mt-24"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                FAQ
              </h2>
              <div className="mt-6 grid gap-3">
                {FAQS.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-white/10 bg-black/25 p-5"
                  >
                    <summary className="cursor-pointer list-none text-sm md:text-base font-semibold text-white/90 flex items-center justify-between">
                      <span>{f.q}</span>
                      <span className="text-white/60 group-open:rotate-45 transition">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-white/70">{f.a}</p>
                  </details>
                ))}
              </div>

              <p className="mt-6 text-xs md:text-sm text-white/55">
                We’ll keep expanding this FAQ as the project develops.
              </p>
            </div>
          </section>

          {/* FOOTER (email added) */}
          <footer className="border-t border-white/10 bg-black/40">
            <div className="mx-auto w-full max-w-6xl px-4 py-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold">SproutPulse</div>
                  <div className="mt-1 text-xs text-white/60">
                    Tools that encourage patience, verification, and calm
                    decisions.
                  </div>
                  <div className="mt-3 text-xs text-white/70">
                    Contact:{" "}
                    <a
                      href="mailto:sproutpulse@proton.me"
                      className="text-white/80 hover:text-white underline underline-offset-4"
                    >
                      sproutpulse@proton.me
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-white/70">
                  {NAV_LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="hover:text-white transition"
                    >
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
    </div>
  );
}








