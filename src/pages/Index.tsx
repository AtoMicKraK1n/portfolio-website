import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, FileText, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import GitHubContributions from "@/components/GitHubContributions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
                Western.dev
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Portfolio, made simple!
              </p>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  A clean, fast, and lightweight portfolio template built with React, TypeScript, and Tailwind CSS for optimal performance, styled with a unique Red Dead Redemption 2 aesthetic.
                </p>
                <p>
                  Western.dev includes all the essentials for a stunning portfolio: responsive design, dark mode support, smooth animations, and a distinctive frontier theme that sets you apart from the digital crowd.
                </p>
                <p>
                  This portfolio is <span className="text-primary font-medium">open-source</span> and fully customizable, making it easy to add more features and adapt it to your personal brand.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button className="btn-western bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ExternalLink size={16} className="mr-2" />
                  View Projects
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" className="btn-western border-primary text-primary hover:bg-primary/10">
                  <FileText size={16} className="mr-2" />
                  Read Blog
                </Button>
              </Link>
              <Link to="/photos">
                <Button variant="outline" className="btn-western border-primary text-primary hover:bg-primary/10">
                  <Camera size={16} className="mr-2" />
                  View Photos
                </Button>
              </Link>
            </div>

            {/* GitHub Link */}
            <p className="text-sm text-muted-foreground">
              Built and maintained by{" "}
              <a 
                href="https://github.com" 
                className="text-primary hover:text-accent link-golden font-medium transition-western"
              >
                Western.dev
              </a>
              .
            </p>
          </div>

          {/* Right Content - Profile Avatar */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-sunset western-shadow flex items-center justify-center">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-card flex items-center justify-center">
                  <span className="text-4xl lg:text-5xl font-heading text-primary">
                    W
                  </span>
                </div>
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </main>

      <GitHubContributions />
      <Footer />
    </div>
  );
};

export default Index;
