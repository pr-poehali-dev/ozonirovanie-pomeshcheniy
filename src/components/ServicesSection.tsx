import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      icon: "Home",
      title: "Жилые помещения",
      description: "Квартиры, дома, коттеджи — чистый воздух для вашей семьи",
      features: ["Устранение запахов", "Уничтожение бактерий", "Борьба с плесенью"]
    },
    {
      icon: "Building2",
      title: "Коммерческие",
      description: "Офисы, магазины, склады — безопасность для сотрудников",
      features: ["Дезинфекция помещений", "После ремонта", "Санитарная обработка"]
    },
    {
      icon: "Dumbbell",
      title: "Спортивные",
      description: "Фитнес-клубы, бассейны — гигиена для спортсменов",
      features: ["Раздевалки", "Душевые", "Тренажерные залы"]
    },
    {
      icon: "GraduationCap",
      title: "Учебные",
      description: "Школы, университеты — здоровая среда для учёбы",
      features: ["Классы", "Аудитории", "Столовые"]
    },
    {
      icon: "Baby",
      title: "Дошкольные",
      description: "Детские сады, ясли — безопасность для малышей",
      features: ["Игровые комнаты", "Спальни", "Пищеблок"]
    }
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "100% безопасность",
      description: "Озон распадается естественным путем, не оставляя следов"
    },
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Без химикатов и вредных веществ"
    },
    {
      icon: "Zap",
      title: "Эффективность",
      description: "Уничтожает 99.9% бактерий и вирусов"
    },
    {
      icon: "Clock",
      title: "Быстро",
      description: "Обработка от 30 минут"
    },
    {
      icon: "BadgeCheck",
      title: "Сертификаты",
      description: "Все разрешительные документы"
    },
    {
      icon: "Users",
      title: "Опыт",
      description: "Более 500 успешных проектов"
    }
  ];

  const pricing = [
    {
      name: "Базовый",
      price: "от 2 000 ₽",
      area: "до 50 м²",
      features: ["Озонирование", "Устранение запахов", "Консультация"],
      popular: false
    },
    {
      name: "Стандарт",
      price: "от 3 500 ₽",
      area: "50-100 м²",
      features: ["Озонирование", "Устранение запахов", "Дезинфекция", "Гарантия 30 дней"],
      popular: true
    },
    {
      name: "Премиум",
      price: "от 6 000 ₽",
      area: "100+ м²",
      features: ["Озонирование", "Комплексная обработка", "Дезинфекция", "Гарантия 60 дней", "Повторный выезд"],
      popular: false
    }
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Типы помещений
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Где мы работаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональное озонирование для любых типов помещений
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveService(activeService === service.title ? null : service.title)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name={service.icon as any} size={28} className="text-primary" />
                    </div>
                    <Icon 
                      name={activeService === service.title ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-muted-foreground"
                    />
                  </div>
                  <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                {activeService === service.title && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-4 space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Icon name="Award" size={14} className="mr-1" />
              Преимущества
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему озонирование?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современный метод дезинфекции без химии
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Icon name={benefit.icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Тарифы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий тариф для вашего помещения
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 animate-fade-in ${
                  plan.popular ? 'border-primary shadow-lg scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                  <CardDescription className="text-base">{plan.area}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
