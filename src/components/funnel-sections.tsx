import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EditorMockup } from "./editor-mockup";
import heroEditor from "@/assets/hero-editor.jpg";
import workEnvironment from "@/assets/work-environment.jpg";
import proofEdit from "@/assets/proof-edit.jpg";

gsap.registerPlugin(ScrollTrigger);

/* --------------------------------- HERO --------------------------------- */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { y: 20, opacity: 0, duration: 0.8 })
        .from("[data-hero-line]", { y: 40, opacity: 0, duration: 1, stagger: 0.12 }, "-=0.4")
        .from("[data-hero-sub]", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from("[data-hero-cta]", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from("[data-hero-mock]", { y: 60, opacity: 0, duration: 1.2 }, "-=1");

      gsap.to("[data-hero-mock]", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div data-hero-eyebrow className="flex items-center gap-3 mb-8">
            <span className="gold-rule" />
            <span className="eyebrow">Video Editing Career System · Cohort 07</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-tight text-balance">
            <span data-hero-line className="block">The internet runs</span>
            <span data-hero-line className="block">on video.</span>
            <span data-hero-line className="block italic text-muted-foreground">Editors make it work.</span>
          </h1>
          <p data-hero-sub className="mt-8 text-lg text-muted-foreground max-w-md text-pretty">
            A structured system to turn your editing skills into real income — built by an agency, taught through real client work.
          </p>
          <div data-hero-cta className="mt-10 flex items-center gap-6">
            <a href="#apply" className="group inline-flex items-center gap-3 bg-navy text-navy-foreground px-7 py-4 text-sm tracking-[0.15em] uppercase hover:bg-navy/90 transition-colors">
              Apply for the Program
              <span className="w-4 h-px bg-gold transition-all duration-300 group-hover:w-8" />
            </a>
            <a href="#system" className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
          </div>
        </div>
        <div data-hero-mock className="lg:col-span-6 relative">
          <div className="relative">
            <img
              src={heroEditor}
              alt="Editor at work in a studio"
              width={1280}
              height={960}
              className="w-full h-[280px] md:h-[340px] object-cover rounded-lg border border-border"
            />
            <div className="absolute -bottom-10 -left-6 md:-left-10 w-[78%] md:w-[82%]">
              <EditorMockup />
            </div>
          </div>
          <div className="h-12 md:h-16" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- TRUST BAR ------------------------------- */
export function TrustBar() {
  const items = ["Agency-led training", "Real client work", "Paid internship", "Placement support"];
  return (
    <section className="border-y border-border bg-card">
      <div className="container-editorial grid grid-cols-2 md:grid-cols-4">
        {items.map((t, i) => (
          <div key={t} className={`py-6 px-4 text-center ${i > 0 ? "md:border-l border-border" : ""} ${i % 2 === 1 ? "border-l border-border md:border-l" : ""} ${i >= 2 ? "border-t md:border-t-0 border-border" : ""}`}>
            <p className="text-sm tracking-[0.1em] text-foreground/80">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- RELATABILITY BLOCK -------------------------- */
export function Relatability() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-editorial max-w-3xl text-center">
        <p data-reveal className="font-display text-3xl md:text-5xl leading-[1.25] text-balance">
          You've watched tutorials.<br />
          You've tried editing.<br />
          <span className="italic text-muted-foreground">But turning it into income still feels unclear.</span>
        </p>
      </div>
    </section>
  );
}

/* --------------------------- OPPORTUNITY SECTION ------------------------- */
export function Opportunity() {
  const stats = [
    { v: "82%", label: "of internet traffic is now video" },
    { v: "3×", label: "creator demand for editors YoY" },
    { v: "$2.4B", label: "freelance editing market" },
  ];
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container-editorial">
        <div className="max-w-2xl mb-16" data-reveal>
          <span className="eyebrow">The Market</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
            The demand for editors is growing faster than supply.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {stats.map((s) => (
            <div key={s.v} data-reveal className="bg-card p-10">
              <div className="font-display text-5xl md:text-6xl text-navy">{s.v}</div>
              <p className="mt-4 text-sm text-muted-foreground max-w-[200px]">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-sm text-muted-foreground" data-reveal>
          <p>— Creators need editors to scale output.</p>
          <p>— Brands need consistent video content.</p>
          <p>— The internet has gone video-first.</p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ ROLE EXPLORATION GRID -------------------------- */
const roles = [
  {
    t: "YouTube Editor",
    type: "Long-form storytelling",
    income: "₹40k – ₹2L / month",
    out: "20-min retention edits, B-roll layering, narrative pacing.",
  },
  {
    t: "Short-form Editor",
    type: "Reels · Shorts · TikTok",
    income: "₹500 – ₹5k / edit",
    out: "Hook-first cuts, captions, motion accents, trend-fluent.",
  },
  {
    t: "Ads Editor",
    type: "Performance creative",
    income: "₹50k – ₹3L / month",
    out: "UGC variants, A/B hooks, conversion-driven cutdowns.",
  },
  {
    t: "Podcast Editor",
    type: "Audio + video",
    income: "₹15k – ₹80k / project",
    out: "Multi-cam sync, audio cleanup, viral clip extraction.",
  },
];

export function RolesGrid() {
  return (
    <section id="roles" className="py-28">
      <div className="container-editorial">
        <div className="flex items-end justify-between mb-16" data-reveal>
          <div>
            <span className="eyebrow">05 · Role Exploration</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Pick the editor you want to become.</h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs">Hover any role. The system trains you for all four — you specialise in one.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {roles.map((r, i) => (
            <article
              key={r.t}
              data-reveal
              className="group relative bg-card p-8 lg:p-10 min-h-[320px] flex flex-col justify-between cursor-pointer overflow-hidden lift"
            >
              <div className="text-xs tabular-nums text-muted-foreground">0{i + 1}</div>
              <div>
                <h3 className="font-display text-2xl mb-2">{r.t}</h3>
                <p className="text-sm text-muted-foreground">{r.type}</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-6">
                <div className="hairline mb-4" />
                <p className="text-xs uppercase tracking-[0.18em] text-gold">Income potential</p>
                <p className="text-sm text-foreground mt-1 mb-4">{r.income}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-gold">Example output</p>
                <p className="text-sm text-muted-foreground mt-1">{r.out}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROBLEM VS SYSTEM ------------------------- */
export function ProblemSystem() {
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="container-editorial grid md:grid-cols-2 gap-px bg-border border border-border">
        <div className="bg-card p-10 md:p-14" data-reveal>
          <span className="eyebrow text-muted-foreground">The Old Way</span>
          <h3 className="font-display text-3xl mt-4 mb-8">Unstructured learning.</h3>
          <ul className="space-y-4 text-muted-foreground">
            {["Random YouTube tutorials", "No real client briefs", "No feedback, no progression", "Skills with nowhere to go"].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <span className="mt-2 w-3 h-px bg-muted-foreground/40 shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card p-10 md:p-14 relative" data-reveal>
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
          <span className="eyebrow">The IconsBase System</span>
          <h3 className="font-display text-3xl mt-4 mb-8">Structured progression.</h3>
          <ul className="space-y-4 text-foreground">
            {["Agency-built curriculum", "Real briefs from real clients", "Mentor feedback every week", "Direct path to paid work"].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <span className="mt-2 w-3 h-px bg-gold shrink-0" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ ICONSBASE ENGINE ------------------------- */
export function Engine() {
  const steps = ["Learn", "Practice", "Execute", "Optimize", "Earn"];
  return (
    <section id="system" className="py-28 md:py-36">
      <div className="container-editorial">
        <div className="max-w-2xl mb-20" data-reveal>
          <span className="eyebrow">07 · Core Differentiator</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
            The IconsBase <em className="text-muted-foreground">Editing Engine.</em>
          </h2>
        </div>

        <div className="relative" data-reveal>
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border" />
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-y-8">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-col items-center text-center">
                <div className="relative w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center font-display text-lg z-10">
                  <span className="text-gold text-xs absolute -top-5 tabular-nums tracking-widest">0{i + 1}</span>
                  {i + 1}
                </div>
                <p className="mt-4 font-display text-xl">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border border border-border" data-reveal>
          {[
            { t: "AI editing tools", d: "Auto-cuts, transcript edits, smart reframing." },
            { t: "Workflow automation", d: "Templates, asset libraries, render queues." },
            { t: "Speed + efficiency", d: "Ship 3× faster without losing craft." },
          ].map((x) => (
            <div key={x.t} className="bg-card p-8">
              <p className="eyebrow">AI Layer</p>
              <h4 className="font-display text-xl mt-3 mb-2">{x.t}</h4>
              <p className="text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SKILL STACK ------------------------------ */
const skills = [
  { t: "Premiere Pro", d: "Industry-standard NLE. Project management, multicam, color." },
  { t: "After Effects", d: "Motion graphics, kinetic type, expressions, compositing." },
  { t: "AI Editing Tools", d: "Descript, Runway, Captions, Topaz — woven into your workflow." },
  { t: "Storytelling", d: "Structure, pacing, emotional arcs that hold attention." },
  { t: "Retention Editing", d: "Hook design, pattern interrupts, watch-time engineering." },
];

export function SkillStack() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="container-editorial">
        <div className="max-w-2xl mb-16" data-reveal>
          <span className="eyebrow">08 · Skill Stack</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Five disciplines. One editor.</h2>
        </div>
        <div className="border-t border-border" data-reveal>
          {skills.map((s, i) => (
            <button
              key={s.t}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left border-b border-border py-6 grid grid-cols-12 gap-4 items-center group hover:bg-background transition-colors"
            >
              <span className="col-span-1 text-xs tabular-nums text-muted-foreground tracking-widest">0{i + 1}</span>
              <span className="col-span-10 md:col-span-4 font-display text-2xl">{s.t}</span>
              <span className={`col-span-12 md:col-span-6 text-sm text-muted-foreground overflow-hidden transition-all duration-500 ${open === i ? "max-h-20 opacity-100" : "max-h-0 md:max-h-20 md:opacity-60 opacity-0"}`}>
                {s.d}
              </span>
              <span className={`hidden md:block col-span-1 text-right text-gold transition-transform duration-500 ${open === i ? "rotate-45" : ""}`}>+</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------- REAL WORK ENVIRONMENT --------------------------- */
export function WorkEnvironment() {
  return (
    <section className="py-28">
      <div className="container-editorial grid lg:grid-cols-2 gap-16 items-center">
        <div data-reveal>
          <span className="eyebrow">09 · Real Work</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-balance">
            You don't just learn. <em className="text-muted-foreground">You ship.</em>
          </h2>
          <ul className="mt-10 space-y-6">
            {[
              { t: "Real client briefs", d: "Active agency projects routed to your cohort." },
              { t: "Feedback loops", d: "Weekly 1:1 review with senior editors." },
              { t: "Editing timelines", d: "Live deadlines, real revisions, real ship dates." },
            ].map((x) => (
              <li key={x.t} className="flex gap-5 border-t border-border pt-6">
                <span className="font-display text-2xl text-gold">·</span>
                <div>
                  <p className="font-display text-xl">{x.t}</p>
                  <p className="text-sm text-muted-foreground mt-1">{x.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal className="space-y-6">
          <img
            src={workEnvironment}
            alt="Editor's workspace with storyboard, color reference and camera"
            width={1280}
            height={1280}
            loading="lazy"
            className="w-full aspect-[5/4] object-cover rounded-lg border border-border"
          />
          <BriefMockup />
        </div>
      </div>
    </section>
  );
}

function BriefMockup() {
  return (
    <div className="rounded-lg border border-border bg-card p-8 shadow-[0_30px_60px_-30px_oklch(0.18_0.005_85/0.2)]">
      <div className="flex items-center justify-between mb-6">
        <span className="eyebrow">Client Brief · CB-204</span>
        <span className="text-xs px-2 py-1 bg-gold/15 text-foreground tracking-widest">LIVE</span>
      </div>
      <h3 className="font-display text-2xl mb-2">Lifestyle Brand · 6 Reels</h3>
      <p className="text-sm text-muted-foreground mb-6">Hook-first cuts. 9:16. On-brand kinetic captions. Deliver in 72h.</p>
      <div className="space-y-3">
        {[
          { l: "Brief received", v: "Mon 09:00", c: "bg-navy" },
          { l: "First cut", v: "Tue 18:00", c: "bg-navy" },
          { l: "Mentor review", v: "Wed 11:00", c: "bg-gold" },
          { l: "Final delivery", v: "Thu 17:00", c: "bg-border" },
        ].map((x) => (
          <div key={x.l} className="flex items-center gap-4 text-sm">
            <span className={`w-2 h-2 rounded-full ${x.c}`} />
            <span className="flex-1">{x.l}</span>
            <span className="tabular-nums text-muted-foreground">{x.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------- HORIZONTAL TRANSFORMATION ----------------------- */
const panels = [
  { n: "01", t: "Watching tutorials", d: "Endless loops. No structure. No output." },
  { n: "02", t: "Confusion", d: "Too many tools. No clear path forward." },
  { n: "03", t: "Random edits", d: "Practice that goes nowhere." },
  { n: "—", t: "The shift", d: "Structure replaces noise.", divider: true },
  { n: "04", t: "Structured workflow", d: "A repeatable system, weekly milestones." },
  { n: "05", t: "Feedback", d: "Senior editors review every cut." },
  { n: "06", t: "Portfolio", d: "Real work that signals real skill." },
  { n: "07", t: "Paid work", d: "Income from clients, agencies, creators." },
];

export function HorizontalTransformation() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!track.current || !wrap.current) return;
      const distance = () => track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="bg-card border-y border-border overflow-hidden">
      <div ref={track} className="flex items-center h-screen will-change-transform">
        <div className="shrink-0 w-screen px-8 md:px-20 flex flex-col justify-center">
          <span className="eyebrow">10 · Transformation</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl max-w-3xl leading-[1.05] text-balance">
            From scattered effort to <em className="text-muted-foreground">structured craft.</em>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">Scroll →</p>
        </div>
        {panels.map((p) => (
          <div
            key={p.t}
            className={`shrink-0 w-[80vw] md:w-[40vw] h-full flex flex-col justify-end p-10 md:p-14 border-l border-border ${p.divider ? "bg-navy text-navy-foreground" : "bg-background"}`}
          >
            <div className={`text-xs tracking-[0.3em] mb-6 ${p.divider ? "text-gold" : "text-muted-foreground"}`}>{p.n}</div>
            <h3 className={`font-display text-3xl md:text-5xl mb-4 ${p.divider ? "italic" : ""}`}>{p.t}</h3>
            <p className={`text-sm max-w-xs ${p.divider ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{p.d}</p>
          </div>
        ))}
        <div className="shrink-0 w-[20vw]" />
      </div>
    </section>
  );
}

/* ------------------------------- OUTPUT SYSTEM --------------------------- */
export function OutputSystem() {
  const items = [
    { t: "Portfolio", d: "5–8 client-grade pieces ready to send." },
    { t: "Editing workflows", d: "Templates, presets, automations you keep." },
    { t: "Client-ready skills", d: "Communication, briefs, revisions, delivery." },
    { t: "Income pathway", d: "Direct routes to freelance, agency, in-house." },
  ];
  return (
    <section className="py-28">
      <div className="container-editorial">
        <div className="mb-16 max-w-2xl" data-reveal>
          <span className="eyebrow">11 · Output</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">What you leave with.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {items.map((x, i) => (
            <div key={x.t} data-reveal className="bg-card p-10 lift">
              <div className="text-xs tabular-nums text-gold tracking-widest mb-6">0{i + 1}</div>
              <h3 className="font-display text-2xl mb-3">{x.t}</h3>
              <p className="text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ EARNING PATH ----------------------------- */
export function EarningPath() {
  const paths = [
    { t: "Freelancing", d: "Direct clients. Set your rate." },
    { t: "Creator teams", d: "Embedded with YouTubers & podcasters." },
    { t: "Agencies", d: "In-house roles, retainer projects." },
    { t: "Personal brand", d: "Build your own creator-editor presence." },
  ];
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="container-editorial">
        <div className="mb-16" data-reveal>
          <span className="eyebrow">12 · Earning Path</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-2xl">Four ways to get paid.</h2>
        </div>
        <div className="grid md:grid-cols-4 border-t border-border" data-reveal>
          {paths.map((p, i) => (
            <div key={p.t} className={`py-10 ${i > 0 ? "md:border-l border-border" : ""} md:px-8`}>
              <div className="font-display text-5xl text-gold mb-6">0{i + 1}</div>
              <h3 className="font-display text-2xl mb-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- PROOF -------------------------------- */
export function Proof() {
  return (
    <section id="proof" className="py-28">
      <div className="container-editorial">
        <div className="mb-16 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-5 max-w-2xl" data-reveal>
            <span className="eyebrow">13 · Proof</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Outcomes, not testimonials.</h2>
          </div>
          <div className="lg:col-span-7" data-reveal>
            <img
              src={proofEdit}
              alt="Hands editing on a colored shortcut keyboard"
              width={1280}
              height={800}
              loading="lazy"
              className="w-full aspect-[16/9] object-cover rounded-lg border border-border"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { metric: "+184%", label: "Avg. retention lift", detail: "Across 32 reviewed channels post-cohort." },
            { metric: "8.4 / 10", label: "Client brief rating", detail: "Mean score across 200+ delivered briefs." },
            { metric: "73%", label: "Placed within 90 days", detail: "Cohort 05 — freelance, agency, or creator team." },
          ].map((p) => (
            <div key={p.metric} data-reveal className="bg-card border border-border p-10 lift">
              <div className="font-display text-5xl md:text-6xl text-navy">{p.metric}</div>
              <p className="mt-4 font-display text-lg">{p.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROGRAM TIMELINE -------------------------- */
const weeks = [
  { w: "Wk 1–2", t: "Fundamentals", d: "Editing language, story, the editor's eye." },
  { w: "Wk 3–4", t: "Editing", d: "Premiere mastery, multicam, color, audio." },
  { w: "Wk 5–6", t: "Motion", d: "After Effects, kinetic typography, graphics." },
  { w: "Wk 7", t: "AI Layer", d: "Workflow automation. 3× speed without compromise." },
  { w: "Wk 8–10", t: "Client Work", d: "Live agency briefs. Real deadlines. Portfolio shipped." },
];

export function ProgramTimeline() {
  return (
    <section id="program" className="py-28 bg-card border-y border-border">
      <div className="container-editorial">
        <div className="mb-16 max-w-2xl" data-reveal>
          <span className="eyebrow">14 · Program Structure</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Ten weeks. Five phases.</h2>
        </div>
        <div className="space-y-px bg-border" data-reveal>
          {weeks.map((w, i) => (
            <div key={w.t} className="grid md:grid-cols-12 gap-6 bg-card py-8 md:py-10 px-2 md:px-6 items-baseline group hover:bg-background transition-colors">
              <div className="md:col-span-1 text-xs tabular-nums text-muted-foreground tracking-widest">0{i + 1}</div>
              <div className="md:col-span-2 eyebrow text-foreground/60">{w.w}</div>
              <h3 className="md:col-span-3 font-display text-2xl">{w.t}</h3>
              <p className="md:col-span-5 text-sm text-muted-foreground">{w.d}</p>
              <div className="md:col-span-1 text-right">
                <span className="inline-block w-6 h-px bg-gold transition-all duration-500 group-hover:w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- MERIT FILTER ---------------------------- */
export function MeritFilter() {
  return (
    <section className="py-32 bg-navy text-navy-foreground">
      <div className="container-editorial grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7" data-reveal>
          <span className="eyebrow">15 · Selection</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05] text-balance">
            Not everyone <em className="text-gold not-italic">gets in.</em>
          </h2>
          <p className="mt-8 text-navy-foreground/70 max-w-md">
            We run small, selection-based cohorts. We'd rather train 40 people deeply than 4,000 superficially.
          </p>
        </div>
        <div className="md:col-span-5 space-y-6" data-reveal>
          {[
            { l: "Cohort 07 seats", v: "40" },
            { l: "Applications last cohort", v: "1,820" },
            { l: "Selection rate", v: "~6%" },
          ].map((x) => (
            <div key={x.l} className="flex items-baseline justify-between border-b border-navy-foreground/15 pb-4">
              <span className="text-sm text-navy-foreground/60">{x.l}</span>
              <span className="font-display text-3xl">{x.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- WHO IT'S FOR ---------------------------- */
export function WhoFor() {
  const who = [
    { t: "Beginners", d: "Curious, committed, no editing background required." },
    { t: "Creators", d: "Already making content. Want to edit faster, ship sharper." },
    { t: "Freelancers", d: "Editing for income. Want structure and better clients." },
    { t: "Students", d: "Building a career foundation. Treat this like a craft." },
  ];
  return (
    <section className="py-28">
      <div className="container-editorial">
        <div className="mb-16" data-reveal>
          <span className="eyebrow">16 · Who It's For</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Built for four kinds of people.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {who.map((x) => (
            <div key={x.t} data-reveal className="border border-border p-8 lift bg-card">
              <h3 className="font-display text-2xl mb-3">{x.t}</h3>
              <p className="text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FINAL CTA ------------------------------ */
export function FinalCTA() {
  return (
    <section id="apply" className="py-32 md:py-44 bg-card border-y border-border">
      <div className="container-editorial text-center max-w-4xl">
        <div className="flex justify-center mb-8" data-reveal>
          <span className="gold-rule" />
        </div>
        <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[1.05] text-balance">
          You already understand content.<br />
          <em className="text-muted-foreground">Now learn to get paid for it.</em>
        </h2>
        <div data-reveal className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#" className="group inline-flex items-center gap-3 bg-navy text-navy-foreground px-10 py-5 text-sm tracking-[0.18em] uppercase hover:bg-navy/90 transition-colors">
            Apply Now
            <span className="w-4 h-px bg-gold transition-all duration-300 group-hover:w-8" />
          </a>
          <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Cohort 07 · Closes in 12 days</p>
        </div>
      </div>
    </section>
  );
}
