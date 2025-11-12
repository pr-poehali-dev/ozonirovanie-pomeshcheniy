import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
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

  const faqs = [
    {
      question: "Что такое озонирование?",
      answer: "Озонирование — это обработка помещения озоном (O₃), который уничтожает бактерии, вирусы, грибки и устраняет неприятные запахи. Озон — природный окислитель, который после обработки распадается на обычный кислород."
    },
    {
      question: "Безопасно ли озонирование?",
      answer: "Да, абсолютно безопасно. После обработки помещение проветривается 20-30 минут, озон полностью распадается на кислород. Процедура не оставляет химических следов и безвредна для людей и животных."
    },
    {
      question: "Сколько времени занимает обработка?",
      answer: "Время обработки зависит от площади: небольшая квартира — 30-60 минут, большое помещение — 2-3 часа. После обработки требуется проветривание 20-30 минут."
    },
    {
      question: "Нужно ли готовить помещение?",
      answer: "Минимальная подготовка: убрать людей и животных, открыть шкафы для лучшего проникновения озона. Мы даём подробные инструкции при заказе."
    },
    {
      question: "Как часто нужно проводить озонирование?",
      answer: "Для профилактики — 1-2 раза в год. При проблемах с плесенью, после болезни или ремонта — по необходимости."
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      role: "Владелец квартиры",
      text: "После ремонта был ужасный запах краски. Озонирование помогло за один сеанс! Теперь воздух свежий, как в лесу.",
      rating: 5
    },
    {
      name: "Михаил Соколов",
      role: "Директор фитнес-клуба",
      text: "Обрабатываем раздевалки каждый месяц. Клиенты отмечают свежесть, никаких неприятных запахов. Рекомендую!",
      rating: 5
    },
    {
      name: "Елена Краснова",
      role: "Заведующая детским садом",
      text: "Безопасность детей — наш приоритет. Озонирование проводим регулярно, особенно в сезон простуд. Результат отличный!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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

      <section id="faq" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Icon name="HelpCircle" size={14} className="mr-1" />
              Вопросы и ответы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Всё, что нужно знать об озонировании
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Icon name="Star" size={14} className="mr-1" />
              Отзывы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы о нашей работе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы заказать озонирование?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и расчёта стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/73daf858-c2c3-4d64-90d3-526ee0510126.png" 
                alt="Озон Дезцентр" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-green-200 text-sm">
                Профессиональное озонирование помещений
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li>Жилые помещения</li>
                <li>Коммерческие объекты</li>
                <li>Спортивные залы</li>
                <li>Учебные заведения</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li>О нас</li>
                <li>Сертификаты</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@ozon-dezcenter.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-200">
            <p>© 2024 Озон Дезцентр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
