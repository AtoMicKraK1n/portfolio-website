import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "Taming the Wild West of Web3 Development",
    excerpt: "A frontier guide to building decentralized applications with modern tools and best practices. Learn how to navigate the challenges of blockchain development.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web3",
    tags: ["Blockchain", "DApps", "Solidity"],
  },
  {
    id: 2,
    title: "Building Scalable React Applications Like a Gunslinger",
    excerpt: "Fast-draw techniques for React development. Master the art of component architecture, state management, and performance optimization.",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "Frontend",
    tags: ["React", "TypeScript", "Performance"],
  },
  {
    id: 3,
    title: "The Saloon of Modern CSS: Advanced Layout Techniques",
    excerpt: "Step into the modern CSS saloon where Grid, Flexbox, and Container Queries serve up powerful layout solutions for any frontier challenge.",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "CSS",
    tags: ["CSS Grid", "Flexbox", "Responsive"],
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
            Tales from the Code Trail
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stories, insights, and lessons learned from the digital frontier
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden western-shadow hover:glow-effect transition-western">
              {/* Featured Image Placeholder */}
              <div className="h-48 bg-gradient-sunset relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-heading text-primary-foreground opacity-80">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Category and Meta */}
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Title and Excerpt */}
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-semibold text-primary group-hover:text-accent transition-western line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-foreground/80 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-muted-foreground/30 text-muted-foreground hover:border-accent hover:text-accent transition-western"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Read More Button */}
                <div className="pt-2">
                  <Button 
                    variant="ghost" 
                    className="btn-western text-primary hover:text-accent p-0 h-auto font-medium group/btn"
                    asChild
                  >
                    <a href="#" className="flex items-center space-x-2">
                      <span>Read Full Story</span>
                      <ArrowRight size={16} className="transition-western group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-western border-primary text-primary hover:bg-primary/10 font-medium"
          >
            View All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;