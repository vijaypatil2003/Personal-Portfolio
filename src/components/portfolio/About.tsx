import { Card } from "@/components/ui/card";
import { Code, Heart, Lightbulb, Target } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "MERN Stack Developer",
    description: "Building responsive web apps with the MERN stack"
  },
  {
    icon: Target,
    title: "5+ Projects Completed",
    description: "Successfully delivered to clients worldwide"
  },
  {
    icon: Heart,
    title: "Passion for Design",
    description: "Always exploring and improving new tech skills"
  },
  {
    icon: Lightbulb,
    title: "Innovation Focused",
    description: "Creating clean, efficient, and user-focused solutions"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-slide-up">
            <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hello! I'm <span className="text-primary font-semibold">Vijay Patil</span>, a passionate 
              <span className="font-semibold"> MERN Stack Developer</span> from India. I love building 
              responsive, user-friendly, and efficient web applications that solve real-world problems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I graduated in Computer Science Engineering from 
              <span className="font-semibold"> R. C. Patel Institute of Technology, Shirpur</span>. 
              My core expertise lies in <span className="font-semibold">React.js, Node.js, Express.js,</span> 
              and <span className="font-semibold">MongoDB</span>. I enjoy turning ideas into clean, 
              functional, and visually appealing web solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m always eager to learn new technologies, improve my craft, and contribute to projects 
              that make a real impact. Coding for me isn’t just work — it’s a way to create, explore, 
              and keep growing every day.
            </p>
            </div>

          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up [animation-delay:200ms]">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={highlight.title}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-glow" />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};