import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-bg pt-20 md:pt-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16 md:py-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Zap className="w-4 h-4" />
              <span>Launching Soon in India</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up-delay-1 text-balance">
              Empowering India's Informal Workforce with{" "}
              <span className="text-primary">Every Tap</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up-delay-2 text-balance">
              Find affordable, trusted help for daily tasks while giving local workers real income, visibility and dignity.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up-delay-3">
              <Button variant="hero" size="lg">
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="lg">
                <Users className="w-5 h-5" />
                Join as a Worker
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start animate-fade-up-delay-3">
              <div>
                <p className="text-3xl font-bold text-foreground">450M+</p>
                <p className="text-sm text-muted-foreground">Informal Workers</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-foreground">95%</p>
                <p className="text-sm text-muted-foreground">Would Join Giglo</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-3xl font-bold text-foreground">24-48h</p>
                <p className="text-sm text-muted-foreground">Current Wait Time</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 relative animate-float">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main illustration card */}
              <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Connecting Lives</p>
                    <p className="text-sm text-muted-foreground">Workers & Households</p>
                  </div>
                </div>

                {/* Connection visualization */}
                <div className="flex items-center justify-between gap-4">
                  {/* Households */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-lg">🏠</div>
                      <div className="w-12 h-12 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-lg">👨‍👩‍👧</div>
                      <div className="w-12 h-12 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-lg">🏢</div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Households</p>
                  </div>

                  {/* Connection line */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Workers */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-lg">🔧</div>
                      <div className="w-12 h-12 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-lg">🧹</div>
                      <div className="w-12 h-12 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-lg">⚡</div>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Workers</p>
                  </div>
                </div>

                {/* Live indicator */}
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-muted-foreground">Live matching</span>
                  </div>
                  <span className="text-sm font-medium text-primary">Instant connections</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl px-4 py-3 shadow-lg border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <span className="text-sm">⭐</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">4.9 Rating</p>
                    <p className="text-xs text-muted-foreground">Verified workers</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl px-4 py-3 shadow-lg border border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Aadhaar Verified</p>
                    <p className="text-xs text-muted-foreground">Trust & Safety</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
