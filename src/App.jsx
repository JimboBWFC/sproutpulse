import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import logo from "./assets/sproutpulse-logo.png";

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
          className="h-[160px] sm:h-[200px] md:h-[240px] w-full object-cover"
        />
      </div>
    </div>
  );
}

/* =======================
   HOME (clean sections)
======================= */
function Home() {
  const aims = useMemo(
    () => [
      "We build tools that surface signals and context from public on-chain data.",
      "We do not provide financial advice and we do not guarantee outcomes.",
      "We aim to reduce noise, avoid hype, and keep users in control.",
      "We build for credibility, clarity, and long-term usefulness.",
      "You remain responsible for your decisions and risk management.",
    ],
    []
  );

  const bots = useMemo(
    () => [
      {
        name: "Deep Roots — Revival Radar",
        points: [
          "Scans for tokens that were quiet and show meaningful signs of life again.",
          "Highlights context like volume/liquidity changes and on-chain activity patterns.",
          "Useful for monitoring revivals and community-led recoveries (CTOs).",
        ],
        tag: "Solana + BNB",
      },
      {
        name: "Fresh Sprouts — Pump Professor",
        points: [
          "Watches new launches / graduation events and adds quick risk context.",
          "Flags common red flags (concentration patterns, suspicious early behaviour).",
          "Designed to reduce blind chasing — not to promise “safe gems”.",
        ],
        tag: "Solana",
      },
      {
        name: "Visibility & Context (Signal only)",
        points: [
          "Flags visibility events such as Dexscreener boosts as context.",
          "Never treated as a standalone bullish trigger — it’s an intent signal.",
          "Helps users understand why attention might be appearing.",
        ],
        tag: "Context layer",
      },
    ],
    []
  );

  const accessSteps = useMemo(
    () => [
      {
        title: "1) Acquire $SPROUT (planned)",
        body:
          "Hold any amount of $SPROUT on Solana to unlock premium bot access (planned). No presale dynamics — accessibility is the goal.",
      },
      {
        title: "2) Verify ownership safely",
        body:
          "Connect your wallet and sign a message to prove ownership. Message-signing is not a transaction and cannot spend your funds.",
      },
      {
        title: "3) Access unlocks in Telegram",
        body:
          "Once verified, you’ll be able to use the relevant bots and feeds inside Telegram. If your wallet stops qualifying, access may pause until you qualify again.",
      },
    ],
    []
  );

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
        {/* HERO + At a glance */}
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
          </Card>
        </section>

        {/* 1) Aims / goals / support */}
        <section className="mt-14">
          <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
            OUR AIMS
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            Tools that support users — not advice
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/65 max-w-3xl">
            SproutPulse exists to provide calmer, more explainable crypto tooling. We are not here
            to tell users what to buy, and we don’t pretend any alert guarantees success.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {aims.map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/70"
              >
                • {t}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
              IMPORTANT
            </div>
            <p className="mt-2 text-sm text-white/65">
              Crypto markets are volatile. SproutPulse alerts are informational signals based on public data
              and may be incomplete, delayed, or wrong. You are responsible for your decisions and risk management.
            </p>
          </div>
        </section>

        {/* 2) Telegram Bots */}
        <section className="mt-14">
          <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
            TELEGRAM BOTS
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            Bots built for clarity
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/65 max-w-3xl">
            Our Telegram bots monitor public on-chain signals and send calm alerts with context.
            They help users spot activity earlier and understand risk signals — without hype.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {bots.map((b) => (
              <Card key={b.name}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-white">{b.name}</div>
                    <ul className="mt-3 space-y-2 text-sm text-white/70">
                      {b.points.map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                  <Pill>{b.tag}</Pill>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 3) Token purchase + verification */}
        <section className="mt-14">
          <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
            ACCESS & VERIFICATION
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            Simple, transparent access
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/65 max-w-3xl">
            Premium bot access is planned to be unlocked by holding{" "}
            <span className="text-emerald-200 font-semibold">${BRAND.token}</span> on Solana.
            Verification uses safe message-signing only (no transactions).
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {accessSteps.map((s) => (
              <Card key={s.title}>
                <div className="text-sm font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-white/70">{s.body}</p>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button className="w-full sm:w-auto" variant="secondary" href="/verify">
              Verify Wallet
            </Button>
            <Button className="w-full sm:w-auto" href={BRAND.telegramGroupUrl}>
              Open Telegram
            </Button>
            <Button className="w-full sm:w-auto" variant="secondary" href="/whitepaper">
              Read Whitepaper
            </Button>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/70">
            <span className="font-semibold text-white/85">Safety reminder:</span>{" "}
            We will never ask for your seed phrase. Verification uses message signing only.
          </div>

          <div className="mt-4 text-xs text-white/45">
            Token mint and buy link will be added after launch: <span className="text-white/60">{BRAND.sproutMint}</span>
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
