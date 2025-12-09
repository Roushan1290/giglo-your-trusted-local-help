import { TrendingUp, Users, Code, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Workers Surveyed",
  },
  {
    icon: TrendingUp,
    value: "90-95%",
    label: "Would Join Giglo",
  },
  {
    icon: Code,
    value: "40%",
    label: "Backend Complete",
  },
  {
    icon: MapPin,
    value: "Active",
    label: "Ground Recruitment",
  },
];

const Traction = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Early Momentum
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Validating the Need
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            We surveyed 500+ informal gig workers across urban clusters in India. The response was overwhelming — they want a platform that gives them steady income and independence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-muted/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Progress note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-medium">Launching early access soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
