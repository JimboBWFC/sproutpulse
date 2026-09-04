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
    state: "WORKING PROTOTYPE · AUTOMATION NEXT",
    name: "Revival Radar",
    question: "What has woken up?",
    text: "Detect dormant or previously quiet tokens that begin showing meaningful renewed activity. Revival Radar compares what is happening now with the token’s own recent history so a genuine return of volume, liquidity and participation can stand out from a single noisy spike.",
    detail: "Historical baselines · renewed volume · liquidity context · sustained activity",
  },
  {
    number: "02",
    state: "SCORING WORKING · WEB EXPERIENCE NEXT",
    name: "Pump Professor",
    question: "Is this worth a closer look?",
    text: "Assess whether a token shows enough positive structural evidence to justify further research. Pump Professor looks at liquidity quality, market cap, transaction flow, activity and structure, then explains the evidence without telling the user to buy or avoid it.",
    detail: "Structure quality · liquidity strength · trading flow · explainable assessment",
  },
  {
    number: "03",
    state: "IN DEVELOPMENT",
    name: "Signal Surgeon",
    question: "What are you not being shown?",
    text: "A deeper manual investigation designed to turn complex token behaviour into bespoke plain-English findings. Signal Surgeon will bring together market behaviour, wallet relationships, funding links and public social activity so users can investigate a token for themselves instead of relying on an influencer’s claim.",
    detail: "Behaviour analysis · wallet links · social context · bespoke findings",
  },
];

const STATUS = [
  ["Working", "Telegram alert delivery and manual token scans"],
  ["Working", "DexScreener market, liquidity and transaction data"],
  ["Working", "Historical SQLite snapshots and revival baselines"],
  ["Working", "Explainable Seedling, Growth and Harvest scoring"],
  ["Working", "Helius-assisted transfer structure checks"],
  ["In development", "Revival Radar automated discovery and watch behaviour"],
  ["In development", "Pump Professor web research experience"],
  ["In development", "Signal Surgeon expanded social and wallet investigation"],
  ["Planned", "Connected Roots relationship mapping and web workspace"],
];

const ROADMAP = [
  ["01", "Now", "Strengthen the intelligence engine", "Separate data sources, scoring, storage and delivery while preserving the working revival, scoring and structure logic."],
  ["02", "Next", "Bring the three tools to the web", "Add history, watchlists and saved research to the Revival Radar, Pump Professor and Signal Surgeon web experiences."],
  ["03", "Later", "Deepen the investigation layer", "Add Connected Roots, stronger wallet relationships, social context and configurable alerts without turning SproutPulse into another hype feed."],
];

const FAQS = [
  ["Is SproutPulse a trading bot?", "No. SproutPulse is an intelligence and research platform. It helps users discover, assess and investigate tokens, but it does not place trades or tell users what they must buy or sell."],
  ["What are Revival Radar, Pump Professor and Signal Surgeon?", "They are three tools inside SproutPulse, each with a different job. Revival Radar looks for dormant tokens waking up, Pump Professor assesses tokens that may merit further research, and Signal Surgeon is the deeper manual investigation layer."],
  ["Does SproutPulse work only through Telegram?", "No. Telegram is the current delivery surface for the working prototype. The v2 architecture is being built so the same intelligence can power a web workspace, alerts and future integrations."],
  ["Will SproutPulse tell me whether to buy a token?", "No. The goal is to present relevant evidence, explain behaviour and highlight areas worth investigating so users can make their own decisions. SproutPulse is decision support, not financial advice."],
  ["Why would I use Signal Surgeon instead of trusting a social post?", "Because social claims can leave out important context. Signal Surgeon is being designed to examine the token itself: behaviour, wallet links, funding relationships and its wider public social activity."],
  ["How will access and pricing work?", "That is not finalised. The priority is proving the product and its reliability first. Access and pricing will be kept simple and decided after testing rather than forcing an early token-gated model."],
];

function SproutMark() {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-300/25 bg-emerald-300/10">
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
        <path d="M16 25V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-emerald-200" />
        <path d="M16 16c-5 0-8-3-8-8 5 0 8 3 8 8Z" fill="currentColor" className="text-emerald-300" />
        <path d="M16 13c0-5 3-8 8-8 0 5-3 8-8 8Z" fill="currentColor" className="text-emerald-200" />
      </svg>
    </div>
  );
}

function SectionLabel({ children }) {
  return <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/70">{children}</div>;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#06100c] text-[#f2fff7]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06100c]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="SproutPulse home">
            <SproutMark />
            <div>
              <div className="text-sm font-semibold tracking-tight">SproutPulse</div>
              <div className="text-[11px] text-white/55">On-chain intelligence</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/60 transition hover:text-white">{link.label}</a>
            ))}
            <a href="mailto:sproutpulse@proton.me" className="border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100 transition hover:bg-emerald-300/15">Contact</a>
          </nav>

          <button
            type="button"
            className="border border-white/15 px-3 py-2 text-sm text-white/80 md:hidden"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-navigation" className="border-t border-white/10 bg-[#06100c] px-5 py-3 md:hidden" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-3 text-sm text-white/70">{link.label}</a>
            ))}
            <a href="mailto:sproutpulse@proton.me" onClick={() => setMobileMenuOpen(false)} className="mt-2 block border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-center text-sm font-medium text-emerald-100">Contact</a>
          </nav>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 hidden bg-[url('/images/sproutback.png')] bg-cover bg-center opacity-30 sm:block" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,16,12,.97)_0%,rgba(6,16,12,.86)_46%,rgba(6,16,12,.7)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06100c] to-transparent" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-20">
            <div className="lg:col-span-6">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-2 border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-emerald-100">
                  <span className="h-1.5 w-1.5 bg-emerald-300" /> v2 in active development
                </span>
                <span className="border border-white/15 px-3 py-1.5 text-white/60">Solana first</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.97] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.6rem]">
                Investigate before you speculate.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                SproutPulse helps you discover unusual activity, assess whether a token deserves a closer look, and investigate what sits behind the story being sold to you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#status" className="bg-emerald-300 px-5 py-3 text-center text-sm font-semibold text-[#06100c] transition hover:bg-emerald-200">See what’s working</a>
                <a href="#tools" className="border border-white/20 bg-black/20 px-5 py-3 text-center text-sm font-medium text-white/85 transition hover:border-white/30">Explore the tools</a>
              </div>

              <div className="mt-9 max-w-2xl border-l-2 border-emerald-300/50 pl-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200/75">Working prototype</div>
                <p className="mt-2 text-sm leading-6 text-white/65">Telegram alerts backed by stored market snapshots, explainable scoring and transfer-structure checks.</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-white/15 bg-black/35 p-2 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200/70">SproutPulse v2</div>
                    <div className="mt-1 text-sm text-white/80">Research intelligence in development</div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/55">Active development</span>
                </div>
                {prefersReducedMotion ? (
                  <div className="grid aspect-video place-items-center bg-[#07150f]">
                    <div className="flex items-center gap-3 text-white/70"><SproutMark /><span className="text-sm">SproutPulse v2</span></div>
                  </div>
                ) : (
                  <video src="/sproutpulsebanvid.mp4" poster="/sproutpulse-poster.svg" autoPlay muted loop playsInline aria-hidden="true" className="aspect-video w-full bg-[#07150f] object-contain" />
                )}
                <div className="grid grid-cols-3 border-t border-white/10 text-center">
                  {[["Radar", "discover"], ["Professor", "assess"], ["Surgeon", "investigate"]].map(([top, bottom]) => (
                    <div key={top} className="border-r border-white/10 px-2 py-3 last:border-r-0">
                      <div className="text-xs font-medium text-white/80">{top}</div>
                      <div className="mt-1 text-[10px] text-white/55">{bottom}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="scroll-mt-24 border-b border-white/10 bg-[#08130e]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-5">
              <SectionLabel>The platform</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">The SproutPulse research platform</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">SproutPulse is the overall research platform. Revival Radar, Pump Professor and Signal Surgeon are three tools within it, each designed for a different point in the user’s research process.</p>
            </div>

            <div className="lg:col-span-7">
              {[
                ["DISCOVER", "Revival Radar", "Find dormant or quiet tokens where meaningful activity appears to be returning."],
                ["ASSESS", "Pump Professor", "Surface structurally interesting tokens and explain why they may deserve more research."],
                ["INVESTIGATE", "Signal Surgeon", "Dig deeper into behaviour, wallet relationships and the credibility of the wider story."],
                ["PLANNED · SUPPORTING LAYER", "Connected Roots", "Visualise wallet and funding relationships when an investigation needs deeper context."],
              ].map(([label, title, description]) => (
                <div key={title} className="grid gap-3 border-t border-white/10 py-5 sm:grid-cols-[9rem_1fr]">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/70">{label}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/90">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <SectionLabel>Core tools</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">The SproutPulse tools</h2>
            <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">Their job is to surface evidence, explain context and help you decide what deserves your attention—not to make the decision for you.</p>
          </div>

          <div className="mt-10 border-t border-white/10">
            {TOOLS.map((tool) => (
              <article key={tool.name} className="grid gap-5 border-b border-white/10 py-8 lg:grid-cols-[4rem_15rem_1fr] lg:items-start">
                <div className="font-mono text-xs text-emerald-200/60">{tool.number}</div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200/70">{tool.state}</div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white/90">{tool.name}</h3>
                  <p className="mt-2 text-sm font-medium text-emerald-100/75">{tool.question}</p>
                </div>
                <div>
                  <p className="max-w-2xl text-sm leading-7 text-white/65">{tool.text}</p>
                  <p className="mt-4 text-xs text-white/55">{tool.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 border-y border-emerald-200/15 py-7 md:grid-cols-[1fr_2fr]">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/70">Why it exists</div>
            <p className="text-base leading-7 text-white/70">See a token pushed by an influencer, Telegram group or social account? SproutPulse is being built to give you somewhere to check the token itself before deciding how much weight to give the claim.</p>
          </div>
        </section>

        <section id="status" className="scroll-mt-24 border-y border-white/10 bg-[#08130e]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <SectionLabel>Development status · September 2026</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">What works today</h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">The intelligence core is operating now. The larger web research experience is being built around it.</p>
            </div>
            <div className="lg:col-span-8">
              {STATUS.map(([state, description]) => (
                <div key={description} className="grid grid-cols-[7.5rem_1fr] border-t border-white/10 py-4 text-sm">
                  <div className="text-emerald-200/70">{state}</div>
                  <div className="text-white/65">{description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
          <SectionLabel>Roadmap</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:col-span-4">Development roadmap</h2>
            <div className="lg:col-span-8">
              {ROADMAP.map(([step, state, title, description]) => (
                <div key={step} className="grid gap-4 border-t border-white/10 py-6 sm:grid-cols-[3rem_5rem_1fr]">
                  <div className="font-mono text-xs text-emerald-200/60">{step}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">{state}</div>
                  <div>
                    <h3 className="text-base font-semibold text-white/90">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-white/10 bg-[#08130e]">
          <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Frequently asked questions</h2>
            <div className="mt-9 border-t border-white/10">
              {FAQS.map(([question, answer]) => (
                <details key={question} className="group border-b border-white/10 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-white/85 sm:text-base">
                    <span>{question}</span><span className="text-xl font-light text-white/60 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-y border-emerald-200/20 py-8 md:flex-row md:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/70">SproutPulse v2</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Research the token. Not the hype.</h2>
            </div>
            <a href="mailto:sproutpulse@proton.me" className="text-sm font-semibold text-emerald-200 underline decoration-emerald-300/40 underline-offset-4">sproutpulse@proton.me</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-white/55 sm:flex-row sm:justify-between lg:px-8">
          <div>© 2026 SproutPulse. Research tools for fast-moving markets.</div>
          <div>Not financial advice. Crypto is volatile. Do your own research.</div>
        </div>
      </footer>
    </div>
  );
}
