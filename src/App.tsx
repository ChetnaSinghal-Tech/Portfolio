import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSkills } from './components/AboutSkills';
import { CaseStudyEco } from './components/CaseStudyEco';
import { CaseStudyOther } from './components/CaseStudyOther';
import { UIGallery } from './components/UIGallery';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSkills />
        </div>
        
        <div id="projects">
          <CaseStudyEco />
          <CaseStudyOther />
        </div>
        
        <div id="gallery">
          <UIGallery />
        </div>
        
        <Contact />
      </main>
    </div>
  );
}
