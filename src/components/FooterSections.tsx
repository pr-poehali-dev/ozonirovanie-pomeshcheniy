import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const FooterSections = () => {
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
    <>
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
    </>
  );
};

export default FooterSections;
