import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import { ArrowRight } from 'lucide-react';

interface Demanda {
  numero: string;
  titulo: string;
  paragrafos: string[];
  textoCuidado: string;
  chamada: string;
}

const demandas: Demanda[] = [
  {
    numero: '01',
    titulo: 'Ansiedade',
    paragrafos: [
      'A ansiedade é uma resposta natural do organismo diante de situações percebidas como ameaçadoras ou incertas. Quando ela se torna persistente — manifestando-se por meio de preocupações constantes, tensão muscular, dificuldade de concentração ou sintomas físicos como taquicardia e falta de ar — pode interferir significativamente na qualidade de vida.',
      'Muitas pessoas convivem com esse estado por longos períodos sem reconhecer que estão sofrendo, ou acreditando que "é assim mesmo". A ansiedade pode impactar o sono, os relacionamentos, o trabalho e a forma como nos percebemos no mundo.',
      'Buscar apoio é um ato de cuidado consigo mesmo. No espaço terapêutico, é possível compreender os gatilhos e padrões que alimentam esse estado, ampliando o repertório de respostas emocionais de forma gradual e respeitosa.',
    ],
    textoCuidado:
      'Você não precisa enfrentar isso sozinha(o). O primeiro passo pode ser simplesmente conversar.',
    chamada: 'Gostaria de saber mais sobre como o acompanhamento psicológico pode ajudar?',
  },
  {
    numero: '02',
    titulo: 'Depressão',
    paragrafos: [
      'Sentimentos de tristeza profunda, perda de interesse em atividades que antes eram prazerosas, cansaço persistente e uma sensação de vazio podem indicar que algo precisa de atenção. A depressão é uma experiência humana complexa, que vai muito além de "estar triste".',
      'Ela pode afetar o apetite, o sono, a motivação, os relacionamentos e a autopercepção. Muitas vezes, quem passa por isso sente dificuldade em pedir ajuda — seja por não reconhecer o que está vivendo, seja pelo peso do estigma que ainda existe em torno da saúde mental.',
      'O acompanhamento psicológico oferece um espaço de escuta qualificado, sem julgamentos, onde esses sentimentos podem ser acolhidos e compreendidos. Em alguns casos, pode ser indicada a colaboração com outros profissionais de saúde.',
    ],
    textoCuidado:
      'O que você sente é real e merece ser acolhido com cuidado e respeito.',
    chamada: 'Estou aqui para ouvir. Vamos conversar?',
  },
  {
    numero: '03',
    titulo: 'Burnout e Esgotamento Emocional',
    paragrafos: [
      'O burnout é um estado de exaustão profunda — física, mental e emocional — frequentemente relacionado ao contexto de trabalho, mas que pode surgir em qualquer esfera da vida que exija desempenho constante sem espaço para recuperação.',
      'Quem vivencia o esgotamento emocional muitas vezes sente que "o pano foi puxado de baixo dos pés": a motivação some, pequenas tarefas parecem intransponíveis, e até os relacionamentos mais próximos ficam prejudicados. Há uma sensação de que nada é suficiente — e que a própria pessoa também não é.',
      'O processo terapêutico pode ajudar a compreender os padrões que levaram a esse ponto, reorganizar prioridades e reconstruir uma relação mais sustentável consigo mesmo e com as demandas da vida.',
    ],
    textoCuidado:
      'Descansar não é fraqueza. Pedir ajuda é um ato de coragem e sabedoria.',
    chamada: 'Se você sente que chegou no limite, talvez seja hora de conversar.',
  },
  {
    numero: '04',
    titulo: 'Dificuldades nos Relacionamentos',
    paragrafos: [
      'Os relacionamentos — amorosos, familiares, de amizade ou profissionais — são espelhos poderosos da nossa vida interna. Quando há conflitos repetitivos, dificuldade de comunicação, sensação de não ser compreendido ou padrões que se repetem em diferentes vínculos, pode ser um sinal de que algo merece ser olhado com atenção.',
      'Dificuldades relacionais muitas vezes têm raízes em experiências anteriores, em crenças aprendidas sobre afeto e pertencimento, ou em formas de se comunicar que não expressam de fato o que sentimos.',
      'A terapia oferece um espaço para compreender esses padrões, desenvolver habilidades de comunicação e construir vínculos mais autênticos — tanto com os outros quanto consigo mesmo.',
    ],
    textoCuidado:
      'Toda relação começa na relação que você tem com você mesmo.',
    chamada: 'Quer entender melhor os padrões que aparecem nos seus relacionamentos?',
  },
  {
    numero: '05',
    titulo: 'Autoconhecimento',
    paragrafos: [
      'Conhecer a si mesmo é uma jornada contínua — e uma das mais transformadoras que uma pessoa pode empreender. Compreender as próprias emoções, identificar padrões de pensamento e comportamento, e reconhecer o que nos motiva ou nos paralisa são processos que levam tempo e, muitas vezes, suporte.',
      'O autoconhecimento não é sobre chegar a respostas definitivas, mas sobre ampliar a consciência de quem somos, o que valorizamos e como nos relacionamos com o mundo. Essa clareza pode transformar a forma como tomamos decisões, nos relacionamos e cuidamos de nós mesmos.',
      'No espaço terapêutico, esse processo acontece com acolhimento, sem julgamentos e no seu próprio ritmo.',
    ],
    textoCuidado:
      'Você é a pessoa mais importante com quem você vai conviver. Vale a pena se conhecer.',
    chamada: 'Que tal começar essa jornada de dentro para fora?',
  },
  {
    numero: '06',
    titulo: 'Autoconfiança e Autoestima',
    paragrafos: [
      'A forma como nos vemos e nos avaliamos influencia profundamente cada área da nossa vida — desde as escolhas que fazemos até a qualidade dos nossos relacionamentos e a coragem de buscar o que desejamos. Uma baixa autoestima muitas vezes opera de forma silenciosa, através de crenças como "não sou bom o suficiente", "não mereço" ou "o que os outros pensam é mais importante do que o que eu sinto".',
      'Essas crenças foram construídas ao longo do tempo, em contextos específicos — e podem ser revisitadas. O processo terapêutico oferece um espaço para identificar essas narrativas internas e construir uma relação mais justa e compassiva consigo mesmo.',
      'Autoconfiança não é ausência de dúvidas; é a capacidade de agir mesmo diante delas.',
    ],
    textoCuidado:
      'Você merece se ver com mais gentileza do que costuma fazer.',
    chamada: 'Quer trabalhar essa relação com você mesmo de forma cuidadosa e gradual?',
  },
  {
    numero: '07',
    titulo: 'Desenvolvimento Pessoal',
    paragrafos: [
      'Crescer emocionalmente não é apenas resolver problemas — é ampliar a capacidade de viver de forma mais plena, alinhada aos próprios valores e ao que realmente importa. Muitas pessoas buscam a terapia não porque estão em crise, mas porque percebem que querem mais: mais clareza, mais equilíbrio, mais presença.',
      'O desenvolvimento pessoal envolve identificar onde estamos, onde queremos chegar e o que nos impede de dar os próximos passos. Inclui também a revisão de crenças, o fortalecimento da resiliência emocional e a construção de metas que façam sentido para a vida real.',
      'A terapia pode ser uma aliada poderosa nesse processo — não como um caminho pronto, mas como um espaço de reflexão e descoberta.',
    ],
    textoCuidado:
      'Crescer é um processo, não um destino. E cada passo tem seu valor.',
    chamada: 'Que objetivos você quer trabalhar na sua jornada de desenvolvimento?',
  },
  {
    numero: '08',
    titulo: 'Relação com a Comida e Imagem Corporal',
    paragrafos: [
      'A forma como nos relacionamos com a comida vai muito além do aspecto nutricional. Para muitas pessoas, o alimento está carregado de emoções: pode ser conforto, controle, culpa, recompensa ou punição. Essa relação complexa pode impactar a saúde emocional e a qualidade de vida de maneira significativa.',
      'A insatisfação com o próprio corpo — alimentada por padrões externos nem sempre saudáveis — pode gerar sofrimento real: vergonha, comparação constante, dificuldade de se sentir bem consigo mesmo. Esses temas merecem ser acolhidos com cuidado e sem julgamento.',
      'O acompanhamento psicológico pode ajudar a explorar as emoções envolvidas nessa relação, promovendo mais consciência e compaixão no olhar para si mesmo. Em casos que envolvam condições de saúde específicas, pode ser indicado um trabalho conjunto com outros profissionais.',
    ],
    textoCuidado:
      'Seu corpo merece cuidado — e sua relação com ele merece atenção e gentileza.',
    chamada: 'Quer conversar sobre como a psicologia pode contribuir para essa área da sua vida?',
  },
  {
    numero: '09',
    titulo: 'Relacionamentos Abusivos',
    paragrafos: [
      'Reconhecer que um relacionamento é prejudicial pode ser um processo lento e doloroso. Comportamentos como controle, desqualificação, isolamento, manipulação emocional ou violência — em suas diversas formas — nem sempre são fáceis de identificar, especialmente quando há afeto envolvido.',
      'Quem vive ou viveu em relacionamentos abusivos frequentemente carrega sentimentos de confusão, culpa, vergonha ou medo. É importante dizer: o que aconteceu não é sua culpa. E você não precisa passar por isso sozinha(o).',
      'O espaço terapêutico é um lugar seguro para processar essas experiências, reconstruir a autoestima e os vínculos, e encontrar caminhos para relações mais saudáveis. Se você estiver em situação de risco, busque também suporte das redes de proteção disponíveis.',
    ],
    textoCuidado:
      'Você merece relações que te fortaleçam, não que te diminuam.',
    chamada: 'Se precisar de um espaço seguro para falar sobre isso, estou aqui.',
  },
];

export default function DemandasPage() {
  useEffect(() => {
    document.title = 'Demandas Trabalhadas | Psicóloga Patrícia Perlati — Piracicaba';
  }, []);

  return (
    <>
      <PageHero
        label="Áreas de atuação"
        title="Demandas trabalhadas"
        subtitle="Conheça os temas que podem ser trabalhados no processo terapêutico"
      />

      {/* Grid Editorial de Demandas */}
      {demandas.map((demanda, index) => {
        const isEven = index % 2 === 0;
        const bg = isEven ? 'bg-[#F8F6F1]' : 'bg-white';

        return (
          <section key={demanda.numero} className={`${bg} py-12 sm:py-16 md:py-20 px-5 sm:px-6 md:px-0 border-b border-beige/60 last:border-b-0`}>
            <div className="container mx-auto max-w-5xl">
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 md:gap-16 items-start`}
              >
                {/* Número decorativo — alterna lado */}
                <div
                  className={`hidden md:flex items-start justify-center md:col-span-3 ${
                    isEven ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <span
                    className="font-display select-none leading-none"
                    style={{
                      fontSize: '7rem',
                      color: 'rgba(120,129,108,0.15)',
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    {demanda.numero}
                  </span>
                </div>

                {/* Conteúdo */}
                <div
                  className={`md:col-span-9 ${
                    isEven ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <AnimatedSection direction="up" delay={0.1}>
                    {/* Número mobile */}
                    <span
                      className="block md:hidden font-display select-none mb-1"
                      style={{
                        fontSize: '3rem',
                        color: 'rgba(120,129,108,0.2)',
                        fontWeight: 400,
                        lineHeight: 1,
                      }}
                    >
                      {demanda.numero}
                    </span>

                    <h2
                      className="font-display text-2xl sm:text-3xl text-[#354337] mb-3 sm:mb-4"
                      style={{ fontWeight: 400 }}
                    >
                      {demanda.titulo}
                    </h2>

                    {/* Linha decorativa */}
                    <div
                      className="mb-4 sm:mb-6"
                      style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
                    />

                    <div className="space-y-3 sm:space-y-4">
                      {demanda.paragrafos.map((p, i) => (
                        <p
                          key={i}
                          className="font-body text-[#756B60] leading-relaxed text-sm sm:text-base"
                          style={{ fontWeight: 300 }}
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Texto acolhedor */}
                    <p
                      className="mt-4 sm:mt-6 font-body text-[#354337] italic text-sm sm:text-base"
                      style={{ fontWeight: 300 }}
                    >
                      {demanda.textoCuidado}
                    </p>

                    {/* Chamada */}
                    <p
                      className="mt-2 sm:mt-3 font-body text-xs sm:text-sm text-[#78816C]"
                      style={{ fontWeight: 400 }}
                    >
                      {demanda.chamada}
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Aviso Ético */}
      <section className="bg-[#354337] py-14 px-6">
        <AnimatedSection direction="up">
          <div className="container mx-auto max-w-3xl text-center">
            <p
              className="font-body text-[#F8F6F1] leading-relaxed text-sm md:text-base"
              style={{ fontWeight: 300 }}
            >
              O acompanhamento psicológico não substitui avaliação e tratamento médico. Os temas apresentados têm caráter informativo e educativo. Cada processo é único e construído individualmente.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Final */}
      <section className="bg-[#EDE6DC] py-14 sm:py-20 px-5 sm:px-6">
        <AnimatedSection direction="up">
          <div className="container mx-auto max-w-2xl text-center">
            <p
              className="font-body text-xs tracking-widest uppercase text-[#78816C] mb-3 sm:mb-4"
            >
              Próximo passo
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl text-[#354337] mb-3 sm:mb-4 leading-tight"
              style={{ fontWeight: 300 }}
            >
              Pronta(o) para começar?
            </h2>
            <div
              className="mx-auto mb-4 sm:mb-6"
              style={{ width: 44, height: 1, backgroundColor: '#78816C' }}
            />
            <p
              className="font-body text-sm sm:text-base text-[#756B60] mb-8 sm:mb-10 leading-relaxed"
              style={{ fontWeight: 300 }}
            >
              Dê o primeiro passo. Entre em contato e vamos conversar sobre como o acompanhamento psicológico pode fazer sentido para você.
            </p>
            <Link
              to="/contato"
              className="btn-primary w-full sm:w-auto text-center justify-center text-xs tracking-widest uppercase"
            >
              Entre em contato
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
