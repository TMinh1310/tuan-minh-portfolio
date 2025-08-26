import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:minh.pt131003@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0332219748";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/pham-tuan-minh-304928322", "_blank");
  };

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold gradient-text">Pham Tuan Minh</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Electronics & Communication Engineering student specializing in analog IC design 
              and power management circuits. Passionate about innovative semiconductor solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold text-foreground">Get In Touch</h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                onClick={handleEmailClick}
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:bg-secondary/10 hover:border-secondary transition-all duration-300"
                onClick={handlePhoneClick}
              >
                <Phone className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:bg-accent/10 hover:border-accent transition-all duration-300"
                onClick={handleLinkedInClick}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Hoang Mai district, Hanoi, Vietnam
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Pham Tuan Minh. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> using modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}