import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Photos = () => {
  // Sample photo data - replace with actual photos
  const photos = [
    { id: 1, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop", alt: "Western landscape" },
    { id: 2, url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop", alt: "Desert sunset" },
    { id: 3, url: "https://images.unsplash.com/photo-1574263867128-41cea4c72c36?w=400&h=300&fit=crop", alt: "Mountain trail" },
    { id: 4, url: "https://images.unsplash.com/photo-1595066386143-4783ebc13d80?w=400&h=300&fit=crop", alt: "Wild west town" },
    { id: 5, url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=400&h=300&fit=crop", alt: "Desert highway" },
    { id: 6, url: "https://images.unsplash.com/photo-1504588892839-c7edfdbadeb2?w=400&h=300&fit=crop", alt: "Western landscape" },
  ];

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
            Frontier Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments from the digital frontier and the wild landscapes that inspire my journey through code and creativity.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="aspect-square overflow-hidden rounded-lg western-shadow hover:glow-effect transition-western group cursor-pointer"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-western"
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="btn-western border-primary text-primary hover:bg-primary/10"
          >
            Load more from the frontier
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Photos;