import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const IndustriesSection = () => {
  const industries = [
    { icon: "Plane", name: "Аэровокзалы", description: "Терминалы, залы ожидания, служебные помещения" },
    { icon: "Pizza", name: "Пищевые производства", description: "Цеха, склады, упаковочные линии" },
    { icon: "ShoppingBag", name: "Торгово-развлекательные комплексы", description: "Магазины, кинотеатры, фудкорты" },
    { icon: "UtensilsCrossed", name: "Заведения общественного питания", description: "Рестораны, кафе, столовые, кухни" },
    { icon: "Hospital", name: "Учреждения здравоохранения", description: "Клиники, поликлиники, медцентры" },
    { icon: "School", name: "Общеобразовательные учреждения", description: "Школы, детские сады, университеты" }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Сферы деятельности
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Мы активно работаем в следующих отраслях</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Профессиональные решения для бизнеса и коммерческих объектов любого масштаба
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, idx) => (
            <Card 
              key={idx}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-3">
                  <Icon name={industry.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary to-green-700 text-white mb-8">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Работаем с физическими и юридическими лицами
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Предоставляем услуги для жилых и коммерческих помещений. 
              Готовы сделать индивидуальное предложение специально для вашего бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Icon name="FileSpreadsheet" size={20} className="mr-2" />
                Прайс для бизнеса
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Package" size={20} className="mr-2" />
                Пакетные предложения
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Sparkles" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Индивидуальный подход к каждому клиенту</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Мы понимаем, что каждый бизнес уникален. Готовы разработать специальное предложение 
              с учетом ваших потребностей, графика работы и бюджета. Получите персональный расчет 
              и консультацию нашего специалиста совершенно бесплатно.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="PhoneCall" size={20} className="mr-2" />
              Заказать бесплатную консультацию и расчет
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
