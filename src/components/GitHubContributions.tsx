import { Card } from "@/components/ui/card";

// Mock data for GitHub contributions
const generateContributions = () => {
  const contributions = [];
  const today = new Date();
  const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
  
  for (let i = 0; i < 365; i++) {
    const date = new Date(oneYearAgo);
    date.setDate(date.getDate() + i);
    
    // Generate random contribution count (0-4 for different intensities)
    const count = Math.floor(Math.random() * 5);
    contributions.push({
      date: date.toISOString().split('T')[0],
      count,
    });
  }
  
  return contributions;
};

const GitHubContributions = () => {
  const contributions = generateContributions();
  
  const getIntensityClass = (count: number) => {
    if (count === 0) return "bg-muted/50";
    if (count === 1) return "bg-primary/20";
    if (count === 2) return "bg-primary/40";
    if (count === 3) return "bg-primary/60";
    return "bg-primary";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 western-shadow">
          {/* Header */}
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
              Frontier Activity
            </h2>
            <p className="text-lg text-muted-foreground">
              A year's worth of code contributions across the digital wilderness
            </p>
          </div>

          {/* Contribution Graph */}
          <div className="space-y-4">
            {/* Month labels */}
            <div className="grid grid-cols-12 gap-1 text-xs text-muted-foreground mb-2">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, index) => (
                <div key={month} className={index % 2 === 0 ? "" : "opacity-0"}>
                  {month}
                </div>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="grid grid-cols-53 gap-1 max-w-4xl">
              {contributions.map((day, index) => (
                <div
                  key={index}
                  className={`
                    w-3 h-3 rounded-sm transition-western hover:scale-125 hover:glow-effect cursor-pointer
                    ${getIntensityClass(day.count)}
                  `}
                  title={`${day.count} contributions on ${day.date}`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Less</span>
                <div className="flex space-x-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getIntensityClass(level)}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-primary">287</span> contributions in the last year
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GitHubContributions;