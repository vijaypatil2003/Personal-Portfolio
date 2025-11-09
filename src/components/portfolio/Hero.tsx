import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-background">
      <div className="container max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Image with Glow */}
        <div className="relative inline-block mb-8 mt-28 animate-float">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-glow-intense animate-glow-pulse">
            <img 
              src="https://res.cloudinary.com/dc5154n7n/image/upload/v1761901348/z2f3kocjidpr73djliag.png" //{profileImage} 
              alt="Viiay Patil Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Radium glow ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse scale-110"></div>
        </div>

        {/* Name with Radium Effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">
            Viiay Patil
          </span>
        </h1>

        {/* Tagline */}
        <div className="space-y-4 mb-12 animate-slide-up [animation-delay:200ms]">
          <p className="text-xl md:text-2xl text-muted-foreground">
            MERN Stack Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building dynamic, responsive, and user-friendly web applications using MongoDB, Express.js, React.js, and Node.js.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up [animation-delay:400ms]">
          <Button variant="neon" size="lg" className="group"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Get In Touch
          </Button>
          <a  href="/Vijay_Patil _MERN_Stack_Developer.pdf" download>
            <Button variant="outline-neon" size="lg" className="group">
            <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Download CV
            </Button>
          </a>
          
        </div>

        {/* Social Links */}
        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-slide-up [animation-delay:600ms]">
          {/* GitHub */}
          <a
            href="https://github.com/vijaypatil2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost-neon" size="icon" className="group">
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vijaypatil0106/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost-neon" size="icon" className="group">
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </a>

          {/* Email */}
          <a href="mailto:vijayptl0106@gmail.com">
            <Button variant="ghost-neon" size="icon" className="group">
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};