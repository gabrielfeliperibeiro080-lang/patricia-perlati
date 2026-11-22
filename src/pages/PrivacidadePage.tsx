import React from 'react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { professional } from '../config/professional'
import { ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PrivacidadePage() {
  return (
    <div className="bg-offwhite min-h-screen">
      <PageHero
        label="Transparência e Conformidade"
        title="Política de Privacidade"
        subtitle="Conheça nosso compromisso com a proteção de seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o Código de Ética do Psicólogo."
      />

      <section className="section-padding">
        <div className="editorial-container max-w-4xl">
          <AnimatedSection direction="up">
            
            {/* Header explicativo da política */}
            <div className="p-8 bg-beige/50 border-l-4 border-olive mb-12">
              <div className="flex items-center gap-3 text-olive-dark font-display text-2xl font-light mb-2">
                <ShieldCheck className="w-6 h-6 text-olive" />
                Compromisso com o Sigilo e a Privacidade
              </div>
              <p className="text-sm text-mocha font-light leading-relaxed">
                A atividade em Psicologia Clínica é regida pelo mais estrito dever ético de confidencialidade (Artigo 9º do Código de Ética Profissional do Psicólogo). Esta política explica de que forma tratamos as informações fornecidas por visitantes e pacientes neste site.
              </p>
              <div className="mt-4 text-xs text-mocha/70 font-mono">
                Última atualização: Novembro de 2024 · Piracicaba, SP
              </div>
            </div>

            {/* Conteúdo formatado */}
            <div className="space-y-12 text-mocha font-light leading-relaxed">
              
              {/* 1. Identificação do Controlador */}
              <div>
                <h2 className="font-display text-2xl text-olive-dark font-light mb-4 flex items-center gap-2">
                  <span className="text-olive font-mono text-sm">01.</span> Identificação do Controlador
                </h2>
                <p>
                  O presente site institucional é mantido por <strong>{professional.name}</strong>, Psicóloga Clínica devidamente registrada no Conselho Regional de Psicologia de São Paulo sob o número <strong>{professional.crp}</strong>, com atuação na comarca de Piracicaba — SP. Para os fins da Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD), a profissional atua como controladora dos dados pessoais eventualmente fornecidos neste domínio.
                </p>
              </div>

              {/* 2. Coleta de Dados Pessoais */}
              <div>
                <h2 className="font-display text-2xl text-olive-dark font-light mb-4 flex items-center gap-2">
                  <span className="text-olive font-mono text-sm">02.</span> Dados Pessoais Coletados
                </h2>
                <p className="mb-3">
                  Primamos pela minimização de dados. Este site institucional não realiza cadastros públicos, não solicita senhas e não cria perfis de usuários. Os únicos dados que podem ser transmitidos voluntariamente são:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li><strong>Nome completo:</strong> para identificar o interlocutor no momento do contato inicial;</li>
                  <li><strong>Número de telefone/WhatsApp:</strong> para viabilizar o retorno e a troca de mensagens sobre agendamentos;</li>
                  <li><strong>Mensagem de contato:</strong> breve contextualização sobre interesse em atendimento ou dúvidas sobre horários.</li>
                </ul>
                <div className="mt-4 p-4 bg-white border border-olive/15 text-xs text-olive-dark">
                  <strong>Importante:</strong> Solicitamos que nenhum visitante inclua relatos clínicos sensíveis, histórico médico ou diagnósticos no formulário inicial de contato.
                </div>
              </div>

              {/* 3. Finalidade do Tratamento */}
              <div>
                <h2 className="font-display text-2xl text-olive-dark font-light mb-4 flex items-center gap-2">
                  <span className="text-olive font-mono text-sm">03.</span> Finalidade do Tratamento
                </h2>
                <p>
                  Os dados informados destinam-se única e exclusivamente a:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm mt-3">
                  <li>Responder a solicitações de informações sobre o processo psicoterapêutico;</li>
                  <li>Verificar compatibilidade de agenda e disponibilidade de horários;</li>
                  <li>Fornecer orientações preliminares a respeito das consultas em Piracicaba — SP.</li>
                </ul>
                <p className="mt-3">
                  Em nenhuma hipótese os dados fornecidos serão utilizados para envio de publicidade em massa, spam ou listas promocionais.
                </p>
              </div>

              {/* 4. Inexistência de Banco de Dados Web */}
              <div>
                <h2 className="font-display text-2xl text-olive-dark font-light mb-4 flex items-center gap-2">
                  <span className="text-olive font-mono text-sm">04.</span> Armazenamento e Segurança da Informação
                </h2>
                <p>
                  Por decisão de arquitetura técnica e proteção do paciente, <strong>este site não mantém banco de dados online</strong> para armazenamento das mensagens enviadas pelo formulário. O formulário opera como um facilitador de encaminhamento para o aplicativo WhatsApp do dispositivo do usuário. Portanto, nenhuma mensagem enviada permanece salva em servidores web do site.
                </p>
              </div>

              {/* 5. Sigilo Profissional do Psicólogo */}
              <div>
                <h2 className="font-display text-2xl text-olive-dark font-light mb-4 flex items-center gap-2">
                  <span className="text-olive font-mono text-sm">05.</span> Sigilo Profissional e Prontuários
                </h2>
                <p>
                  Caso o contato resulte no efetivo início de um processo psicoterapêutico, as anotações clínicas e os prontuários físicos ou digitais seguirão rigorosamente a <strong>Resolução CFP nº 01/2009</strong> e as normas do Conselho Federal de Psicologia, sendo mantidos sob guarda estrita e inviolável pela profissional, com acesso exclusivo da psicóloga.
                </p>
              </div>

              {/* 6. Compartilhamento de Informações */}
              <div>
                <h2 className="font-display text-2xl text-olive-dark font-light mb-4 flex items-center gap-2">
                  <span className="text-olive font-mono text-sm">06.</span> Compartilhamento com Terceiros
                </h2>
                <p>
                  Não comercializamos, não compartilhamos e não transferimos dados pessoais a empresas de marketing, bureaus de crédito ou outros prestadores de serviços, ressalvadas exclusivamente as hipóteses legais previstas em lei ou ordem judicial formal.
                </p>
              </div>

              {/* 7. Cookies e Tecnologias de Navegação */}
              <div>
                <h2 className="font-display text-2xl text-olive-dark font-light mb-4 flex items-center gap-2">
                  <span className="text-olive font-mono text-sm">07.</span> Cookies e Métricas
                </h2>
                <p>
                  Este site prioriza navegação leve e anônima. Não utilizamos cookies invasivos de rastreamento comportamental de terceiros nem publicidade direcionada. Apenas arquivos técnicos e estritamente necessários para o correto funcionamento da interface podem ser temporariamente manipulados pelo seu próprio navegador.
                </p>
              </div>

              {/* 8. Direitos do Titular (LGPD) */}
              <div>
                <h2 className="font-display text-2xl text-olive-dark font-light mb-4 flex items-center gap-2">
                  <span className="text-olive font-mono text-sm">08.</span> Seus Direitos como Titular
                </h2>
                <p className="mb-3">
                  Nos termos do Artigo 18 da LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm">
                  <li>Confirmação da existência de tratamento;</li>
                  <li>Acesso aos dados coletados;</li>
                  <li>Correção de dados incompletos ou inexatos;</li>
                  <li>Eliminação dos dados pessoais desnecessários ou excessivos;</li>
                  <li>Revogação do consentimento concedido anteriormente.</li>
                </ul>
              </div>

              {/* 9. Canal de Atendimento e Encarregado */}
              <div>
                <h2 className="font-display text-2xl text-olive-dark font-light mb-4 flex items-center gap-2">
                  <span className="text-olive font-mono text-sm">09.</span> Dúvidas e Exercício de Direitos
                </h2>
                <p>
                  Para exercer quaisquer de seus direitos previstos na LGPD ou esclarecer dúvidas a respeito desta Política de Privacidade, você poderá entrar em contato direto através do e-mail oficial:
                </p>
                <p className="mt-3 font-medium text-olive-dark">
                  <a href={`mailto:${professional.email}`} className="underline hover:text-olive">
                    {professional.email}
                  </a>
                </p>
              </div>

              {/* 10. Atualizações desta Política */}
              <div>
                <h2 className="font-display text-2xl text-olive-dark font-light mb-4 flex items-center gap-2">
                  <span className="text-olive font-mono text-sm">10.</span> Alterações e Vigência
                </h2>
                <p>
                  Esta Política de Privacidade poderá ser atualizada periodicamente para refletir eventuais aprimoramentos técnicos ou alterações legislativas. Quaisquer revisões passarão a vigorar imediatamente a partir de sua publicação nesta página.
                </p>
              </div>

            </div>

            {/* Rodapé interno da página com botão voltar */}
            <div className="mt-16 pt-8 border-t border-olive/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-dark hover:text-olive font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar à Página Inicial
              </Link>
              <Link 
                to="/contato"
                className="btn-primary text-xs"
              >
                Entrar em Contato
              </Link>
            </div>

          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

