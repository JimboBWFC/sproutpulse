import logo from "../assets/sproutpulse-logo.png";

const BRAND = {
  name: "SproutPulse",
  token: "SPROUT",
  telegramGroupUrl: "https://t.me/+8nGAP8HapTExN2Zk",
  minHold: "Any amount (planned)",
};

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-[#060c0d]/70 p-6 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

function Button({ children, href, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-300/40";
  const styles =
    variant === "primary"
      ? "bg-emerald-400 text-black hover:bg-emerald-300"
      : "border border-white/10 bg-white/[0.02] text-white/80 hover:bg-white/[0.05]";
  const Comp = href ? "a" : "button";
  const isExternal = href && (href.startsWith("http") || href.startsWith("https"));
  return (
    <Comp
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
    </Comp>
  );
}

export default function Verify() {
  return (
    <div className="min-h-screen bg-[#020409] text-white">
      {/* subtle background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.07),transparent_60%)]" />
      </div>

      <header className="mx-auto max-w-6xl px-4 pt-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#050b0c]/70 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SproutPulse" className="h-9 w-auto" />
            <div>
              <div className="text-sm font-extrabold tracking-tight">{BRAND.name}</div>
              <div className="text-[11px] text-white/60">Wallet verification</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="secondary" href="/">Back</Button>
            <Button href={BRAND.telegramGroupUrl}>Telegram</Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-20">
        <div className="max-w-3xl">
          <div className="text-[11px] font-semibold tracking-wide text-emerald-300/90">
            VERIFY (COMING SOON)
          </div>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
            Verify your wallet safely
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/65">
            Verification will unlock Telegram bot features for wallets that hold{" "}
            <span className="text-emerald-200 font-semibold">${BRAND.token}</span>{" "}
            on Solana. Planned eligibility: <span className="font-semibold">{BRAND.minHold}</span>.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-[11px] font-semibold tracking-wide text-white/55">
              HOW IT WORKS
            </div>
            <ol className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <span className="font-semibold text-white/85">1) Connect wallet</span>{" "}
                (e.g. Phantom).
              </li>
              <li>
                <span className="font-semibold text-white/85">2) Sign a message</span>{" "}
                to prove you own the wallet.
              </li>
              <li>
                <span className="font-semibold text-white/85">3) We check holdings</span>{" "}
                of ${BRAND.token} on Solana.
              </li>
              <li>
                <span className="font-semibold text-white/85">4) Telegram unlocks</span>{" "}
                premium bot features.
              </li>
            </ol>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs text-white/60">
              <span className="font-semibold text-white/75">Safety:</span> No seed phrase. No approvals. No transactions.
              Message signing only.
            </div>
          </Card>

          <Card>
            <div className="text-[11px] font-semibold tracking-wide text-white/55">
              STATUS
            </div>
            <p className="mt-4 text-sm text-white/70">
              This page is currently a placeholder while we build the verification flow.
              When ready, this page will show:
            </p>

            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Connect wallet button</li>
              <li>• “Sign message” prompt</li>
              <li>• Holder check result</li>
              <li>• Link back into Telegram</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button variant="secondary" href={BRAND.telegramGroupUrl}>
                Open Telegram
              </Button>
              <Button href="/">Return home</Button>
            </div>
          </Card>
        </div>

        <div className="mt-10 text-xs text-white/45">
          Crypto is volatile. Verification only unlocks tools — it is not financial advice.
        </div>
      </main>
    </div>
  );
}
