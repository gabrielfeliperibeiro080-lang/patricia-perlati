import { useState } from 'react'
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  Info
} from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { professional, whatsappUrl } from '../config/professional'
import { Link } from 'react-router-dom'

export default function ContatoPage() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [concordaTermos, setConcordaTermos] = useState(false)
  const [erros, setErros] = useState<{ nome?: string; mensagem?: string; termos?: string }>({})

  const validarFormulario = () => {
    const novosErros: { nome?: string; mensagem?: string; termos?: string } = {}

    if (!nome.trim()) {
      novosErros.nome = 'Por favor, informe seu nome.'
    } else if (nome.trim().length < 3) {
      novosErros.nome = 'O nome deve ter pelo menos 3 caracteres.'
    }

    if (!mensagem.trim()) {
      novosErros.mensagem = 'Por favor, digite uma mensagem.'
    } else if (mensagem.trim().length < 10) {
      novosErros.mensagem = 'A mensagem deve conter pelo menos 10 caracteres.'
    }

    if (!concordaTermos) {
      novosErros.termos = 'É necessário concordar com a política de privacidade e envio via WhatsApp.'
    }

    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validarFormulario()) {
      return
    }

    // Formata o texto para envio via WhatsApp
    let textoWhatsApp = `Olá, Patrícia! Meu nome é *${nome.trim()}*.`
    if (telefone.trim()) {
      textoWhatsApp += `\nMeu telefone de contato: ${telefone.trim()}`
    }
    textoWhatsApp += `\n\n*Mensagem:*\n${mensagem.trim()}`

    const url = `https://wa.me/${professional.whatsapp.number}?text=${encodeURIComponent(textoWhatsApp)}`
    
    // Abre WhatsApp diretamente
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-offwhite min-h-screen">
      <PageHero
        label="Fale comigo"
        title="Entre em contato"
        subtitle="Dê o primeiro passo em direção ao autoconhecimento e ao cuidado com suas emoções. Estou à disposição para acolher você."
      />

      <section className="section-padding">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            
            {/* Coluna Esquerda — Informações de Contato (5 cols) */}
            <div className="lg:col-span-5 space-y-8 sm:space-y-12">
              <AnimatedSection direction="up">
                <span className="section-label">Canais Diretos</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-olive-dark font-light mb-4 sm:mb-6">
                  Um canal aberto para suas dúvidas e agendamentos
                </h2>
                <p className="text-mocha font-light leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base">
                  O primeiro contato é um momento para esclarecer questões sobre o funcionamento dos atendimentos, 
                  consultar disponibilidade de horários e alinhar as primeiras informações.
                </p>

                {/* Card WhatsApp em destaque */}
                <div className="p-5 sm:p-8 bg-beige/60 border border-olive/20 rounded-none mb-8 sm:mb-10 transition-all hover:border-olive/40">
                  <div className="flex items-center gap-3 text-olive-dark font-display text-xl sm:text-2xl font-light mb-2">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-olive" />
                    WhatsApp Direto
                  </div>
                  <p className="text-[11px] sm:text-xs uppercase tracking-widest text-mocha/70 mb-3 sm:mb-4 font-medium">
                    Canal prioritário para agendamento
                  </p>
                  <p className="text-lg sm:text-xl font-display text-olive-dark mb-4 sm:mb-6">
                    {professional.whatsapp.display}
                  </p>
                  <a
                    href={whatsappUrl('Olá, Patrícia! Gostaria de informações sobre consulta psicológica.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-xs"
                  >
                    <span>Conversar no WhatsApp</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Lista de Contatos */}
                <div className="space-y-6 pt-4 border-t border-olive/10">
                  {/* E-mail */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-beige flex items-center justify-center shrink-0 text-olive-dark">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-widest text-olive uppercase font-body">E-mail</h3>
                      <a 
                        href={`mailto:${professional.email}`}
                        className="text-mocha hover:text-olive-dark transition-colors text-sm break-all"
                      >
                        {professional.email}
                      </a>
                    </div>
                  </div>

                  {/* Redes Sociais */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-beige flex items-center justify-center shrink-0 text-olive-dark">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-widest text-olive uppercase font-body">Instagram</h3>
                      <a 
                        href={professional.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mocha hover:text-olive-dark transition-colors text-sm inline-flex items-center gap-1"
                      >
                        @patriciaperlati.psicologa
                        <ExternalLink className="w-3 h-3 text-mocha/50" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-beige flex items-center justify-center shrink-0 text-olive-dark">
                      <FacebookIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-widest text-olive uppercase font-body">Facebook</h3>
                      <a 
                        href={professional.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mocha hover:text-olive-dark transition-colors text-sm inline-flex items-center gap-1"
                      >
                        Patrícia Perlati Psicóloga
                        <ExternalLink className="w-3 h-3 text-mocha/50" />
                      </a>
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-beige flex items-center justify-center shrink-0 text-olive-dark">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold tracking-widest text-olive uppercase font-body">Cidade</h3>
                      <p className="text-mocha text-sm">
                        {professional.location}
                      </p>
                      <p className="text-xs text-mocha/60 mt-0.5">
                        Endereço exato disponibilizado após confirmação do agendamento
                      </p>
                    </div>
                  </div>
                </div>

                {/* Nota de Sigilo */}
                <div className="mt-8 p-5 bg-offwhite border-l-2 border-olive flex items-start gap-3 text-xs text-mocha leading-relaxed">
                  <ShieldCheck className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                  <span>
                    Todas as comunicações respeitam rigorosamente o Código de Ética Profissional do Psicólogo e o sigilo de informações.
                  </span>
                </div>
              </AnimatedSection>
            </div>

            {/* Coluna Direita — Formulário de Contato Integrado ao WhatsApp (7 cols) */}
            <div className="lg:col-span-7">
              <AnimatedSection direction="up" delay={0.15}>
                <div className="bg-white p-5 sm:p-8 md:p-12 shadow-sm border border-olive/10">
                  <div className="mb-6 sm:mb-8">
                    <span className="section-label">Mensagem Rápida</span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-olive-dark font-light mb-2 sm:mb-3">
                      Envie uma solicitação
                    </h2>
                    <p className="text-xs sm:text-sm text-mocha font-light leading-relaxed">
                      Preencha os campos abaixo. Ao enviar, você será direcionado ao WhatsApp com a mensagem estruturada e pronta para início do atendimento.
                    </p>
                  </div>

                  {/* Alerta ético sobre dados clínicos */}
                  <div className="mb-6 sm:mb-8 p-3.5 sm:p-4 bg-beige/40 border border-olive/15 rounded flex items-start gap-3">
                    <Info className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                    <p className="text-[11px] sm:text-xs text-mocha/80 leading-relaxed">
                      <strong>Aviso de privacidade:</strong> Não compartilhe dados clínicos profundos, históricos médicos sensíveis ou situações de urgência neste formulário. Questões detalhadas serão acolhidas no espaço seguro da sessão.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Campo Nome */}
                    <div>
                      <label htmlFor="nome" className="block text-xs font-medium uppercase tracking-widest text-olive-dark mb-2">
                        Seu Nome Completo <span className="text-olive">*</span>
                      </label>
                      <input
                        id="nome"
                        type="text"
                        value={nome}
                        onChange={(e) => {
                          setNome(e.target.value)
                          if (erros.nome) setErros({ ...erros, nome: undefined })
                        }}
                        placeholder="Ex: Ana Silva"
                        className={`w-full px-4 py-3.5 bg-offwhite border text-sm text-mocha focus:outline-none transition-colors ${
                          erros.nome ? 'border-red-400 focus:border-red-500' : 'border-olive/20 focus:border-olive-dark'
                        }`}
                      />
                      {erros.nome && (
                        <p className="text-xs text-red-600 mt-1.5">{erros.nome}</p>
                      )}
                    </div>

                    {/* Campo Telefone */}
                    <div>
                      <label htmlFor="telefone" className="block text-xs font-medium uppercase tracking-widest text-olive-dark mb-2">
                        Telefone / WhatsApp <span className="text-mocha/50 lowercase font-normal">(opcional)</span>
                      </label>
                      <input
                        id="telefone"
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="(19) 90000-0000"
                        className="w-full px-4 py-3.5 bg-offwhite border border-olive/20 text-sm text-mocha focus:outline-none focus:border-olive-dark transition-colors"
                      />
                    </div>

                    {/* Campo Mensagem */}
                    <div>
                      <label htmlFor="mensagem" className="block text-xs font-medium uppercase tracking-widest text-olive-dark mb-2">
                        Mensagem <span className="text-olive">*</span>
                      </label>
                      <textarea
                        id="mensagem"
                        rows={5}
                        value={mensagem}
                        onChange={(e) => {
                          setMensagem(e.target.value)
                          if (erros.mensagem) setErros({ ...erros, mensagem: undefined })
                        }}
                        placeholder="Olá, gostaria de saber sobre horários para atendimento presencial..."
                        className={`w-full px-4 py-3.5 bg-offwhite border text-sm text-mocha focus:outline-none transition-colors resize-none ${
                          erros.mensagem ? 'border-red-400 focus:border-red-500' : 'border-olive/20 focus:border-olive-dark'
                        }`}
                      />
                      <div className="flex justify-between items-center mt-1.5">
                        {erros.mensagem ? (
                          <p className="text-xs text-red-600">{erros.mensagem}</p>
                        ) : (
                          <span />
                        )}
                        <span className="text-[11px] text-mocha/50">
                          {mensagem.length}/500 caracteres
                        </span>
                      </div>
                    </div>

                    {/* Checkbox de consentimento LGPD */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={concordaTermos}
                          onChange={(e) => {
                            setConcordaTermos(e.target.checked)
                            if (erros.termos) setErros({ ...erros, termos: undefined })
                          }}
                          className="mt-1 h-4 w-4 rounded border-olive/30 text-olive-dark focus:ring-olive"
                        />
                        <span className="text-xs text-mocha leading-relaxed select-none">
                          Concordo com a{' '}
                          <Link to="/privacidade" className="underline text-olive-dark hover:text-olive">
                            Política de Privacidade
                          </Link>{' '}
                          e estou ciente de que as informações deste formulário serão abertas no aplicativo do WhatsApp para prosseguimento do contato.
                        </span>
                      </label>
                      {erros.termos && (
                        <p className="text-xs text-red-600 mt-1.5">{erros.termos}</p>
                      )}
                    </div>

                    {/* Botão de Envio */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn-primary w-full justify-center group"
                      >
                        <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>Enviar via WhatsApp</span>
                      </button>
                      <p className="text-center text-[11px] text-mocha/50 mt-3">
                        Não gravamos dados clínicos em servidores. O envio é direto e seguro.
                      </p>
                    </div>
                  </form>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Seção Mapa e Localização Preparada */}
      <section className="py-20 bg-beige/40 border-t border-olive/10">
        <div className="editorial-container">
          <AnimatedSection direction="up">
            <div className="max-w-2xl mb-10">
              <span className="section-label">Consultório</span>
              <h2 className="text-3xl font-display text-olive-dark font-light mb-4">
                Localização em Piracicaba — SP
              </h2>
              <p className="text-mocha font-light text-sm leading-relaxed">
                O consultório está localizado em região tranquila e acessível da cidade de Piracicaba, 
                planejado para oferecer conforto, isolamento acústico e privacidade durante cada atendimento.
              </p>
            </div>

            {/* Moldura Editorial da Localização e Consultório */}
            <div className="relative w-full h-[400px] md:h-[460px] bg-beige border border-olive/20 overflow-hidden flex items-center justify-center p-6 md:p-8 text-center group">
              <img
                src="/assets/consultorio/consultorio-poltrona.jpg"
                alt="Ambiente acolhedor do consultório de psicologia em Piracicaba"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-olive-dark/45 pointer-events-none" />
              
              <div className="relative z-10 max-w-md bg-white/95 backdrop-blur-md p-8 border border-white/60 shadow-xl">
                <MapPin className="w-8 h-8 text-olive mx-auto mb-3" />
                <h3 className="font-display text-2xl text-olive-dark font-light mb-2">
                  Atendimento Presencial sob Agendamento
                </h3>
                <p className="text-xs text-mocha font-light leading-relaxed mb-5">
                  Piracicaba, São Paulo. Ambiente reservado, planejado para garantir conforto térmico, isolamento acústico e total privacidade durante cada encontro terapêutico.
                </p>
                <div className="inline-flex items-center gap-2 text-[11px] font-medium text-olive uppercase tracking-widest bg-beige/60 px-4 py-2 border border-olive/20">
                  <Clock className="w-3.5 h-3.5" />
                  Horários flexíveis mediante consulta prévia
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
