import { Card } from "@/components/ui/card";

// Mock photo data
const photos = [
  {
    id: 1,
    title: "Desert Sunset Code Session",
    description: "Late night coding under the desert stars",
    category: "coding",
  },
  {
    id: 2,
    title: "Mountain Peak Deployment",
    description: "Deploying apps from remote locations",
    category: "adventure",
  },
  {
    id: 3,
    title: "Frontier Conference",
    description: "Speaking at tech conferences",
    category: "events",
  },
  {
    id: 4,
    title: "Blockchain Meetup",
    description: "Web3 community gathering",
    category: "community",
  },
  {
    id: 5,
    title: "Campfire Code Review",
    description: "Team collaboration in nature",
    category: "team",
  },
  {
    id: 6,
    title: "Western Tech Setup",
    description: "My rustic development environment",
    category: "workspace",
  },
];

const PhotosSection = () => {
  return (
    <section id="photos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary">
            Captured Moments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Snapshots from the journey through the digital frontier and beyond
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="group overflow-hidden western-shadow hover:glow-effect transition-western">
              {/* Photo placeholder with gradient */}
              <div className="aspect-square bg-gradient-sunset relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-heading text-primary-foreground opacity-80">
                    {photo.id}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-western flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-4">
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more adventures and behind-the-scenes moments?
          </p>
          <a 
            href="#" 
            className="text-primary hover:text-accent link-golden font-medium text-lg transition-western"
          >
            Follow me on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;