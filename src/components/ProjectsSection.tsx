import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type ProjectType = "web2" | "web3";

interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Saloon Dashboard",
    description: "A modern analytics dashboard built with React and TypeScript, featuring real-time data visualization and responsive design.",
    type: "web2",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "2",
    title: "Frontier E-commerce",
    description: "Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.",
    type: "web2",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "3",
    title: "Wild West NFT Marketplace",
    description: "Decentralized marketplace for trading NFTs with smart contract integration and wallet connectivity.",
    type: "web3",
    technologies: ["React", "Ethereum", "Solidity", "Web3.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "4",
    title: "DeFi Staking Protocol",
    description: "Smart contract protocol for yield farming and liquidity provision with automated reward distribution.",
    type: "web3",
    technologies: ["Solidity", "Hardhat", "OpenZeppelin", "Chainlink"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const ProjectsSection = () => {
  const [activeType, setActiveType] = useState<ProjectType>("web2");

  const filteredProjects = projects.filter(project => project.type === activeType);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
            Trail of Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of digital frontier adventures spanning traditional web development and the blockchain wilderness.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-full p-2 western-shadow">
            <div className="flex space-x-2">
              {[
                { type: "web2" as ProjectType, label: "Web2 Saloon" },
                { type: "web3" as ProjectType, label: "Web3 Frontier" },
              ].map(({ type, label }) => (
                <Button
                  key={type}
                  onClick={() => setActiveType(type)}
                  variant={activeType === type ? "default" : "ghost"}
                  className={`
                    btn-western px-6 py-2 rounded-full font-medium transition-western
                    ${activeType === type 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:text-accent hover:bg-accent/10"
                    }
                  `}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="p-6 western-shadow hover:glow-effect transition-western group">
              <div className="space-y-4">
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-sunset rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-heading text-primary-foreground opacity-80">
                    {project.title.slice(0, 2)}
                  </span>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-heading font-semibold text-primary group-hover:text-accent transition-western">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent transition-western"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-2">
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="btn-western border-primary text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.githubUrl}>
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="btn-western bg-primary hover:bg-primary/90 text-primary-foreground"
                        asChild
                      >
                        <a href={project.liveUrl}>
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;