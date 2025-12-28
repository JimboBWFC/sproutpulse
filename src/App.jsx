import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import logo from "./assets/sproutpulse-logo.png";
import sproutVid1 from "./assets/sproutvid1.mp4";

import Whitepaper from "./pages/Whitepaper";
import Verify from "./pages/Verify";

/* =======================
   Brand constants
======================= */
const BRAND = {
  name: "SproutPulse",
  tagline: "Green-light alerts for sleepy tokens.",
  token: "SPROUT",
  telegramGroupUrl: "https://t.me/+8nGAP8HapTExN2Zk",

  docsPdfUrl: "/SproutPulse-Whitepaper.pdf",
  bannerVideoUrl: "/sproutpulsebanvid.mp4",

  sproutMint: "TBA — add official mint after launch",
  buyUrl: "TBA — add moon.it / DEX link",
  minHold: "Any amount (planned)",
};

/* =======================
   Helpers
======================= */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* =======================
   UI Components
======================= */
function Button({ children, href, variant = "primary", className }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-300/40";

  const styles =
    variant === "primary"
      ? "bg-emerald-400 text-black hover:bg-emerald-300"
      : "border border-white/10 bg-white/[0.02] text-white/80 hover:bg-white/[0.05]";

  const Comp = href ? "a" : "button";
  const isExternal =
    href &&
    (href.startsWith("http") ||
      href.startsWith("https") ||
      href.endsWith(".pdf"));

  return (
    <Comp
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(base, styles, className)}
    >
      {children}
    </Comp>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[11px] text-white/70">
      {children}
    </span>
  );
}

function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-[#060c0d]/70 p-6 backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

/* =======================
   Top banner video
======================= */
function BrandBannerVideo() {
  return (
    <div className="mx-auto mt-6 max-w-6xl px-4">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
        <video
          src={BRAND.bannerVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="h-[200px] w-full object-cover"
        />
      </div>
    </div>
  );
}

/* =======================
   Square video (NO CROPPING)
======================= */
function SquareVideoCard() {
  return (
    <div className="relative aspect-square w-full max-w-md md:max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_25px_70px_-30px_rgba(0,0,0,0.9)]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-black to-black" />
      <video
        src={sproutVid1}
        autoPlay
        loop
        muted
        playsInline
        className="relative z-10 h-full w-full object-contain"
      />
    </div>
  );
}

/* =======================
   Value Proposition
======================= */
function ValueProposition() {
  return (
    <section className="mt-16 grid gap-8 md:grid-cols-2 items-start">
      <div>
        <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
          WHY SPROUTPULSE
        </div>
        <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
          Built as tools — not advice
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/65">
          SproutPulse provides calm, explainable crypto tooling. We do not give
          financial advice. Users decide how — or if — they act.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <ul className="space-y-3 text-sm text-white/70">
              <li>• Signal over noise</li>
              <li>• Telegram-first delivery</li>
              <li>• Post-event analysis</li>
              <li>• Accessible to all</li>
              <li>• Token-gated via $SPROUT</li>
            </ul>
          </Card>

          <Card>
            <ul className="space-y-3 text-sm text-white/70">
              <li>• Solana & BNB Chain feeds</li>
              <li>• Growing Telegram bot portfolio</li>
              <li>• Revival & graduation analysis</li>
              <li>• User-controlled filters</li>
              <li>• Informational only</li>
            </ul>
          </Card>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <SquareVideoCard />
      </div>
    </section>
  );
}

/* =======================
   Telegram Bots Overview
======================= */
function BotsOverview() {
  return (
    <section className="mt-16">
      <div className="max-w-3xl">
        <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
          TELEGRAM BOTS
        </div>
        <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
          What the bots do — and why it’s useful
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/65">
          SproutPulse is building a growing portfolio of Telegram bots focused
          on surfacing signals and context. These tools help users spot
          potential “gems” earlier — without pretending any alert guarantees
          outcomes.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold tracking-wide text-white/55">
                BOT 01
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                Deep Roots — Revival Radar
              </div>
              <p className="mt-2 text-sm text-white/65">
                Scans for dormant or “dead-looking” tokens that suddenly show
                signs of life again — renewed volume, liquidity changes, or
                meaningful on-chain activity.
              </p>
            </div>
            <Pill>Solana + BNB</Pill>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <div className="text-[11px] font-semibold tracking-wide text-white/55">
              WHY THIS HELPS
            </div>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li>• Highlights real activity returning after inactivity</li>
              <li>• Helps reduce noise from constant “new token” spam</li>
              <li>• Useful for monitoring CTOs / community revivals</li>
            </ul>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold tracking-wide text-white/55">
                BOT 02
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                Fresh Sprouts — The Pump Professor
              </div>
              <p className="mt-2 text-sm text-white/65">
                Watches for Pump.fun tokens that graduate into Raydium liquidity,
                then runs quick “forensics” checks to flag common risk patterns
                before sending an alert.
              </p>
            </div>
            <Pill>Solana</Pill>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <div className="text-[11px] font-semibold tracking-wide text-white/55">
              WHAT IT CHECKS
            </div>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li>• Bundle detection (supply concentration patterns)</li>
              <li>• Developer history (previous launches & outcomes)</li>
              <li>• Holder behaviour (early sell pressure / “jeet” risk)</li>
            </ul>
          </div>
        </Card>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
          CAUTION
        </div>
        <p className="mt-2 text-sm text-white/65">
          Crypto markets are highly volatile. Alerts are informational signals
          based on public data and may be incomplete, delayed, or wrong. Nothing
          here is financial advice, and no bot can prevent losses. You are
          responsible for your decisions and risk management.
        </p>
      </div>
    </section>
  );
}

/* =======================
   Getting Started (Beginner-friendly)
======================= */
function GettingStarted() {
  return (
    <section className="mt-16">
      <div className="max-w-3xl">
        <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
          GET STARTED
        </div>
        <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
          Getting access is simple
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/65">
          SproutPulse premium tools are unlocked by holding{" "}
          <span className="text-emerald-200 font-semibold">${BRAND.token}</span>{" "}
          on Solana. Verification happens through our website using a safe
          message-sign (no transactions).
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <div className="text-[11px] font-semibold tracking-wide text-white/55">
            STEP-BY-STEP (BEGINNER FRIENDLY)
          </div>

          <ol className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <span className="font-semibold text-white/85">1) Join Telegram</span>{" "}
              — open the SproutPulse group and start the bot.
            </li>
            <li>
              <span className="font-semibold text-white/85">2) Tap “Verify Wallet”</span>{" "}
              — the bot will send you a secure link to the SproutPulse website.
            </li>
            <li>
              <span className="font-semibold text-white/85">3) Connect your wallet</span>{" "}
              — e.g. Phantom on Solana.
            </li>
            <li>
              <span className="font-semibold text-white/85">4) Sign a message</span>{" "}
              — this proves you own the wallet. It does not spend funds.
            </li>
            <li>
              <span className="font-semibold text-white/85">5) Access unlocks in Telegram</span>{" "}
              — you can choose bots, feeds, and filters.
            </li>
          </ol>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button href={BRAND.telegramGroupUrl}>Open Telegram</Button>
            <Button variant="secondary" href="/verify">
              Verify Wallet
            </Button>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs text-white/60">
            <span className="font-semibold text-white/75">Important:</span> We
            will never ask for your seed phrase. Verification uses message
            signing only.
          </div>
        </Card>

        <Card>
          <div className="text-[11px] font-semibold tracking-wide text-white/55">
            WHAT YOU UNLOCK
          </div>

          <div className="mt-4 space-y-3 text-sm text-white/70">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="font-semibold text-white/85">Deep Roots</div>
              <div className="text-xs text-white/60 mt-1">
                Revival alerts for tokens showing fresh volume/liquidity after
                being quiet.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="font-semibold text-white/85">Fresh Sprouts</div>
              <div className="text-xs text-white/60 mt-1">
                Pump Professor checks after Pump.fun graduation to Raydium and
                flags common risk patterns.
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/70">
            <div className="font-semibold text-white/85">Eligibility</div>
            <div className="mt-1 text-sm text-white/65">
              Planned: holding <span className="font-semibold">any amount</span>{" "}
              of ${BRAND.token} qualifies.
            </div>
            <div className="mt-2 text-xs text-white/60">
              If your wallet no longer holds ${BRAND.token}, premium access may
              pause until you qualify again.
            </div>
          </div>

          <div className="mt-5">
            <a
              href={BRAND.telegramGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 underline underline-offset-4 text-sm"
            >
              Open SproutPulse Telegram Group
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}

/* =======================
   Home Page
======================= */
function Home() {
  const faqs = useMemo(
    () => [
      {
        q: "Is this financial advice?",
        a: "No. SproutPulse provides tools and context only.",
      },
      {
        q: "Do I need a minimum amount of $SPROUT?",
        a: "No. The intention is accessibility — any amount qualifies.",
      },
      {
        q: "Will the bots guarantee safe gems?",
        a: "No. They surface signals and risk context. The market is volatile and losses are possible.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#020409] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.07),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_55%_40%_at_50%_0%,black,transparent_65%)]" />
      </div>

      {/* Header */}
      <header className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#050b0c]/70 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SproutPulse" className="h-9 w-auto" />
            <div>
              <div className="text-sm font-extrabold tracking-tight">
                {BRAND.name}
              </div>
              <div className="text-[11px] text-white/60">{BRAND.tagline}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="secondary" href="/whitepaper">
              Whitepaper
            </Button>
            <Button variant="secondary" href="/verify">
              Verify
            </Button>
            <Button href={BRAND.telegramGroupUrl}>Telegram</Button>
          </div>
        </div>
      </header>

      {/* Top banner video */}
      <BrandBannerVideo />

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-20">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Pill>Solana token</Pill>
              <Pill>Solana + BNB feeds</Pill>
              <Pill>Telegram-first</Pill>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Catch the{" "}
              <span className="text-emerald-300">revival</span> before it goes
              viral.
            </h1>

            <p className="max-w-xl text-sm md:text-base text-white/70">
              Calm, explainable crypto alerts delivered via Telegram.
            </p>

            <p className="max-w-xl text-xs md:text-sm text-white/55">
              Access is unlocked by holding{" "}
              <span className="font-semibold text-emerald-200">
                ${BRAND.token} on Solana
              </span>
              . Informational only — not financial advice.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button href={BRAND.telegramGroupUrl}>Join Telegram</Button>
              <Button variant="secondary" href="/verify">
                Verify Wallet
              </Button>
              <Button variant="secondary" href="/whitepaper">
                Read whitepaper
              </Button>
              <a
                href={BRAND.docsPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-white underline underline-offset-4"
              >
                PDF version
              </a>
            </div>
          </div>

          <Card>
            <div className="text-sm font-semibold">Access model</div>
            <p className="mt-2 text-sm text-white/70">
              Token-gated via{" "}
              <span className="text-emerald-200">${BRAND.token}</span> on Solana.
              Verification uses message signing only (no transactions).
            </p>
            <div className="mt-4">
              <Button variant="secondary" href="/verify">
                Go to Verify
              </Button>
            </div>
          </Card>
        </section>

        <ValueProposition />
        <BotsOverview />
        <GettingStarted />

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl font-extrabold mb-6">FAQ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <Card key={f.q}>
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-sm text-white/70">{f.a}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {BRAND.name} — Informational only • Not
          financial advice
        </footer>
      </main>
    </div>
  );
}

/* =======================
   Routes
======================= */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whitepaper" element={<Whitepaper />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
}

















