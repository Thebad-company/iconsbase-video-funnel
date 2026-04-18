import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LeadCaptureForm, ApplicationFormSection } from "./lead-capture-form";

// Asset paths (from public directory)
const heroEditingScreen = "/hero-editing-screen.png";
const realWorkEnvironment = "/real-work-environment.png";
const proofEdit = "/proof-edit.jpg";
const portfolioLongform = "/portfolio-longform.png";
const portfolioShortform = "/portfolio-shortform.png";
const portfolioAds = "/portfolio-ads.png";
const portfolioPodcast = "/portfolio-podcast.png";
const portfolioVlog = "/portfolio-vlog.png";
const avatar1 = "/avatar-1.png";
const avatar2 = "/avatar-2.png";
const avatar3 = "/avatar-3.png";
const avatar4 = "/avatar-4.png";
const avatar5 = "/avatar-5.png";

gsap.registerPlugin(ScrollTrigger);

// Export the ApplicationFormSection for use in routes
export { ApplicationFormSection };

/* --------------------------------- HERO --------------------------------- */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

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
    <>
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
            <p className="mt-8 text-lg text-muted-foreground max-w-md text-pretty">
              A structured system to turn your editing skills into real income — with paid internships and job placement guaranteed.
            </p>
            <div data-hero-cta className="mt-10 flex items-center gap-6">
              <button
                onClick={() => setIsFormOpen(true)}
                className="group inline-flex items-center gap-3 bg-navy text-navy-foreground px-7 py-4 text-sm tracking-[0.15em] uppercase hover:bg-navy/90 transition-colors"
              >
                Apply for the Program
                <span className="w-4 h-px bg-gold transition-all duration-300 group-hover:w-8" />
              </button>
              <a href="#system" className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
                How it works
              </a>
            </div>
          </div>
          <div data-hero-mock className="lg:col-span-6 relative">
            <div className="relative">
              <img
                src={heroEditingScreen}
                alt="Professional video editing workstation"
                width={1280}
                height={960}
                className="w-full h-auto aspect-video object-cover rounded-lg border border-border"
              />
            </div>
            <div className="h-12 md:h-16" />
          </div>
        </div>
      </section>
      <LeadCaptureForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}

/* ------------------------------- TRUST BAR ------------------------------- */
export function TrustBar() {
  const items = ["Agency-led training", "Paid internship", "Job placement", "Real client work"];
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

/* --------------------------- CLIENTS SHOWCASE ---------------------------- */
const clients = [
  { name: "TechVision Studios", subscribers: "245k Subscribers", icon: "/client-logo-1.png" },
  { name: "Creative Minds", subscribers: "180k Subscribers", icon: "/avatar-1.png" },
  { name: "Digital Pulse", subscribers: "520k Subscribers", icon: "/avatar-2.png" },
  { name: "Content Creators Co", subscribers: "95k Subscribers", icon: "/avatar-3.png" },
  { name: "Media Masters", subscribers: "310k Subscribers", icon: "/avatar-4.png" },
  { name: "Studio Nexus", subscribers: "420k Subscribers", icon: "/avatar-5.png" },
  { name: "Pixel Perfect", subscribers: "155k Subscribers", icon: "/avatar-1.png" },
];

export function ClientsShowcase() {
  return (
    <section className="py-20 bg-navy text-navy-foreground overflow-hidden">
      <div className="container-editorial">
        <h2 className="text-center font-display text-3xl md:text-4xl mb-12" data-reveal>
          Clients we have worked with
        </h2>
        
        {/* Scrolling Container */}
        <div className="relative" data-reveal>
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable Content */}
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center flex flex-col items-center text-center min-w-[200px] group"
              >
                {/* Logo Circle */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-navy-foreground/10 backdrop-blur-sm border-2 border-navy-foreground/20 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-gold/50 transition-all duration-300 overflow-hidden">
                  {client.icon ? (
                    <img
                      src={client.icon}
                      alt={client.name}
                      className="w-full h-full object-cover p-2"
                    />
                  ) : (
                    <span className="text-4xl md:text-5xl font-display text-navy-foreground/80">
                      {client.name.charAt(0)}
                    </span>
                  )}
                </div>
                
                {/* Client Info */}
                <h3 className="font-display text-lg mb-1">{client.name}</h3>
                <p className="text-sm text-navy-foreground/70">{client.subscribers}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-navy-foreground/60">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Scroll to see more</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- CHECK OUT OUR WORK -------------------------- */
const portfolioWork = [
  {
    thumbnail: portfolioLongform,
    creator: "Abhishek",
    avatar: avatar1,
    subscribers: "245k Subscribers",
  },
  {
    thumbnail: portfolioShortform,
    creator: "Meesh & Dee",
    avatar: avatar2,
    subscribers: "109k Subscribers",
  },
  {
    thumbnail: portfolioAds,
    creator: "Reel Rejects",
    avatar: avatar3,
    subscribers: "1.45M Subscribers",
  },
  {
    thumbnail: portfolioPodcast,
    creator: "Content Creator",
    avatar: avatar4,
    subscribers: "250k Subscribers",
  },
  {
    thumbnail: portfolioVlog,
    creator: "Another Creator",
    avatar: avatar5,
    subscribers: "180k Subscribers",
  },
];

export function CheckOutOurWork() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container-editorial">
        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <h2 className="font-display text-4xl md:text-6xl">
            Check out our{" "}
            <span className="relative inline-block">
              work
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-gold/30 -z-10" />
            </span>
          </h2>
        </div>

        {/* Scrolling Container */}
        <div className="relative" data-reveal>
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110 hidden md:flex"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center hover:bg-white transition-all hover:scale-110 hidden md:flex"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Content */}
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth px-4 md:px-0">
            {portfolioWork.map((work, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center group cursor-pointer"
                style={{ width: "clamp(280px, 40vw, 400px)" }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
                  {work.thumbnail ? (
                    <img
                      src={work.thumbnail}
                      alt={`Work for ${work.creator}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy/20 to-gold/20">
                      <svg className="w-16 h-16 text-muted-foreground/40" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-8 h-8 text-navy ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Creator Info */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted border-2 border-border shrink-0">
                    {work.avatar ? (
                      <img
                        src={work.avatar}
                        alt={work.creator}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-gold text-white font-display text-lg">
                        {work.creator.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  {/* Creator Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg truncate">{work.creator}</h3>
                    <p className="text-sm text-muted-foreground">{work.subscribers}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12" data-reveal>
          <p className="text-sm text-muted-foreground mb-4">
            See more of our work on YouTube
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-foreground hover:text-gold transition-colors"
          >
            View Full Portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
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
    img: "/portfolio-longform.png",
  },
  {
    t: "Short-form Editor",
    type: "Reels · Shorts · TikTok",
    income: "₹500 – ₹5k / edit",
    out: "Hook-first cuts, captions, motion accents, trend-fluent.",
    img: "/portfolio-shortform.png",
  },
  {
    t: "Ads Editor",
    type: "Performance creative",
    income: "₹50k – ₹3L / month",
    out: "UGC variants, A/B hooks, conversion-driven cutdowns.",
    img: "/portfolio-ads.png",
  },
  {
    t: "Podcast Editor",
    type: "Audio + video",
    income: "₹15k – ₹80k / project",
    out: "Multi-cam sync, audio cleanup, viral clip extraction.",
    img: "/portfolio-podcast.png",
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
              className="group relative bg-card p-8 lg:p-10 min-h-[580px] flex flex-col justify-start cursor-pointer overflow-hidden lift"
            >
              {/* Content */}
              <div className="text-xs tabular-nums text-muted-foreground mb-4">0{i + 1}</div>
              <div className="mb-8">
                <h3 className="font-display text-2xl mb-2">{r.t}</h3>
                <p className="text-sm text-muted-foreground mb-6">{r.type}</p>
                {r.img && (
                  <div className="aspect-video rounded-lg overflow-hidden border border-border/50">
                    <img 
                      src={r.img} 
                      alt={r.t} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                )}
              </div>
              <div className="mt-auto space-y-5">
                <div className="hairline" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">Income potential</p>
                  <p className="text-sm text-foreground">{r.income}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">Example output</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.out}</p>
                </div>
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
  { t: "Premiere Pro", d: "Industry-standard NLE. Project management, multicam, color.", img: "/premiere-pro.png" },
  { t: "After Effects", d: "Motion graphics, kinetic type, expressions, compositing.", img: "/after-effects.png" },
  { t: "AI Editing Tools", d: "Descript, Runway, Captions, Topaz — woven into your workflow." },
  { t: "Storytelling", d: "Structure, pacing, emotional arcs that hold attention." },
  { t: "Retention Editing", d: "Hook design, pattern interrupts, watch-time engineering." },
];

export function SkillStack() {
  const [open, setOpen] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-full text-left border-b border-border py-6 grid grid-cols-12 gap-4 items-center group hover:bg-background transition-colors overflow-hidden"
            >
              {/* Background Image on Hover */}
              {s.img && (
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-10' : 'opacity-0'}`}
                  style={{
                    backgroundImage: `url(${s.img})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              )}
              
              {/* Content */}
              <span className="col-span-1 text-xs tabular-nums text-muted-foreground tracking-widest relative z-10">0{i + 1}</span>
              <span className="col-span-10 md:col-span-4 font-display text-2xl relative z-10">{s.t}</span>
              <span className={`col-span-12 md:col-span-6 text-sm text-muted-foreground overflow-hidden transition-all duration-500 relative z-10 ${open === i ? "max-h-20 opacity-100" : "max-h-0 md:max-h-20 md:opacity-60 opacity-0"}`}>
                {s.d}
              </span>
              <span className={`hidden md:block col-span-1 text-right text-gold transition-transform duration-500 relative z-10 ${open === i ? "rotate-45" : ""}`}>+</span>
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
            src={realWorkEnvironment}
            alt="Professional video editor's workspace with gear and editing notes"
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
  { n: "01", t: "Watching tutorials", d: "Endless loops. No structure. No output.", img: "/watching-tutorials.jpeg" },
  { n: "02", t: "Confusion", d: "Too many tools. No clear path forward.", img: "/consfusion.jpeg" },
  { n: "03", t: "Random edits", d: "Practice that goes nowhere.", img: "/random-edits.jpeg" },
  { n: "—", t: "The shift", d: "Structure replaces noise.", divider: true, img: "/the-shift.jpeg" },
  { n: "04", t: "Structured workflow", d: "A repeatable system, weekly milestones.", img: "/structured-flow.jpeg" },
  { n: "05", t: "Feedback", d: "Senior editors review every cut.", img: "/feedback-portfolio.jpeg" },
  { n: "06", t: "Portfolio", d: "Real work that signals real skill.", img: "/feedback-portfolio.jpeg" },
  { n: "07", t: "Paid work", d: "Income from clients, agencies, creators.", img: "/paid-work.jpeg" },
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
            className={`shrink-0 w-[80vw] md:w-[40vw] h-full flex flex-col justify-between border-l border-border ${p.divider ? "bg-navy text-navy-foreground" : "bg-background"}`}
          >
            {/* Image at the top */}
            {p.img && (
              <div className="w-full h-[50%] overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.t}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Text content at the bottom */}
            <div className="p-10 md:p-14">
              <div className={`text-xs tracking-[0.3em] mb-6 ${p.divider ? "text-gold" : "text-muted-foreground"}`}>{p.n}</div>
              <h3 className={`font-display text-3xl md:text-5xl mb-4 ${p.divider ? "italic" : ""}`}>{p.t}</h3>
              <p className={`text-sm max-w-xs ${p.divider ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{p.d}</p>
            </div>
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
    { t: "Paid Internship", d: "3-month paid position with partner agencies." },
    { t: "Job Placement", d: "Direct connections to hiring agencies & creators." },
    { t: "Full-time Role", d: "Agency or in-house positions with our partners." },
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
    { t: "Paid Internship", d: "3-month paid position post-graduation." },
    { t: "Agency Placement", d: "Direct hiring with partner agencies." },
    { t: "In-house Roles", d: "Full-time positions with brands & studios." },
    { t: "Creator Teams", d: "Embedded roles with YouTubers & podcasters." },
  ];
  return (
    <section className="py-28 bg-card border-y border-border">
      <div className="container-editorial">
        <div className="mb-16" data-reveal>
          <span className="eyebrow">12 · Career Path</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-2xl">From training to full-time employment in 90 days.</h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Every graduate gets access to our paid internship program and job placement network. We connect you directly to full-time opportunities.
          </p>
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
            { metric: "73%", label: "Job placement rate", detail: "Cohort 06 — placed within 90 days of graduation." },
            { metric: "₹35k", label: "Avg. starting salary", detail: "Monthly earnings from full-time positions." },
            { metric: "92%", label: "Internship conversion", detail: "Interns who transition to full-time employment." },
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

/* ---------------------------- TESTIMONIALS ------------------------------- */
const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Video Editor Intern",
    cohort: "Cohort 05",
    quote: "I went from watching random YouTube tutorials to working on real client projects during my internship. The hands-on experience and mentor feedback transformed how I approach editing.",
    outcome: "Paid internship",
  },
  {
    name: "Priya Sharma",
    role: "Editing Intern",
    cohort: "Cohort 04",
    quote: "The mentor feedback was game-changing. Every week, a senior editor reviewed my cuts and showed me exactly what to improve. The paid internship gave me real-world experience while earning.",
    outcome: "3-month internship",
  },
  {
    name: "Rohan Desai",
    role: "Short-form Editor Intern",
    cohort: "Cohort 06",
    quote: "Before IconsBase, I had skills but no direction. The structured system taught me retention editing, AI tools, and how to work with real briefs. The internship was the perfect bridge to professional work.",
    outcome: "Internship completed",
  },
  {
    name: "Sneha Patel",
    role: "Motion Design Intern",
    cohort: "Cohort 05",
    quote: "The After Effects module alone was worth it. But what really set this apart was the agency-led approach — real deadlines, real feedback, real work. The internship felt like being part of a professional team.",
    outcome: "Agency internship",
  },
  {
    name: "Karthik Iyer",
    role: "Content Editor Intern",
    cohort: "Cohort 06",
    quote: "The paid internship program was exactly what I needed. It gave me confidence, portfolio pieces, and real experience working with clients. I learned more in 3 months than a year of tutorials.",
    outcome: "Paid internship",
  },
  {
    name: "Ananya Singh",
    role: "Video Editing Intern",
    cohort: "Cohort 04",
    quote: "The paid internship was the bridge I needed. It gave me real-world experience and a steady income while I built my portfolio. Working on actual client projects made all the difference.",
    outcome: "3-month internship",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-background">
      <div className="container-editorial">
        <div className="mb-16 text-center max-w-2xl mx-auto" data-reveal>
          <span className="eyebrow">Student Success Stories</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            From students to professionals.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Real outcomes from real graduates. No fluff, just career transformations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              className="bg-card border border-border p-8 rounded-lg hover:border-gold/50 transition-all duration-300 lift flex flex-col"
            >
              {/* Quote */}
              <p className="text-sm text-foreground/90 leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="hairline mb-6" />

              {/* Author Info */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-lg">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
                  <p className="text-xs text-gold mt-1">{t.cohort}</p>
                </div>
                <div className="text-right">
                  <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded text-xs text-gold">
                    {t.outcome}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center" data-reveal>
          <p className="text-sm text-muted-foreground mb-6">
            Join 200+ graduates who've completed our paid internship program
          </p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.9/5 program rating from internship participants</span>
          </div>
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
  { w: "Post-grad", t: "Internship", d: "3-month paid position with placement support." },
];

export function ProgramTimeline() {
  return (
    <section id="program" className="py-28 bg-card border-y border-border">
      <div className="container-editorial">
        <div className="mb-16 max-w-2xl" data-reveal>
          <span className="eyebrow">14 · Program Structure</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Ten weeks training. Three months paid internship.</h2>
          <p className="mt-6 text-muted-foreground">
            Graduate with a portfolio, then step into a paid internship with our partner agencies. We support you until you're earning.
          </p>
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
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="apply" className="py-32 md:py-44 bg-card border-y border-border">
        <div className="container-editorial text-center max-w-4xl">
          <div className="flex justify-center mb-8" data-reveal>
            <span className="gold-rule" />
          </div>
          <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[1.05] text-balance">
            Graduate with a portfolio.<br />
            <em className="text-muted-foreground">Leave with a paid internship.</em>
          </h2>
          <p data-reveal className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every graduate gets access to our 3-month paid internship program and direct connections to hiring agencies. We don't just train you — we place you.
          </p>
          <div data-reveal className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setIsFormOpen(true)}
              className="group inline-flex items-center gap-3 bg-navy text-navy-foreground px-10 py-5 text-sm tracking-[0.18em] uppercase hover:bg-navy/90 transition-colors"
            >
              Apply Now
              <span className="w-4 h-px bg-gold transition-all duration-300 group-hover:w-8" />
            </button>
            <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Cohort 07 · Closes in 12 days</p>
          </div>
        </div>
      </section>
      <LeadCaptureForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
