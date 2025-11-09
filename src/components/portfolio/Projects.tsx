import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ViiShop — E-Commerce Website",
    description: "Full-stack e-commerce platform for seamless shopping and order management.",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
    image:
      "https://res.cloudinary.com/dc5154n7n/image/upload/v1762696778/Screenshot_2025-11-09_192827_snfeki.png",
    github: "https://github.com/vijaypatil2003/ViiShop-E-Commerce-Website",
    live: "https://vii-shop-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time collaborative task manager with drag-and-drop functionality.",
    tech: ["React", "Socket.io", "Express", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "AI Chat Bot",
    description: "Intelligent chatbot using OpenAI API with natural language processing.",
    tech: ["Python", "FastAPI", "OpenAI", "React"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    github: "#",
    live: "#",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-card to-background"
    >
      <div className="container max-w-6xl mx-auto">
        {/* === Section Title === */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A selection of my latest development work
          </p>
        </div>

        {/* === Project Grid === */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* === Project Card === */}
              <div className="overflow-hidden rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-glow-primary hover:border-primary/50">
                {/* === Project Image === */}
                <div className="relative aspect-video overflow-hidden">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>

                  {/* === Hover Overlay === */}
                  <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center space-y-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="neon"
                        size="sm"
                        className="shadow-glow-primary hover:scale-105 transition-transform"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline-neon"
                        size="sm"
                        className="shadow-glow-accent hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>

                {/* === Project Info === */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
