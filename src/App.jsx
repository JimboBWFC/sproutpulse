import React from "react";

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Tools", href: "#tools" },
  { label: "Status", href: "#status" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

const TOOLS = [
  {
    number: "01",
    state: "CORE WORKING · AUTOMATION NEXT",
    name: "Revival Radar",
    question: "What has woken up?",
    text: "Detect dormant or previously quiet tokens that begin showing meaningful renewed activity. Revival Radar compares what is happening now with the token’s own recent history so a genuine return of volume, liquidity and participation can stand out from a single noisy spike.",
    detail: "Historical baselines · renewed volume · liquidity context · sustained activity",
  },
  {
    number: "02",
    state: "SCORING CORE WORKING · PRODUCT VIEW NEXT",
    name: "Pump Professor",
    question: "Is this worth a closer look?",
    text: "Assess whether a token shows enough positive structural evidence to justify further research. Pump Professor looks at liquidity quality, market cap, transaction flow, activity and structure, then explains the evidence without telling the user to buy or avoid it.",
    detail: "Structure quality · liquidity strength · trading flow · explainable assessment",
  },
  {
    number: "03",
    state: "DEEP SCAN IN DEVELOPMENT",
    name: "Signal Surgeon",
    question: "What are you not being shown?",
    text: "A deeper manual investigation designed to turn complex token behaviour into bespoke plain-English findings. Signal Surgeon will bring together market behaviour, wallet relationships, funding links and genuine social standing so users can investigate a token for themselves instead of relying on an influencer’s claim.",
    detail: "Behaviour analysis · wallet links · social credibility · bespoke findings",
  },
];

const STATUS = [
  ["Working", "DexScreener market, liquidity and transaction data"],
  ["Working", "Historical SQLite snapshots and revival baselines"],
  ["Working", "Explainable Seedling, Growth and Harvest scoring"],
  ["Working", "Helius-assisted transfer structure checks"],
  ["In progress", "Revival Radar automated discovery and watch behaviour"],
  ["In progress", "Pump Professor research assessment experience"],
  ["Planned", "Signal Surgeon expanded social and wallet investigation"],
  ["Planned", "Connected Roots relationship mapping and web workspace"],
];

const ROADMAP = [
  ["01", "Now", "Strengthen the intelligence engine", "Finish separating data sources, scoring, storage and delivery while preserving the working revival, scoring and structure logic."],
  ["02", "Next", "Turn the three tools into web experiences", "Build Revival Radar discovery, Pump Professor assessment and Signal Surgeon investigation into a purpose-built workspace with history, watchlists and saved research."],
  ["03", "Later", "Deepen the investigation layer", "Add Connected Roots, stronger wallet relationships, social credibility checks and configurable alerts without turning SproutPulse into another hype feed."],
];

const FAQS = [
  ["Is SproutPulse a trading bot?", "No. SproutPulse is an intelligence and research platform. It helps users discover, assess and investigate tokens, but it does not place trades or tell users what they must buy or sell."],
  ["What are Revival Radar, Pump Professor and Signal Surgeon?", "They are three tools inside SproutPulse, each with a different job. Revival Radar looks for dormant tokens waking up, Pump Professor assesses tokens that may merit further research, and Signal Surgeon is the deeper manual investigation layer."],
  ["Does SproutPulse work only through Telegram?", "No. Telegram is the current delivery surface for the working prototype. The v2 architecture is being built so the same intelligence can power a web workspace, alerts and future integrations."],
  ["Will SproutPulse tell me whether to buy a token?", "No. The goal is to present relevant evidence, explain behaviour and highlight areas worth investigating so users can make their own decisions. SproutPulse is decision support, not financial advice."],
  ["Why would I use Signal Surgeon instead of trusting a social post?", "Because social claims can leave out important context. Signal Surgeon is being designed to examine the token itself: behaviour, wallet links, funding relationships and the credibility of its wider social footprint."],
  ["How will access and pricing work?", "That is not finalised. The priority is proving the product and its reliability first. Access and pricing will be kept simple and decided after testing rather than forcing an early token-gated model."],
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
                Investigate before you speculate.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
                SproutPulse helps you discover unusual activity, assess whether a token deserves a closer look, and investigate what sits behind the story being sold to you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#tools" className="bg-emerald-300 px-5 py-3 text-center text-sm font-semibold text-[#06100c] transition hover:bg-emerald-200">Explore the tools</a>
                <a href="#status" className="border border-white/15 bg-black/20 px-5 py-3 text-center text-sm font-medium text-white/80 transition hover:border-white/25">Development status</a>
              </div>

              <div className="mt-9 grid max-w-2xl grid-cols-3 border-y border-white/10">
                {["Discover", "Assess", "Investigate"].map((item) => (
                  <div key={item} className="border-r border-white/10 px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/48 last:border-r-0">{item}</div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-white/12 bg-black/35 p-2 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/60">SproutPulse prototype</div>
                    <div className="mt-1 text-sm text-white/75">Research intelligence in motion</div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">Active development</span>
                </div>
                <video src="/sproutpulsebanvid.mp4" autoPlay muted loop playsInline className="aspect-video w-full bg-black/40 object-contain" />
                <div className="grid grid-cols-3 border-t border-white/10 text-center">
                  {[["Radar", "discover"], ["Professor", "assess"], ["Surgeon", "investigate"]].map(([top, bottom]) => (
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
              <SectionLabel>The platform</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">One intelligence engine. Different ways to question a token.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/52 sm:text-base">SproutPulse is the overall research platform. Revival Radar, Pump Professor and Signal Surgeon are three tools within it, each designed for a different point in the user’s research process.</p>
            </div>

            <div className="lg:col-span-7">
              {[
                ["DISCOVER", "Revival Radar", "Find dormant or quiet tokens where meaningful activity appears to be returning."],
                ["ASSESS", "Pump Professor", "Surface structurally interesting tokens and explain why they may deserve more research."],
                ["INVESTIGATE", "Signal Surgeon", "Dig deeper into behaviour, wallet relationships and the credibility of the wider story."],
                ["SUPPORTING LAYER", "Connected Roots", "Visualise wallet and funding relationships when an investigation needs deeper context."],
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

        <section id="tools" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <SectionLabel>Core tools</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Three tools. Three different jobs.</h2>
            <p className="mt-4 text-sm leading-7 text-white/50 sm:text-base">None of them exists to make the decision for you. Their job is to surface evidence, explain context and help you decide what deserves your attention.</p>
          </div>

          <div className="mt-10 border-t border-white/10">
            {TOOLS.map((tool) => (
              <article key={tool.name} className="grid gap-5 border-b border-white/10 py-8 lg:grid-cols-[4rem_15rem_1fr] lg:items-start">
                <div className="font-mono text-xs text-emerald-200/40">{tool.number}</div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200/55">{tool.state}</div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white/90">{tool.name}</h3>
                  <p className="mt-2 text-sm font-medium text-emerald-100/65">{tool.question}</p>
                </div>
                <div>
                  <p className="max-w-2xl text-sm leading-7 text-white/52">{tool.text}</p>
                  <p className="mt-4 text-xs text-white/30">{tool.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 border-y border-emerald-200/12 py-7 md:grid-cols-[1fr_2fr]">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/60">The principle</div>
            <p className="text-base leading-7 text-white/62">See a token pushed by an influencer, Telegram group or social account? SproutPulse should give you somewhere to check the token itself before deciding how much weight to give the claim.</p>
          </div>
        </section>

        <section id="status" className="scroll-mt-24 border-y border-white/8 bg-[#08130e]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <SectionLabel>Development status</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Working core. Bigger research experience being built around it.</h2>
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
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:col-span-4">Build the evidence first. Then make it easier to use.</h2>
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
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Research the token. Not the hype.</h2>
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
