// src/App.jsx
import React, { useEffect, useState } from "react";
import logo from "./assets/sproutpulse-logo.png";

const TELEGRAM_GROUP_URL = "https://t.me/+SgbrMPeiWqY5MmVk";
const CONTACT_EMAIL = "sproutpulse@proton.me";

export default function App() {
  // Subtle parallax for hero background
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY || 0);
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Parallax tuning (very subtle + capped)
  const parallaxY = Math.min(scrollY * 0.12, 60);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="SproutPulse"
              className="h-9 w-9 rounded-xl ring-1 ring-white/10 object-contain bg-white/5 p-1"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">SproutPulse</div>
              <div className="text-xs text-white/60">Calm signals in a noisy market</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#what" className="hover:text-white">
              What it is
            </a>
            <a href="#aims" className="hover:text-white">
              Aims
            </a>
            <a href="#bots" className="hover:text-white">
              Bots
            </a>
            <a href="#access" className="hover:text-white">
              Access
            </a>
            <a href="#transparency" className="hover:text-white">
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

            <a
              href={TELEGRAM_GROUP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Join Telegram
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          {/* Parallax background layer */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              backgroundImage: "url(/images/sproutback.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: `translate3d(0, ${parallaxY}px, 0) scale(1.06)`,
            }}
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-neutral-950/70" />

          {/* Soft glow accents */}
          <div className="pointer-events-none absolute inset-0 opacity-30 z-[1]">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              {/* LEFT */}
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  Building quietly • Tools over hype
                </div>

                <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  Understand crypto risk — without the hype.
                </h1>

                <p className="mt-4 text-lg text-white/80 md:text-xl">
                  <span className="text-white">SproutPulse helps you understand crypto risk</span>, not chase hype. We
                  build simple, transparent tools that add clarity so you can make{" "}
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
                    className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 backdrop-blur"
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

              {/* RIGHT */}
              <div className="md:col-span-5">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm font-semibold text-white">SproutPulse principle</div>
                  <p className="mt-2 text-sm text-white/80">
                    “SproutPulse doesn’t tell you what to buy. It helps you understand what you’re looking at.”
                  </p>

                  {/* VIDEO (from /public) */}
                  <div className="mt-4 overflow-hidden rounded-xl border border-white/15 bg-neutral-950/40">
                    <video
                      src="/sproutpulsebanvid.mp4"
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </div>

                  <div className="mt-4 rounded-xl border border-white/15 bg-neutral-950/40 p-4">
                    <div className="text-xs font-semibold text-white/90">Quick disclaimer</div>
                    <p className="mt-2 text-xs text-white/70">
                      Educational tools only. Not financial advice. You stay in control.
                    </p>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <MiniCard title="Revival Radar" desc="Spots genuine revival signals in dormant tokens." />
                    <MiniCard title="Pump Professor" desc="Adds early risk context to new launches and graduations." />
                    <MiniCard title="Risk Roots" desc="Shows where structural and behavioural risk begins." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT */}
        <section id="what" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What SproutPulse is (and isn’t)</h2>
            <p className="mt-3 max-w-3xl text-white/70">
              SproutPulse is designed to reduce avoidable mistakes by making crypto risk easier to see and easier to
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
              <Feature title="Reduce avoidable mistakes" desc="By highlighting common red flags early." />
              <Feature title="Explain risk clearly" desc="Plain English, no scare tactics." />
              <Feature title="Support better decisions" desc="Context, not commands." />
              <Feature title="Stay independent" desc="No paid promotions or hidden incentives." />
            </div>

            <p className="mt-8 max-w-3xl text-sm text-white/60">
              SproutPulse grows slowly, intentionally, and transparently.
            </p>
          </div>
        </section>

        {/* BOTS */}
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
                  "Highlights organic revival signals over time",
                  "Designed to explore possibility, not predict outcomes",
                ]}
              />

              <BotCard3
                icon="📈"
                title="Pump Professor"
                purpose="Add early risk context to new launches and graduation events."
                bullets={[
                  "Monitors new launches and graduations for early warning signs",
                  "Flags early concentration and suspicious behaviour",
                  "Designed to reduce blind chasing — not to promise “safe gems”",
                ]}
              />

              <BotCard3
                icon="🛑"
                title="Risk Roots"
                purpose="Identify where risk begins and explain it clearly."
                bullets={[
                  "Checks permissions, liquidity structure, and holder concentration",
                  "Flags patterns commonly seen before rugs or hard exits",
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

        {/* ACCESS */}
        <section id="access" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              How do I get access to the Telegram bots?
            </h2>

            <p className="mt-3 max-w-3xl text-white/70">
              SproutPulse uses a simple, transparent access model. Holding <span className="text-white">$SPROUT</span>{" "}
              in a verified wallet unlocks access to the Telegram bots.
            </p>

            {/* TOKEN CARD */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">$SPROUT Token</div>
                  <p className="mt-2 max-w-2xl text-sm text-white/70">
                    $SPROUT is a utility token used exclusively for access to SproutPulse tools. It is not promoted as
                    an investment and carries no promises or guarantees.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-neutral-950/40 px-4 py-3">
                  <div className="text-xs text-white/60">Contract address</div>
                  <div className="mt-1 font-mono text-sm text-white">TBC</div>
                </div>
              </div>

              <ul className="mt-5 grid gap-3 text-sm text-white/70 md:grid-cols-3">
                <li>• Utility-based access only</li>
                <li>• No paid promotions or shilling</li>
                <li>• Designed for long-term sustainability</li>
              </ul>
            </div>

            {/* WHY TOKEN */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">Why do we use a Solana token?</div>

              <p className="mt-2 text-sm text-white/70">
                SproutPulse uses <span className="text-white">$SPROUT</span> as a simple, transparent way to manage
                access to tools and build a genuine community — without subscriptions, ads, or aggressive monetisation.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>
                  • <span className="text-white">Access without subscriptions:</span> holding $SPROUT allows users to
                  access the Telegram bots without recurring monthly payments.
                </li>
                <li>
                  • <span className="text-white">Anti-spam & fairness:</span> token-based access helps prevent abuse
                  while keeping tools available to real users.
                </li>
                <li>
                  • <span className="text-white">Community alignment:</span> the token enables optional holder
                  incentives, competitions, and community-led initiatives over time.
                </li>
              </ul>

              <p className="mt-4 text-xs text-white/60">
                $SPROUT is a utility token used for access and community participation. It is not promoted as an
                investment and carries no guarantees.
              </p>
            </div>

            {/* STEPS */}
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white">1. Hold $SPROUT</div>
                <p className="mt-2 text-sm text-white/70">
                  Hold $SPROUT in a wallet you control. The required holding amount will be clearly communicated once
                  the token is live.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white">2. Verify your wallet</div>
                <p className="mt-2 text-sm text-white/70">
                  Verify ownership by signing a message. This does <span className="text-white">not</span> involve
                  spending funds or granting permissions.
                </p>
                <ul className="mt-3 space-y-2 text-xs text-white/60">
                  <li>• No transactions</li>
                  <li>• No approvals</li>
                  <li>• No custody of assets</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-white">3. Link Telegram</div>
                <p className="mt-2 text-sm text-white/70">
                  Link your Telegram account using a one-time code. Access remains active while your wallet meets the
                  holding requirement.
                </p>
                <p className="mt-3 text-xs text-white/60">
                  Join the community here:{" "}
                  <a
                    href={TELEGRAM_GROUP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white underline hover:opacity-80"
                  >
                    Telegram group
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-neutral-950/40 p-5">
              <p className="text-sm text-white/70">
                <span className="text-white">Note:</span> SproutPulse tools are provided for educational and
                informational purposes only. Holding $SPROUT grants access to tools — it does not guarantee outcomes or
                profits.
              </p>
            </div>

            {/* FAQ */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-white">Access FAQ</h3>
              <p className="mt-2 max-w-3xl text-sm text-white/70">
                Clear answers to common questions about $SPROUT, verification, and Telegram access.
              </p>

              <div className="mt-5 space-y-3">
                <FaqItem
                  q="Do I have to connect my wallet to use the bots?"
                  a="Yes. Access is tied to holding $SPROUT in a wallet you control. Verification uses a wallet connection so we can confirm ownership and check holdings."
                />
                <FaqItem
                  q="Will verification make me spend funds or approve anything?"
                  a="No. Verification is a message signature only — no spending, no token approvals, and no custody. If a site ever asks for approvals for “verification”, treat it as a red flag."
                />
                <FaqItem
                  q="What does “Contract address: TBC” mean?"
                  a="It means the token contract address has not been published on the website yet. Once live, we’ll post the official address here and on our official channels. Always verify before interacting."
                />
                <FaqItem
                  q="How much $SPROUT will I need to hold?"
                  a="TBC. The minimum holding requirement will be clearly communicated once the token is live. We aim to keep access affordable and transparent."
                />
                <FaqItem
                  q="What happens if I sell or move my $SPROUT?"
                  a="Access is based on your verified wallet meeting the holding requirement. If your balance drops below the threshold, bot access may pause until the requirement is met again."
                />
                <FaqItem
                  q="Can I verify one wallet and use a different wallet later?"
                  a="You’ll need to verify the wallet that holds $SPROUT. If you change wallets, you’ll simply re-verify and re-link Telegram."
                />
                <FaqItem
                  q="Does holding $SPROUT guarantee profits or safe tokens?"
                  a="No. Holding $SPROUT grants access to research tools only. Crypto is risky and outcomes are never guaranteed."
                />
                <FaqItem
                  q="How can I contact SproutPulse?"
                  a={`For questions, support, or security-related issues, you can contact us at ${CONTACT_EMAIL}.`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section id="transparency" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Transparency & disclaimer</h2>

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

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/70">
                For general questions, support, or security-related concerns, you can contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline hover:opacity-80">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
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
                  href={TELEGRAM_GROUP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Join Telegram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-2 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <div>© {new Date().getFullYear()} SproutPulse</div>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs text-white/60 hover:text-white">
                Contact: {CONTACT_EMAIL}
              </a>
              <a
                href={TELEGRAM_GROUP_URL}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-white/60 hover:text-white"
              >
                Community: Telegram group
              </a>
            </div>

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
    <div className="rounded-xl border border-white/10 bg-neutral-950/40 p-4 backdrop-blur">
      <div className="text-xs font-semibold text-white/80">{title}</div>
      <p className="mt-1 text-xs text-white/60">{desc}</p>
    </div>
  );
}

function StatPill({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
      <div className="text-xs font-semibold text-white">{title}</div>
      <div className="mt-1 text-xs text-white/70">{desc}</div>
    </div>
  );
}

function FaqItem({ q, a }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
      <summary className="cursor-pointer list-none">
        <div className="flex items-start justify-between gap-4">
          <div className="text-sm font-semibold text-white">{q}</div>
          <div className="mt-0.5 text-white/60 transition-transform duration-200 group-open:rotate-45">+</div>
        </div>
      </summary>
      <p className="mt-3 text-sm text-white/70">{a}</p>
    </details>
  );
}



