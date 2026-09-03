import React from "react";
import sproutLogo from "./assets/sproutpulse-logo.png";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Signals", href: "#signals" },
  { label: "Status", href: "#status" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

const SIGNALS = [
  {
    eyebrow: "IN TESTING",
    title: "Revival Intelligence",
    description:
      "Compare current activity with a token’s own recent history so renewed volume and improving structure stand out from ordinary noise.",
    points: [
      "Historical snapshot baselines",
      "Market cap and liquidity context",
      "Explainable signal tiers",
    ],
  },
  {
    eyebrow: "IN TESTING",
    title: "Structure Intelligence",
    description:
      "Review token-transfer patterns for signs of coordinated wallet splitting and suspicious distribution behaviour.",
    points: [
      "Helius transfer data",
      "Multi-wallet distribution checks",
      "Plain-English risk explanations",
    ],
  },
  {
    eyebrow: "WORKING CORE",
    title: "Market Context",
    description:
      "Bring liquidity, market cap, volume and transaction flow together so a single number never tells the whole story.",
    points: [
      "DexScreener market data",
      "Trade-count flow context",
      "Observed change tracking",
    ],
  },
  {
    eyebrow: "PLANNED",
    title: "Connected Roots",
    description:
      "A relationship view for investigating how wallets, funding sources and token activity connect across an investigation.",
    points: [
      "Wallet relationship mapping",
      "Funding-path context",
      "Saved investigations",
    ],
  },
];

const ROADMAP = [
  {
    step: "01",
    title: "Strengthen the intelligence engine",
    text: "Finish separating data sources, scoring, storage and delivery so each layer is testable and reusable.",
    state: "Now",
  },
  {
    step: "02",
    title: "Build the web workspace",
    text: "Move beyond manual Telegram scans with token search, watchlists, history, alert review and investigation views.",
    state: "Next",
  },
  {
    step: "03",
    title: "Add deeper relationship intelligence",
    text: "Develop Connected Roots, stronger automated discovery and configurable alerts without turning SproutPulse into a hype feed.",
    state: "Later",
  },
];

const FAQS = [
  {
    q: "Is SproutPulse a trading bot?",
    a: "No. SproutPulse is an intelligence and research tool. It does not promise entries, exits or returns, and it is not designed to place trades for you.",
  },
  {
    q: "Does SproutPulse work only through Telegram?",
    a: "Telegram is the current delivery surface for the working prototype. The v2 architecture is being built so the same intelligence can power a web interface and other delivery channels.",
  },
  {
    q: "What can the current engine actually analyse?",
    a: "The current backend can combine DexScreener market and liquidity data, historical snapshots, transaction-flow context and Helius-assisted transfer-structure checks into explainable signal tiers.",
  },
  {
    q: "How will access and pricing work?",
    a: "That is not finalised. The priority is proving the product and its reliability first. Access and pricing will be kept simple and will be decided after testing rather than forcing an early token-gated model.",
  },
  {
    q: "Is this financial advice?",
    a: "No. SproutPulse provides information to support your own research. Crypto markets are highly volatile and any signal still needs independent verification and judgement.",
  },
];

function StatusDot({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-3 py-1.5 text-xs font-medium text-emerald-100">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
      {label}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200/70">
      {children}
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#06100c] text-[#f2fff7]">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#06100c]">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_50%_0%,rgba(55,170,110,0.16),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#06100c]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={sproutLogo}
              alt="SproutPulse"
              className="h-9 w-9 rounded-xl object-contain"
            />
            <div>
              <div className="text-sm font-semibold tracking-tight">SproutPulse</div>
              <div className="text-[11px] text-white/45">On-chain intelligence</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/55 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:sproutpulse@proton.me"
              className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-[#06100c] transition hover:bg-emerald-50"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="rounded-xl border border-white/10 px-3 py-2 text-sm text-white/70 md:hidden"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/8 bg-[#06100c] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm text-white/65 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-12 lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              <StatusDot label="v2 in active development" />
              <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45">
                Solana first
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              On-chain intelligence without the noise.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
              SproutPulse combines market activity, liquidity, transaction flow and
              wallet structure into clear signals you can investigate. Built to add
              context, not manufacture urgency.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#product"
                className="rounded-xl bg-emerald-300 px-5 py-3 text-center text-sm font-semibold text-[#06100c] transition hover:bg-emerald-200"
              >
                See how it works
              </a>
              <a
                href="#status"
                className="rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-center text-sm font-medium text-white/75 transition hover:border-white/20 hover:text-white"
              >
                View development status
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/40">
              <span>No predictions</span>
              <span>No paid-call hype</span>
              <span>Explainable signals</span>
              <span>Research first</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1711]/90 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                    Intelligence stack
                  </div>
                  <div className="mt-1 text-sm font-medium text-white/80">
                    One engine, layered context
                  </div>
                </div>
                <span className="rounded-full border border-emerald-300/15 bg-emerald-300/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-200/80">
                  Testing
                </span>
              </div>

              <div className="space-y-3 p-5">
                {[
                  ["01", "Market data", "MC, liquidity, volume, transaction activity"],
                  ["02", "Historical context", "Recent snapshots and relative baselines"],
                  ["03", "Structure checks", "Transfer distribution and wallet patterns"],
                  ["04", "Signal layer", "Explainable tiers, reasons and risk flags"],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4"
                  >
                    <div className="font-mono text-xs text-emerald-200/55">{number}</div>
                    <div>
                      <div className="text-sm font-medium text-white/85">{title}</div>
                      <div className="mt-1 text-xs leading-5 text-white/42">{text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/8 px-5 py-4 text-xs leading-5 text-white/38">
                The same intelligence layer is being designed to serve a web workspace,
                Telegram alerts and future integrations.
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="scroll-mt-24 border-y border-white/8 bg-white/[0.018]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <SectionLabel>The product</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  The intelligence is the product. Telegram is one way to receive it.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/52 sm:text-base">
                  SproutPulse began as a Telegram prototype. That proved the core idea,
                  but v2 is being rebuilt around a reusable intelligence engine so the
                  experience is not trapped inside a chat bot.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
                {[
                  {
                    title: "Intelligence engine",
                    text: "Data, scoring, structure analysis and history live independently of the interface.",
                    badge: "Core",
                  },
                  {
                    title: "Web workspace",
                    text: "Token research, history, watchlists and investigations in a purpose-built interface.",
                    badge: "Building next",
                  },
                  {
                    title: "Telegram delivery",
                    text: "Useful for quick scans and future alerts, but no longer treated as the whole product.",
                    badge: "Prototype working",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-[#09140f] p-5"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/55">
                      {item.badge}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white/88">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/45">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="signals" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <SectionLabel>Signal layers</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Context before conclusions.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/50 sm:text-base">
              Each layer answers a different question. Together they help separate an
              interesting change from a number that merely looks exciting on its own.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {SIGNALS.map((signal) => (
              <article
                key={signal.title}
                className="rounded-[1.75rem] border border-white/8 bg-[#09140f]/80 p-6 sm:p-7"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/55">
                  {signal.eyebrow}
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                  {signal.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/48">
                  {signal.description}
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-3">
                  {signal.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-xl border border-white/7 bg-white/[0.025] px-3 py-2.5 text-xs leading-5 text-white/50"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="status" className="scroll-mt-24 border-y border-white/8 bg-[#07110d]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <SectionLabel>Development status</SectionLabel>
                <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Working prototype. Cleaner v2 underneath it.
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
                  The current Telegram prototype already performs manual token scans.
                  The backend is now being reorganised into tested modules before more
                  automation and the web workspace are added.
                </p>
              </div>

              <div className="grid gap-3 lg:col-span-7 sm:grid-cols-2">
                {[
                  ["Working", "DexScreener market and liquidity data"],
                  ["Working", "Historical SQLite snapshots and validation state"],
                  ["Working", "Explainable three-tier scoring"],
                  ["Working", "Helius-assisted transfer structure checks"],
                  ["In progress", "Automated discovery and watch behaviour"],
                  ["Planned", "Web workspace and Connected Roots"],
                ].map(([state, text]) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-4"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-300/75" />
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">
                        {state}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-white/65">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/8 bg-black/20 p-3">
              <video
                src="/sproutpulsebanvid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="max-h-[30rem] w-full rounded-[1.25rem] object-contain"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-emerald-200/10 bg-emerald-200/[0.035] p-7 sm:p-10 lg:grid lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionLabel>Design principle</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                Useful intelligence should slow bad decisions down.
              </h2>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:mt-0">
              {[
                ["Explain the signal", "Show why a token was flagged instead of hiding behind a red or green badge."],
                ["Show the context", "Liquidity, market cap, activity and structure should be read together."],
                ["Avoid false certainty", "Signals are prompts to investigate, not guarantees about what happens next."],
                ["Keep the noise down", "More alerts are not automatically better alerts."],
              ].map(([title, text]) => (
                <div key={title} className="border-l border-white/12 pl-4">
                  <div className="text-sm font-semibold text-white/80">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-white/42">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="scroll-mt-24 border-y border-white/8 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <SectionLabel>Roadmap</SectionLabel>
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Build the foundation, then earn the complexity.
                </h2>
              </div>
              <div className="space-y-3 lg:col-span-8">
                {ROADMAP.map((item) => (
                  <div
                    key={item.step}
                    className="grid gap-4 rounded-2xl border border-white/8 bg-[#09140f] p-5 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:p-6"
                  >
                    <div className="font-mono text-xs text-emerald-200/45">{item.step}</div>
                    <div>
                      <h3 className="text-base font-semibold text-white/85">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/45">{item.text}</p>
                    </div>
                    <div className="w-fit rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                      {item.state}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Clear answers, no sales theatre.
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/8 bg-[#09140f]/80 p-5 open:border-white/12"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-white/78 sm:text-base">
                  <span>{item.q}</span>
                  <span className="text-xl font-light text-white/30 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/46">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/9 bg-white/[0.025] p-7 sm:p-9 md:flex-row md:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/55">
                SproutPulse v2
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Building carefully. Testing before selling.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                Interested in the project or want to share useful feedback? Get in touch.
              </p>
            </div>
            <a
              href="mailto:sproutpulse@proton.me"
              className="shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#06100c] transition hover:bg-emerald-50"
            >
              sproutpulse@proton.me
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>© 2026 SproutPulse. Research tools for fast-moving markets.</div>
          <div>Not financial advice. Crypto is volatile. Do your own research.</div>
        </div>
      </footer>
    </div>
  );
}
