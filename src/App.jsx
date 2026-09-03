import React from "react";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Signals", href: "#signals" },
  { label: "Status", href: "#status" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

const SIGNALS = [
  {
    state: "IN TESTING",
    title: "Revival Intelligence",
    text: "Compare current activity with a token’s own recent history so renewed volume and improving structure stand out from ordinary noise.",
    detail: "Historical baselines · MC & liquidity context · explainable tiers",
  },
  {
    state: "IN TESTING",
    title: "Structure Intelligence",
    text: "Review token-transfer patterns for signs of coordinated wallet splitting and suspicious distribution behaviour.",
    detail: "Helius transfers · distribution checks · risk explanations",
  },
  {
    state: "WORKING CORE",
    title: "Market Context",
    text: "Read liquidity, market cap, volume and transaction flow together rather than treating a single number as a signal.",
    detail: "DexScreener data · trade-count flow · observed change tracking",
  },
  {
    state: "PLANNED",
    title: "Connected Roots",
    text: "Investigate how wallets, funding sources and token activity connect across a wider on-chain picture.",
    detail: "Wallet relationships · funding paths · saved investigations",
  },
];

const STATUS = [
  ["Working", "DexScreener market and liquidity data"],
  ["Working", "Historical SQLite snapshots and validation state"],
  ["Working", "Explainable three-tier scoring"],
  ["Working", "Helius-assisted transfer structure checks"],
  ["In progress", "Automated discovery and watch behaviour"],
  ["Planned", "Web workspace and Connected Roots"],
];

const ROADMAP = [
  ["01", "Now", "Strengthen the intelligence engine", "Finish separating data sources, scoring, storage and delivery so each layer is testable and reusable."],
  ["02", "Next", "Build the web workspace", "Move beyond manual Telegram scans with token search, watchlists, history, alert review and investigation views."],
  ["03", "Later", "Add deeper relationship intelligence", "Develop Connected Roots, stronger automated discovery and configurable alerts without turning SproutPulse into a hype feed."],
];

const FAQS = [
  ["Is SproutPulse a trading bot?", "No. SproutPulse is an intelligence and research tool. It does not promise entries, exits or returns, and it is not designed to place trades for you."],
  ["Does SproutPulse work only through Telegram?", "Telegram is the current delivery surface for the working prototype. The v2 architecture is being built so the same intelligence can power a web interface and other delivery channels."],
  ["What can the current engine actually analyse?", "The current backend can combine DexScreener market and liquidity data, historical snapshots, transaction-flow context and Helius-assisted transfer-structure checks into explainable signal tiers."],
  ["How will access and pricing work?", "That is not finalised. The priority is proving the product and its reliability first. Access and pricing will be kept simple and decided after testing rather than forcing an early token-gated model."],
  ["Is this financial advice?", "No. SproutPulse provides information to support your own research. Crypto markets are highly volatile and any signal still needs independent verification and judgement."],
];

function SproutMark() {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-300/20 bg-emerald-300/10">
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
        <path d="M16 25V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-emerald-200" />
        <path d="M16 16c-5 0-8-3-8-8 5 0 8 3 8 8Z" fill="currentColor" className="text-emerald-300" />
        <path d="M16 13c0-5 3-8 8-8 0 5-3 8-8 8Z" fill="currentColor" className="text-emerald-200" />
      </svg>
    </div>
  );
}

function SectionLabel({ children }) {
  return <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/65">{children}</div>;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#06100c] text-[#f2fff7]">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#06100c]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <SproutMark />
            <div>
              <div className="text-sm font-semibold tracking-tight">SproutPulse</div>
              <div className="text-[11px] text-white/45">On-chain intelligence</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/55 transition hover:text-white">{link.label}</a>
            ))}
            <a href="mailto:sproutpulse@proton.me" className="border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:bg-emerald-300/15">Contact</a>
          </nav>

          <button type="button" className="border border-white/10 px-3 py-2 text-sm text-white/70 md:hidden" onClick={() => setMobileMenuOpen((value) => !value)}>
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/8 bg-[#06100c] px-5 py-3 md:hidden">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-3 text-sm text-white/65">{link.label}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/8">
          <div className="absolute inset-0 bg-[url('/images/sproutback.png')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,16,12,.97)_0%,rgba(6,16,12,.86)_46%,rgba(6,16,12,.7)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06100c] to-transparent" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-20">
            <div className="lg:col-span-6">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-2 border border-emerald-300/20 bg-emerald-300/8 px-3 py-1.5 text-emerald-100">
                  <span className="h-1.5 w-1.5 bg-emerald-300" /> v2 in active development
                </span>
                <span className="border border-white/10 px-3 py-1.5 text-white/45">Solana first</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.97] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.6rem]">
                On-chain intelligence without the noise.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
                SproutPulse combines market activity, liquidity, transaction flow and wallet structure into clear signals you can investigate. Built to add context, not manufacture urgency.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#product" className="bg-emerald-300 px-5 py-3 text-center text-sm font-semibold text-[#06100c] transition hover:bg-emerald-200">See how it works</a>
                <a href="#status" className="border border-white/15 bg-black/20 px-5 py-3 text-center text-sm font-medium text-white/80 transition hover:border-white/25">Development status</a>
              </div>

              <div className="mt-9 grid max-w-2xl grid-cols-2 border-y border-white/10 sm:grid-cols-4">
                {["No predictions", "No paid-call hype", "Explainable signals", "Research first"].map((item) => (
                  <div key={item} className="border-r border-white/10 px-3 py-3 text-[11px] uppercase tracking-[0.12em] text-white/42 last:border-r-0">{item}</div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-white/12 bg-black/35 p-2 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/60">SproutPulse prototype</div>
                    <div className="mt-1 text-sm text-white/75">Signal intelligence in motion</div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">Live concept</span>
                </div>
                <video src="/sproutpulsebanvid.mp4" autoPlay muted loop playsInline className="aspect-video w-full bg-black/40 object-contain" />
                <div className="grid grid-cols-4 border-t border-white/10 text-center">
                  {[["MC", "context"], ["LP", "quality"], ["Flow", "activity"], ["Wallets", "structure"]].map(([top, bottom]) => (
                    <div key={top} className="border-r border-white/10 px-2 py-3 last:border-r-0">
                      <div className="text-xs font-medium text-white/78">{top}</div>
                      <div className="mt-1 text-[10px] text-white/32">{bottom}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="scroll-mt-24 border-b border-white/8 bg-[#08130e]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <SectionLabel>The product</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">The intelligence is the product. Telegram is one way to receive it.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/52 sm:text-base">SproutPulse began as a Telegram prototype. That proved the core idea, but v2 is being rebuilt around a reusable intelligence engine so the experience is not trapped inside a chat bot.</p>
            </div>

            <div className="lg:col-span-7">
              {[
                ["CORE", "Intelligence engine", "Data, scoring, structure analysis and history live independently of the interface."],
                ["NEXT", "Web workspace", "Token research, history, watchlists and investigations in a purpose-built interface."],
                ["CURRENT DELIVERY", "Telegram", "Useful for quick scans and future alerts, but no longer treated as the whole product."],
              ].map(([label, title, text]) => (
                <div key={title} className="grid gap-3 border-t border-white/10 py-5 sm:grid-cols-[9rem_1fr]">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/55">{label}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/86">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/46">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signals" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <SectionLabel>Signal layers</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Context before conclusions.</h2>
            <p className="mt-4 text-sm leading-7 text-white/50 sm:text-base">Each layer answers a different question. Together they help separate an interesting change from a number that merely looks exciting on its own.</p>
          </div>

          <div className="mt-10 border-t border-white/10">
            {SIGNALS.map((signal, index) => (
              <article key={signal.title} className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[4rem_13rem_1fr] md:items-start">
                <div className="font-mono text-xs text-emerald-200/40">0{index + 1}</div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/55">{signal.state}</div>
                  <h3 className="mt-2 text-lg font-semibold text-white/86">{signal.title}</h3>
                </div>
                <div>
                  <p className="text-sm leading-6 text-white/50">{signal.text}</p>
                  <p className="mt-3 text-xs text-white/30">{signal.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="status" className="scroll-mt-24 border-y border-white/8 bg-[#08130e]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <SectionLabel>Development status</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Working prototype. Cleaner v2 underneath it.</h2>
            </div>
            <div className="lg:col-span-8">
              {STATUS.map(([state, text]) => (
                <div key={text} className="grid grid-cols-[6.5rem_1fr] border-t border-white/10 py-4 text-sm">
                  <div className="text-emerald-200/55">{state}</div>
                  <div className="text-white/58">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
          <SectionLabel>Roadmap</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:col-span-4">Build the foundation, then earn the complexity.</h2>
            <div className="lg:col-span-8">
              {ROADMAP.map(([step, state, title, text]) => (
                <div key={step} className="grid gap-4 border-t border-white/10 py-6 sm:grid-cols-[3rem_5rem_1fr]">
                  <div className="font-mono text-xs text-emerald-200/40">{step}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">{state}</div>
                  <div>
                    <h3 className="text-base font-semibold text-white/84">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/45">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-white/8 bg-[#08130e]">
          <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Clear answers, no sales theatre.</h2>
            <div className="mt-9 border-t border-white/10">
              {FAQS.map(([q, a]) => (
                <details key={q} className="group border-b border-white/10 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-white/78 sm:text-base">
                    <span>{q}</span><span className="text-xl font-light text-white/30 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/46">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-y border-emerald-200/15 py-8 md:flex-row md:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/55">SproutPulse v2</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Building carefully. Testing before selling.</h2>
            </div>
            <a href="mailto:sproutpulse@proton.me" className="text-sm font-semibold text-emerald-200 underline decoration-emerald-300/30 underline-offset-4">sproutpulse@proton.me</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-white/35 sm:flex-row sm:justify-between lg:px-8">
          <div>© 2026 SproutPulse. Research tools for fast-moving markets.</div>
          <div>Not financial advice. Crypto is volatile. Do your own research.</div>
        </div>
      </footer>
    </div>
  );
}
