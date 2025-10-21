import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="GraduationCap" className="text-primary" size={28} />
              <span className="text-xl font-bold">EduPlatform</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Современная платформа для онлайн-обучения с качественными курсами от экспертов
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Платформа</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/courses" className="hover:text-primary transition-colors">Курсы</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">О нас</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-primary transition-colors">Помощь</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Контакты</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Условия использования</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Связаться с нами</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@eduplatform.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex gap-3 mt-4">
                <Link to="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </Link>
                <Link to="#" className="hover:text-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </Link>
                <Link to="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </Link>
                <Link to="#" className="hover:text-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 EduPlatform. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
