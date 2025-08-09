import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building in the Web3 Frontier",
    excerpt: "My journey into blockchain development and the lessons learned while building decentralized applications in an ever-evolving landscape.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web3",
    slug: "building-web3-frontier",
  },
  {
    id: "2",
    title: "The Art of Clean Code in React",
    excerpt: "Best practices and patterns I've discovered for writing maintainable, scalable React applications that stand the test of time.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "React",
    slug: "clean-code-react",
  },
  {
    id: "3",
    title: "From Saloon to Silicon Valley",
    excerpt: "How embracing a western mindset helped me approach complex technical challenges with patience, grit, and strategic thinking.",
    date: "2024-01-01",
    readTime: "5 min read",
    category: "Career",
    slug: "saloon-to-silicon-valley",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Back to Home */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-accent transition-western">
              <ArrowLeft size={16} className="mr-2" />
              Back to home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
            Tales from the Trail
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stories, insights, and lessons learned from the digital frontier. A collection of thoughts on technology, development, and the wild west of innovation.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="p-6 western-shadow hover:glow-effect transition-western group cursor-pointer">
              <article className="space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-western"
                  >
                    {post.category}
                  </Badge>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Title and Excerpt */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-heading font-semibold text-primary group-hover:text-accent transition-western">
                    {post.title}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More */}
                <div className="pt-2">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-accent hover:bg-accent/10 p-0 h-auto font-medium transition-western link-golden"
                  >
                    Read the full story →
                  </Button>
                </div>
              </article>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="btn-western border-primary text-primary hover:bg-primary/10"
          >
            Load more tales from the trail
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Blog;