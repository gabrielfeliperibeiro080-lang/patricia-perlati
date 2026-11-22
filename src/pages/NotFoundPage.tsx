import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home, MessageCircle } from 'lucide-react'
import { professional, whatsappUrl } from '../config/professional'

export default function NotFoundPage() {
  return (
    <div className="bg-offwhite min-h-[85vh] flex items-center justify-center relative overflow-hidden py-24 px-6">
      
      {/* 404 tipográfico gigante decorativo em segundo plano */}
      <div 
        className="absolute select-none pointer-events-none font-display font-light text-olive/10 text-[180px] sm:text-[260px] md:text-[340px] lg:text-[400px] leading-none tracking-tighter"
        aria-hidden="true"
      >
        404
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 max-w-xl mx-auto text-center space-y-6">
        <span className="section-label">Página não encontrada</span>
        
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-olive-dark font-light leading-tight">
          O caminho que você procura não foi encontrado
        </h1>

        <div className="w-12 h-px bg-olive mx-auto my-6 opacity-60" />

        <p className="text-mocha font-light text-base md:text-lg leading-relaxed max-w-md mx-auto">
          O link pode ter sido digitado incorretamente, movido ou não estar mais disponível. 
          Convidamos você a retornar à página inicial ou conhecer nossas áreas de atendimento.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="btn-primary w-full sm:w-auto justify-center text-xs"
          >
            <Home className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </Link>

          <Link
            to="/atendimentos"
            className="btn-outline w-full sm:w-auto justify-center text-xs"
          >
            <span>Ver Atendimentos</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-olive/10 text-xs text-mocha/70">
          Precisa de orientação imediata?{' '}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-olive-dark underline hover:text-olive inline-flex items-center gap-1 font-medium"
          >
            Converse pelo WhatsApp
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}

