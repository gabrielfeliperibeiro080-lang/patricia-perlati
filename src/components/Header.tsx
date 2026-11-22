import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { professional, whatsappUrl } from '../config/professional';

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Atendimentos', to: '/atendimentos' },
  { label: 'Demandas', to: '/demandas' },
  { label: 'Como Funciona', to: '/como-funciona' },
  { label: 'Contato', to: '/contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const headerBg = scrolled
    ? 'bg-offwhite/95 backdrop-blur-md shadow-sm border-b border-olive/10'
    : 'bg-transparent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${headerBg}`}
      >
        <div className="container mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <NavLink to="/" className="flex flex-col leading-tight group max-w-[80%] sm:max-w-none">
            <span
              className="font-display text-olive-dark text-[1.35rem] sm:text-2xl transition-opacity duration-200 group-hover:opacity-80 truncate"
              style={{ fontWeight: 300, letterSpacing: '0.01em' }}
            >
              {professional.name}
            </span>
            <span className="font-body text-[10px] sm:text-xs tracking-widest text-olive mt-0.5">
              {professional.title}&nbsp;|&nbsp;{professional.crp}
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'font-body text-xs tracking-widest uppercase transition-colors duration-200 py-1',
                    isActive
                      ? 'text-olive-dark border-b border-olive-dark'
                      : 'text-mocha hover:text-olive-dark',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2.5 -mr-2 text-olive-dark focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full active:bg-olive/10 transition-colors"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-30 flex flex-col justify-between overflow-y-auto pt-24 pb-8 px-6 md:hidden bg-offwhite"
          >
            <nav className="flex flex-col items-center gap-5 my-auto py-4">
              {navLinks.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                  className="w-full text-center"
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      [
                        'font-display text-2xl sm:text-3xl font-light py-2 px-4 block transition-colors duration-200 active:bg-olive/10 rounded',
                        isActive
                          ? 'text-olive-dark font-normal'
                          : 'text-mocha hover:text-olive-dark',
                      ].join(' ')
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}

              {/* Botão rápido de WhatsApp no menu mobile */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * navLinks.length, duration: 0.25 }}
                className="w-full pt-4 max-w-xs"
              >
                <a
                  href={whatsappUrl('Olá, Patrícia! Gostaria de informações sobre agendamento.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-olive-dark text-offwhite text-xs tracking-widest uppercase font-medium shadow-md active:scale-[0.98] transition-transform"
                >
                  <MessageCircle size={16} />
                  Agendar pelo WhatsApp
                </a>
              </motion.div>
            </nav>

            {/* Bottom info */}
            <div className="text-center pt-6 border-t border-olive/10 shrink-0">
              <p className="font-body text-[11px] tracking-widest text-olive uppercase font-medium">
                {professional.title}&nbsp;·&nbsp;{professional.crp}
              </p>
              <p className="font-body text-xs text-mocha/70 mt-1">
                {professional.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
