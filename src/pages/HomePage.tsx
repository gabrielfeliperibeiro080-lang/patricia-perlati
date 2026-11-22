import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { whatsappUrl, professional } from '../config/professional'

// ─── Variantes de animação ────────────────────────────────────────────────────

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const heroImageVariant = {
  hidden: { opacity: 0, x: 48, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: 0.9 },
  },
}

// ─── Dados ────────────────────────────────────────────────────────────────────

const demandas = [
  {
    num: '01',
    title: 'Ansiedade',
    desc: 'Preocupações excessivas, tensão constante e dificuldade de relaxar que interferem no cotidiano.',
  },
  {
    num: '02',
    title: 'Depressão',
    desc: 'Sentimentos persistentes de tristeza, vazio ou falta de interesse pelas atividades que antes traziam prazer.',
  },
  {
    num: '03',
    title: 'Esgotamento emocional',
    desc: 'Sensação de sobrecarga, exaustão e perda de motivação mesmo após descanso.',
  },
  {
    num: '04',
    title: 'Dificuldades nos relacionamentos',
    desc: 'Conflitos repetidos, dificuldade de comunicação ou padrões que dificultam vínculos saudáveis.',
  },
  {
    num: '05',
    title: 'Autoconhecimento',
    desc: 'Desejo de compreender seus padrões, emoções e formas de se relacionar com o mundo.',
  },
  {
    num: '06',
    title: 'Autoestima',
    desc: 'Dificuldade em reconhecer seu valor, excesso de autocrítica ou insegurança nas decisões.',
  },
  {
    num: '07',
    title: 'Relação com a comida e imagem corporal',
    desc: 'Comportamentos e emoções que afetam a relação com o próprio corpo e com a alimentação.',
  },
  {
    num: '08',
    title: 'Desenvolvimento pessoal',
    desc: 'Busca por crescimento, superação de limitações e construção de uma vida mais alinhada com seus valores.',
  },
]

const publicos = [
  {
    num: '01',
    label: 'Crianças',
    desc: 'Apoio ao desenvolvimento emocional, às dificuldades de comportamento e às demandas da infância, com escuta sensível e adaptada à faixa etária.',
    img: '/assets/atendimentos/atendimento-infantil.jpg',
  },
  {
    num: '02',
    label: 'Adolescentes',
    desc: 'Suporte nas transformações da adolescência: identidade, relações, escolhas e pressões do cotidiano juvenil.',
    img: '/assets/atendimentos/atendimento-adolescentes.jpg',
  },
  {
    num: '03',
    label: 'Adultos',
    desc: 'Atendimento individualizado para questões emocionais, relacionais e existenciais na vida adulta.',
    img: '/assets/atendimentos/atendimento-adultos.jpg',
  },
]

const etapas = [
  {
    num: '01',
    title: 'Primeiro contato',
    desc: 'Uma conversa inicial para conhecer sua demanda e entender como o acompanhamento pode ajudá-la.',
  },
  {
    num: '02',
    title: 'Compreensão da demanda',
    desc: 'Escuta atenta e cuidadosa para mapear sua história, suas necessidades e seus objetivos terapêuticos.',
  },
  {
    num: '03',
    title: 'Construção do processo',
    desc: 'Desenvolvimento de um caminho terapêutico personalizado, com regularidade e profundidade.',
  },
  {
    num: '04',
    title: 'Continuidade e crescimento',
    desc: 'Ao longo do tempo, novas compreensões emergem e transformações se consolidam de forma genuína.',
  },
]

// ─── Componente ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const waLink = whatsappUrl('Olá! Gostaria de agendar uma consulta com a Patrícia Perlati.')

  return (
    <main className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          SEÇÃO 1 — HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ backgroundColor: '#F8F6F1' }}
        aria-label="Apresentação"
      >
        {/* Textura SVG sutil de fundo */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="texture-lines" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" stroke="#354337" strokeWidth="0.5" fill="none" />
              <circle cx="40" cy="40" r="15" stroke="#354337" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#texture-lines)" />
        </svg>

        <div className="editorial-container relative z-10 w-full pt-24 pb-14 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-24 items-center min-h-[60vh] md:min-h-[70vh]">

            {/* Coluna esquerda — Texto */}
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 sm:gap-8"
            >
              {/* Rótulo superior */}
              <motion.p
                variants={heroItem}
                className="font-body text-[11px] sm:text-xs tracking-widest uppercase"
                style={{ color: '#78816C' }}
              >
                Psicologia Clínica · Piracicaba, SP
              </motion.p>

              {/* H1 */}
              <motion.h1
                variants={heroItem}
                className="font-display font-light leading-[1.12] text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ color: '#354337' }}
              >
                Um espaço para compreender suas emoções e construir novas possibilidades.
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                variants={heroItem}
                className="font-body font-light text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed"
                style={{ color: '#756B60' }}
              >
                A psicoterapia é um caminho de autoconhecimento, acolhimento e compreensão. Um espaço de escuta
                individualizada para olhar com atenção para sua história e suas experiências.
              </motion.p>

              {/* Foto destacada no Mobile para conexão imediata */}
              <motion.div
                variants={heroItem}
                className="block lg:hidden my-2 max-w-[260px] sm:max-w-[280px] mx-auto aspect-[3/4] overflow-hidden shadow-xl ring-1 ring-olive/20 group bg-beige relative"
              >
                <img
                  src={professional.photos.hero || "/assets/patricia/patricia-perlati-profissional-01.jpg"}
                  alt="Patrícia Perlati — Psicóloga Clínica em Piracicaba"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-2 bg-white/90 backdrop-blur-md border border-white/60 text-center shadow-sm">
                  <p className="font-display text-olive-dark text-sm tracking-wide font-normal">Patrícia Perlati</p>
                  <p className="font-body text-[9px] uppercase tracking-widest text-olive font-medium">CRP 06/62173</p>
                </div>
              </motion.div>

              {/* Identificação */}
              <motion.p
                variants={heroItem}
                className="font-body text-xs sm:text-sm"
                style={{ color: '#78816C' }}
              >
                Patrícia Perlati · Psicóloga Clínica | CRP 06/62173
              </motion.p>

              {/* Botões */}
              <motion.div
                variants={heroItem}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
              >
                <Link
                  to="/sobre"
                  className="btn-primary w-full sm:w-auto text-center justify-center text-xs tracking-widest uppercase"
                >
                  Conheça meu trabalho
                </Link>
                <Link
                  to="/contato"
                  className="btn-outline w-full sm:w-auto text-center justify-center text-xs tracking-widest uppercase"
                >
                  Entre em contato
                </Link>
              </motion.div>
            </motion.div>

            {/* Coluna direita — Imagem */}
            <motion.div
              variants={heroImageVariant}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:flex justify-center items-start"
            >
              {/* Círculo decorativo */}
              <div
                className="absolute -top-24 -right-24 w-72 h-72 rounded-full border opacity-10 pointer-events-none"
                style={{ borderColor: '#78816C' }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-5 pointer-events-none"
                style={{ backgroundColor: '#354337' }}
                aria-hidden="true"
              />

              {/* Moldura Editorial da Fotografia Profissional */}
              <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden shadow-2xl ring-1 ring-olive/20 group bg-beige">
                <img
                  src={professional.photos.hero || "/assets/patricia/patricia-perlati-profissional-01.jpg"}
                  alt="Patrícia Perlati — Psicóloga Clínica em Piracicaba"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay sutil para harmonização editorial */}
                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Identificação elegante na base da foto */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 bg-white/90 backdrop-blur-md border border-white/60 text-center shadow-sm">
                  <p className="font-display text-olive-dark text-base tracking-wide font-normal">Patrícia Perlati</p>
                  <p className="font-body text-[10px] uppercase tracking-widest text-olive font-medium mt-0.5">Psicóloga Clínica · CRP 06/62173</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1 }}
          aria-hidden="true"
        >
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: '#78816C' }}>
            Rolar
          </span>
          <ChevronDown
            size={20}
            style={{ color: '#78816C' }}
            className="animate-bounce"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          SEÇÃO 2 — APRESENTAÇÃO PROFISSIONAL
      ══════════════════════════════════════════════════ */}
      <section
        className="py-16 sm:py-24 md:py-40"
        style={{ backgroundColor: '#FFFFFF' }}
        aria-label="Sobre Patrícia Perlati"
      >
        <div className="editorial-container max-w-3xl mx-auto text-center">
          <AnimatedSection delay={0}>
            <p className="font-body text-xs tracking-widest uppercase mb-6 sm:mb-10" style={{ color: '#78816C' }}>
              Sobre
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <blockquote
              className="font-display font-light italic text-2xl sm:text-3xl md:text-4xl leading-relaxed mb-6 sm:mb-8 px-2"
              style={{ color: '#354337' }}
            >
              "Acredito que cada pessoa traz consigo uma história única, e que o processo terapêutico oferece um
              espaço seguro para explorá-la com cuidado e respeito."
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-body text-xs sm:text-sm mb-8 sm:mb-12" style={{ color: '#78816C' }}>
              — Patrícia Perlati, Psicóloga Clínica
            </p>

            {/* Linha decorativa */}
            <div
              className="mx-auto mb-8 sm:mb-12"
              style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
              aria-hidden="true"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="font-body font-light text-sm sm:text-base md:text-lg mb-8 sm:mb-12 leading-relaxed" style={{ color: '#756B60' }}>
              Graduada pela Universidade do Sagrado Coração, Patrícia Perlati atua em Piracicaba desde 2003,
              acumulando experiências em diferentes contextos clínicos — incluindo a APAE de Piracicaba —
              com atenção, ética e comprometimento ao bem-estar de cada paciente.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Link
              to="/sobre"
              className="btn-outline w-full sm:w-auto text-center justify-center text-xs tracking-widest uppercase"
            >
              Conheça minha trajetória
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SEÇÃO 3 — QUANDO PROCURAR ACOMPANHAMENTO?
      ══════════════════════════════════════════════════ */}
      <section
        className="py-16 sm:py-24 md:py-32"
        style={{ backgroundColor: '#EDE6DC' }}
        aria-label="Quando buscar acompanhamento psicológico"
      >
        <div className="editorial-container">
          <AnimatedSection delay={0}>
            <p className="font-body text-xs tracking-widest uppercase mb-4 sm:mb-6" style={{ color: '#78816C' }}>
              Quando buscar ajuda
            </p>
            <h2
              className="font-display font-light text-3xl sm:text-4xl md:text-5xl mb-10 sm:mb-16 md:mb-20 max-w-2xl leading-tight"
              style={{ color: '#354337' }}
            >
              Situações que podem se beneficiar do acompanhamento psicológico
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {demandas.map((item, i) => (
              <AnimatedSection key={item.num} delay={0.05 * i} direction="up">
                <div className="group py-5 sm:py-7 border-b" style={{ borderColor: 'rgba(53,67,55,0.15)' }}>
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <span
                      className="font-display font-light text-xs pt-1 shrink-0 w-6"
                      style={{ color: 'rgba(120,129,108,0.6)' }}
                    >
                      {item.num}
                    </span>
                    <div>
                      <h3
                        className="font-display font-light text-lg sm:text-xl mb-1.5 group-hover:text-olive-dark transition-colors duration-300"
                        style={{ color: '#354337' }}
                      >
                        {item.title}
                      </h3>
                      <p className="font-body font-light text-xs sm:text-sm leading-relaxed" style={{ color: '#756B60' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <p className="font-body text-[11px] sm:text-xs mt-10 sm:mt-16 max-w-xl leading-relaxed" style={{ color: 'rgba(117,107,96,0.6)' }}>
              * O acompanhamento psicológico não substitui avaliação médica nem garante resultados específicos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SEÇÃO 4 — PARA QUEM É O ATENDIMENTO?
      ══════════════════════════════════════════════════ */}
      <section
        className="py-16 sm:py-24 md:py-32"
        style={{ backgroundColor: '#F8F6F1' }}
        aria-label="Públicos atendidos"
      >
        <div className="editorial-container">
          <AnimatedSection delay={0}>
            <p className="font-body text-xs tracking-widest uppercase mb-4 sm:mb-6" style={{ color: '#78816C' }}>
              Atendimentos
            </p>
            <h2
              className="font-display font-light text-3xl sm:text-4xl md:text-5xl mb-10 sm:mb-16 md:mb-20 leading-tight"
              style={{ color: '#354337' }}
            >
              Atendimento para cada fase da vida
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {publicos.map((p, i) => (
              <AnimatedSection key={p.num} delay={0.1 * (i + 1)} direction="up">
                <div>
                  {/* Foto temática editorial */}
                  <div className="relative aspect-[16/10] mb-4 sm:mb-6 overflow-hidden bg-beige ring-1 ring-olive/15 group">
                    <img 
                      src={p.img} 
                      alt={`Atendimento para ${p.label}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Linha superior */}
                  <div
                    className="mb-4 sm:mb-6"
                    style={{ width: '100%', height: 1, backgroundColor: '#78816C', opacity: 0.3 }}
                    aria-hidden="true"
                  />
                  <div className="flex items-baseline gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <span
                      className="font-display font-light text-xs"
                      style={{ color: 'rgba(120,129,108,0.7)' }}
                    >
                      {p.num}
                    </span>
                    <h3
                      className="font-display font-light text-2xl md:text-3xl"
                      style={{ color: '#354337' }}
                    >
                      {p.label}
                    </h3>
                  </div>
                  <p className="font-body font-light text-xs sm:text-sm leading-relaxed" style={{ color: '#756B60' }}>
                    {p.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5}>
            <div className="mt-10 sm:mt-16 md:mt-20">
              <Link
                to="/atendimentos"
                className="btn-outline w-full sm:w-auto text-center justify-center text-xs tracking-widest uppercase"
              >
                Ver atendimentos
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SEÇÃO 5 — COMO FUNCIONA?
      ══════════════════════════════════════════════════ */}
      <section
        className="py-16 sm:py-24 md:py-32"
        style={{ backgroundColor: '#354337' }}
        aria-label="Como funciona o processo terapêutico"
      >
        <div className="editorial-container">
          <AnimatedSection delay={0}>
            <p className="font-body text-xs tracking-widest uppercase mb-4 sm:mb-6" style={{ color: 'rgba(248,246,241,0.5)' }}>
              O processo
            </p>
            <h2
              className="font-display font-light text-3xl sm:text-4xl md:text-5xl mb-10 sm:mb-16 md:mb-20 max-w-xl leading-tight"
              style={{ color: '#F8F6F1' }}
            >
              Como funciona o processo terapêutico?
            </h2>
          </AnimatedSection>

          {/* Etapas — layout horizontal em desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
            {etapas.map((etapa, i) => (
              <AnimatedSection key={etapa.num} delay={0.1 * (i + 1)} direction="up">
                <div className="relative">
                  {/* Linha conectora (desktop) */}
                  {i < etapas.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-full w-full"
                      style={{ height: 1, backgroundColor: 'rgba(248,246,241,0.1)', transform: 'translateX(2rem)' }}
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className="font-display font-light block mb-3 sm:mb-6"
                    style={{ fontSize: '3.5rem', lineHeight: 1, color: 'rgba(248,246,241,0.15)' }}
                    aria-hidden="true"
                  >
                    {etapa.num}
                  </span>
                  <h3
                    className="font-display font-light text-lg sm:text-xl mb-2 sm:mb-3"
                    style={{ color: '#F8F6F1' }}
                  >
                    {etapa.title}
                  </h3>
                  <p
                    className="font-body font-light text-xs sm:text-sm leading-relaxed"
                    style={{ color: 'rgba(248,246,241,0.65)' }}
                  >
                    {etapa.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.6}>
            <div className="mt-10 sm:mt-16 md:mt-20">
              <Link
                to="/como-funciona"
                className="btn-outline border-offwhite/40 text-offwhite hover:bg-offwhite hover:text-olive-dark w-full sm:w-auto text-center justify-center text-xs tracking-widest uppercase"
              >
                Saiba mais
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SEÇÃO 6 — CTA FINAL (WhatsApp)
      ══════════════════════════════════════════════════ */}
      <section
        className="py-16 sm:py-24 md:py-40"
        style={{ backgroundColor: '#F2EDE4' }}
        aria-label="Entre em contato"
      >
        <div className="editorial-container max-w-2xl mx-auto text-center">
          <AnimatedSection delay={0}>
            {/* Linha decorativa superior */}
            <div
              className="mx-auto mb-10 sm:mb-16"
              style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
              aria-hidden="true"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              className="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 leading-tight"
              style={{ color: '#354337' }}
            >
              O primeiro passo começa com uma conversa.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-body font-light text-sm sm:text-base md:text-lg mb-8 sm:mb-12 leading-relaxed" style={{ color: '#756B60' }}>
              Entre em contato e agende uma consulta. Estou aqui para ouvir você.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center justify-center text-xs tracking-widest uppercase"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Falar pelo WhatsApp
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="font-body text-[11px] sm:text-xs mt-8 sm:mt-10 leading-relaxed" style={{ color: 'rgba(117,107,96,0.6)' }}>
              O sigilo profissional é garantido. Sua privacidade é respeitada em todas as etapas.
            </p>
          </AnimatedSection>
        </div>
      </section>

    </main>
  )
}
