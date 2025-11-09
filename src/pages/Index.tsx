import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
                  
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
