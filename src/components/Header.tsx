import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/files/73daf858-c2c3-4d64-90d3-526ee0510126.png" 
            alt="Озон Дезцентр" 
            className="h-16 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">Услуги</a>
          <a href="#benefits" className="text-foreground/70 hover:text-primary transition-colors">Преимущества</a>
          <a href="#pricing" className="text-foreground/70 hover:text-primary transition-colors">Цены</a>
          <a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">FAQ</a>
          <a href="#reviews" className="text-foreground/70 hover:text-primary transition-colors">Отзывы</a>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать
          </Button>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
