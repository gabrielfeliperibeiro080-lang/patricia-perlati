import { Link } from 'react-router-dom';
import { MessageCircle, Mail } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { professional, whatsappUrl } from '../config/professional';

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Atendimentos', to: '/atendimentos' },
  { label: 'Demandas', to: '/demandas' },
  { label: 'Como Funciona', to: '/como-funciona' },
  { label: 'Contato', to: '/contato' },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#354337', color: '#F8F6F1' }}>
      {/* Main footer content */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <span
              className="font-display text-2xl sm:text-3xl"
              style={{ fontWeight: 300, color: '#F8F6F1', lineHeight: 1.15 }}
            >
              {professional.name}
            </span>
            <div className="flex flex-col gap-1 mt-1">
              <span className="font-body text-xs sm:text-sm" style={{ color: 'rgba(248,246,241,0.75)' }}>
                {professional.title}
              </span>
              <span className="font-body text-xs sm:text-sm" style={{ color: 'rgba(248,246,241,0.75)' }}>
                {professional.crp}
              </span>
              <span className="font-body text-xs sm:text-sm" style={{ color: 'rgba(248,246,241,0.75)' }}>
                {professional.location}
              </span>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-body text-[11px] sm:text-xs tracking-widest uppercase font-medium" style={{ color: 'rgba(248,246,241,0.5)' }}>
              Navegação
            </h3>
            <nav className="grid grid-cols-2 sm:flex sm:flex-col gap-2 sm:gap-2.5">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-body text-xs sm:text-sm py-1 transition-colors duration-200"
                  style={{ color: 'rgba(248,246,241,0.75)' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#F8F6F1')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(248,246,241,0.75)')}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Social & Contact */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-body text-[11px] sm:text-xs tracking-widest uppercase font-medium" style={{ color: 'rgba(248,246,241,0.5)' }}>
              Contato
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Instagram */}
              <a
                href={professional.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-xs sm:text-sm py-1 transition-colors duration-200 group"
                style={{ color: 'rgba(248,246,241,0.75)' }}
                aria-label="Instagram de Patrícia Perlati"
              >
                <InstagramIcon
                  size={18}
                  className="group-hover:opacity-100 transition-opacity"
                />
                <span className="group-hover:text-offwhite transition-colors" style={{ color: 'rgba(248,246,241,0.75)' }}>
                  @patriciaperlati.psicologa
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-xs sm:text-sm py-1 transition-colors duration-200 group"
                aria-label="WhatsApp de Patrícia Perlati"
              >
                <MessageCircle
                  size={18}
                  style={{ color: '#F8F6F1', opacity: 0.7 }}
                  className="group-hover:opacity-100 transition-opacity"
                />
                <span className="group-hover:text-offwhite transition-colors" style={{ color: 'rgba(248,246,241,0.75)' }}>
                  {professional.whatsapp.display}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${professional.email}`}
                className="flex items-center gap-3 font-body text-xs sm:text-sm py-1 transition-colors duration-200 group"
                aria-label="E-mail de Patrícia Perlati"
              >
                <Mail
                  size={18}
                  style={{ color: '#F8F6F1', opacity: 0.7 }}
                  className="group-hover:opacity-100 transition-opacity"
                />
                <span className="group-hover:text-offwhite transition-colors break-all" style={{ color: 'rgba(248,246,241,0.75)' }}>
                  {professional.email}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="container mx-auto px-5 sm:px-6 md:px-12"
        style={{ borderTop: '1px solid rgba(248,246,241,0.15)' }}
      />

      {/* Bottom bar */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <p className="font-body text-[11px] sm:text-xs" style={{ color: 'rgba(248,246,241,0.5)' }}>
          © {currentYear} {professional.name}. Todos os direitos reservados.
        </p>
        <Link
          to="/privacidade"
          className="font-body text-[11px] sm:text-xs py-1 transition-colors duration-200"
          style={{ color: 'rgba(248,246,241,0.5)' }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(248,246,241,0.8)')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(248,246,241,0.5)')}
        >
          Política de Privacidade
        </Link>
      </div>
    </footer>
  );
}
