const logo = "/iconsbase-logo.png";

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/90 border-b border-zinc-200">
      <div className="container-editorial flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="IconsBase — The AI Institute" className="h-14 w-auto" width={280} height={84} />
        </a>
        <a href="#application-form" className="text-xs uppercase tracking-[0.2em] px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          Apply
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-editorial py-16 grid md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="IconsBase — The AI Institute" className="h-10 w-auto mb-4" width={200} height={60} loading="lazy" />
          <p className="text-sm text-muted-foreground max-w-xs">A structured video editing career system. Built for the people who actually ship.</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4">Program</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>Curriculum</li>
            <li>Mentors</li>
            <li>Placements</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>admissions@iconsbase.co</li>
            <li>Mumbai · Remote</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-editorial py-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-2">
          <span>© {new Date().getFullYear()} IconsBase · The AI Institute. All rights reserved.</span>
          <span>Selection-based admission · Limited cohort</span>
        </div>
      </div>
    </footer>
  );
}
