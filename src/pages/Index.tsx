import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

const courses = [
  {
    id: 1,
    title: "Основы веб-разработки",
    description: "Изучите HTML, CSS и JavaScript с нуля. Создайте свой первый сайт за 8 недель.",
    instructor: "Анна Смирнова",
    duration: "8 недель",
    level: "Начальный",
    students: 1250,
    rating: 4.8,
    price: "9 990 ₽",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop"
  },
  {
    id: 2,
    title: "Python для анализа данных",
    description: "Освойте Python, pandas и визуализацию данных. Станьте Data Analyst.",
    instructor: "Дмитрий Петров",
    duration: "10 недель",
    level: "Средний",
    students: 980,
    rating: 4.9,
    price: "14 990 ₽",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
  },
  {
    id: 3,
    title: "UX/UI Дизайн с нуля",
    description: "Создавайте удобные интерфейсы. Figma, прототипирование, юзабилити-тестирование.",
    instructor: "Мария Иванова",
    duration: "6 недель",
    level: "Начальный",
    students: 1500,
    rating: 4.7,
    price: "12 990 ₽",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop"
  },
  {
    id: 4,
    title: "Продвинутый JavaScript",
    description: "Асинхронность, React, TypeScript. Станьте профессиональным фронтенд-разработчиком.",
    instructor: "Александр Ковалёв",
    duration: "12 недель",
    level: "Продвинутый",
    students: 750,
    rating: 4.9,
    price: "19 990 ₽",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=450&fit=crop"
  },
  {
    id: 5,
    title: "Digital маркетинг 2024",
    description: "SEO, контент-маркетинг, SMM и таргетированная реклама. Полный курс диджитал-маркетинга.",
    instructor: "Елена Новикова",
    duration: "8 недель",
    level: "Средний",
    students: 1100,
    rating: 4.6,
    price: "11 990 ₽",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
  },
  {
    id: 6,
    title: "Mobile разработка на React Native",
    description: "Создавайте кроссплатформенные мобильные приложения для iOS и Android.",
    instructor: "Игорь Соколов",
    duration: "10 недель",
    level: "Средний",
    students: 620,
    rating: 4.8,
    price: "16 990 ₽",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop"
  }
];

const features = [
  {
    icon: "Video",
    title: "Видеоуроки HD качества",
    description: "Профессионально смонтированные уроки с встроенным плеером и закладками"
  },
  {
    icon: "BookOpen",
    title: "Практические задания",
    description: "Закрепляйте знания на реальных проектах с проверкой от менторов"
  },
  {
    icon: "Award",
    title: "Сертификаты",
    description: "Получите признанный сертификат после успешного завершения курса"
  },
  {
    icon: "Users",
    title: "Сообщество",
    description: "Общайтесь с единомышленниками и делитесь опытом в чате курса"
  },
  {
    icon: "Clock",
    title: "Гибкий график",
    description: "Учитесь в удобное время, все материалы доступны 24/7"
  },
  {
    icon: "Headphones",
    title: "Поддержка",
    description: "Техподдержка и помощь менторов на протяжении всего обучения"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4" variant="secondary">
                Более 50 000 студентов уже учатся с нами
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Обучайтесь новым навыкам онлайн
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Качественные курсы от экспертов индустрии. Учитесь в своём темпе, получайте сертификаты и начинайте карьеру мечты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Выбрать курс
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Как это работает
                  <Icon name="PlayCircle" className="ml-2" size={20} />
                </Button>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Курсов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Студентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Удовлетворённость</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Экспертов</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Мы создали лучшую платформу для онлайн-обучения с фокусом на результат и удобство студентов
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={feature.icon as any} className="text-primary" size={24} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Популярные курсы
                </h2>
                <p className="text-muted-foreground">
                  Выберите направление и начните обучение уже сегодня
                </p>
              </div>
              <Button variant="outline">
                Все курсы
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3">{course.level}</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="User" size={14} />
                      <span>{course.instructor}</span>
                    </div>
                    <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Icon name="Users" size={16} />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4">
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                    <Button>Начать курс</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Видеоплеер с продвинутыми функциями
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Учитесь комфортно с нашим встроенным плеером: регулируйте скорость воспроизведения и создавайте закладки
              </p>
              <VideoPlayer 
                videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                title="Демонстрация видеоплеера"
              />
            </div>
          </div>
        </section>

        <FAQ />

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать обучение?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам студентов, которые уже меняют свою жизнь с помощью наших курсов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Выбрать курс
                <Icon name="BookOpen" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Получить консультацию
                <Icon name="MessageCircle" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Остались вопросы?
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Свяжитесь с нами, и мы ответим на все ваши вопросы
              </p>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
