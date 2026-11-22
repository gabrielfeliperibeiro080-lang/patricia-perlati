import { MapPin, MessageCircle, AlertCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import { whatsappUrl } from '../config/professional';

interface AudienceSection {
  id: string;
  title: string;
  paragraphs: string[];
  imageAlt: string;
  imageSrc: string;
  reverse?: boolean;
}

const audiences: AudienceSection[] = [
  {
    id: 'criancas',
    title: 'Atendimento Infantil',
    imageAlt: 'Espaço acolhedor e lúdico para atendimento psicológico infantil',
    imageSrc: '/assets/atendimentos/atendimento-infantil.jpg',
    paragraphs: [
      'A infância é uma fase essencial para o desenvolvimento emocional, social e cognitivo. Quando uma criança encontra dificuldades para expressar seus sentimentos, apresenta mudanças de comportamento ou enfrenta desafios no ambiente escolar e familiar, o acompanhamento psicológico pode oferecer suporte importante.',
      'No trabalho com crianças, o processo terapêutico leva em conta a linguagem própria desta fase da vida — incluindo o brincar como forma de comunicação e expressão. O objetivo é criar um espaço seguro onde a criança possa se expressar livremente, sendo ouvida com atenção e cuidado.',
      'O envolvimento e a orientação dos familiares também fazem parte do processo, fortalecendo os vínculos e contribuindo para o desenvolvimento saudável da criança.',
    ],
    reverse: false,
  },
  {
    id: 'adolescentes',
    title: 'Atendimento para Adolescentes',
    imageAlt: 'Escuta atenta e espaço seguro para adolescentes',
    imageSrc: '/assets/atendimentos/atendimento-adolescentes.jpg',
    paragraphs: [
      'A adolescência é um período de intensas transformações — físicas, emocionais e sociais. É uma fase marcada pela construção da identidade, pela busca de autonomia e pela navegação por novas formas de se relacionar consigo mesmo e com o mundo.',
      'Questões como autoestima, relacionamentos, pressão escolar, conflitos familiares e mudanças de humor podem surgir com maior intensidade durante esta etapa. O acompanhamento psicológico oferece um espaço de escuta sem julgamentos, onde o adolescente pode explorar seus sentimentos e desenvolver recursos internos para lidar com os desafios desta fase.',
      'O sigilo profissional é garantido, assegurando que o adolescente possa se expressar com segurança e confiança.',
    ],
    reverse: true,
  },
  {
    id: 'adultos',
    title: 'Atendimento para Adultos',
    imageAlt: 'Consultório acolhedor de psicologia para atendimento de adultos',
    imageSrc: '/assets/atendimentos/atendimento-adultos.jpg',
    paragraphs: [
      'Na vida adulta, os desafios se apresentam das mais diversas formas: ansiedade, tristeza persistente, dificuldades nos relacionamentos, burnout, crises existenciais ou simplesmente o desejo de se conhecer melhor e viver com mais equilíbrio.',
      'O acompanhamento psicológico para adultos é um processo de autoconhecimento e cuidado. É um espaço para falar sobre o que pesa, compreender padrões de comportamento, desenvolver recursos emocionais e construir uma relação mais saudável consigo mesmo e com as pessoas ao redor.',
      'Seja diante de um momento difícil específico ou de um desejo de crescimento pessoal, a psicoterapia pode ser um caminho significativo de transformação e bem-estar.',
    ],
    reverse: false,
  },
];

export default function AtendimentosPage() {
  document.title = 'Atendimentos | Psicóloga Clínica Patrícia Perlati — Piracicaba';

  return (
    <main className="bg-offwhite">
      {/* Hero */}
      <PageHero
        label="Atendimentos"
        title="Para quem é o atendimento?"
        subtitle="Acompanhamento psicológico para crianças, adolescentes e adultos em Piracicaba — SP"
      />

      {/* ── Públicos atendidos ── */}
      {audiences.map((audience) => (
        <section key={audience.id} className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 border-b border-beige last:border-b-0">
          <div className={`container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center ${audience.reverse ? 'md:[direction:rtl]' : ''}`}>
            {/* Imagem real com acabamento editorial */}
            <AnimatedSection direction={audience.reverse ? 'right' : 'left'} className="md:[direction:ltr]">
              <div className="relative w-full aspect-[4/3] bg-beige overflow-hidden shadow-lg ring-1 ring-olive/20 group">
                <img
                  src={audience.imageSrc}
                  alt={audience.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/20 via-transparent to-transparent pointer-events-none" />
                <div
                  className="absolute top-0 right-0 w-10 sm:w-12 h-10 sm:h-12 pointer-events-none"
                  style={{ borderTop: '2px solid #78816C', borderRight: '2px solid #78816C' }}
                />
              </div>
            </AnimatedSection>

            {/* Texto */}
            <AnimatedSection
              direction={audience.reverse ? 'left' : 'right'}
              delay={0.1}
              className="md:[direction:ltr]"
            >
              <div
                className="mb-4 sm:mb-6"
                style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
              />
              <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-olive-dark leading-tight mb-4 sm:mb-8">
                {audience.title}
              </h2>
              <div className="space-y-4 sm:space-y-5 font-body text-mocha leading-relaxed text-sm sm:text-base" style={{ fontWeight: 300 }}>
                {audience.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* ── Modalidades ── */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 md:px-12" style={{ backgroundColor: '#354337' }}>
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection direction="up">
            <p className="font-body text-xs tracking-widest uppercase text-olive mb-3 sm:mb-4 text-center">
              Modalidades de atendimento
            </p>
            <div
              className="mx-auto mb-8 sm:mb-12"
              style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {/* Presencial */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="border border-olive border-opacity-30 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <MapPin size={20} className="text-olive" />
                  <h3 className="font-display font-light text-xl sm:text-2xl text-offwhite">
                    Presencial
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-sm leading-relaxed" style={{ color: '#c9c5be', fontWeight: 300 }}>
                  Consultório em Piracicaba — SP.
                  O endereço completo será disponibilizado no agendamento.
                </p>
              </div>
            </AnimatedSection>

            {/* Online */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="border border-olive border-opacity-20 p-6 sm:p-8 opacity-70">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <AlertCircle size={20} className="text-olive" />
                  <h3 className="font-display font-light text-xl sm:text-2xl text-offwhite">
                    Online
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-sm leading-relaxed" style={{ color: '#c9c5be', fontWeight: 300 }}>
                  Em processo de configuração — entre em contato para saber mais sobre
                  disponibilidade futura desta modalidade.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="font-body text-xs sm:text-sm text-center" style={{ color: '#c9c5be', fontWeight: 300 }}>
              Consulte a disponibilidade de horários pelo WhatsApp.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 md:px-12 bg-beige">
        <AnimatedSection direction="up" className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-olive-dark mb-4 sm:mb-6">
            Vamos conversar?
          </h2>
          <p className="font-body text-mocha mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 300 }}>
            Tire suas dúvidas sobre disponibilidade, horários e valores pelo WhatsApp.
            O primeiro contato é simples e sem compromisso.
          </p>
          <a
            href={whatsappUrl('Olá, Patrícia! Gostaria de saber mais sobre os atendimentos.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-center justify-center text-xs tracking-widest uppercase"
          >
            <MessageCircle size={18} />
            Falar pelo WhatsApp
          </a>
        </AnimatedSection>
      </section>
    </main>
  );
}
