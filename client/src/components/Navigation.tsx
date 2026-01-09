import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToId } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Historia", id: "gallery" },
    { label: "Detalles", id: "details" },
    { label: "Agenda", id: "agenda" },
    { label: "Alojamiento", id: "accommodation" },
    { label: "Regalo", id: "gift" },
    { label: "FAQ", id: "faq" },
  ];

  const handleNavClick = (id: string) => {
    scrollToId(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => scrollToId('hero')}
          >
            <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <span className={cn(
              "font-serif text-2xl font-bold tracking-tight transition-colors",
              isScrolled ? "text-foreground" : "text-foreground md:text-white md:shadow-sm" // White on hero only on desktop
            )}>
              K<span className="text-primary">&</span>A
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest",
                  !isScrolled && item.id !== 'hero' ? "text-white/90 hover:text-white" : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant={isScrolled ? "default" : "secondary"}
              size="sm"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdrtt5IquE3lLWvkbFCIOSpX6H0RXrI__3d5SR8TU1rRv_gHA/viewform?usp=publish-editor", "_blank")}
              className="font-serif italic"
            >
              Confirmar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(!isScrolled && "text-white hover:text-white/80 hover:bg-white/10")}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2 px-4 hover:bg-muted rounded-lg text-lg font-serif"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="w-full mt-4"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdrtt5IquE3lLWvkbFCIOSpX6H0RXrI__3d5SR8TU1rRv_gHA/viewform?usp=publish-editor", "_blank")}
            >
              Confirmar Asistencia
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
