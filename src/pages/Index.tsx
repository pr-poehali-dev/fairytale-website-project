import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('start');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroes = [
    {
      name: 'Принцесса Луна',
      description: 'Хранительница ночных звёзд и добрых сновидений',
      trait: 'Мудрость',
    },
    {
      name: 'Рыцарь Солнца',
      description: 'Защитник королевства и борец с тёмными силами',
      trait: 'Отвага',
    },
    {
      name: 'Волшебница Аврора',
      description: 'Повелительница стихий и магии природы',
      trait: 'Сила',
    },
  ];

  const galleryImages = [
    {
      title: 'Замок в облаках',
      description: 'Величественный замок парит среди облаков',
    },
    {
      title: 'Волшебный лес',
      description: 'Таинственный лес, где живут феи',
    },
    {
      title: 'Звёздное озеро',
      description: 'Озеро, в котором отражаются звёзды',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-50 to-purple-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-purple-600">✨ Сказка</h1>
            <div className="flex gap-6">
              {[
                { id: 'start', label: 'Начало', icon: 'Home' },
                { id: 'heroes', label: 'Герои', icon: 'Users' },
                { id: 'story', label: 'История', icon: 'BookOpen' },
                { id: 'magic', label: 'Волшебство', icon: 'Sparkles' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'text-purple-600 hover:bg-purple-100'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="start"
        className="min-h-screen flex items-center justify-center pt-20 px-4"
      >
        <div className="text-center max-w-4xl animate-fade-in">
          <div className="mb-8 animate-float">
            <span className="text-8xl">🏰</span>
          </div>
          <h2 className="text-6xl font-bold text-purple-700 mb-6">
            Добро пожаловать в сказку
          </h2>
          <p className="text-2xl text-purple-600 mb-8 leading-relaxed">
            Где волшебство становится реальностью, а мечты обретают крылья
          </p>
          <Button
            onClick={() => scrollToSection('heroes')}
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Начать путешествие
            <Icon name="ArrowRight" size={24} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="heroes" className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center text-purple-700 mb-16 animate-fade-in">
            Герои нашей сказки
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {heroes.map((hero, index) => (
              <Card
                key={index}
                className="p-8 bg-white/90 backdrop-blur border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {index === 0 ? '🌙' : index === 1 ? '⚔️' : '🔮'}
                  </div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-3">
                    {hero.name}
                  </h3>
                  <p className="text-purple-600 mb-4 leading-relaxed">
                    {hero.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full">
                    <Icon name="Star" size={16} className="text-purple-500" />
                    <span className="text-sm font-medium text-purple-700">
                      {hero.trait}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="min-h-screen py-20 px-4 bg-purple-50/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center text-purple-700 mb-16 animate-fade-in">
            История
          </h2>
          <Card className="p-12 bg-white/90 backdrop-blur border-2 border-purple-200 shadow-2xl">
            <div className="space-y-6 text-lg leading-relaxed text-purple-900">
              <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-purple-500 first-letter:float-left first-letter:mr-3">
                В далёком королевстве, где небо касается земли, а звёзды танцуют
                под лунным светом, живут герои нашей удивительной сказки.
              </p>
              <p>
                Принцесса Луна каждую ночь зажигает звёзды на небосклоне и
                охраняет сны всех жителей королевства. Её волшебная сила
                помогает людям видеть прекрасные сновидения и находить ответы на
                важные вопросы.
              </p>
              <p>
                Рыцарь Солнца стоит на страже королевства, защищая его от тёмных
                сил. Его меч сияет ярче тысячи солнц, а сердце полно отваги и
                благородства.
              </p>
              <p>
                Волшебница Аврора управляет стихиями природы, создавая гармонию
                между всеми живыми существами. Её магия пробуждает цветы,
                призывает дождь и дарует жизнь всему живому.
              </p>
              <p className="text-center text-xl font-medium text-purple-700 pt-6">
                Вместе они создают волшебство, которое делает этот мир особенным
                ✨
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="magic" className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center text-purple-700 mb-16 animate-fade-in">
            Галерея волшебства
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-purple-200 via-pink-200 to-purple-300 flex items-center justify-center">
                  <span className="text-8xl">
                    {index === 0 ? '🏰' : index === 1 ? '🌲' : '⭐'}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-purple-600">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-purple-700 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="text-2xl font-medium mb-2">
            ✨ Конец — это всегда новое начало ✨
          </p>
          <p className="text-purple-200">
            Сказка продолжается в твоём воображении
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
