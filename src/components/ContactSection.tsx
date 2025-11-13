import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary to-green-700 text-white shadow-2xl">
            <CardContent className="py-12 px-6 md:px-12 text-center">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Icon name="Phone" size={14} className="mr-1" />
                Личный контакт
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Звоните на мой личный номер или пишите в мессенджер
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Отвечу на ваши вопросы, рассчитаю стоимость, согласую дату и время проведения работ
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
                <a 
                  href="tel:+79119470297" 
                  className="text-4xl md:text-5xl font-bold text-white hover:text-white/90 transition-colors inline-block mb-6"
                >
                  +7 911 947-02-97
                </a>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white border-none"
                    asChild
                  >
                    <a href="https://wa.me/79119470297" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-blue-500 hover:bg-blue-600 text-white border-none"
                    asChild
                  >
                    <a href="https://t.me/+79119470297" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" size={20} className="mr-2" />
                      Telegram
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-white/80">
                <Icon name="Clock" size={20} />
                <span className="text-lg">Мы на связи с 10:00 до 21:00</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
