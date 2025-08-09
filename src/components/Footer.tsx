import { Github, Twitter, Mail, Heart } from "lucide-react";
import cowboyHatIcon from "@/assets/cowboy-hat-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/AtoMicKraK1n", label: "GitHub" },
    {
      icon: Twitter,
      href: "https://x.com/Prakhar158",
      label: "X(formerly twitter)",
    },
    { icon: Mail, href: "mailto:prakharsharma2506@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-card/80 backdrop-blur-md border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Top Footer Row */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand Section (Left) */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center space-x-3">
              <img
                src={cowboyHatIcon}
                alt="Western Portfolio"
                className="w-8 h-8"
              />
              <span className="text-xl font-heading font-bold text-primary">
                Prakhar Sharma
              </span>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Just a man with dreams of building the next big thing in the
              Solana ecosystem. This portfolio is a testament to my journey and
              growth as a developer.
            </p>

            {/* Social Links */}
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
          </div>

          {/* Get In Touch (Right) */}
          <div className="space-y-4 max-w-xs text-right">
            <h3 className="font-heading font-semibold text-primary text-lg">
              Get In Touch
            </h3>
            <div className="space-y-3 text-foreground/80">
              <p>
                <a
                  href="mailto:prakharsharma2506@gmail.com"
                  className="text-accent hover:text-accent/80 link-golden transition-western"
                >
                  prakharsharma2506@gmail.com
                </a>
              </p>
              <p className="text-sm">
                Open to collaborations and freelance work.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center space-x-2">
              <span>© {currentYear} Prakhar Sharma. Crafted with</span>
              <Heart size={14} className="text-primary" />
              <span>and plenty of Redbull</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
