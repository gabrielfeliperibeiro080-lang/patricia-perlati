import { GraduationCap, Award, Calendar, Building2, MessageCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import { professional, whatsappUrl } from '../config/professional';

const principles = [
  {
    title: 'Escuta',
    text: 'Cada história merece atenção e cuidado genuíno.',
  },
  {
    title: 'Ética',
    text: 'O sigilo e o respeito guiam cada encontro terapêutico.',
  },
  {
    title: 'Acolhimento',
    text: 'Um espaço seguro para ser você, sem julgamentos.',
  },
];

const formation = [
  {
    icon: GraduationCap,
    label: 'Graduação',
    value: professional.bio.education,
  },
  {
    icon: Award,
    label: 'Registro Profissional',
    value: professional.crp,
  },
  {
    icon: Calendar,
    label: 'Atuação Clínica',
    value: `Desde ${professional.bio.activeSince}`,
  },
  {
    icon: Building2,
    label: 'Experiência',
    value: professional.bio.experiences[0],
  },
];

export default function SobrePage() {
  document.title = 'Sobre Patrícia Perlati | Psicóloga Clínica em Piracicaba';

  return (
    <main className="bg-offwhite">
      {/* Hero */}
      <PageHero
        label="Sobre mim"
        title="Conheça Patrícia Perlati"
        subtitle="Psicóloga Clínica com mais de duas décadas dedicadas ao cuidado em saúde mental"
      />

      {/* ── Apresentação Principal ── */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
          {/* Foto da profissional */}
          <AnimatedSection direction="left">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[3/4] bg-beige overflow-hidden shadow-xl ring-1 ring-olive/20 group rounded-none">
              <img
                src={professional.photos.about || "/assets/patricia/patricia-perlati-profissional-02.jpg"}
                alt="Patrícia Perlati — Psicóloga Clínica CRP 06/62173"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/30 via-transparent to-transparent pointer-events-none" />
              {/* Moldura de canto sutil */}
              <div
                className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none"
                style={{ borderLeft: '2px solid #78816C', borderBottom: '2px solid #78816C' }}
              />
            </div>
          </AnimatedSection>

          {/* Texto */}
          <AnimatedSection direction="right" delay={0.1}>
            <p className="font-body text-xs tracking-widest uppercase text-olive mb-3 sm:mb-4">
              Trajetória profissional
            </p>
            <div
              className="mb-4 sm:mb-6"
              style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
            />
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-olive-dark leading-tight mb-6 sm:mb-8">
              Uma escuta que acompanha histórias reais
            </h2>

            <div className="space-y-4 sm:space-y-5 font-body text-mocha leading-relaxed text-sm sm:text-base" style={{ fontWeight: 300 }}>
              <p>
                Patrícia Perlati é psicóloga clínica graduada pela Universidade do Sagrado Coração,
                com trajetória dedicada ao cuidado em saúde mental desde 2003. Ao longo de mais de
                duas décadas de atuação, construiu uma prática clínica fundamentada na escuta atenta,
                no respeito à singularidade de cada pessoa e no compromisso ético com o bem-estar
                de quem busca atendimento.
              </p>
              <p>
                Parte significativa de sua experiência foi desenvolvida na APAE de Piracicaba, onde
                atuou no acompanhamento de pessoas com deficiência e na orientação a seus familiares —
                um trabalho que exige sensibilidade, paciência e profundo respeito às diferentes
                formas de existir.
              </p>
              <p>
                Hoje, atende crianças, adolescentes e adultos em Piracicaba — SP, oferecendo um
                espaço de escuta seguro e acolhedor para aqueles que desejam se conhecer melhor,
                atravessar momentos difíceis ou simplesmente cuidar da própria saúde mental.
              </p>
              <p>
                Cada atendimento é conduzido com presença e cuidado genuíno, respeitando o tempo
                e as necessidades únicas de cada pessoa que chega até o consultório.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Valores / Princípios ── */}
      <section
        className="py-14 sm:py-20 px-5 sm:px-6 md:px-12"
        style={{ backgroundColor: '#354337' }}
      >
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection direction="up">
            <p className="font-body text-xs tracking-widest uppercase text-olive mb-8 sm:mb-10 text-center">
              Princípios que guiam o trabalho
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} direction="up" delay={i * 0.12}>
                <div className="border-t border-olive border-opacity-40 pt-6 sm:pt-8">
                  <h3 className="font-display font-light text-2xl sm:text-3xl text-offwhite mb-3 sm:mb-4">
                    {p.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm leading-relaxed" style={{ color: '#c9c5be', fontWeight: 300 }}>
                    {p.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formação e Atuação ── */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 bg-offwhite">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection direction="up">
            <p className="font-body text-xs tracking-widest uppercase text-olive mb-3 sm:mb-4">
              Formação e atuação
            </p>
            <div
              className="mb-8 sm:mb-10"
              style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
            />
          </AnimatedSection>

          <div className="space-y-0">
            {formation.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.label} direction="left" delay={i * 0.1}>
                  <div className="flex items-start gap-4 sm:gap-8 py-5 sm:py-7 border-b border-beige last:border-b-0">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-beige">
                      <Icon size={18} className="text-olive" />
                    </div>
                    <div>
                      <p className="font-body text-[11px] sm:text-xs tracking-widest uppercase text-olive mb-1">
                        {item.label}
                      </p>
                      <p className="font-display font-light text-xl sm:text-2xl text-olive-dark">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Consultório e Acolhimento ── */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 bg-white border-t border-beige">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="md:col-span-6">
              <AnimatedSection direction="left">
                <div className="relative aspect-[4/3] bg-beige overflow-hidden shadow-xl ring-1 ring-olive/20 group">
                  <img
                    src="/assets/consultorio/consultorio-poltrona.jpg"
                    alt="Consultório acolhedor de Patrícia Perlati em Piracicaba"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </AnimatedSection>
            </div>
            <div className="md:col-span-6">
              <AnimatedSection direction="right" delay={0.1}>
                <p className="font-body text-xs tracking-widest uppercase text-olive mb-3 sm:mb-4">
                  O Espaço
                </p>
                <div
                  className="mb-4 sm:mb-6"
                  style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
                />
                <h2 className="font-display font-light text-2xl sm:text-3xl md:text-4xl text-olive-dark leading-tight mb-4 sm:mb-6">
                  Um ambiente planejado para o seu acolhimento
                </h2>
                <p className="font-body text-mocha font-light leading-relaxed mb-4 text-sm sm:text-base">
                  Localizado em Piracicaba — SP, o espaço clínico foi estruturado com atenção cuidadosa: 
                  iluminação suave, poltronas confortáveis, isolamento acústico e privacidade para que cada encontro 
                  aconteça em um ambiente propício à reflexão e ao cuidado emocional.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 md:px-12 bg-beige">
        <AnimatedSection direction="up" className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-olive-dark mb-4 sm:mb-6">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="font-body text-mocha mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 300 }}>
            O primeiro contato pode ser mais simples do que parece. Entre em toque pelo
            WhatsApp e tire suas dúvidas sem compromisso.
          </p>
          <a
            href={whatsappUrl('Olá, Patrícia! Gostaria de saber mais sobre o atendimento psicológico.')}
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
