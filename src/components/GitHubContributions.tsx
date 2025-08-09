import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

const GitHubContributions = () => {
  const { theme } = useTheme();

  const selectLastHalfYear = (contributions: any) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity: any) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const calendarTheme = {
    light: [
      "hsl(40, 20%, 85%)",
      "hsl(8, 65%, 85%)",
      "hsl(8, 65%, 65%)",
      "hsl(8, 65%, 45%)",
      "hsl(8, 65%, 35%)",
    ],
    dark: [
      "hsl(30, 15%, 18%)",
      "hsl(8, 75%, 75%)",
      "hsl(8, 75%, 65%)",
      "hsl(8, 75%, 55%)",
      "hsl(8, 75%, 45%)",
    ],
  };

  const experiences = [
    {
      company: "Ralli",
      logo: "/rallilogo.jpg",
      role: "Smart Contract Engineer",
      period: "July 2025 – Present",
    },
    {
      company: "Menagerie",
      logo: "/menagerielogo.jpg",
      role: "Full Stack Developer",
      period: "April 2025 – Jun 2025",
    },
    {
      company: "Superteam",
      logo: "/superteamlogo.jpg",
      role: "Member",
      period: "March 2025 – Present",
    },
    {
      company: "Bhopal DAO",
      logo: "/bhopaldaologo.jpg",
      role: "Social Media Relations",
      period: "October 2024 – Dec 2024",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            Frontier Activity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every commit tells a story of progress and discovery and ofc how{" "}
            <span className="text-primary font-medium"> dumb</span> i am.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - GitHub Graph */}
          <div className="bg-card p-6 rounded-lg western-shadow overflow-auto">
            <GitHubCalendar
              username="AtoMicKrak1n"
              transformData={selectLastHalfYear}
              theme={calendarTheme}
              colorScheme={theme === "dark" ? "dark" : "light"}
              fontSize={12}
              blockSize={12}
              blockMargin={4}
              showWeekdayLabels
              style={{
                color: "hsl(var(--foreground))",
              }}
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Last 6 months of contributions on GitHub
              </p>
            </div>
          </div>

          {/* Right Column - Experience List */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-card p-4 rounded-lg border border-border hover:bg-accent/10 transition"
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 object-contain rounded"
                />
                <div>
                  <h3 className="font-heading font-semibold text-primary">
                    {exp.company}
                  </h3>
                  <p className="text-foreground/80 text-sm">{exp.role}</p>
                  <p className="text-muted-foreground text-xs">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
