import { Facebook, Instagram, Linkedin } from "lucide-react";

const logo = "/iconsbase-logo.png";

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-background/50 backdrop-blur-xl border-b border-white/5">
      <div className="container-editorial flex items-center justify-between h-20 md:h-24">
        <a href="/" className="flex items-center gap-2 group transition-all duration-500 hover:scale-105">
          <img src={logo} alt="IconsBase — The AI Institute" className="h-10 md:h-12 w-auto invert brightness-0" width={280} height={84} />
        </a>
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8">
            {["Program", "Curriculum", "Placements"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#application-form"
            className="shimmer-btn text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xl shadow-primary/10"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 mt-32 relative overflow-hidden bg-background">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="container-editorial py-24 grid md:grid-cols-12 gap-16 md:gap-8">
        <div className="md:col-span-4">
          <img src={logo} alt="IconsBase — The AI Institute" className="h-10 md:h-12 w-auto mb-8 invert brightness-0" width={280} height={84} loading="lazy" />
          <p className="text-base text-muted-foreground max-w-sm leading-relaxed">
            A structured video editing career system. <br />
            Built for the people who actually ship.
          </p>
          <div className="mt-10 flex gap-6">
            <a href="https://www.facebook.com/iconsbasehq" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/iconsbasehq/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/iconsbasehq/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary mb-8">Program</p>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition-colors cursor-pointer">Curriculum</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Mentors</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Placements</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Admissions</li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary mb-8">Resources</p>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition-colors cursor-pointer">Editing Wiki</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Career Guide</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Job Board</li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary mb-8">Contact</p>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="mailto:hello@iconsbase.com" className="hover:text-foreground transition-colors">hello@iconsbase.com</a>
            </li>
            <li>
              <a href="tel:+917030400090" className="hover:text-foreground transition-colors">+91 7030400090</a>
            </li>
            <li className="leading-relaxed">
              IconsBase – The AI Institute<br />
              B1/22 – B, First Floor, Gandhi Path Rd,<br />
              Chitrakoot, Vaishali Nagar, Jaipur,<br />
              Rajasthan 302021
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/5 bg-black/20">
        <div className="container-editorial py-10 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 gap-6">
          <span>© {new Date().getFullYear()} IconsBase · The AI Institute. All rights reserved.</span>
          <div className="flex gap-8">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Selection-based admission</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
