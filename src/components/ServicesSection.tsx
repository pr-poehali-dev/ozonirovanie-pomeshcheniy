import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Wind",
      title: "Озонирование помещений",
      description: "Эффективное уничтожение бактерий, вирусов, грибков и неприятных запахов природным озоном без химии",
      process: [
        "Аудит помещения и оценка проблемы",
        "Подготовка помещения (герметизация)",
        "Озонирование профессиональным оборудованием OZONbox",
        "Проветривание и контроль качества",
        "Рекомендации по дальнейшей эксплуатации"
      ],
      applications: [
        "Устранение запахов (табак, гарь, плесень, животные)",
        "Дезинфекция после болезни",
        "Обработка после ремонта",
        "Профилактическая санитарная обработка",
        "Подготовка помещений к продаже/сдаче"
      ],
      minPrice: "2 000 ₽",
      color: "primary"
    },
    {
      icon: "Fan",
      title: "Чистка вентиляции",
      description: "Профессиональное обслуживание и дезинфекция систем вентиляции для чистого воздуха и безопасности",
      process: [
        "Диагностика системы вентиляции",
        "Разборка и осмотр вентиляционных каналов",
        "Механическая чистка воздуховодов",
        "Дезинфекция системы озонированием",
        "Замена фильтров (при необходимости)",
        "Проверка работоспособности и тяги",
        "Составление акта выполненных работ"
      ],
      applications: [
        "Удаление пыли и жировых отложений",
        "Восстановление нормальной тяги",
        "Устранение посторонних запахов",
        "Профилактика пожарной безопасности",
        "Соответствие санитарным нормам"
      ],
      minPrice: "3 500 ₽",
      color: "accent",
      note: "Примерный список работ может меняться в зависимости от ситуации и включать дезинфекцию или ремонт. Все услуги согласовываются с заказчиком."
    },
    {
      icon: "ShieldAlert",
      title: "Удаление грибка и плесени",
      description: "Комплексное удаление грибка шведским препаратом Mögel Fri глубокого действия с гарантией результата",
      process: [
        "Обследование помещения и выявление очагов",
        "Определение причин появления плесени",
        "Механическая обработка поверхностей",
        "Нанесение шведского препарата Mögel Fri",
        "Глубокая обработка проникающим составом",
        "Озонирование для уничтожения спор",
        "Рекомендации по устранению причин",
        "Контроль результата"
      ],
      applications: [
        "Стены, потолки, откосы",
        "Ванные комнаты и санузлы",
        "Подвалы и погреба",
        "Балконы и лоджии",
        "Складские помещения"
      ],
      minPrice: "4 000 ₽",
      color: "destructive",
      highlight: "Используем шведский препарат Mögel Fri — профессиональное средство глубокого действия, проникающее в структуру материала и уничтожающее грибок на всех уровнях."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Наши услуги
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы предлагаем</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Каждый случай индивидуален. Мастер проводит аудит и составляет план работ под конкретную задачу. 
            Это может быть одна услуга, а может быть комплекс решений для максимального результата.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`bg-${service.color}/10 p-4 rounded-lg w-fit mb-4`}>
                  <Icon name={service.icon as any} size={32} className={`text-${service.color}`} />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {service.highlight && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                    <p className="text-sm text-yellow-800 font-medium">{service.highlight}</p>
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="ListChecks" size={18} className="text-primary" />
                    Процесс работы
                  </h4>
                  <ul className="space-y-2">
                    {service.process.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold flex-shrink-0">{idx + 1}.</span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Target" size={18} className="text-primary" />
                    Применение
                  </h4>
                  <ul className="space-y-2">
                    {service.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.note && (
                  <div className="bg-muted rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground italic">{service.note}</p>
                  </div>
                )}

                <div className="mt-auto pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Стоимость от</span>
                    <span className="text-2xl font-bold text-primary">{service.minPrice}</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Подробная презентация
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <Icon name="Info" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Важно знать</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Специалисты компании не навязывают дополнительную работу для увеличения ценника — 
                  мы делаем только то, что действительно необходимо. Все услуги согласовываем с заказчиком 
                  после детального аудита помещения.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;
