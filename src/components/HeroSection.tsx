import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 via-blue-50/30 to-green-50/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Экологичная дезинфекция
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Озонирование помещений
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Уничтожаем бактерии, вирусы и неприятные запахи безопасным природным методом. 
              Без химикатов и вредных веществ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Заказать обработку
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary" />
                <span>Без химикатов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary" />
                <span>100% безопасно</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary" />
                <span>Быстро</span>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/73daf858-c2c3-4d64-90d3-526ee0510126.png" 
                alt="Озонирование" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">эффективность</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
