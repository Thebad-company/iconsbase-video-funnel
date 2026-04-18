import { Link } from "@tanstack/react-router";
import logo from "@/assets/iconsbase-logo.png";

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container-editorial flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="IconsBase — The AI Institute" className="h-8 w-auto" width={160} height={48} />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#system" className="hover:text-foreground transition-colors">System</a>
          <a href="#roles" className="hover:text-foreground transition-colors">Roles</a>
          <a href="#program" className="hover:text-foreground transition-colors">Program</a>
          <a href="#proof" className="hover:text-foreground transition-colors">Proof</a>
        </nav>
        <a href="#apply" className="text-xs uppercase tracking-[0.2em] px-4 py-2.5 bg-navy text-navy-foreground hover:bg-navy/90 transition-colors">
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
