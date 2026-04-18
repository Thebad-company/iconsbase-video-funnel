import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/lib/useLenis";
import { useReveal } from "@/lib/useReveal";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import {
  Hero,
  TrustBar,
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
  ProgramTimeline,
  MeritFilter,
  WhoFor,
  FinalCTA,
} from "@/components/funnel-sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IconsBase · Video Editing Career System" },
      {
        name: "description",
        content:
          "A structured agency-led system that turns editing skills into real income. Real client work, mentor feedback, placement support. Selection-based cohort.",
      },
      { property: "og:title", content: "IconsBase · Video Editing Career System" },
      {
        property: "og:description",
        content: "Turn editing skills into real income through a structured, agency-led program.",
      },
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
        <ProgramTimeline />
        <MeritFilter />
        <WhoFor />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
