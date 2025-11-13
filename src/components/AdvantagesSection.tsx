import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "Award",
      title: "Официальный дилер OZONbox",
      description: "Единственные представители федеральной сети в регионе"
    },
    {
      icon: "Shield",
      title: "100% безопасность",
      description: "Озон распадается естественным путем, не оставляя следов"
    },
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Без химикатов и вредных веществ для здоровья"
    },
    {
      icon: "Zap",
      title: "Высокая эффективность",
      description: "Уничтожает 99.9% бактерий, вирусов и грибков"
    },
    {
      icon: "Clock",
      title: "Быстрая работа",
      description: "Обработка от 30 минут, выезд в день обращения"
    },
    {
      icon: "Users",
      title: "Опыт и профессионализм",
      description: "Более 500 успешных проектов, обученные специалисты"
    },
    {
      icon: "BadgeCheck",
      title: "Сертификация",
      description: "Все необходимые разрешительные документы и лицензии"
    },
    {
      icon: "ShieldCheck",
      title: "Гарантия качества",
      description: "Официальная гарантия на все виды работ"
    },
    {
      icon: "Wrench",
      title: "Профессиональное оборудование",
      description: "Используем только сертифицированные озонаторы OZONbox"
    },
    {
      icon: "ClipboardCheck",
      title: "Прозрачность",
      description: "Акты выполненных работ, честные цены без наценок"
    },
    {
      icon: "HeadphonesIcon",
      title: "Поддержка 7 дней",
      description: "Консультации и помощь даже после завершения работ"
    },
    {
      icon: "TrendingUp",
      title: "Индивидуальный подход",
      description: "Делаем только то, что действительно необходимо"
    }
  ];

  const certifications = [
    {
      icon: "FileCheck",
      title: "Сертификаты соответствия",
      description: "На все используемое оборудование"
    },
    {
      icon: "Scale",
      title: "Лицензии",
      description: "Разрешения на проведение работ"
    },
    {
      icon: "GraduationCap",
      title: "Обучение персонала",
      description: "Аттестованные специалисты"
    },
    {
      icon: "FileText",
      title: "Договор и гарантия",
      description: "Юридическое оформление услуг"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Преимущества
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Профессиональный подход, современное оборудование и гарантия результата
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, idx) => (
            <div 
              key={idx}
              className="flex gap-4 p-4 rounded-lg hover:bg-green-50 transition-colors animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="bg-primary/10 p-3 rounded-lg h-fit flex-shrink-0">
                <Icon name={advantage.icon as any} size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Icon name="Award" size={14} className="mr-1" />
              Сертификация
            </Badge>
            <h3 className="text-3xl font-bold mb-4">Гарантия качества и безопасности</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Все наши специалисты прошли обучение, а оборудование имеет необходимые сертификаты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <Card 
                key={idx}
                className="text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={cert.icon as any} size={28} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
