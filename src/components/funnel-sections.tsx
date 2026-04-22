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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.from("[data-hero-eyebrow]", { y: 20, opacity: 0, duration: 1 })
        .from("[data-hero-line]", { 
          y: 60, 
          opacity: 0, 
          duration: 1.2, 
          stagger: 0.15,
          skewY: 5
        }, "-=0.6")
        .from("[data-hero-sub]", { y: 20, opacity: 0, duration: 1 }, "-=0.8")
        .from("[data-hero-cta]", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from("[data-hero-mock]", { scale: 0.95, opacity: 0, duration: 1.5 }, "-=1.2");

      // Floating animation for mockup
      gsap.to("[data-hero-mock-inner]", {
        y: -15,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      gsap.to("[data-hero-mock]", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: { 
          trigger: ref.current, 
          start: "top top", 
          end: "bottom top", 
          scrub: true 
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="pt-32 md:pt-52 pb-20 md:pb-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="container-editorial grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <div data-hero-eyebrow className="mb-10">
            <span className="eyebrow">Video Editing Career System · Cohort 07</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tighter text-balance">
            <span data-hero-line className="block">The internet runs</span>
            <span data-hero-line className="block">on <span className="font-serif text-primary">video.</span></span>
            <span data-hero-line className="block text-muted-foreground/60 italic">Editors make it <span className="text-foreground">work.</span></span>
          </h1>
          <p data-hero-sub className="mt-10 text-xl text-muted-foreground max-w-lg leading-relaxed text-pretty">
            A structured system to turn your editing skills into real income — with paid internships and job placement guaranteed.
          </p>
          <div data-hero-cta className="mt-12 flex flex-col sm:flex-row items-center gap-8">
            <a
              href="#application-form"
              className="shimmer-btn group w-full sm:w-auto inline-flex justify-center items-center gap-4 bg-primary text-primary-foreground px-10 py-5 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20"
            >
              Apply for the Program
              <span className="w-5 h-px bg-primary-foreground transition-all duration-500 group-hover:w-10" />
            </a>
            <a href="#system" className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-all flex items-center gap-2 group">
              How it works
              <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100" />
            </a>
          </div>
        </div>
        <div data-hero-mock className="lg:col-span-5 relative">
          <div data-hero-mock-inner className="relative z-10">
            <div className="glass-card p-2 rounded-2xl overflow-hidden">
              <img
                src={heroEditingScreen}
                alt="Professional video editing workstation"
                width={1280}
                height={960}
                className="w-full h-auto aspect-[4/5] object-cover rounded-xl"
              />
            </div>
            {/* Floating UI Element */}
            <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl hidden md:block animate-pulse">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="mt-3 w-32 h-2 bg-white/10 rounded-full" />
              <div className="mt-2 w-20 h-2 bg-white/5 rounded-full" />
            </div>
          </div>
          {/* Background Glow */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 scale-150 rotate-12" />
        </div>
      </div>
    </section>
  );
}


/* ------------------------------- TRUST BAR ------------------------------- */
export function TrustBar() {
  const items = ["Agency-led training", "Paid internship", "Job placement", "Real client work"];
  return (
    <section className="border-y border-border/50 bg-background/50 backdrop-blur-sm relative z-20">
      <div className="container-editorial grid grid-cols-2 md:grid-cols-4">
        {items.map((t, i) => (
          <div key={t} className={`py-12 px-6 text-center group hover:bg-white/5 transition-colors duration-500 ${i > 0 ? "md:border-l border-border/30" : ""} ${i % 2 === 1 ? "border-l border-border/30 md:border-l" : ""} ${i >= 2 ? "border-t md:border-t-0 border-border/30" : ""}`}>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground group-hover:text-primary transition-colors">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


/* --------------------------- CLIENTS SHOWCASE ---------------------------- */
const clients = [
  { name: "Montra", subscribers: "Leading Electric Mobility", icon: "/clients/montra.svg" },
  { name: "Oxxy", subscribers: "Healthcare Network", icon: "/clients/oxxy_logo.png" },
  { name: "Rockman", subscribers: "Industries & Manufacturing", icon: "/clients/rockman.png" },
  { name: "Wishtune", subscribers: "Social Audio Platform", icon: "/clients/wishtune.png" },
  { name: "Montra", subscribers: "Leading Electric Mobility", icon: "/clients/montra.svg" },
  { name: "Oxxy", subscribers: "Healthcare Network", icon: "/clients/oxxy_logo.png" },
];

export function ClientsShowcase() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="container-editorial">
        <div className="text-center mb-20 max-w-2xl mx-auto" data-reveal>
          <span className="eyebrow mb-6">Trusted By Brands</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-tighter">
            Clients we have <span className="font-serif text-muted-foreground">worked with</span>
          </h2>
        </div>

        {/* Scrolling Container */}
        <div className="relative" data-reveal>
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden" />

          {/* Scrollable Content */}
          <div className="flex overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory scroll-smooth items-center gap-8 md:gap-16">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center flex flex-col items-center text-center w-[300px] md:w-[400px] group"
              >
                {/* Logo Container */}
                <div className="h-28 md:h-40 w-full flex items-center justify-center">
                  {client.icon ? (
                    <img
                      src={client.icon}
                      alt={client.name}
                      className={`max-h-full object-contain ${
                        client.icon.includes("wishtune") 
                          ? "max-w-[400px] scale-[2.8]" 
                          : "max-w-[300px]"
                      } ${
                        client.name === "Rockman" || client.name === "IconsBase" ? "brightness-0 invert" : ""
                      }`}
                    />
                  ) : (
                    <span className="text-3xl font-display text-muted-foreground">
                      {client.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="flex items-center justify-center gap-4 mt-8 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40">
          <div className="w-12 h-px bg-current opacity-20" />
          <span>Scroll to explore</span>
          <div className="w-12 h-px bg-current opacity-20" />
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
    <section className="py-20 md:py-28 light-section">
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
    <section className="py-24 border-y border-border light-section">
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
              <div className="font-display text-5xl md:text-6xl text-primary">{s.v}</div>
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
    img: portfolioLongform,
  },
  {
    t: "Short-form Editor",
    type: "Reels · Shorts · TikTok",
    income: "₹500 – ₹5k / edit",
    out: "Hook-first cuts, captions, motion accents, trend-fluent.",
    img: portfolioShortform,
  },
  {
    t: "Ads Editor",
    type: "Performance creative",
    income: "₹50k – ₹3L / month",
    out: "UGC variants, A/B hooks, conversion-driven cutdowns.",
    img: portfolioAds,
  },
  {
    t: "Podcast Editor",
    type: "Audio + video",
    income: "₹15k – ₹80k / project",
    out: "Multi-cam sync, audio cleanup, viral clip extraction.",
    img: portfolioPodcast,
  },
];

export function RolesGrid() {
  return (
    <section id="roles" className="py-32 md:py-48 relative">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-6" data-reveal>
          <div className="max-w-2xl">
            <span className="eyebrow mb-6">05 · Role Exploration</span>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight">
              Pick the editor you <br />
              <span className="font-serif text-muted-foreground">want to become.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Hover any role. The system trains you for all four — you specialise in one based on your talent profile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/20 border border-border/20">
          {roles.map((r, i) => (
            <article
              key={r.t}
              data-reveal
              className="group relative bg-background p-10 min-h-[620px] flex flex-col justify-start cursor-pointer overflow-hidden transition-all duration-700 hover:bg-white/[0.02]"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-700" />
              
              {/* Content */}
              <div className="text-[10px] tabular-nums text-muted-foreground/40 mb-10 tracking-[0.2em]">0{i + 1}</div>
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors duration-500">{r.t}</h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-8">{r.type}</p>
                
                {r.img && (
                  <div className="aspect-[4/5] rounded-xl overflow-hidden glass-card p-1 border-border/20 group-hover:border-primary/30 transition-all duration-700">
                    <img
                      src={r.img}
                      alt={r.t}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                )}
              </div>

              <div className="mt-auto relative z-10 space-y-6 pt-10">
                <div className="hairline opacity-30" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-primary mb-2">Income potential</p>
                  <p className="text-lg font-display tabular-nums tracking-tight">{r.income}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Example output</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.out}</p>
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
    <section className="py-28 border-y border-border light-section">
      <div className="container-editorial grid md:grid-cols-2 gap-px bg-border border border-border">
        <div className="bg-card p-10 md:p-14 group hover:bg-navy transition-all duration-500 cursor-default" data-reveal>
          <span className="eyebrow text-muted-foreground group-hover:text-gold transition-colors duration-500">The Old Way</span>
          <h3 className="font-display text-3xl mt-4 mb-8 group-hover:text-white transition-colors duration-500">Unstructured learning.</h3>
          <ul className="space-y-4 text-muted-foreground group-hover:text-white/70 transition-colors duration-500">
            {["Random YouTube tutorials", "No real client briefs", "No feedback, no progression", "Skills with nowhere to go"].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <span className="mt-2 w-3 h-px bg-muted-foreground/40 shrink-0 group-hover:bg-white/30 transition-colors duration-500" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card p-10 md:p-14 relative group hover:bg-navy transition-all duration-500 cursor-default" data-reveal>
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
          <span className="eyebrow group-hover:text-gold transition-colors duration-500">The IconsBase System</span>
          <h3 className="font-display text-3xl mt-4 mb-8 group-hover:text-white transition-colors duration-500">Structured progression.</h3>
          <ul className="space-y-4 text-foreground group-hover:text-white/90 transition-colors duration-500">
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
              <div key={s} className="flex flex-col items-center text-center group cursor-default">
                <div className="relative w-14 h-14 rounded-full bg-background border border-border group-hover:border-gold group-hover:bg-gold/5 flex items-center justify-center font-display text-lg z-10 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-gold/10">
                  <span className="text-gold text-xs absolute -top-5 tabular-nums tracking-widest group-hover:scale-110 transition-transform duration-500">0{i + 1}</span>
                  <span className="group-hover:text-gold transition-colors duration-500">{i + 1}</span>
                </div>
                <p className="mt-4 font-display text-xl group-hover:text-white transition-colors duration-500">{s}</p>
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
            <div key={x.t} className="bg-card p-8 group hover:bg-white/[0.03] transition-all duration-500 cursor-default">
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] transition-all duration-700 pointer-events-none" />
              <p className="eyebrow group-hover:text-gold transition-colors duration-500">AI Layer</p>
              <h4 className="font-display text-xl mt-3 mb-2 group-hover:text-primary transition-colors duration-500">{x.t}</h4>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-500">{x.d}</p>
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
    <section className="py-32 md:py-48 border-y border-border/20 light-section overflow-hidden">
      <div className="container-editorial">
        <div className="max-w-2xl mb-24" data-reveal>
          <span className="eyebrow mb-6">08 · Skill Stack</span>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight">
            Five disciplines. <br />
            <span className="font-serif text-muted-foreground">One professional editor.</span>
          </h2>
        </div>
        
        <div className="border-t border-border/20" data-reveal>
          {skills.map((s, i) => (
            <button
              key={s.t}
              onClick={() => setOpen(open === i ? null : i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-full text-left border-b border-border/20 py-8 md:py-12 grid grid-cols-12 gap-8 items-center group transition-all duration-500 overflow-hidden px-4 md:px-8"
            >
              {/* Animated Background Indicator */}
              <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content */}
              <span className="col-span-1 text-[10px] tabular-nums text-muted-foreground/50 group-hover:text-gold transition-colors duration-500 tracking-[0.3em] font-medium relative z-10">0{i + 1}</span>
              
              <div className="col-span-10 md:col-span-5 relative z-10">
                <span className="font-display text-2xl md:text-4xl tracking-tight group-hover:pl-4 group-hover:text-white transition-all duration-500 block">
                  {s.t}
                </span>
              </div>

              <div className={`col-span-12 md:col-span-5 relative z-10 transition-all duration-700 ${open === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 md:opacity-40 md:translate-y-0 group-hover:opacity-100"}`}>
                <p className={`text-sm md:text-base leading-relaxed max-w-md transition-colors duration-500 ${open === i ? "text-white/90" : "text-muted-foreground group-hover:text-white/70"}`}>
                  {s.d}
                </p>
              </div>

              <div className="hidden md:flex col-span-1 justify-end relative z-10">
                <div className={`w-10 h-10 rounded-full border border-border/30 flex items-center justify-center transition-all duration-500 ${open === i ? "bg-primary border-primary rotate-45" : "group-hover:border-primary group-hover:bg-white/10"}`}>
                  <span className={`text-2xl transition-colors duration-500 ${open === i ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}`}>+</span>
                </div>
              </div>
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
  const progressRef = useRef<HTMLDivElement>(null);

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
          onUpdate: (self) => {
            if (progressRef.current) {
              gsap.to(progressRef.current, {
                scaleX: self.progress,
                duration: 0.1,
                overwrite: "auto",
              });
            }
          },
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="border-y border-border/20 overflow-hidden light-section relative">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-border/10 z-50">
        <div ref={progressRef} className="h-full bg-primary origin-left scale-x-0" />
      </div>

      <div ref={track} className="flex items-center h-screen will-change-transform">
        <div className="shrink-0 w-screen px-8 md:px-32 flex flex-col justify-center">
          <span className="eyebrow mb-8">10 · Transformation</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] max-w-4xl leading-[0.95] tracking-tighter">
            From scattered effort <br />
            to <span className="font-serif text-muted-foreground">structured craft.</span>
          </h2>
          <div className="mt-12 flex items-center gap-6">
            <div className="w-16 h-px bg-primary" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll to explore the journey</p>
          </div>
        </div>

        {panels.map((p, i) => (
          <div
            key={i}
            className={`shrink-0 w-[85vw] md:w-[45vw] h-full flex flex-col border-l border-border/20 ${p.divider ? "bg-navy text-navy-foreground" : "bg-background"}`}
          >
            {/* Image at the top */}
            <div className={`relative w-full h-[60%] overflow-hidden ${p.divider ? "" : "p-8 md:p-12"}`}>
              <div className={`w-full h-full overflow-hidden ${p.divider ? "" : "rounded-2xl glass-card p-1"}`}>
                {p.img && (
                  <img
                    src={p.img}
                    alt={p.t}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  />
                )}
              </div>
            </div>

            {/* Text content at the bottom */}
            <div className="p-10 md:p-20 flex-1 flex flex-col justify-center">
              <div className={`text-[10px] tabular-nums tracking-[0.3em] mb-8 font-medium ${p.divider ? "text-gold" : "text-muted-foreground/40"}`}>{p.n}</div>
              <h3 className={`font-display text-4xl md:text-6xl mb-6 tracking-tight ${p.divider ? "italic" : ""}`}>{p.t}</h3>
              <p className={`text-sm md:text-base max-w-sm leading-relaxed ${p.divider ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{p.d}</p>
            </div>
          </div>
        ))}
        <div className="shrink-0 w-[30vw]" />
      </div>
    </section>
  );
}


/* ------------------------------- CAREER OUTCOMES ------------------------- */
export function CareerOutcomes() {
  const items = [
    { t: "Portfolio", d: "5–8 client-grade pieces ready to send." },
    { t: "Paid Internship", d: "3-month paid position post-graduation." },
    { t: "Agency Placement", d: "Direct hiring with partner agencies." },
    { t: "Full-time Role", d: "Agency or in-house positions with our partners." },
  ];
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="container-editorial">
        <div className="mb-24 max-w-3xl" data-reveal>
          <span className="eyebrow mb-6">11 · Career Outcomes</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tighter">
            From training to <span className="font-serif text-muted-foreground">full-time employment</span> in 90 days.
          </h2>
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Every graduate gets access to our paid internship program and job placement network. We support you until you're earning.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {items.map((x, i) => (
            <div key={x.t} data-reveal className="group relative bg-background p-12 transition-all duration-700 hover:bg-white/[0.02]">
              <div className="text-[10px] tabular-nums text-primary mb-8 tracking-[0.3em] font-medium">0{i + 1}</div>
              <h3 className="font-display text-2xl mb-4 group-hover:text-primary transition-colors duration-500">{x.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-700 group-hover:w-full" />
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
    <section id="proof" className="py-32 md:py-48">
      <div className="container-editorial">
        <div className="mb-24 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6" data-reveal>
            <span className="eyebrow mb-6">13 · Proof</span>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-tighter mb-8">
              Outcomes, not <span className="font-serif text-muted-foreground">testimonials.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              We track our cohort stats with surgical precision. Our goal isn't just to teach, but to place.
            </p>
          </div>
          <div className="lg:col-span-6" data-reveal>
            <div className="glass-card p-2 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={proofEdit}
                alt="Hands editing on a colored shortcut keyboard"
                width={1280}
                height={800}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {[
            { metric: "73%", label: "Job placement rate", detail: "Cohort 06 — placed within 90 days of graduation." },
            { metric: "₹35k", label: "Avg. starting salary", detail: "Monthly earnings from full-time positions." },
            { metric: "92%", label: "Internship conversion", detail: "Interns who transition to full-time employment." },
          ].map((p) => (
            <div key={p.metric} data-reveal className="bg-background group p-12 transition-all duration-700 hover:bg-white/[0.02]">
              <div className="font-display text-6xl md:text-8xl text-primary mb-6 tracking-tighter group-hover:scale-110 transition-transform duration-700 origin-left">{p.metric}</div>
              <div className="hairline mb-6 opacity-30" />
              <p className="font-display text-xl mb-2">{p.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
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
    <section className="py-32 md:py-48 light-section relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[150px] -z-10 rounded-full" />
      <div className="container-editorial">
        <div className="mb-24 text-center max-w-3xl mx-auto" data-reveal>
          <span className="eyebrow mb-6">Success Stories</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tighter">
            From students to <span className="font-serif text-muted-foreground">professionals.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Real outcomes from real graduates. No fluff, just absolute career transformations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal
              className="bg-background group p-10 flex flex-col border border-border/50 hover:border-primary/30 transition-all duration-700 lift"
            >
              {/* Quote Icon */}
              <div className="text-primary/20 font-serif text-8xl h-10 -ml-4 -mt-4 mb-4 select-none group-hover:text-primary/40 transition-colors duration-700">“</div>
              
              {/* Quote */}
              <p className="text-base text-foreground/80 leading-relaxed mb-10 flex-1 font-serif italic">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="hairline mb-8 opacity-20" />

              {/* Author Info */}
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-lg tracking-tight">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">{t.role}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary mt-1 font-bold">{t.cohort}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Outcome</span>
                  <div className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-[10px] text-primary font-bold tracking-widest uppercase">
                    {t.outcome}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Proof */}
        <div className="mt-24 pt-16 border-t border-border/50 text-center" data-reveal>
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground">
            Join 200+ graduates who've completed our paid internship program
          </p>
          <p className="mt-4 text-xs text-muted-foreground/60 italic">
            4.9/5 program rating based on verified post-internship surveys
          </p>
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
    <section id="program" className="py-32 md:py-48 bg-background border-y border-white/5">
      <div className="container-editorial">
        <div className="mb-24 max-w-3xl" data-reveal>
          <span className="eyebrow mb-6">14 · Program Structure</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tighter">
            Ten weeks training. <br />
            <span className="font-serif text-muted-foreground">Three months paid internship.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Graduate with a portfolio, then step into a paid internship with our partner agencies. We support you until you're earning.
          </p>
        </div>
        <div className="space-y-px bg-white/5 border border-white/5" data-reveal>
          {weeks.map((w, i) => (
            <div key={w.t} className="grid md:grid-cols-12 gap-8 bg-background py-10 md:py-14 px-8 md:px-12 items-center group hover:bg-white/[0.02] transition-all duration-700">
              <div className="md:col-span-1 text-[10px] tabular-nums text-muted-foreground/40 tracking-[0.3em] font-medium">0{i + 1}</div>
              <div className="md:col-span-2 text-[10px] uppercase font-bold tracking-[0.3em] text-primary group-hover:pl-4 transition-all duration-500">{w.w}</div>
              <h3 className="md:col-span-3 font-display text-2xl md:text-3xl tracking-tight">{w.t}</h3>
              <p className="md:col-span-5 text-sm md:text-base text-muted-foreground leading-relaxed">{w.d}</p>
              <div className="md:col-span-1 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:rotate-45">
                  <span className="text-xl text-muted-foreground group-hover:text-primary">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* -------------------------------- MENTORS -------------------------------- */
const mentors = [
  {
    name: "Vikram Singh",
    role: "Lead Editor & Storyteller",
    exp: "8+ Years Experience",
    bio: "Ex-senior editor at top digital agencies. Vikram has shipped over 400+ long-form videos for million-subscriber creators.",
    image: "mentor_1_expert_1776676094261.png",
  },
  {
    name: "Neetu Sharma",
    role: "Short-form Growth Expert",
    exp: "5+ Years Experience",
    bio: "Specialist in high-retention vertical video. Neetu has managed editing workflows for viral brands across India.",
    image: "mentor_2_expert_1776676109520.png",
  }
];

export function Mentors() {
  return (
    <section className="py-32 md:py-48 light-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full rotate-12" />
      <div className="container-editorial">
        <div className="mb-24 text-center max-w-4xl mx-auto" data-reveal>
          <span className="eyebrow mb-6">Expert Guidance</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tighter">
            Learn from the masters <br />
            <span className="font-serif text-muted-foreground">who actually ship.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {mentors.map((m, i) => (
            <div key={m.name} className="group" data-reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-10 glass-card p-2 border-white/10 group-hover:border-primary/30 transition-all duration-700 shadow-2xl">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-8 left-8 glass-card-light px-4 py-2 rounded-full hidden md:block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">{m.exp}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mb-6">
                <h3 className="font-display text-4xl tracking-tight group-hover:text-primary transition-colors duration-500">{m.name}</h3>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">{m.role}</p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty font-serif italic">
                “{m.bio}”
              </p>
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
    <section className="py-32 md:py-52 bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="container-editorial grid lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-7" data-reveal>
          <span className="eyebrow mb-8">15 · Selection</span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.9] tracking-tighter">
            Not everyone <br />
            <span className="font-serif text-primary italic">gets in.</span>
          </h2>
          <p className="mt-12 text-xl text-navy-foreground/70 max-w-xl leading-relaxed">
            We run small, selection-based cohorts. We'd rather train 40 people deeply than 4,000 superficially. Quality is our only metric.
          </p>
        </div>
        <div className="lg:col-span-5 space-y-12" data-reveal>
          {[
            { l: "Cohort 07 seats", v: "40" },
            { l: "Applications last cohort", v: "1,820" },
            { l: "Selection rate", v: "~6%" },
          ].map((x) => (
            <div key={x.l} className="group">
              <div className="flex items-baseline justify-between mb-4 transition-all duration-500 group-hover:translate-x-2">
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-navy-foreground/40">{x.l}</span>
                <span className="font-display text-5xl md:text-7xl tracking-tighter group-hover:text-primary transition-colors duration-500">{x.v}</span>
              </div>
              <div className="hairline opacity-10" />
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
    <section className="py-32 md:py-48 bg-background overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2" />
      <div className="container-editorial">
        <div className="mb-24 max-w-3xl" data-reveal>
          <span className="eyebrow mb-6">16 · Who It's For</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-tighter">
            Built for those <br />
            <span className="font-serif text-muted-foreground">who aim for mastery.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {who.map((x, i) => (
            <div key={x.t} data-reveal className="group glass-card p-10 flex flex-col transition-all duration-700 hover:-translate-y-2">
              <div className="text-[10px] tabular-nums text-muted-foreground/30 mb-8 font-medium">TYPE_0{i + 1}</div>
              <h3 className="font-display text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors duration-500">{x.t}</h3>
              <div className="hairline mb-6 opacity-10" />
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{x.d}</p>
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
    <section className="py-40 md:py-64 bg-background relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[200px] -z-10 rounded-full" />
      <div className="container-editorial text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12" data-reveal>
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />
          </div>
          
          <h2 data-reveal className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tighter mb-10">
            Secure <span className="font-serif italic text-muted-foreground">your seat</span> in Cohort 07.
          </h2>
          
          <p data-reveal className="mt-12 text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Graduate with a professional portfolio. <br />
            Step directly into a <span className="text-primary font-bold">paid internship.</span>
          </p>

          <div data-reveal className="mt-20 flex flex-col items-center gap-10">
            <a
              href="#application-form"
              className="shimmer-btn group inline-flex items-center gap-6 bg-primary text-primary-foreground px-12 py-6 text-xs md:text-sm font-bold tracking-[0.3em] uppercase transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95"
            >
              Start Your Application
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Admission ends in 12 days</span>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-800" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                  +40
                </div>
              </div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">78 applications received today</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 text-[8px] uppercase tracking-[0.5em] text-muted-foreground/20 hidden md:block">
        IconsBase // The AI Institute
      </div>
      <div className="absolute bottom-10 right-10 text-[8px] uppercase tracking-[0.5em] text-muted-foreground/20 hidden md:block">
        Batch_007 // Selection_Only
      </div>
    </section>
  );
}

