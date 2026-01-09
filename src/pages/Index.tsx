import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const RosePetal = ({ delay }: { delay: number }) => {
  return (
    <div
      className="absolute animate-fall opacity-70"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${8 + Math.random() * 4}s`,
      }}
    >
      <span className="text-2xl">🌹</span>
    </div>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const moments = [
    {
      title: 'Голубоглазик и кроссовки',
      text: 'Тот день, когда ты, мой голубоглазик, мыл мои кроссовки. Не потому что надо, а просто потому что хотел сделать для меня что-то хорошее. И делал это так старательно, будто это самое важное дело в мире.',
      icon: '👟',
    },
    {
      title: 'Сумка и дождь',
      text: 'Ты всегда носишь мою сумку. Даже самую лёгкую. Будто твоё плечо создано, чтобы делить со мной любое бремя. А ещё — как ты нёс меня на руках под дождём, и казалось, что даже непогода бессильна против нашего смеха.',
      icon: '🌧️',
    },
    {
      title: 'Мотюня и защита',
      text: 'Самый смешной и нежный момент — как ты «гасил» Мотюню (моего брата) на моих плечах в День защиты детей. Ты встал на его защиту с такой серьёзностью, а в глазах у тебя была та самая улыбка, которую я обожаю. И тот влюблённый взгляд по видеосвязи — он сказал больше тысячи слов.',
      icon: '🛡️',
    },
    {
      title: 'Самокаты, руки и ноги',
      text: 'Наши безумные поездки с Даней! Я сзади, ты впереди, держишь меня за руку… и за ногу, чтобы я не упала. Ветер, скорость и полное ощущение, что с тобой я в полной безопасности.',
      icon: '🛴',
    },
    {
      title: 'На шее и на остановке',
      text: 'Как ты катал меня на шее, когда мы веселились с Наташей и Даней. Или как мы сидели на остановке в пять утра, уставшие и счастливые, а ты звонил Никите — и этот момент был наполнен таким покоем и теплом, что хотелось остановить время.',
      icon: '🚏',
    },
  ];

  const photos = [
    { url: 'https://cdn.poehali.dev/files/IMG_1207.jpeg', caption: 'Мы вдвоём' },
    { url: 'https://cdn.poehali.dev/files/IMG_1206.jpeg', caption: 'Мой голубоглазик' },
    { url: 'https://cdn.poehali.dev/files/IMG_1205.jpeg', caption: 'Вместе' },
    { url: 'https://cdn.poehali.dev/files/IMG_1204.jpeg', caption: 'Наши руки' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-pink-50 to-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        {petals.map((i) => (
          <RosePetal key={i} delay={i * 0.5} />
        ))}
      </div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-100 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">🌹 Наша история</h1>
            <div className="flex gap-4">
              {[
                { id: 'hero', label: 'Начало' },
                { id: 'start', label: 'Встреча' },
                { id: 'moments', label: 'Моменты' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'ending', label: 'Навсегда' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-primary hover:bg-red-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-20 px-4"
      >
        <div className="text-center max-w-3xl animate-fade-in">
          <div className="mb-8 animate-float text-8xl">🌹</div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            От алой розы до «навсегда»
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Этот сайт — наша маленькая вселенная. Место, где живёт история двух
            людей, которая началась с алой розы, ночного моря и взгляда, в
            котором утонуло всё остальное.
          </p>
          <Button
            onClick={() => scrollToSection('start')}
            className="bg-primary hover:bg-red-600 text-white px-8 py-6 text-lg rounded-full shadow-xl"
          >
            Читать историю
            <Icon name="Heart" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="start" className="min-h-screen py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12 animate-fade-in">
            Начало: алый цвет и бесконечное море
          </h2>
          <Card className="p-8 md:p-12 bg-white border-2 border-red-100 shadow-xl">
            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3">
                Помнишь, как всё начиналось? Ты подарил мне алую-алую розу —
                такую же яркую, как твой взгляд в тот первый вечер. Мы просидели
                до утра, а мир вокруг будто растворился. Остались только ты, я и
                шум прибоя.
              </p>
              <p className="text-center text-2xl font-medium text-primary pt-4">
                Тогда я ещё не знала, что это навсегда.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="moments" className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6 animate-fade-in">
            Маленькие вселенные в обычных днях
          </h2>
          <p className="text-center text-lg text-gray-700 mb-16 max-w-3xl mx-auto">
            Наша любовь живёт не в громких словах, а в тихих, тёплых жестах,
            которые стали нашим личным языком
          </p>
          <div className="space-y-6">
            {moments.map((moment, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-white/90 backdrop-blur border-2 border-red-100 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4 md:gap-6">
                  <div className="text-5xl md:text-6xl flex-shrink-0">
                    {moment.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {moment.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{moment.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16 animate-fade-in">
            Наши мгновения
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {photos.map((photo, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white border-2 border-red-100 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-lg font-medium text-primary">
                    {photo.caption}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ending" className="min-h-screen py-20 px-4 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12 animate-fade-in">
            Не точка, а запятая
          </h2>
          <Card className="p-8 md:p-12 bg-white border-2 border-red-100 shadow-2xl mb-12">
            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <p>
                Между нами были и бури, и четыре долгих месяца тишины. Но мы
                нашли в себе силы написать друг другу снова. И это стало самым
                важным решением.
              </p>
              <p>
                Наша история — это не идеальный роман без запятых. Это живое,
                дышащее чувство, где каждая пауза, каждая «запятая» — лишь
                начало новой, ещё более красивой главы.
              </p>
              <div className="bg-red-50 p-6 rounded-2xl mt-8 border-l-4 border-primary">
                <p className="text-gray-700 italic">
                  Этот сайт — наша капсула времени. Место, где мы храним эти
                  мгновения, чтобы всегда помнить: любовь — это не громкие
                  клятвы. Это — вымытые кроссовки, сумка на твоём плече, смех
                  под дождём и взгляд, в котором есть целая вселенная.
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-2xl text-gray-700 mb-4">
              Спасибо, что заглянул в наш маленький мир.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Он стал таким ярким, потому что в нём есть ты.
            </p>
            <div className="inline-flex items-center gap-3 text-3xl font-bold text-primary">
              <Icon name="Heart" size={32} className="animate-pulse" />
              <span>С любовью, твоя маленька</span>
              <Icon name="Heart" size={32} className="animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg">🌹 Наша история продолжается...</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;