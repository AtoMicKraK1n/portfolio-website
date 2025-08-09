import { Github, Linkedin, Mail, Heart } from "lucide-react";
import cowboyHatIcon from "@/assets/cowboy-hat-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Photos", href: "#photos" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card/80 backdrop-blur-md border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={cowboyHatIcon} 
                alt="Western Portfolio" 
                className="w-8 h-8"
              />
              <span className="text-xl font-heading font-bold text-primary">
                Western.dev
              </span>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Crafting digital experiences with frontier spirit and modern expertise. 
              Always ready for the next adventure in code.
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-primary text-lg">
              Quick Draw Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-accent link-golden transition-western"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-primary text-lg">
              Get In Touch
            </h3>
            <div className="space-y-3 text-foreground/80">
              <p>Ready to embark on a new digital adventure?</p>
              <p>
                <a 
                  href="mailto:howdy@western.dev" 
                  className="text-accent hover:text-accent/80 link-golden transition-western"
                >
                  howdy@western.dev
                </a>
              </p>
              <p className="text-sm">
                Open to collaborations, freelance work, and discussing the latest in web technology over virtual coffee.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center space-x-2">
              <span>© {currentYear} Western.dev. Crafted with</span>
              <Heart size={14} className="text-primary" />
              <span>and plenty of coffee</span>
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent link-golden transition-western"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent link-golden transition-western"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;