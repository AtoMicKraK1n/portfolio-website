import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  FileText,
  Camera,
  Twitter,
  Mail,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import GitHubContributions from "@/components/GitHubContributions";
import Footer from "@/components/Footer";
import MiniPlayer from "@/components/MiniPlayer";

const socialLinks = [
  { icon: Github, href: "https://github.com/AtoMicKraK1n", label: "GitHub" },
  {
    icon: Twitter,
    href: "https://x.com/Prakhar158",
    label: "X(formerly twitter)",
  },
  { icon: Mail, href: "mailto:prakharsharma2506@gmail.com", label: "Email" },
];

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
                Prakhar Sharma
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Solana programs is where I live and breathe!
              </p>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I'm Prakhar from{" "}
                  <span className="text-primary font-medium"> India</span> , a
                  passionate developer mostly spending time around Solana
                  Programs. This portfolio is more than just a showcase; it's a
                  testament to my journey through game dev arc to a smart
                  contract engineer.
                </p>
                <p>
                  As my great teacher once said, “1 + 2 = 3.” Likewise, to build
                  a great dApp, you first need a solid understanding of Web2,
                  because strong Web2 skills make you a better Web3 developer.
                  That’s why I also work on Web2 projects.
                </p>
                <p>
                  I am also a{" "}
                  <span className="text-primary font-medium">
                    1x grant recipent
                  </span>{" "}
                  from Solana Foundation
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/proofofwork">
                <Button className="btn-western bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ExternalLink size={16} className="mr-2" />
                  View Proof of Work
                </Button>
              </Link>

              {/* MiniPlayer beside button */}
              <MiniPlayer
                cover="/moonlightcover.jpg"
                title="Moonlight"
                artist="Daniel Lanois"
                src="/moonlight.mp3"
              />
            </div>

            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-full bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-western"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* GitHub Link */}
            <p className="text-sm text-muted-foreground">
              Built and maintained by{" "}
              <a
                href="https://x.com/Prakhar158"
                className="text-primary hover:text-accent link-golden font-medium transition-western"
              >
                Prakhar Sharma
              </a>
              .
            </p>
          </div>

          {/* Right Content - Profile Avatar */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-sunset western-shadow flex items-center justify-center">
                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <img
                    src="/portfoliopfp.jpeg" // <-- Put your image path from public folder here
                    alt="Prakhar Sharma"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full opacity-80 animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
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
