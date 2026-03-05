import { Navbar } from "@/components/Navbar";
import { HeroStory } from "@/components/HeroStory";
import { ProofMarquee } from "@/components/ProofMarquee";
import { MetricTiles } from "@/components/MetricTiles";
import { ScrollNarrative } from "@/components/ScrollNarrative";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectSpotlight } from "@/components/ProjectSpotlight";
import { GrowthPlaybook } from "@/components/GrowthPlaybook";
import { SkillsStack } from "@/components/SkillsStack";
import { CreativeGallery } from "@/components/CreativeGallery";
import { VideoReel } from "@/components/VideoReel";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroStory />
      <ProofMarquee />
      <MetricTiles />
      <ScrollNarrative />
      <ExperienceTimeline />
      <ProjectSpotlight />
      <GrowthPlaybook />
      <SkillsStack />
      <CreativeGallery />
      <VideoReel />
      <ContactCTA />
      <Footer />
    </>
  );
}
