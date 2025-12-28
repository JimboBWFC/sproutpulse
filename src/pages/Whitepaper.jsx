import { Link } from "react-router-dom";

export default function Whitepaper() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-10 text-white">
      {/* Back link */}
      <Link
        to="/"
        className="text-sm text-emerald-300 underline underline-offset-4"
      >
        ← Back to SproutPulse
      </Link>

      {/* Title */}
      <h1 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight">
        SproutPulse Whitepaper
      </h1>

      <p className="mt-3 text-white/65">
        Version 1.0 • Informational only • Not financial advice
      </p>

      {/* =======================
          INTRODUCTION
      ======================= */}
      <section className="mt-10 space-y-4 text-white/75">
        <h2 className="text-xl font-bold text-white">1. Introduction</h2>
        <p>
          SproutPulse is an informational alerting platform designed to help
          users identify meaningful changes in crypto market behaviour.
          It focuses on clarity, explainability, and risk awareness — not speed,
          hype, or automated trading.
        </p>
        <p>
          The platform delivers alerts via Telegram and is built around two
          complementary analytical modes: identifying revival activity in
          dormant tokens, and assessing risk after new tokens graduate into
          public liquidity.
        </p>
      </section>

      {/* =======================
          THE PROBLEM
      ======================= */}
      <section className="mt-10 space-y-4 text-white/75">
        <h2 className="text-xl font-bold text-white">2. The Problem</h2>
        <p>
          Most crypto tools prioritise speed, novelty, and speculation.
          Users are often pushed toward early entry, incomplete information,
          and high-risk behaviour with little context.
        </p>
        <p>
          This environment creates three recurring issues:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Noise overwhelms meaningful signals</li>
          <li>Rug pulls and low-quality launches dominate attention</li>
          <li>Users are incentivised to act before understanding risk</li>
        </ul>
        <p>
          SproutPulse exists to slow this process down and reintroduce structure
          and context into how alerts are consumed.
        </p>
      </section>

      {/* =======================
          CORE PRODUCTS
      ======================= */}
      <section className="mt-10 space-y-4 text-white/75">
        <h2 className="text-xl font-bold text-white">3. Core Products</h2>

        <h3 className="text-lg font-semibold text-white mt-4">
          3.1 Deep Roots — Revival Alerts
        </h3>
        <p>
          Deep Roots identifies tokens that previously appeared dormant or
          inactive, but begin to show renewed on-chain and market activity.
        </p>
        <p>Signals may include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Volume returning after extended inactivity</li>
          <li>Liquidity restoration or increase</li>
          <li>On-chain interaction resuming after dormancy</li>
          <li>Community-led revivals or CTOs</li>
        </ul>
        <p>
          The goal is not to predict price movement, but to highlight
          structural change that warrants attention.
        </p>

        <h3 className="text-lg font-semibold text-white mt-6">
          3.2 Fresh Sprouts — The Pump Professor
        </h3>
        <p>
          Fresh Sprouts focuses on newly launched Solana tokens that graduate
          from the Pump.fun bonding curve into Raydium liquidity.
        </p>
        <p>
          Instead of encouraging early entry, the Pump Professor waits for
          liquidity to be established, then performs a series of risk and
          behaviour checks before issuing an alert.
        </p>
        <p>These checks include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Bundle Detection:</strong> Identifying whether supply was
            accumulated across multiple wallets at launch
          </li>
          <li>
            <strong>Developer History:</strong> Analysing prior launches
            associated with the creator wallet
          </li>
          <li>
            <strong>Holder Behaviour:</strong> Monitoring whether early holders
            sold aggressively before or after graduation
          </li>
        </ul>
        <p>
          Alerts are framed as contextual risk assessments, not trade
          recommendations.
        </p>
      </section>

      {/* =======================
          ACCESS MODEL
      ======================= */}
      <section className="mt-10 space-y-4 text-white/75">
        <h2 className="text-xl font-bold text-white">4. Access Model</h2>
        <p>
          SproutPulse uses a token-gated access model powered by the $SPROUT
          token on Solana.
        </p>
        <p>
          Holding a minimum amount of $SPROUT unlocks premium alert feeds
          within the Telegram bot. Verification is performed via message
          signing only.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>No private keys are ever requested</li>
          <li>No transactions or approvals are required</li>
          <li>No custody of user funds</li>
        </ul>
        <p>
          Access is periodically revalidated. If the required token balance is
          no longer held, premium alerts may be paused until eligibility is
          restored.
        </p>
      </section>

      {/* =======================
          PHILOSOPHY & SAFETY
      ======================= */}
      <section className="mt-10 space-y-4 text-white/75">
        <h2 className="text-xl font-bold text-white">
          5. Philosophy & Safety
        </h2>
        <p>
          SproutPulse is designed around the following principles:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Informational tooling, not financial advice</li>
          <li>Explainability over speed</li>
          <li>Risk awareness over hype</li>
          <li>User safety over monetisation</li>
        </ul>
        <p>
          The platform does not execute trades, provide buy or sell
          recommendations, or guarantee outcomes.
        </p>
      </section>

      {/* =======================
          RISKS & DISCLAIMER
      ======================= */}
      <section className="mt-10 space-y-4 text-white/75">
        <h2 className="text-xl font-bold text-white">6. Risks & Disclaimer</h2>
        <p>
          All data used by SproutPulse is derived from public blockchain and
          market sources and may be incomplete, delayed, or inaccurate.
        </p>
        <p>
          Cryptocurrency markets are highly volatile. Users may lose all funds.
          SproutPulse makes no guarantees regarding accuracy, performance, or
          outcomes.
        </p>
        <p>
          Users are solely responsible for their own decisions. SproutPulse is
          not a broker, dealer, advisor, or fiduciary.
        </p>
      </section>

      {/* =======================
          PDF LINK
      ======================= */}
      <div className="mt-12">
        <a
          href="/SproutPulse-Whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/[0.05]"
        >
          Download PDF version
        </a>
      </div>
    </div>
  );
}
