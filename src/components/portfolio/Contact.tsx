import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vijayptl0106@email.com",
    href: "mailto:vijayptl0106@email.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7057331995",
    href: "tel:+917057331995",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/vijaypatil2003",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/vijaypatil0106",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:viiaypatilds@gmail.com",
  },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "ff709171-3849-49c4-b702-02f201fef0ee"); // ✅ Your Access Key

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Message sent successfully!");
      e.currentTarget.reset();
    } else {
      alert("❌ Failed to send message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-card to-background"
    >
      <div className="container max-w-6xl mx-auto">
        {/* === Heading === */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Let’s work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* === Left Side === */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in hearing about new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-glow" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card/30 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 group"
                  >
                    <Icon className="h-5 w-5 text-primary group-hover:text-primary-glow group-hover:scale-110 transition-all duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* === Right Side: Form === */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up [animation-delay:200ms]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input name="First Name" required placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input name="Last Name" required placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  name="Email"
                  type="email"
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input name="Subject" required placeholder="Project Discussion" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  name="Message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="neon"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
