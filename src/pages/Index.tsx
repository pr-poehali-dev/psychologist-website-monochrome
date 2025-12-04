import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-accent/10 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-serif text-foreground">Психолог</div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors">Главная</a>
              <a href="#approach" className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors">Подход</a>
              <a href="#services" className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
              <a href="#credentials" className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors">Образование</a>
              <a href="#contact" className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="about" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="h-px w-20 bg-accent"></div>
                <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight">
                  Путь к<br/>внутренней<br/>гармонии
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Профессиональная психологическая помощь в решении личных и семейных вопросов. 
                Индивидуальный подход, конфиденциальность, результат.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на сеанс
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Психолог" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="h-px w-20 bg-accent mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Подход к работе</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Сочетание проверенных методологий и индивидуального подхода к каждому клиенту
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Brain',
                title: 'Когнитивно-поведенческая терапия',
                description: 'Работа с установками, мышлением и поведенческими паттернами'
              },
              {
                icon: 'Heart',
                title: 'Гуманистический подход',
                description: 'Фокус на личностном росте и самоактуализации клиента'
              },
              {
                icon: 'Users',
                title: 'Системная семейная терапия',
                description: 'Работа с семейными отношениями и межличностными связями'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-background border-accent/10 hover:border-accent/30 transition-all hover-scale">
                <Icon name={item.icon} size={40} className="text-accent mb-6" />
                <h3 className="text-xl font-serif text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="h-px w-20 bg-accent mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Услуги</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Индивидуальная консультация',
                duration: '60 минут',
                description: 'Работа с личными запросами, тревожностью, самооценкой'
              },
              {
                title: 'Семейная терапия',
                duration: '90 минут',
                description: 'Решение семейных конфликтов, улучшение коммуникации'
              },
              {
                title: 'Консультация пары',
                duration: '90 минут',
                description: 'Работа с отношениями, кризисами, построение доверия'
              },
              {
                title: 'Длительная терапия',
                duration: 'Курс сеансов',
                description: 'Глубинная проработка запросов, личностный рост'
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 border-accent/10 hover:border-accent/30 transition-all bg-background group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <Icon name="Clock" size={20} className="text-accent" />
                </div>
                <p className="text-sm text-accent mb-4">{service.duration}</p>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="h-px w-20 bg-accent mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Образование и опыт</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="border-l-2 border-accent/30 pl-8 space-y-8">
              <div className="relative">
                <div className="absolute -left-[37px] w-4 h-4 bg-accent rounded-full"></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <Icon name="GraduationCap" size={24} className="text-accent" />
                    <h3 className="text-2xl font-serif text-foreground">Новосибирский государственный педагогический университет</h3>
                  </div>
                  <p className="text-accent">2014 • Психология</p>
                  <p className="text-muted-foreground">Специалист по клинической психологии</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[37px] w-4 h-4 bg-accent rounded-full"></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <Icon name="Award" size={24} className="text-accent" />
                    <h3 className="text-2xl font-serif text-foreground">Сертификаты и повышение квалификации</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Когнитивно-поведенческая терапия (КПТ)</li>
                    <li>• Системная семейная терапия</li>
                    <li>• Работа с травмой и ПТСР</li>
                    <li>• Гештальт-терапия</li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[37px] w-4 h-4 bg-accent rounded-full"></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <Icon name="Briefcase" size={24} className="text-accent" />
                    <h3 className="text-2xl font-serif text-foreground">Опыт работы</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Более 10 лет практики в области клинической психологии. 
                    Опыт работы в частной практике и психологических центрах. 
                    Более 5000 часов индивидуальных консультаций.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="h-px w-20 bg-accent mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Запись на сеанс</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Оставьте заявку, и я свяжусь с вами в ближайшее время для согласования удобного времени консультации.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/50 border-accent/10 focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted/50 border-accent/10 focus:border-accent"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Кратко опишите запрос (необязательно)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/50 border-accent/10 focus:border-accent min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <div className="h-px w-20 bg-accent mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Контакты</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="text-sm text-accent mb-1">Телефон</p>
                    <p className="text-foreground">+7 (___) ___-__-__</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="text-sm text-accent mb-1">Email</p>
                    <p className="text-foreground">psycholog@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="text-sm text-accent mb-1">Адрес</p>
                    <p className="text-foreground">Новосибирск, ул. Примерная, 1</p>
                    <p className="text-muted-foreground text-sm">Прием по предварительной записи</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="text-sm text-accent mb-1">Режим работы</p>
                    <p className="text-foreground">Пн-Пт: 10:00 — 20:00</p>
                    <p className="text-foreground">Сб: 11:00 — 18:00</p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-muted/50 border-accent/10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <Icon name="Shield" size={18} className="inline mr-2 text-accent" />
                  Гарантирую полную конфиденциальность. Вся информация, полученная на консультациях, остается между нами.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-accent/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Психолог. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
