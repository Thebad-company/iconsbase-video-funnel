import { useLenis } from "@/lib/useLenis";
import { useReveal } from "@/lib/useReveal";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { CustomCursor } from "@/components/CustomCursor";
import {
  Hero,
  TrustBar,
  ClientsShowcase,
  CheckOutOurWork,
  Relatability,
  Opportunity,
  RolesGrid,
  ProblemSystem,
  Engine,
  SkillStack,
  WorkEnvironment,
  HorizontalTransformation,
  CareerOutcomes,
  Proof,
  Testimonials,
  ProgramTimeline,
  Mentors,
  MeritFilter,
  WhoFor,
  ApplicationFormSection,
  FinalCTA,
} from "@/components/funnel-sections";

function App() {
  useLenis();
  useReveal();
  
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Premium Overlays */}
      <CustomCursor />
      <div className="grain-overlay" />
      
      <SiteNav />
      
      <main className="relative">
        <div className="mesh-gradient-navy absolute inset-0 -z-10 opacity-50" />
        
        {/* 1. HOOK - Grab attention */}
        <Hero />
        <TrustBar />
        
        {/* 2. CREDIBILITY - Show social proof early */}
        <ClientsShowcase />
        <CheckOutOurWork />
        
        {/* 3. RELATABILITY - Connect with pain points */}
        <Relatability />
        
        {/* 4. OPPORTUNITY - Show the market potential */}
        <Opportunity />
        
        {/* 5. SOLUTION - Present the system */}
        <ProblemSystem />
        <Engine />
        
        {/* 6. ROLES - Help them visualize their path */}
        <RolesGrid />
        
        {/* 7. CURRICULUM - Show what they'll learn */}
        <SkillStack />
        <WorkEnvironment />
        
        {/* 8. TRANSFORMATION - Emotional journey */}
        <HorizontalTransformation />
        
        {/* 9. OUTCOMES - What they get */}
        <CareerOutcomes />
        
        {/* 10. PROGRAM DETAILS - Structure and timeline */}
        <ProgramTimeline />
        
        {/* 11. MENTORS - Learn from experts */}
        <Mentors />
        
        {/* 12. PROOF - Validate with data and testimonials */}
        <Proof />
        <Testimonials />
        
        {/* 12. SELECTION - Create urgency and exclusivity */}
        <MeritFilter />
        
        {/* 13. FIT - Address objections */}
        <WhoFor />
        
        {/* 14. CONVERSION - Multiple CTAs */}
        <ApplicationFormSection />
        <FinalCTA />
      </main>
      
      <SiteFooter />
    </div>
  );
}

export default App;
