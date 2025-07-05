import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      <ThemeToggle />
      
      <StarBackground />

      
      <Navbar />
      
      <main>
        <div id="hero" className="scroll-section">
          <HeroSection />
        </div>
        <div id="about" className="scroll-section">
          <AboutSection />
        </div>
        <div id="skills" className="scroll-section">
          <SkillsSection />
        </div>
        <div id="projects" className="scroll-section">
          <ProjectsSection />
        </div>
        <div id="contact" className="scroll-section">
          <ContactSection />
        </div>
      </main>

      <Footer />

      <ScrollToTopButton />
    </div>
  );
};