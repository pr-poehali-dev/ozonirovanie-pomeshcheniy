import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/73daf858-c2c3-4d64-90d3-526ee0510126.png" 
              alt="Озон Дезцентр" 
              className="h-14 w-auto"
            />
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">О нас</a>
            <a href="#pricing" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Цены</a>
            <a href="#industries" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Отрасли</a>
            <a href="#advantages" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Преимущества</a>
            <a href="#faq" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">FAQ</a>
            <Button className="bg-primary hover:bg-primary/90" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 911 947-02-97
            </Button>
          </nav>

          <Button 
            variant="outline" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-4 mt-4 pb-4 border-t pt-4">
            <a href="#services" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>О нас</a>
            <a href="#pricing" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Цены</a>
            <a href="#industries" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Отрасли</a>
            <a href="#advantages" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Преимущества</a>
            <a href="#faq" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <Button className="bg-primary hover:bg-primary/90 w-full" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 911 947-02-97
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
