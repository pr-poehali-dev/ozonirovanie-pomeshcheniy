import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              О нас
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Кто мы</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы — ведущая компания, специализирующаяся на озонировании, дезинфекции, дезинсекции 
              и обслуживании систем вентиляции для частных, коммерческих и промышленных объектов.
            </p>
          </div>

          <Card className="mb-8 border-2 border-primary/20 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Официальный партнер OZONbox</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы являемся <span className="font-semibold text-primary">единственным официальным дилером</span> крупной 
                    федеральной сети OZONbox в нашем регионе.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Factory" size={20} className="text-primary" />
                  О производителе OZONbox
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  OZONbox — производитель озонаторов, которые устраняют запахи, бактерии, вирусы и грибки 
                  без химии и токсичных следов. Наше оборудование решает задачи очистки и дезинфекции 
                  в любых отраслях — безопасно и эффективно.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary to-green-700 text-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Наша миссия</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Создавать безопасную среду с помощью технологий озонирования для здоровья 
                    каждого человека и сохранения экологии нашей планеты.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
