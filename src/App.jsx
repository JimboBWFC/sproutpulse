// src/App.jsx
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Top bar / header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">SproutPulse</div>
              <div className="text-xs text-white/60">Calm signals in a noisy market</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#what">
              What it is
            </a>
            <a className="hover:text-white" href="#aims">
              Aims
            </a>
            <a className="hover:text-white" href="#bots">
              Bots
            </a>
            <a className="hover:text-white" href="#transparency">
              Transparency
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#bots"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:opacity-90"
            >
              Explore the bots
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  Building quietly • Tools over hype
                </div>

                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  Calm signals in a noisy market.
                </h1>

                <p className="mt-4 text-lg text-white/70 md:text-xl">
                  <span className="text-white">SproutPulse helps you understand crypto risk</span> — not chase hype.
                  We build simple, transparent tools that help you evaluate tokens, spot warning signs, and make{" "}
                  <span className="text-white">your own</span> informed decisions.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#what"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:opacity-90"
                  >
                    What SproutPulse is
                  </a>
                  <a
                    href="#bots"
                    className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    See the Telegram bots
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <StatPill title="No promises" desc="No guaranteed gains" />
                  <StatPill title="No paid shills" desc="No hidden incentives" />
                  <StatPill title="Just clarity" desc="Plain-English outputs" />
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
                  <div className="text-sm font-semibold text-white">SproutPulse principle</div>
                  <p className="mt-2 text-sm text-white/70">
                    “SproutPulse doesn’t tell you what to buy. It helps you understand what you’re looking at.”
                  </p>

                  <div className="mt-5 rounded-xl border border-white/10 bg-neutral-950/40 p-4">
                    <div className="text-xs font-semibold text-white/80">Quick disclaimer</div>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">
                      Crypto is volatile and unpredictable. SproutPulse provides educational, informational tools only —
                      not financial advice. You stay in control.
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3">
                    <MiniCard title="Revival Radar" desc="Highlights tokens showing signs of genuine recovery." />
                    <MiniCard title="Pump Professor" desc="Adds early risk context to new launches and graduations." />
                    <MiniCard title="Risk Roots" desc="Flags where rug risk starts — with clear, plain-English reasons." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IT IS / ISN'T */}
        <section id="what" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What SproutPulse is (and isn’t)</h2>
            <p className="mt-3 max-w-3xl text-white/70">
              SproutPulse is designed to reduce avoidable mistakes by making risk easier to see and easier to
              understand.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Card title="SproutPulse is">
                <ul className="space-y-3 text-sm text-white/70">
                  <li>• A collection of tools that analyse on-chain data</li>
                  <li>• Built to highlight risk, behaviour, and anomalies</li>
                  <li>• Designed for everyday crypto users — not insiders</li>
                  <li>• Honest about uncertainty and volatility</li>
                </ul>
              </Card>

              <Card title="SproutPulse is not">
                <ul className="space-y-3 text-sm text-white/70">
                  <li>• Financial advice</li>
                  <li>• A signal group telling you what to buy</li>
                  <li>• A promise of profit</li>
                  <li>• A replacement for your own judgement</li>
                </ul>
              </Card>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/70">
                <span className="text-white">Crypto is risky.</span> Our goal is to help you{" "}
                <span className="text-white">see more clearly</span> — not pretend risk doesn’t exist.
              </p>
            </div>
          </div>
        </section>

        {/* AIMS */}
        <section id="aims" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Our aims</h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Feature
                title="Reduce avoidable mistakes"
                desc="By flagging common red flags before people commit capital."
              />
              <Feature
                title="Explain risk in plain English"
                desc="Not technical jargon. Not scare tactics. Just clear reasoning."
              />
              <Feature
                title="Support smarter decisions"
                desc="You stay in control. We provide context, not commands."
              />
              <Feature title="Stay independent" desc="No paid token promotions. No hidden incentives." />
            </div>

            <p className="mt-8 max-w-3xl text-sm text-white/60">
              SproutPulse grows slowly, intentionally, and transparently.
            </p>
          </div>
        </section>

        {/* BOTS (Main page: 3-bullet cards) */}
        <section id="bots" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Telegram bots</h2>
                <p className="mt-2 max-w-3xl text-white/70">
                  Practical tools, not hype machines. Each bot focuses on one clear job — with explanations you can
                  understand.
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  Built for research • Not advice
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <BotCard3
                icon="🔍"
                title="Revival Radar"
                purpose="Identify tokens showing genuine signs of revival — not artificial pumps."
                bullets={[
                  "Tracks volume, liquidity, and holder behaviour on dormant tokens",
                  "Highlights organic recovery signals over time",
                  "Designed to explore possibility, not predict outcomes",
                ]}
              />

              <BotCard3
                icon="📈"
                title="Pump Professor"
                purpose="Add early risk context to new launches and graduation events."
                bullets={[
                  "Watches new launches and graduations for early warning signs",
                  "Flags common red flags (concentration, suspicious early behaviour)",
                  "Designed to reduce blind chasing — not to promise “safe gems”",
                ]}
              />

              <BotCard3
                icon="🛑"
                title="Risk Roots"
                purpose="Identify where risk begins and explain it clearly."
                bullets={[
                  "Checks permissions, liquidity structure, and holder concentration",
                  "Flags behavioural patterns commonly seen before rugs or hard exits",
                  "Explains why risk exists — not just a score",
                ]}
              />
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/70">
                <span className="text-white">Reminder:</span> These tools are educational and informational only — not
                financial advice. You stay in control.
              </p>
            </div>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section id="transparency" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Transparency & risk disclaimer</h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Card title="Reality check">
                <p className="text-sm text-white/70">
                  Cryptocurrency markets are volatile and unpredictable. SproutPulse provides educational and
                  informational tools only — it does not provide financial advice.
                </p>
              </Card>

              <Card title="As-is tools">
                <ul className="space-y-3 text-sm text-white/70">
                  <li>• No guarantees of accuracy or outcomes</li>
                  <li>• No promises of profit</li>
                  <li>• Not a replacement for personal research</li>
                </ul>
              </Card>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/70">If something looks risky — it probably is.</p>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY / CTA */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-10">
              <p className="text-lg font-semibold text-white md:text-xl">
                “Slow growth is healthy. Clarity beats hype. Tools should empower users — not exploit them.”
              </p>
              <p className="mt-3 max-w-3xl text-sm text-white/70">
                SproutPulse is being built quietly, with care, for people who want fewer surprises and more
                understanding.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#bots"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:opacity-90"
                >
                  Explore the bots
                </a>
                <a
                  href="#what"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Read the principles
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-2 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} SproutPulse</div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>Educational tools only • Not financial advice</span>
              <span className="hidden md:inline">•</span>
              <span>Built quietly • Tools over hype</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- small presentational components ---------- */

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

function BotCard3({ icon, title, purpose, bullets }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <p className="mt-2 text-sm text-white/70">{purpose}</p>
        </div>
        <div className="text-xl">{icon}</div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-0.5 text-white/50">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-950/40 p-4">
      <div className="text-xs font-semibold text-white/80">{title}</div>
      <p className="mt-1 text-xs text-white/60">{desc}</p>
    </div>
  );
}

function StatPill({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs font-semibold text-white">{title}</div>
      <div className="mt-1 text-xs text-white/60">{desc}</div>
    </div>
  );
}



