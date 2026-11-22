// ============================================================
// ARQUIVO CENTRAL DE CONFIGURAÇÃO — PATRÍCIA PERLATI
// Córtex Studios
// Atualize este arquivo com as informações definitivas da profissional.
// ============================================================

export const professional = {
  name: 'Patrícia Perlati',
  title: 'Psicóloga Clínica',
  crp: 'CRP 06/62173',
  city: 'Piracicaba',
  state: 'SP',
  location: 'Piracicaba — SP',

  // Contato
  whatsapp: {
    number: '5519981956997',
    display: '(19) 98195-6997',
    // Mensagem inicial contextualizada para o botão flutuante
    defaultMessage: 'Olá! Gostaria de saber mais sobre o atendimento psicológico.',
  },
  email: 'patriciaperlatipsicologa@hotmail.com',

  // Endereço — preencher com dados definitivos antes do lançamento
  address: {
    street: null, // ex.: 'Rua das Flores, 123'
    neighborhood: null, // ex.: 'Centro'
    city: 'Piracicaba',
    state: 'SP',
    cep: null, // ex.: '13400-000'
    // Coordenadas para o mapa — preencher antes do lançamento
    lat: null,
    lng: null,
    mapsUrl: null, // ex.: 'https://maps.google.com/?q=...'
  },

  // Redes sociais
  social: {
    instagram: 'https://www.instagram.com/patriciaperlati.psicologa/',
    facebook: 'https://www.facebook.com/patriciaperlatipsicologa/',
    whatsapp: 'https://wa.me/5519981956997',
  },

  // Informações profissionais confirmadas
  bio: {
    activeSince: '2003',
    education: 'Universidade do Sagrado Coração',
    // Experiências confirmadas publicamente
    experiences: [
      'APAE de Piracicaba',
    ],
    // Públicos atendidos confirmados
    audiences: ['Crianças', 'Adolescentes', 'Adultos'],
    // Modalidades — confirmar antes de publicar
    modalities: {
      presencial: true, // confirmar
      online: null,     // null = a confirmar; true/false após confirmação
    },
  },

  // Abordagem terapêutica — sujeita à validação final da profissional
  approach: {
    name: null, // ex.: 'Psicanálise' — preencher após confirmação
    description: null,
  },

  // SEO e metadados
  seo: {
    siteUrl: 'https://patriciaperlati.com.br', // atualizar com domínio definitivo
    keywords: [
      'Psicóloga em Piracicaba',
      'Psicóloga clínica Piracicaba SP',
      'Atendimento psicológico em Piracicaba',
      'Psicoterapia em Piracicaba',
      'Patrícia Perlati psicóloga',
      'CRP 06/62173',
    ],
  },

  // Fotos oficiais do projeto
  photos: {
    profile: '/assets/patricia/patricia-perlati-profissional-01.jpg',
    hero: '/assets/patricia/patricia-perlati-profissional-01.jpg',
    about: '/assets/patricia/patricia-perlati-profissional-02.jpg',
    office1: '/assets/consultorio/consultorio-poltrona.jpg',
    office2: '/assets/consultorio/sessao-clinica.jpg',
    childCare: '/assets/atendimentos/atendimento-infantil.jpg',
    teenCare: '/assets/atendimentos/atendimento-adolescentes.jpg',
    adultCare: '/assets/atendimentos/atendimento-adultos.jpg',
  },

  // Informações pendentes — não publicar como definitivas
  pending: {
    address: true,
    officePhotos: false,
    profilePhoto: false,
    onlineModality: true,
    therapeuticApproach: true,
  },
} as const;

// WhatsApp URL com mensagem
export function whatsappUrl(message?: string): string {
  const msg = encodeURIComponent(message ?? professional.whatsapp.defaultMessage);
  return `https://wa.me/${professional.whatsapp.number}?text=${msg}`;
}

