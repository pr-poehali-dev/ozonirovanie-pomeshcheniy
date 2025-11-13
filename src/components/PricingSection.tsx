import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const individualPricing = [
    {
      service: "Озонирование",
      icon: "Wind",
      packages: [
        { name: "До 50 м²", price: "2 000 ₽", features: ["Озонирование", "Устранение запахов", "Консультация"] },
        { name: "50-100 м²", price: "3 500 ₽", features: ["Озонирование", "Устранение запахов", "Гарантия 30 дней"], popular: true },
        { name: "100+ м²", price: "от 6 000 ₽", features: ["Комплексная обработка", "Гарантия 60 дней", "Повторный выезд"] }
      ]
    },
    {
      service: "Чистка вентиляции",
      icon: "Fan",
      packages: [
        { name: "Квартира", price: "3 500 ₽", features: ["Чистка каналов", "Проверка тяги", "Дезинфекция"] },
        { name: "Дом/Коттедж", price: "от 7 000 ₽", features: ["Полная диагностика", "Чистка системы", "Замена фильтров"], popular: true },
        { name: "Комплекс", price: "от 15 000 ₽", features: ["Сложные системы", "Ремонт (при необходимости)", "Акт выполненных работ"] }
      ]
    },
    {
      service: "Удаление грибка",
      icon: "ShieldAlert",
      packages: [
        { name: "Локальная обработка", price: "4 000 ₽", features: ["До 5 м²", "Препарат Mögel Fri", "Озонирование"] },
        { name: "Комната", price: "от 8 000 ₽", features: ["До 20 м²", "Глубокая обработка", "Гарантия результата"], popular: true },
        { name: "Квартира/Дом", price: "от 20 000 ₽", features: ["Полная обработка", "Устранение причин", "Контроль + повтор"] }
      ]
    }
  ];

  const complexPackages = [
    {
      name: "Чистка вентиляции + Озонирование",
      discount: "15%",
      oldPrice: "7 000 ₽",
      newPrice: "5 950 ₽",
      features: [
        "Полная чистка вентиляции",
        "Озонирование помещения",
        "Дезинфекция воздуховодов",
        "Устранение запахов"
      ],
      icon: "Zap"
    },
    {
      name: "Удаление грибка + Озонирование",
      discount: "20%",
      oldPrice: "12 000 ₽",
      newPrice: "9 600 ₽",
      features: [
        "Обработка препаратом Mögel Fri",
        "Озонирование для уничтожения спор",
        "Гарантия результата",
        "Рекомендации по профилактике"
      ],
      icon: "Shield",
      popular: true
    },
    {
      name: "Комплекс 3 в 1",
      discount: "25%",
      oldPrice: "25 000 ₽",
      newPrice: "18 750 ₽",
      features: [
        "Все три услуги в одном визите",
        "Максимальная эффективность",
        "Комплексное решение проблем",
        "Расширенная гарантия"
      ],
      icon: "Star"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Прайс-лист
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены на услуги</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Прозрачное ценообразование для физических и юридических лиц. 
            Работаем с жилыми и коммерческими помещениями.
          </p>
        </div>

        {individualPricing.map((service, serviceIdx) => (
          <div key={serviceIdx} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Icon name={service.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold">{service.service}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {service.packages.map((pkg, pkgIdx) => (
                <Card 
                  key={pkgIdx}
                  className={`relative hover:shadow-xl transition-all duration-300 ${
                    pkg.popular ? 'border-primary border-2 shadow-lg scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-white">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      Заказать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-12">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Icon name="Percent" size={14} className="mr-1" />
              Выгодные предложения
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Преимущества комплексных услуг</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комбинируйте услуги и получайте скидку до 25%. Комплексный подход — это максимальная эффективность!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {complexPackages.map((pkg, idx) => (
              <Card 
                key={idx}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'border-primary border-2 shadow-lg' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white">Лучшее предложение</Badge>
                  </div>
                )}
                <div className="absolute -top-3 -right-3">
                  <Badge className="bg-destructive text-white text-sm px-3 py-1">
                    -{pkg.discount}
                  </Badge>
                </div>
                <CardHeader className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={pkg.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-4">{pkg.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-lg text-muted-foreground line-through">{pkg.oldPrice}</div>
                    <div className="text-4xl font-bold text-primary">{pkg.newPrice}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Заказать комплекс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="Package" size={20} className="mr-2" />
            Пакетные предложения для жилых помещений
          </Button>
          <div>
            <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на бесплатную диагностику
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Выезд мастера за счет компании</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
