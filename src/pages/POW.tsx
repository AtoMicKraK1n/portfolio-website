import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

type POWType = "web2" | "web3";

interface ProofOfWork {
  id: string;
  company: string;
  role: string;
  type: POWType;
  technologies: string[];
  prUrl?: string;
  liveUrl?: string;
  image: string;
  status: "Ongoing" | "Completed";
}

const pows: ProofOfWork[] = [
  {
    id: "1",
    company: "Ralli",
    role: "Smart Contract Engineer",
    type: "web3",
    technologies: ["Solana", "Anchor", "Rust"],
    prUrl: "https://github.com/RalliSports/mono/pull/21",
    image: "/rallilive.jpg",
    status: "Ongoing",
  },
  {
    id: "2",
    company: "Ralli",
    role: "Smart Contract Engineer",
    type: "web3",
    technologies: ["Solana", "Anchor", "Rust"],
    prUrl: "https://github.com/RalliSports/mono/pull/22",
    image: "/rallilive.jpg",
    status: "Ongoing",
  },
  {
    id: "3",
    company: "Ralli",
    role: "Smart Contract Engineer",
    type: "web3",
    technologies: ["Solana", "Anchor", "Rust"],
    prUrl: "https://github.com/RalliSports/mono/pull/31",
    image: "/rallilive.jpg",
    status: "Ongoing",
  },
  {
    id: "4",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/24",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "5",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/25",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "6",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/103",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "7",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/107",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "8",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/109",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "9",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/111",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "10",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/166",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "11",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/189",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "12",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/192",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "13",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/197",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "14",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/200",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "15",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/216",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "16",
    company: "Menagerie",
    role: "Full Stack Developer",
    type: "web2",
    technologies: ["Prisma", "React", "TypeScript", "Nextjs", "tRPC"],
    prUrl: "https://github.com/TheMenageri3/mono/pull/227",
    liveUrl: "https://www.themenageri3.com/",
    image: "/menagerielive.jpg",
    status: "Completed",
  },
  {
    id: "17",
    company: "JinAI",
    role: "Full blown Gaming Quiz Mania",
    type: "web3",
    technologies: [
      "Solana Client-Side",
      "Anchor",
      "Rust",
      "Nextjs",
      "TypeScript",
      "Prisma",
      "Bankrun",
    ],
    prUrl: "",
    liveUrl: "https://jin-ai-sigma.vercel.app/",
    image: "/jinailive.jpg",
    status: "Ongoing",
  },
  {
    id: "18",
    company: "Turbin3",
    role: "Solana Development",
    type: "web3",
    technologies: [
      "Solana",
      "Anchor",
      "Rust",
      "TypeScript",
      "Bankrun",
      "Chai & Mocha",
    ],
    prUrl: "",
    liveUrl: "https://github.com/solana-turbin3/Q1_25_Builder_AtoMicKraK1n",
    image: "/turbin3live.jpg",
    status: "Completed",
  },
];

const POW = () => {
  const [activeType, setActiveType] = useState<POWType>("web3");
  const [expanded, setExpanded] = useState<string | null>(null);

  // Group PRs by company + role
  const groupedProjects = Object.values(
    pows
      .filter((pow) => pow.type === activeType)
      .reduce((acc, curr) => {
        const key = `${curr.company}-${curr.role}`;
        if (!acc[key]) {
          acc[key] = {
            ...curr,
            prs: curr.prUrl ? [curr.prUrl] : [],
          };
        } else {
          if (curr.prUrl) acc[key].prs.push(curr.prUrl);
        }
        return acc;
      }, {} as Record<string, ProofOfWork & { prs: string[] }>)
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Back to Home */}
        <div className="mb-8">
          <Link to="/">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-accent transition-western"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
            Proof of Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pull requests I've contributed to — showcasing my roles, tech stack,
            and project details.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-full p-2 western-shadow">
            <div className="flex space-x-2">
              {[
                { type: "web3" as POWType, label: "Web3" },
                { type: "web2" as POWType, label: "Web2" },
              ].map(({ type, label }) => (
                <Button
                  key={type}
                  onClick={() => setActiveType(type)}
                  variant={activeType === type ? "default" : "ghost"}
                  className={`
                    btn-western px-6 py-2 rounded-full font-medium transition-western
                    ${
                      activeType === type
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
          {groupedProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden western-shadow hover:glow-effect transition-western"
            >
              {/* Top Image */}
              <div className="h-48 bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={project.company}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Company + Status */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-heading font-semibold text-primary">
                    {project.company}
                  </h3>
                  <Badge
                    className={`px-3 py-1 ${
                      project.status === "Ongoing"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Role */}
                <p className="text-foreground/80">{project.role}</p>

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

                {/* Live URL */}
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="btn-western bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <Globe size={16} className="mr-2" />
                    Live Site
                  </Button>
                )}

                {/* PR Dropdown */}
                {project.prs.length > 0 && (
                  <div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-between"
                      onClick={() =>
                        setExpanded(expanded === project.id ? null : project.id)
                      }
                    >
                      {expanded === project.id
                        ? "Hide Pull Requests"
                        : "View Pull Requests"}
                      {expanded === project.id ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </Button>

                    {expanded === project.id && (
                      <div className="mt-3 space-y-2">
                        {project.prs.map((pr, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            className="w-full justify-start text-left hover:text-accent"
                            onClick={() => window.open(pr, "_blank")}
                          >
                            <ExternalLink size={14} className="mr-2" />
                            PR #{index + 1}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default POW;
