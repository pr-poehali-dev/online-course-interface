import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="GraduationCap" className="text-primary" size={32} />
          <span className="text-2xl font-bold text-foreground">EduPlatform</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/courses" className="text-foreground hover:text-primary transition-colors">
            Курсы
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            О платформе
          </Link>
          <Link to="/faq" className="text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:flex">
            Войти
          </Button>
          <Button>
            Начать обучение
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
}
