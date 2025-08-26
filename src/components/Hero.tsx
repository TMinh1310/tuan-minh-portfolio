/** @format */

import { Button } from "@/components/ui/button";
import {
  Download,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  FileUser,
  SendHorizontal,
} from "lucide-react";

interface HeroProps {
  onChatOpen: () => void;
}

export function Hero({ onChatOpen }: HeroProps) {
  const handleEmailClick = () => {
    window.location.href =
      "https://mail.google.com/mail/?view=cm&fs=1&to=minh.pt131003@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/pham-tuan-minh-304928322", "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden circuit-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="gradient-text">Pham Tuan Minh</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-medium mb-6 text-muted-foreground">
            Electronics & Communication Engineer
          </h2>

          <p className="text-lg sm:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specializing in analog IC design and power management circuits.
            Passionate about innovative semiconductor solutions and cutting-edge
            technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 animate-pulse-glow"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }>
              <SendHorizontal className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 backdrop-blur-sm">
              <a
                href="public/your-cv.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <FileUser className="mr-2 h-5 w-5" />
                View CV
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-accent/50 hover:bg-accent/10 backdrop-blur-sm"
              onClick={onChatOpen}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with AI
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="icon"
              className="border-border/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={handleLinkedInClick}>
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-border/50 hover:bg-accent/10 hover:border-accent transition-all duration-300"
              onClick={handleEmailClick}>
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-8 bg-gradient-primary rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
