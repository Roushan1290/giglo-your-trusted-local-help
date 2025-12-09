import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold">Giglo</span>
            </div>
            <p className="text-background/70 text-sm max-w-md">
              Empowering India's informal workforce with technology, trust and opportunity.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-background/70">
              <Mail className="w-4 h-4" />
              <span>hello@giglo.in</span>
            </div>
            <div className="flex items-center gap-2 text-background/70">
              <MapPin className="w-4 h-4" />
              <span>India</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-background/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© 2024 Giglo. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
