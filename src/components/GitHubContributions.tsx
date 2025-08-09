import GitHubCalendar from 'react-github-calendar';
import { useTheme } from 'next-themes';

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
    light: ['hsl(40, 20%, 85%)', 'hsl(8, 65%, 85%)', 'hsl(8, 65%, 65%)', 'hsl(8, 65%, 45%)', 'hsl(8, 65%, 35%)'],
    dark: ['hsl(30, 15%, 18%)', 'hsl(8, 75%, 75%)', 'hsl(8, 75%, 65%)', 'hsl(8, 75%, 55%)', 'hsl(8, 75%, 45%)'],
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            Frontier Activity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tracking my journey through the digital wilderness. Every commit tells a story of progress and discovery.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl overflow-auto">
            <div className="bg-card p-6 rounded-lg western-shadow">
              <GitHubCalendar
                username="AtoMicKrak1n"
                transformData={selectLastHalfYear}
                theme={calendarTheme}
                colorScheme={theme === 'dark' ? 'dark' : 'light'}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                showWeekdayLabels
                style={{
                  color: 'hsl(var(--foreground))',
                }}
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Last 6 months of contributions on GitHub
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;