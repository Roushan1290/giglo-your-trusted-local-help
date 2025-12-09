import { Home, Briefcase, Check } from "lucide-react";

const householdBenefits = [
  "Affordable services at fair prices",
  "Fast response within minutes",
  "Verified and trusted workers",
  "Emergency help available anytime",
];

const workerBenefits = [
  "More income opportunities daily",
  "Keep full flexibility and freedom",
  "Build your digital identity",
  "Grow skills and reputation over time",
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Dual Impact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Built for India's Workers, Designed for India's Homes
          </h2>
        </div>

        {/* Two Column Benefits */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* For Households */}
          <div className="card-elevated bg-background">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Home className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">For Households</h3>
                <p className="text-muted-foreground">Get help when you need it</p>
              </div>
            </div>

            <ul className="space-y-4">
              {householdBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For Workers */}
          <div className="card-elevated bg-background">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">For Workers</h3>
                <p className="text-muted-foreground">Earn with dignity and freedom</p>
              </div>
            </div>

            <ul className="space-y-4">
              {workerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
