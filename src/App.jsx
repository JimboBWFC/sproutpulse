import React from "react";
import sproutLogo from "./assets/sproutpulse-logo.png";

/* ---------------- NAV ---------------- */

const NAV_LINKS = [
  { label: "At a glance", href: "#glance" },
  { label: "Our aims", href: "#aims" },
  { label: "Telegram bot", href: "#telegram-bot" },
  { label: "Token access", href: "#token" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

/* ---------------- BOT MODES ---------------- */

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
      "This is an awareness tool, not a prediction. Always verify liquidity, holders, and context.",
  },
  {
    key: "pump",
    name: "Pump Professor",
    tagline: "Post-graduation structure checks for legitimacy.",
    bullets: [
      "Monitors tokens that successfully graduate from platforms like pump.fun",
      "Filters out common post-graduation rug and dump patterns",
      "Highlights graduates with stronger, survivable structure worth watching",
    ],
    note:
      "Graduation does not guarantee success. This highlights structure, not future price.",
  },
  {
    key: "rug",
    name: "Rug Checker",
    tagline: "Risk-focused scans with plain-English explanations.",
    bullets: [
      "Checks contract permissions and control risks",
      "Reviews liquidity and holder concentration",
      "Explains why something is flagged, not just red/green labels",
    ],
    note:
      "No tool can guarantee safety. This mode helps reduce obvious risk.",
  },
];

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "Is SproutPulse financial advice?",
    a: "No. SproutPulse provides information and alerts to support your own research. Crypto is volatile and you can lose money.",
  },
  {
    q: "Is this one bot or multiple bots?",
    a: "It’s one Telegram bot with three switchable modes: Revival Radar, Pump Professor, and Rug Checker.",
  },
  {
    q: "What is Pump Professor actually checking?",
    a: "It evaluates tokens that graduate to see whether they show signs of legitimate, survivable structure, because many graduates fail shortly after.",
  },
  {
    q: "Does holding $SPROUT guarantee returns?",
    a: "No. $SPROUT is intended as an access mechanism to tools, not an investment promise.",
  },
];

/* ---------------- UTILS ---------------- */

const cx = (...c) => c.filter(Boolean).join(" ");

/* ================= APP ================= */

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeMode, setActiveMode] = React.useState("revival");
  const mode = BOT_MODES.find((m) => m.key === activeMode);

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
      }}
    >
      <div className="min-h-screen bg-black/65">
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <img
                src={sproutLogo}
                alt="SproutPulse logo"
                className="h-9 w-9 rounded-xl object-contain"
              />
              <div>
                <div className="text-sm font-semibold">SproutPulse</div>
                <div className="text-xs text-white/60">
                  Calm tools for chaotic markets
                </div>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/70 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg border border-white/15 px-3 py-2 text-sm"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-black/60">
              <div className="px-4 py-3 flex flex-col">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 text-white/75 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-6xl font-semibold">
              Calm alerts for a noisy crypto world.
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              SproutPulse is a tools-first project designed to reduce noise,
              highlight risk, and surface signals. No hype. No guarantees.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <video
                src="/sproutpulsebanvid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* TELEGRAM BOT */}
        <section id="telegram-bot" className="mx-auto max-w-6xl px-4 pb-20">
          <h2 className="text-3xl font-semibold">
            One Telegram Bot. Three Modes.
          </h2>

          <div className="mt-6 flex gap-2 flex-wrap">
            {BOT_MODES.map((m) => (
              <button
                key={m.key}
                onClick={() => setActiveMode(m.key)}
                className={cx(
                  "px-4 py-2 rounded-full border",
                  activeMode === m.key
                    ? "bg-white text-black border-white"
                    : "border-white/20 text-white/70"
                )}
              >
                {m.name}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-xl font-semibold">{mode.name}</h3>
            <p className="mt-2 text-white/70">{mode.tagline}</p>

            <ul className="mt-4 space-y-2 text-white/75">
              {mode.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/50" />
                  {b}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm text-white/55">{mode.note}</p>
          </div>
        </section>

        {/* TOKEN */}
        <section id="token" className="mx-auto max-w-6xl px-4 pb-20">
          <h2 className="text-3xl font-semibold">$SPROUT Token Access</h2>
          <p className="mt-4 text-white/70 max-w-3xl">
            After an initial testing period, access to SproutPulse will include
            the option to hold a small amount of $SPROUT. The token exists for
            utility and access, not hype.
          </p>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="mx-auto max-w-6xl px-4 pb-20">
          <h2 className="text-3xl font-semibold">Growing Tool Suite</h2>
          <p className="mt-4 text-white/70 max-w-3xl">
            We’ll continue expanding SproutPulse carefully. Planned improvements
            include extending Revival Radar to BNB Chain and refining risk checks.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 pb-24">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <div className="mt-6 space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="rounded-xl border border-white/10 bg-black/30 p-4"
              >
                <summary className="cursor-pointer font-medium">
                  {f.q}
                </summary>
                <p className="mt-2 text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-black/40">
          <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-white/50">
            Not financial advice. Crypto is volatile. Do your own research.
          </div>
        </footer>
      </div>
    </div>
  );
}







