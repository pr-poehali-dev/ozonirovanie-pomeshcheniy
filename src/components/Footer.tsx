import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="https://cdn.poehali.dev/files/73daf858-c2c3-4d64-90d3-526ee0510126.png" 
              alt="Озон Дезцентр" 
              className="h-14 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-green-200 text-sm leading-relaxed">
              Профессиональное озонирование, чистка вентиляции и удаление грибка. 
              Официальный дилер OZONbox.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><a href="#services" className="hover:text-white transition-colors">Озонирование помещений</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Чистка вентиляции</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Удаление грибка</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Комплексные решения</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#advantages" className="hover:text-white transition-colors">Преимущества</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Отрасли</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-green-200">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79119470297" className="hover:text-white transition-colors">+7 911 947-02-97</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>10:00 - 21:00 ежедневно</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Выезд по всему городу</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a 
                href="https://wa.me/79119470297" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a 
                href="https://t.me/+79119470297" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-green-200">
            <p>© 2024 Озон Дезцентр. Все права защищены.</p>
            <p>Официальный дилер федеральной сети OZONbox</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
