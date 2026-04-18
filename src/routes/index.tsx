import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/lib/useLenis";
import { useReveal } from "@/lib/useReveal";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
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
  OutputSystem,
  EarningPath,
  Proof,
  Testimonials,
  ProgramTimeline,
  MeritFilter,
  WhoFor,
  ApplicationFormSection,
  FinalCTA,
} from "@/components/funnel-sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IconsBase Video Editing Cohort · Professional Video Editor Training" },
      {
        name: "description",
        content:
          "Join IconsBase Video Editing Cohort 07. A structured, agency-led program that turns editing skills into real income with paid internships and job placement support.",
      },
      // Open Graph Tags
      { property: "og:type", content: "website" },
      { property: "og:title", content: "IconsBase Video Editing Cohort · Professional Video Editor Training" },
      {
        property: "og:description",
        content: "Turn editing skills into real income through a structured, agency-led program with paid internships and job placement support.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:url", content: "https://iconsbase.com" },
      { property: "og:site_name", content: "IconsBase" },
      // Twitter Card Tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IconsBase Video Editing Cohort · Professional Video Editor Training" },
      {
        name: "twitter:description",
        content: "Turn editing skills into real income through a structured, agency-led program with paid internships and job placement support.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
      // Additional Meta Tags
      { name: "keywords", content: "video editing course, video editor training, premiere pro course, after effects training, video editing internship, video editor jobs, content creator course, youtube editor training" },
      { name: "author", content: "IconsBase" },
      { name: "robots", content: "index, follow" },
    ],
  }),
});

function Index() {
  useLenis();
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <TrustBar />
        <ClientsShowcase />
        <CheckOutOurWork />
        <Relatability />
        <Opportunity />
        <RolesGrid />
        <ProblemSystem />
        <Engine />
        <SkillStack />
        <WorkEnvironment />
        <HorizontalTransformation />
        <OutputSystem />
        <EarningPath />
        <Proof />
        <Testimonials />
        <ProgramTimeline />
        <MeritFilter />
        <WhoFor />
        <ApplicationFormSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
