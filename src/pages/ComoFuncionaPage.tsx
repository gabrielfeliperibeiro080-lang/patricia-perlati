import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import { whatsappUrl } from '../config/professional';

const steps = [
  {
    number: '01',
    title: 'O Primeiro Contato',
    description:
      'O processo começa com uma mensagem ou ligação para agendar a primeira sessão. Na primeira conversa, o objetivo é criar um espaço de acolhimento onde você possa se apresentar, falar sobre o que te trouxe até aqui e conhecer um pouco mais sobre como funciona o trabalho terapêutico.',
  },
  {
    number: '02',
    title: 'Compreensão da Demanda',
    description:
      'Nas sessões iniciais, o foco está na escuta da sua história, das suas necessidades e do que você espera do processo. Não existe um roteiro rígido — cada percurso é construído a partir de quem você é e do que você traz.',
  },
  {
    number: '03',
    title: 'Construção do Processo',
    description:
      'À medida que o trabalho avança, a terapia se aprofunda. Questões que surgem no cotidiano, memórias, sentimentos e padrões de comportamento passam a ser explorados com mais detalhamento, ampliando a compreensão sobre si mesmo.',
  },
  {
    number: '04',
    title: 'A Continuidade',
    description:
      'A regularidade das sessões é fundamental para o processo terapêutico. O encontro semanal cria um ritmo que sustenta o trabalho e permite que as transformações aconteçam de forma gradual e consistente ao longo do tempo.',
  },
  {
    number: '05',
    title: 'Sigilo Profissional',
    description:
      'Tudo o que é compartilhado nas sessões é protegido pelo sigilo profissional, garantido pelo Código de Ética do Conselho Federal de Psicologia. Você pode falar com segurança, sabendo que o espaço terapêutico é absolutamente confidencial.',
  },
];

const faqs = [
  {
    question: 'Quanto tempo dura uma sessão?',
    answer:
      'Geralmente 50 minutos, mas a duração pode variar conforme o contexto e a necessidade de cada atendimento.',
  },
  {
    question: 'Com que frequência acontecem as sessões?',
    answer:
      'Em geral, as sessões ocorrem semanalmente. Esta frequência é a mais indicada para manter a continuidade e o ritmo do processo terapêutico.',
  },
  {
    question: 'Como sei se preciso de acompanhamento psicológico?',
    answer:
      'Sempre que você sentir que algo está te impedindo de viver com mais equilíbrio, que emoções difíceis estão tomando muito espaço, ou que simplesmente gostaria de se conhecer melhor — esses podem ser bons motivos para buscar apoio. Não é preciso estar em crise para começar uma terapia.',
  },
  {
    question: 'O que é dito nas sessões fica em sigilo?',
    answer:
      'Sim. O sigilo profissional é garantido pelo Código de Ética do Conselho Federal de Psicologia. As informações compartilhadas nas sessões são estritamente confidenciais, salvo em situações excepcionais previstas em lei.',
  },
  {
    question: 'A terapia tem prazo definido?',
    answer:
      'Não existe um prazo fixo. O processo é individualizado e construído em conjunto, respeitando o tempo de cada pessoa. O encerramento do acompanhamento é decidido de forma colaborativa, quando os objetivos do processo foram alcançados.',
  },
];

export default function ComoFuncionaPage() {
  document.title = 'Como Funciona a Terapia | Patrícia Perlati Psicóloga';

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main className="bg-offwhite">
      {/* Hero */}
      <PageHero
        label="O processo terapêutico"
        title="Como funciona a terapia?"
        subtitle="Entenda como é o processo de acompanhamento psicológico e o que esperar dos atendimentos"
      />

      {/* ── O que é a psicoterapia? ── */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="md:col-span-7">
              <AnimatedSection direction="up">
                <p className="font-body text-xs tracking-widest uppercase text-olive mb-3 sm:mb-4">
                  Entendendo a terapia
                </p>
                <div
                  className="mb-6 sm:mb-8"
                  style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
                />
                <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-olive-dark leading-tight mb-6 sm:mb-8">
                  O que é a psicoterapia?
                </h2>
              </AnimatedSection>

              <div className="space-y-4 sm:space-y-5 font-body text-mocha leading-relaxed text-sm sm:text-base" style={{ fontWeight: 300 }}>
                <AnimatedSection direction="up" delay={0.1}>
                  <p>
                    A psicoterapia é um processo de acompanhamento psicológico conduzido por um
                    profissional habilitado — com o objetivo de oferecer suporte emocional, promover o
                    autoconhecimento e ajudar a lidar com dificuldades do cotidiano ou momentos de crise.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={0.15}>
                  <p>
                    Diferentemente de uma consulta médica ou de uma conversa com amigos, a sessão
                    terapêutica é um espaço estruturado, sigiloso e sem julgamentos, onde você pode
                    explorar seus pensamentos, emoções e comportamentos com a mediação de alguém
                    capacitado para isso.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={0.2}>
                  <p>
                    A terapia não resolve problemas de forma imediata, mas cria condições para que
                    você possa compreender melhor a si mesmo e construir caminhos mais saudáveis
                    diante dos desafios da vida. É um investimento no seu bem-estar que tende a
                    produzir transformações duradouras.
                  </p>
                </AnimatedSection>
              </div>
            </div>

            <div className="md:col-span-5">
              <AnimatedSection direction="left" delay={0.15}>
                <div className="relative aspect-[4/5] max-w-sm mx-auto md:max-w-none bg-beige overflow-hidden shadow-xl ring-1 ring-olive/20 group">
                  <img
                    src="/assets/consultorio/sessao-clinica.jpg"
                    alt="Escuta atenta e anotações durante sessão terapêutica"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Etapas do processo ── */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 bg-beige">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection direction="up">
            <p className="font-body text-xs tracking-widest uppercase text-olive mb-3 sm:mb-4">
              Etapas do processo
            </p>
            <div
              className="mb-8 sm:mb-10"
              style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
            />
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-olive-dark leading-tight mb-10 sm:mb-16">
              O caminho terapêutico
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} direction="left" delay={i * 0.08}>
                <div className="flex gap-4 sm:gap-8 md:gap-12 py-6 sm:py-10 border-t border-olive border-opacity-20 last:border-b last:border-opacity-20">
                  {/* Number */}
                  <div className="flex-shrink-0 pt-1">
                    <span
                      className="font-display font-light text-3xl sm:text-4xl md:text-5xl leading-none"
                      style={{ color: '#78816C', opacity: 0.5 }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-light text-xl sm:text-2xl text-olive-dark mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p
                      className="font-body text-xs sm:text-sm text-mocha leading-relaxed"
                      style={{ fontWeight: 300 }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dúvidas frequentes ── */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 bg-offwhite">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection direction="up">
            <p className="font-body text-xs tracking-widest uppercase text-olive mb-3 sm:mb-4">
              Dúvidas frequentes
            </p>
            <div
              className="mb-6 sm:mb-8"
              style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
            />
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-olive-dark leading-tight mb-8 sm:mb-12">
              Perguntas comuns sobre a terapia
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.06}>
                <div className="border-t border-beige last:border-b">
                  <button
                    className="w-full flex items-center justify-between gap-4 py-4 sm:py-6 text-left focus:outline-none group"
                    onClick={() => toggle(i)}
                    aria-expanded={openIndex === i}
                  >
                    <span className="font-body text-sm sm:text-base text-olive-dark font-normal leading-snug group-hover:text-olive transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-olive transition-transform duration-300 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p
                      className="font-body text-xs sm:text-sm text-mocha leading-relaxed pb-4 sm:pb-6"
                      style={{ fontWeight: 300 }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Abordagem terapêutica ── */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 md:px-12 bg-beige">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection direction="up">
            <p className="font-body text-xs tracking-widest uppercase text-olive mb-3 sm:mb-4">
              Abordagem terapêutica
            </p>
            <div
              className="mb-6 sm:mb-8"
              style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
            />
            <blockquote className="font-display font-light text-xl sm:text-2xl md:text-3xl text-olive-dark leading-relaxed border-l-2 border-olive pl-5 sm:pl-8">
              A abordagem utilizada é apresentada e discutida no início do processo
              terapêutico, respeitando as necessidades individuais de cada pessoa.
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 md:px-12" style={{ backgroundColor: '#354337' }}>
        <AnimatedSection direction="up" className="container mx-auto max-w-2xl text-center">
          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-offwhite mb-4 sm:mb-6">
            Pronto para começar?
          </h2>
          <p
            className="font-body mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base"
            style={{ color: '#c9c5be', fontWeight: 300 }}
          >
            O primeiro passo é o mais importante. Entre em contato pelo WhatsApp e
            agende sua primeira sessão com Patrícia Perlati.
          </p>
          <a
            href={whatsappUrl('Olá, Patrícia! Gostaria de agendar uma primeira sessão.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 min-h-[46px] w-full sm:w-auto font-body text-xs sm:text-sm tracking-widest uppercase text-olive-dark bg-offwhite transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
          >
            <MessageCircle size={18} />
            Agendar pelo WhatsApp
          </a>
        </AnimatedSection>
      </section>
    </main>
  );
}
