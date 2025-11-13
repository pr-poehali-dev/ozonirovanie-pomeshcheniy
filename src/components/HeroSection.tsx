import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Icon name="Sparkles" size={14} className="mr-1" />
            Единственный официальный дилер OZONbox в регионе
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Озон Дезцентр
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Профессиональное озонирование, чистка вентиляции и удаление грибка без химии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Бесплатная диагностика
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Wind" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Озонирование</h3>
              <p className="text-sm text-muted-foreground">Устранение запахов, бактерий и вирусов</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Fan" size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Чистка вентиляции</h3>
              <p className="text-sm text-muted-foreground">Обслуживание и дезинфекция систем</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-destructive/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldAlert" size={24} className="text-destructive" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Удаление грибка</h3>
              <p className="text-sm text-muted-foreground">Шведский препарат глубокого действия</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
