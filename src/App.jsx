import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CreditCard,
  Globe2,
  LockKeyhole,
  Menu,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const logos = ["NORTHSTAR", "Layers", "Circle", "Sisyphus", "Catalog", "Quotient"];

const features = [
  {
    icon: BarChart3,
    title: "Financial clarity, in real time",
    description:
      "See cash flow, revenue, and burn in one live view. Make decisions with numbers you can trust.",
    tone: "violet",
  },
  {
    icon: CreditCard,
    title: "Cards built for control",
    description:
      "Issue physical and virtual cards with custom limits, smart rules, and instant visibility.",
    tone: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Security at every layer",
    description:
      "Protect your business with granular permissions, real-time alerts, and audit-ready records.",
    tone: "green",
  },
  {
    icon: Globe2,
    title: "Move money without borders",
    description:
      "Pay global teams and vendors with transparent fees and reliable settlement.",
    tone: "orange",
  },
];

const faqs = [
  {
    question: "What is Northstar?",
    answer:
      "Northstar is a financial operations platform that helps growing teams manage spend, cards, payments, and cash flow from one place.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most teams can get started in minutes. Connect your business accounts, invite your team, and configure spending rules at your own pace.",
  },
  {
    question: "Can I control what my team spends?",
    answer:
      "Yes. Set card-level limits, define merchant and category rules, assign approval workflows, and review transactions as they happen.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "We use encryption in transit and at rest, role-based access controls, and continuous monitoring to help safeguard your account.",
  },
];

function LogoMark() {
  return (
    <span
      aria-hidden="true"
      className="grid h-8 w-8 place-items-center rounded-xl bg-white text-[#0a0a0c]"
    >
      <Sparkles size={17} strokeWidth={2.5} />
    </span>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.09] bg-[#101013]/75 px-5 py-3.5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Northstar home">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-tight text-white">northstar</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="nav-link">Platform</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">Resources</a>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a href="#pricing" className="nav-link">Log in</a>
          <a href="#pricing" className="button-primary !px-4 !py-2.5 text-sm">
            Get started <ArrowRight size={15} />
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        {menuOpen && (
          <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-2xl border border-white/10 bg-[#111114] p-3 shadow-2xl md:hidden">
            {[
              ["Platform", "#features"],
              ["Pricing", "#pricing"],
              ["Resources", "#faq"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/[0.06] hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={closeMenu}
              className="button-primary mt-2 w-full"
            >
              Get started <ArrowRight size={15} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

function DashboardMockup() {
  const rows = [
    { initials: "ST", name: "Studio Tangerine", type: "Design services", amount: "−$2,400.00", color: "bg-orange-400/15 text-orange-200" },
    { initials: "VE", name: "Vercel", type: "Software", amount: "−$120.00", color: "bg-white/10 text-white" },
    { initials: "GH", name: "Gusto", type: "Payroll", amount: "−$8,920.00", color: "bg-emerald-400/15 text-emerald-200" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="absolute -inset-8 rounded-[2.5rem] bg-violet-500/15 blur-3xl" />
      <div className="dashboard-frame relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#121216] shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <span className="text-xs font-semibold text-zinc-200">northstar</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-zinc-400">All systems normal</span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-zinc-500">Total cash</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                $284,920<span className="text-zinc-500">.00</span>
              </p>
              <p className="mt-2 flex items-center gap-1 text-xs text-emerald-300">
                <ArrowUpRight size={14} /> 12.8% <span className="text-zinc-500">vs. last month</span>
              </p>
            </div>
            <button className="rounded-lg border border-white/10 px-3 py-2 text-[11px] text-zinc-300">
              This month <ChevronDown size={12} className="ml-1 inline" />
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 pt-4">
            <div className="mb-2 flex items-center justify-between px-1 text-[10px] text-zinc-600">
              <span>Cash flow</span><span>+$38,240 this month</span>
            </div>
            <div className="h-28 w-full">
              <svg viewBox="0 0 480 112" className="h-full w-full" role="img" aria-label="Cash flow chart trending upward">
                <defs>
                  <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[24, 52, 80].map((y) => (
                  <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="white" strokeOpacity=".07" strokeDasharray="4 6" />
                ))}
                <path d="M0 88 C25 82 32 92 58 76 S95 82 118 62 S151 74 177 54 S210 65 235 43 S268 59 295 34 S331 45 355 26 S394 39 415 18 S455 27 480 8 L480 112 L0 112Z" fill="url(#chart-fill)" />
                <path d="M0 88 C25 82 32 92 58 76 S95 82 118 62 S151 74 177 54 S210 65 235 43 S268 59 295 34 S331 45 355 26 S394 39 415 18 S455 27 480 8" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="415" cy="18" r="4" fill="#c4b5fd" stroke="#17151f" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex justify-between px-1 pb-3 text-[9px] text-zinc-600">
              <span>May 01</span><span>May 08</span><span>May 15</span><span>May 22</span><span>May 31</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium text-zinc-200">Recent transactions</p>
              <a href="#features" className="text-[10px] text-violet-300 hover:text-violet-200">View all</a>
            </div>
            <div className="space-y-1">
              {rows.map((row) => (
                <div key={row.name} className="flex items-center justify-between rounded-xl px-2 py-2.5 transition-colors hover:bg-white/[0.035]">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-8 w-8 place-items-center rounded-lg text-[10px] font-semibold ${row.color}`}>
                      {row.initials}
                    </span>
                    <div>
                      <p className="text-[11px] font-medium text-zinc-200">{row.name}</p>
                      <p className="mt-0.5 text-[10px] text-zinc-500">{row.type}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-zinc-300">{row.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.07] bg-white/[0.02] px-5 py-3.5 text-center text-[10px] text-zinc-500">
          A clearer picture of your business.
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[130px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            The financial OS for ambitious teams
            <ArrowRight size={13} className="text-zinc-500" />
          </div>
          <h1 className="text-[3.3rem] font-semibold leading-[0.99] tracking-[-0.065em] text-white sm:text-6xl lg:text-[4.5rem]">
            Your money,
            <br />
            <span className="text-zinc-500">moving forward.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            The modern finance platform that brings your cards, payments, and cash flow into focus—so you can build what’s next.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#pricing" className="button-primary">
              Start building <ArrowRight size={16} />
            </a>
            <a href="#features" className="button-secondary">
              Explore the platform <MoveUpRight size={15} />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3 text-xs text-zinc-500">
            <div className="flex -space-x-2">
              {["bg-violet-400", "bg-cyan-400", "bg-amber-300", "bg-rose-400"].map((color, i) => (
                <span key={i} className={`h-7 w-7 rounded-full border-2 border-[#0a0a0c] ${color}`} />
              ))}
            </div>
            <span><span className="text-zinc-300">Built for teams that move</span> · No setup fees</span>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}

function LogoTicker() {
  return (
    <section aria-label="Trusted by growing teams" className="border-y border-white/[0.06] px-5 py-9 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
          The financial partner for teams building what’s next
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-16">
          {logos.map((logo) => (
            <span key={logo} className="text-sm font-semibold tracking-wide text-zinc-600 transition-colors hover:text-zinc-300">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow">One platform. More momentum.</p>
          <h2 className="section-title mt-4">
            Less financial busywork.
            <br className="hidden sm:block" /> More room to grow.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            Replace scattered tools and guesswork with a connected view of your business finances.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description, tone }, index) => (
            <article key={title} className="gradient-card group min-h-[245px] rounded-2xl p-6 transition duration-300 hover:-translate-y-1">
              <div className={`feature-icon feature-${tone}`}>
                <Icon size={19} strokeWidth={1.8} />
              </div>
              <p className="mt-8 text-xs text-zinc-600">0{index + 1}</p>
              <h3 className="mt-2 text-base font-medium tracking-tight text-zinc-100">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
            </article>
          ))}
        </div>

        <div className="gradient-card mt-4 grid overflow-hidden rounded-2xl md:grid-cols-2">
          <div className="p-7 sm:p-10">
            <p className="eyebrow">Made for the way you work</p>
            <h3 className="mt-4 max-w-md text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
              A little more signal. A lot less noise.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">
              Bring the right people into the right decisions, without slowing down the work that matters.
            </p>
            <a href="#pricing" className="mt-7 inline-flex items-center gap-2 text-sm text-violet-300 transition hover:text-white">
              See how it works <ArrowRight size={15} />
            </a>
          </div>
          <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden border-t border-white/[0.06] bg-white/[0.02] p-6 md:border-l md:border-t-0">
            <div className="absolute h-48 w-48 rounded-full bg-violet-500/15 blur-3xl" />
            <div className="relative w-full max-w-sm space-y-3">
              {[
                ["Monthly spend", "$42,680", "↑ 8.2%"],
                ["Pending approvals", "03 requests", "Needs review"],
                ["Cash runway", "14.2 months", "On track"],
              ].map(([label, value, status], i) => (
                <div key={label} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#121216]/90 p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-9 w-9 place-items-center rounded-lg ${i === 0 ? "bg-violet-400/10 text-violet-300" : "bg-white/[0.06] text-zinc-300"}`}>
                      {i === 0 ? <BarChart3 size={16} /> : i === 1 ? <LockKeyhole size={16} /> : <ArrowDownRight size={16} />}
                    </span>
                    <div>
                      <p className="text-[10px] text-zinc-500">{label}</p>
                      <p className="mt-1 text-sm font-medium text-white">{value}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-300">{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "For teams finding their rhythm.",
      monthly: 0,
      annual: 0,
      features: ["Core spend visibility", "Unlimited virtual cards", "Basic reporting", "Email support"],
      action: "Get started",
      featured: false,
    },
    {
      name: "Growth",
      description: "For teams ready to move faster.",
      monthly: 39,
      annual: 29,
      features: ["Everything in Starter", "Advanced controls & approvals", "Multi-entity support", "Priority support"],
      action: "Start free trial",
      featured: true,
    },
    {
      name: "Scale",
      description: "For complex, global operations.",
      monthly: null,
      annual: null,
      features: ["Everything in Growth", "Custom workflows", "Dedicated success partner", "Custom integrations"],
      action: "Talk to sales",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="eyebrow">Simple, transparent pricing</p>
          <h2 className="section-title mt-4">A plan for your next chapter.</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-400">
            Start with what you need today. Upgrade when you’re ready.
          </p>
          <div className="mt-7 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              aria-pressed={!annual}
              className={`rounded-full px-4 py-2 text-xs transition ${!annual ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              aria-pressed={annual}
              className={`rounded-full px-4 py-2 text-xs transition ${annual ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`}
            >
              Yearly <span className="ml-1 text-violet-500">−25%</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`gradient-card relative rounded-2xl p-6 sm:p-8 ${plan.featured ? "pricing-featured" : ""}`}>
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full border border-violet-300/20 bg-violet-400/10 px-2.5 py-1 text-[10px] text-violet-200">
                  Most popular
                </span>
              )}
              <p className="text-sm font-medium text-white">{plan.name}</p>
              <p className="mt-2 min-h-10 text-sm text-zinc-400">{plan.description}</p>
              <div className="mt-7 flex h-12 items-baseline gap-1">
                {plan.monthly === null ? (
                  <span className="text-3xl font-semibold tracking-[-0.05em] text-white">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-semibold tracking-[-0.06em] text-white">
                      ${annual ? plan.annual : plan.monthly}
                    </span>
                    <span className="text-sm text-zinc-500">/ month</span>
                  </>
                )}
              </div>
              <p className="mt-2 text-[11px] text-zinc-600">
                {plan.monthly === null ? "Tailored to your team" : annual ? "Billed annually" : "Billed monthly"}
              </p>
              <a href="mailto:hello@northstar.example" className={`mt-7 w-full ${plan.featured ? "button-primary" : "button-secondary"}`}>
                {plan.action} <ArrowRight size={15} />
              </a>
              <div className="my-7 h-px bg-white/[0.08]" />
              <p className="mb-4 text-xs font-medium text-zinc-300">What’s included</p>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-xs text-zinc-400">
                    <Check size={14} className="mt-0.5 shrink-0 text-violet-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-[11px] text-zinc-600">
          Pricing shown for demonstration. Product availability and fees depend on your account and location.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="px-5 pb-24 pt-8 sm:px-8 sm:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Questions, answered</p>
          <h2 className="section-title mt-4">Good to know.</h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
            Still curious? Our team is happy to help you find the right fit.
          </p>
          <a href="mailto:hello@northstar.example" className="mt-6 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-white">
            Get in touch <ArrowRight size={15} />
          </a>
        </div>
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="text-sm font-medium text-zinc-200">{faq.question}</span>
                  <ChevronDown size={17} className={`shrink-0 text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div id={answerId} hidden={!isOpen} className="pb-5 pr-8 text-sm leading-6 text-zinc-400">
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#home" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tight text-zinc-300">northstar</span>
        </a>
        <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Northstar Financial, Inc.</p>
        <div className="flex gap-5 text-xs text-zinc-500">
          <a href="#faq" className="transition hover:text-white">Privacy</a>
          <a href="#faq" className="transition hover:text-white">Terms</a>
          <a href="mailto:hello@northstar.example" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0c] text-white">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
