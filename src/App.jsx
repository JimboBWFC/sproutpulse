import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="SproutPulse"
              className="h-9 w-9 rounded-xl ring-1 ring-white/10 object-contain bg-white/5 p-1"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">SproutPulse</div>
              <div className="text-xs text-white/60">Calm signals in a noisy market</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#what" className="hover:text-white">What it is</a>
            <a href="#aims" className="hover:text-white">Aims</a>
            <a href="#bots" className="hover:text-white">Bots</a>
            <a href="#transparency" className="hover:text-white">Transparency</a>
          </nav>

          <a
            href="#bots"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:opacity-90"
          >
            Explore the bots
          </a>
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
                  Understand crypto risk — without the hype.
                </h1>

                <p className="mt-4 text-lg text-white/70 md:text-xl">
                  <span className="text-white">SproutPulse helps you understand crypto risk</span>, not chase hype.
                  We build simple, transparent tools that add clarity so you can make{" "}
                  <span className="text-white">your own</span> informed decisions.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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

              {/* RIGHT PANEL */}
              <div className="md:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-white">SproutPulse principle</div>
                  <p className="mt-2 text-sm text-white/70">
                    “SproutPulse doesn’t tell you what to buy. It helps you understand what you’re looking at.”
                  </p>

                  {/* VIDEO */}
                  <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-neutral-950/40">
                    <video
                      src="/sproutvid1.mp4"
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </div>

                  <div className="mt-4 rounded-xl border border-white/10 bg-neutral-950/40 p-4">
                    <div className="text-xs font-semibold text-white/80">Quick disclaimer</div>
                    <p className="mt-2 text-xs text-white/60">
                      Educational tools only. Not financial advice. You stay in control.
                    </p>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <MiniCard title="Revival Radar" desc="Spots genuine revival signals in dormant tokens." />
                    <MiniCard title="Pump Professor" desc="Adds early risk context to new launches." />
                    <MiniCard title="Risk Roots" desc="Shows where structural and behavioural risk begins." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT */}
        <Section id="what" title="What SproutPulse is (and isn’t)">
          <p className="text-white/70 max-w-3xl">
            SproutPulse is designed to reduce avoidable mistakes by making crypto risk easier to see and easier to understand.
          </p>
        </Section>

        {/* AIMS */}
        <Section id="aims" title="Our aims">
          <div className="grid gap-5 md:grid-cols-2">
            <Feature title="Reduce avoidable mistakes" desc="By highlighting common red flags early." />
            <Feature title="Explain risk clearly" desc="Plain English, no scare tactics." />
            <Feature title="Support better decisions" desc="Context, not commands." />
            <Feature title="Stay independent" desc="No paid promotions or hidden incentives." />
          </div>
        </Section>

        {/* BOTS */}
        <Section id="bots" title="Telegram bots">
          <div className="grid gap-5 md:grid-cols-3">
            <BotCard
              title="Revival Radar"
              bullets={[
                "Tracks volume, liquidity, and holder behaviour",
                "Highlights organic revival signals",
                "Explores possibility — not predictions",
              ]}
            />
            <BotCard
              title="Pump Professor"
              bullets={[
                "Monitors new launches and graduations",
                "Flags early concentration and suspicious behaviour",
                "Reduces blind chasing — no safe-gem claims",
              ]}
            />
            <BotCard
              title="Risk Roots"
              bullets={[
                "Checks permissions, liquidity structure, and holders",
                "Flags patterns seen before rugs or hard exits",
                "Explains why risk exists — not just a score",
              ]}
            />
          </div>
        </Section>

        {/* TRANSPARENCY */}
        <Section id="transparency" title="Transparency & disclaimer">
          <p className="text-white/70 max-w-3xl">
            Cryptocurrency markets are volatile and unpredictable. SproutPulse provides educational and informational
            tools only and does not offer financial advice.
          </p>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} SproutPulse • Tools over hype
      </footer>
    </div>
  );
}

/* COMPONENTS */

function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold md:text-3xl mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

function BotCard({ title, bullets }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}

function MiniCard({ title, desc }) {
  return (
    <div className="rounded-lg border border-white/10 bg-neutral-950/40 p-3">
      <div className="text-xs font-semibold">{title}</div>
      <p className="text-xs text-white/60 mt-1">{desc}</p>
    </div>
  );
}

function StatPill({ title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs font-semibold">{title}</div>
      <div className="text-xs text-white/60 mt-1">{desc}</div>
    </div>
  );
}




