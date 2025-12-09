import { Zap, IndianRupee, Award, Shield, Calendar, Siren } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Instant Gig Matching",
    description: "Request help, get nearby workers instantly. No more waiting for hours.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Services",
    description: "No premium pricing — pay only for what you need. Fair rates for everyone.",
  },
  {
    icon: Award,
    title: "AI Skill Badges",
    description: "Workers get badges (Beginner to Expert) based on AI-powered assessments.",
  },
  {
    icon: Shield,
    title: "Verified Workers",
    description: "Aadhaar, DigiLocker and face verification for complete trust and safety.",
  },
  {
    icon: Calendar,
    title: "Schedule or Book Now",
    description: "Choose urgent or scheduled services based on your convenience.",
  },
  {
    icon: Siren,
    title: "Emergency Help",
    description: "From night breakdowns to sudden household repairs — help when you need it most.",
  },
];

const Solution = () => {
  return (
    <section id="solution" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            The Solution
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The Giglo Solution
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            A hyperlocal on-demand marketplace connecting people needing help with workers ready to earn.
          </p>
        </div>

        {/* Solution Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="card-elevated group bg-background"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
