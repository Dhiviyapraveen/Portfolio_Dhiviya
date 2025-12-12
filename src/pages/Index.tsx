import {
  Navigation,
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  AchievementsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from "@/components/portfolio";
import { Toaster } from "sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="bottom-right" richColors />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
