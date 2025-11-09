import { useState } from "react";
import {
  Code, Database, Server, Cpu, Users,
  Globe, Palette, Cloud, GitBranch, Braces
} from "lucide-react";

type SkillCategory = "React" | "Node.js" | "Express.js" | "MongoDB" | "Soft Skills";

export const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<SkillCategory>("React");

  const skillDetails: Record<SkillCategory, string[]> = {
    React: ["Hooks & Components", "React Router", "Redux Toolkit", "Context API", "Reusable UI"],
    "Node.js": ["REST APIs", "JWT Authentication", "Async Programming", "NPM Packages", "Error Handling"],
    "Express.js": ["Routing", "Middleware", "API Development", "MVC Pattern", "Error Handling"],
    MongoDB: ["Mongoose ODM", "Schema Design", "CRUD Operations", "Aggregation Framework", "Data Modeling"],
    "Soft Skills": ["Communication", "Problem Solving", "Teamwork", "Time Management", "Adaptability"],
  };

  const allSkills = [
    { name: "React.js", icon: Cpu },
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Code },
    { name: "MongoDB", icon: Database },
    { name: "JavaScript", icon: Braces },
    { name: "HTML5", icon: Globe },
    { name: "CSS3", icon: Palette },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Cloud },
    { name: "VS Code", icon: Code },
  ];

  const categories = [
    { name: "React", icon: Cpu },
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Code },
    { name: "MongoDB", icon: Database },
    { name: "Soft Skills", icon: Users },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto text-center">

        {/* ===== Heading ===== */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          <span className="bg-gradient-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        {/* ===== All Skills (Top 2 Rows) ===== */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 mb-10">
          {allSkills.map(({ name, icon: Icon }, i) => (
            <div
              key={i}
              className="group flex flex-col items-center p-4 bg-card/30 rounded-xl 
                         hover:bg-card/40 hover:shadow-glow-primary transition-all duration-300 hover:scale-110"
            >
              <Icon className="h-8 w-8 text-primary group-hover:text-primary-glow transition-all duration-300" />
              <span className="text-xs mt-2 text-muted-foreground group-hover:text-foreground transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* ===== Clickable Round Category Icons ===== */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {categories.map(({ name, icon: Icon }, i) => (
            <button
              key={i}
              onClick={() => setActiveSkill(name)}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-full 
                         bg-card/20 hover:bg-primary/10 transition-all duration-300 hover:shadow-glow-primary"
            >
              <Icon className="h-10 w-10 text-primary transition-all duration-300" />
              <span className="text-sm text-muted-foreground">{name}</span>
            </button>
          ))}
        </div>

        {/* ===== Sub-Skill Section (Auto Appears) ===== */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-semibold text-primary mb-6">{activeSkill}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skillDetails[activeSkill].map((skill, idx) => (
              <div
                key={idx}
                className="p-3 bg-card/30 rounded-lg text-sm text-muted-foreground 
                           hover:text-primary hover:bg-card/40 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
