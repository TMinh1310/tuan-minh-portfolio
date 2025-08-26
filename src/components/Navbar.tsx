import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";

interface NavbarProps {
  onChatOpen: () => void;
}

export function Navbar({ onChatOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-display font-bold text-xl cursor-pointer gradient-text"
            onClick={() => scrollToSection("hero")}
          >
            Pham Tuan Minh
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <Button
              onClick={onChatOpen}
              size="sm"
              variant="outline"
              className="hidden sm:flex items-center gap-2 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-accent/10"
            >
              <MessageCircle className="h-4 w-4" />
              AI Chat
            </Button>
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-card/50 backdrop-blur-sm border-border/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border border-border/50 rounded-lg mt-2 p-4 animate-slide-up">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onChatOpen();
                  setIsMobileMenuOpen(false);
                }}
                size="sm"
                variant="outline"
                className="flex items-center gap-2 justify-center mt-2"
              >
                <MessageCircle className="h-4 w-4" />
                AI Chat
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}