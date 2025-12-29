function Home() {
  return (
    <div className="min-h-screen bg-[#020409] text-white overflow-x-hidden">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.07),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_55%_40%_at_50%_0%,black,transparent_65%)]" />
      </div>

      {/* Header */}
      <header className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-white/10 bg-[#050b0c]/70 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SproutPulse" className="h-9 w-auto" />
            <div className="min-w-0">
              <div className="text-sm font-extrabold tracking-tight">
                {BRAND.name}
              </div>
              <div className="text-[11px] text-white/60 truncate">
                {BRAND.tagline}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <Button className="w-full sm:w-auto" variant="secondary" href="/whitepaper">
              Whitepaper
            </Button>
            <Button className="w-full sm:w-auto" variant="secondary" href="/verify">
              Verify
            </Button>
            <Button className="w-full sm:w-auto" href={BRAND.telegramGroupUrl}>
              Telegram
            </Button>
          </div>
        </div>
      </header>

      {/* Top banner video */}
      <BrandBannerVideo />

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-20">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Pill>Telegram-first alerts</Pill>
              <Pill>Solana + BNB feeds</Pill>
              <Pill>Signal + context</Pill>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Calm crypto alerts —{" "}
              <span className="text-emerald-300">no hype</span>, no promises.
            </h1>

            <p className="max-w-xl text-sm md:text-base text-white/70">
              SproutPulse surfaces early signals and context for quiet tokens — so users can decide
              what (if anything) to do.
            </p>

            <p className="max-w-xl text-xs md:text-sm text-white/55">
              Informational tooling only — not financial advice. Crypto is volatile and losses are possible.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <Button className="w-full sm:w-auto" href={BRAND.telegramGroupUrl}>
                Join Telegram
              </Button>
              <Button className="w-full sm:w-auto" variant="secondary" href="/verify">
                Verify Wallet
              </Button>
              <Button className="w-full sm:w-auto" variant="secondary" href="/whitepaper">
                Read Whitepaper
              </Button>
              <a
                href={BRAND.docsPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white underline underline-offset-4 self-center sm:self-auto"
              >
                PDF version
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: “At a glance” card */}
          <Card className="h-fit">
            <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
              AT A GLANCE
            </div>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight">
              Built for credibility
            </h2>
            <p className="mt-2 text-sm text-white/70">
              SproutPulse is designed to help ordinary users navigate signals calmly — without
              insider games, hype cycles, or “guaranteed” claims.
            </p>

            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="text-xs font-semibold text-white/80">What you get</div>
                <div className="mt-1 text-sm text-white/65">
                  Telegram alerts with explainable context: volume shifts, liquidity changes, and visibility events.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="text-xs font-semibold text-white/80">What we don’t do</div>
                <div className="mt-1 text-sm text-white/65">
                  No financial advice. No promises. No “alpha” hype language.
                </div>
              </div>
            </div>

            <div className="mt-5">
              <Button className="w-full sm:w-auto" variant="secondary" href="/verify">
                Go to Verify
              </Button>
            </div>
          </Card>
        </section>

        {/* WHAT WE ARE (bullets + compact) */}
        <section className="mt-14">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
                WHAT WE’RE BUILDING
              </div>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
                A calmer way to track crypto signals
              </h2>
              <p className="mt-2 text-sm md:text-base text-white/65 max-w-2xl">
                Designed for mobile scanning — the deeper detail lives on dedicated pages.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card>
              <div className="text-sm font-semibold">Key points</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>• Signal + context — not advice</li>
                <li>• Telegram-first delivery</li>
                <li>• Focus on revivals and early activity</li>
                <li>• Solana + BNB Chain feeds</li>
                <li>• Clear caution language (no hype)</li>
                <li>• Built for long-term trust</li>
              </ul>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Signals we highlight</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-xs font-semibold text-white/80">Revival activity</div>
                  <div className="mt-1 text-xs text-white/60">
                    Quiet tokens showing fresh volume / liquidity changes.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-xs font-semibold text-white/80">Graduation events</div>
                  <div className="mt-1 text-xs text-white/60">
                    Post-launch transitions and early risk context.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-xs font-semibold text-white/80">Liquidity shifts</div>
                  <div className="mt-1 text-xs text-white/60">
                    Context around liquidity health and changes.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-xs font-semibold text-white/80">Visibility events</div>
                  <div className="mt-1 text-xs text-white/60">
                    e.g. Dexscreener boosts as context (not a trigger).
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* HOW IT WORKS (3 steps) */}
        <section className="mt-14">
          <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
            HOW IT WORKS
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            Simple flow. User stays in control.
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-xs font-semibold text-white/80">1) Monitor</div>
              <p className="mt-2 text-sm text-white/70">
                Bots watch public on-chain signals across Solana and BNB Chain.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-white/80">2) Explain</div>
              <p className="mt-2 text-sm text-white/70">
                Alerts include context and caution — not “buy now” nonsense.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-white/80">3) Decide</div>
              <p className="mt-2 text-sm text-white/70">
                Users choose what (if anything) to do — responsibility stays with the user.
              </p>
            </Card>
          </div>
        </section>

        {/* QUICK NAV CARDS (richer, reduces scrolling pressure) */}
        <section className="mt-14">
          <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
            NEXT STEPS
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            Explore at your own pace
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold">Read the whitepaper</div>
              <p className="mt-2 text-sm text-white/70">
                The full vision, principles, and roadmap — with zero hype.
              </p>
              <div className="mt-4">
                <Button className="w-full" variant="secondary" href="/whitepaper">
                  Open Whitepaper
                </Button>
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Verify wallet</div>
              <p className="mt-2 text-sm text-white/70">
                Access will be unlocked via safe message-signing (no transactions).
              </p>
              <div className="mt-4">
                <Button className="w-full" variant="secondary" href="/verify">
                  Go to Verify
                </Button>
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Join Telegram</div>
              <p className="mt-2 text-sm text-white/70">
                Alerts and updates live here. Calm delivery, clear context.
              </p>
              <div className="mt-4">
                <Button className="w-full" href={BRAND.telegramGroupUrl}>
                  Open Telegram
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Trust / Caution (short + classy) */}
        <section className="mt-14">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
              TRUST & CAUTION
            </div>
            <p className="mt-2 text-sm text-white/65">
              Crypto markets are volatile. SproutPulse alerts are informational signals built from public data
              and may be incomplete, delayed, or wrong. Nothing here is financial advice — you are responsible
              for your own decisions and risk management.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-white/40 px-4">
          © {new Date().getFullYear()} {BRAND.name} — Informational only • Not financial advice
        </footer>
      </main>
    </div>
  );
}
