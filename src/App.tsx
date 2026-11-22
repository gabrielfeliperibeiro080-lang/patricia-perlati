import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SobrePage from './pages/SobrePage'
import AtendimentosPage from './pages/AtendimentosPage'
import DemandasPage from './pages/DemandasPage'
import ComoFuncionaPage from './pages/ComoFuncionaPage'
import ContatoPage from './pages/ContatoPage'
import PrivacidadePage from './pages/PrivacidadePage'
import NotFoundPage from './pages/NotFoundPage'

// Scroll to top ao navegar
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre" element={<SobrePage />} />
          <Route path="atendimentos" element={<AtendimentosPage />} />
          <Route path="demandas" element={<DemandasPage />} />
          <Route path="como-funciona" element={<ComoFuncionaPage />} />
          <Route path="contato" element={<ContatoPage />} />
          <Route path="privacidade" element={<PrivacidadePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
