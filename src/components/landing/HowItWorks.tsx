import { FileText, Users, UserCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: FileText,
    title: "Post a Task",
    description: "Describe the help you need — cleaning, repair, electrical work, or any daily task.",
  },
  {
    step: 2,
    icon: Users,
    title: "Get Matched",
    description: "Giglo instantly alerts nearby verified workers who can help.",
  },
  {
    step: 3,
    icon: UserCheck,
    title: "Choose Your Helper",
    description: "Compare skill badges, ratings and prices. Pick the best match for you.",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Get Work Done",
    description: "Fast, affordable and reliable. Rate your experience and help build trust.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            How Giglo Works
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Four simple steps to get the help you need
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step number with icon */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
