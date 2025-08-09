import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="p-8 sm:p-12 western-shadow bg-card/90 backdrop-blur-sm">
          <div className="space-y-6">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-sunset p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-4xl font-heading text-primary">RD</span>
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-heading font-bold text-primary leading-tight">
                Red Dead Developer
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-light">
                Frontend Gunslinger & Blockchain Pioneer
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with the precision of a sharpshooter and the vision of a frontier explorer. 
              Specialized in modern web technologies and decentralized applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="btn-western bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-western border-primary text-primary hover:bg-primary/10 font-medium"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-6">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-western glow-effect hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;