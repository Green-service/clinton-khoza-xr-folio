import { NavBarDemo } from '@/components/NavBarDemo';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import QualificationsSection from '@/components/QualificationsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-xr-dark-purple">
      <NavBarDemo />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <QualificationsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
