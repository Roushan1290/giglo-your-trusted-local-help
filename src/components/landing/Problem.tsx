import { Clock, UserX, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "High Pricing & Long Wait Times",
    description: "Simple tasks require expensive platforms and slow service. Getting a plumber can take 24-48 hours.",
  },
  {
    icon: UserX,
    title: "Workers Without Identity",
    description: "No skill verification, no ratings, no digital presence. Skilled workers remain invisible and undervalued.",
  },
  {
    icon: AlertTriangle,
    title: "Unorganized Alternatives",
    description: "WhatsApp groups, contractors and agencies exploit both workers and households with no accountability.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            India's Invisible Workforce Crisis
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            450 million informal workers remain disconnected from digital opportunities. Households wait 24–48 hours for simple repairs while skilled workers sit idle just a street away. No discovery, no trust, no transparency — a broken system failing both sides.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="card-elevated group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual separator */}
        <div className="flex items-center justify-center mt-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-border" />
            <div className="w-3 h-3 rounded-full bg-primary/20" />
            <div className="w-16 h-px bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
