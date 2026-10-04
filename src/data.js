import fachada from './assets/fotos/fachada-tiggo7.jpg'
import tiggoTraseiraFachada from './assets/fotos/tiggo7-traseira-fachada.jpg'
import tiggoTraseira from './assets/fotos/tiggo7-traseira.jpg'
import tiggoInterna from './assets/fotos/tiggo7-visao-interna.jpg'
import bydLateral from './assets/fotos/byd-lateral.jpg'
import bydTraseira from './assets/fotos/byd-traseira.jpg'
import golMotor from './assets/fotos/gol-motor.jpg'
import residencial from './assets/fotos/residencial-janela.jpg'
import multEtios from './assets/fotos/multimidia-etios.jpg'
import multFrontier from './assets/fotos/multimidia-frontier.jpg'
import frontierPainel from './assets/fotos/frontier-painel.jpg'

export const PHOTOS = { fachada, tiggoTraseiraFachada, tiggoInterna }

export const BUSINESS = {
  name: "Folha's Film's Som e Acessórios Automotivos",
  short: "Folha's Film's",
  owner: 'Claudiney',
  whatsapp: '5531986126061',
  whatsappLabel: '(31) 98612-6061',
  instagram: 'https://www.instagram.com/claudineyfolha/',
  instagramHandle: '@claudineyfolha',
  address: 'R. Raimundo Gomes de Araújo, 15',
  district: 'Parque Xangri-Lá, Contagem/MG',
  cep: '32186-070',
  hours: [['Horário', 'combinado pelo WhatsApp'], ['Atendimento', 'na loja ou na sua casa']],
  rating: '4,8',
  reviews: 132,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Folha's%20Film's%20som%20e%20acess%C3%B3rios%20automotivos&query_place_id=ChIJ85gLXCqSpgARj9QKxZEqXOg",
  mapsEmbed: 'https://maps.google.com/maps?q=-19.8445982,-44.021332&z=16&output=embed',
}

export const waLink = (text) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`

export const SERVICES = [
  {
    id: 'insulfilm',
    icon: 'Sun',
    title: 'Insulfilm automotivo',
    text: 'Películas Carbon com ótima visibilidade de dentro e de fora. Menos calor, mais privacidade e o carro com outra cara.',
    tags: ['G5', 'G20', 'Carbon'],
  },
  {
    id: 'som',
    icon: 'Speaker',
    title: 'Som automotivo',
    text: 'Instalação de alto-falantes, módulos e subwoofer com acabamento caprichado e sem fio aparente.',
    tags: ['Alto-falantes', 'Módulo', 'Sub'],
  },
  {
    id: 'multimidia',
    icon: 'MonitorSmartphone',
    title: 'Multimídia',
    text: 'Central multimídia instalada com capricho, integrada ao painel do seu carro.',
    tags: ['Android Auto', 'CarPlay', 'Câmera de ré'],
  },
  {
    id: 'led',
    icon: 'Lightbulb',
    title: 'Lâmpadas e LED',
    text: 'Troca de lâmpadas de farol, lanterna e interna por LED. Mais luz e visual moderno.',
    tags: ['Farol', 'Interna', 'Lanterna'],
  },
  {
    id: 'envelopamento',
    icon: 'Palette',
    title: 'Envelopamento e mudança de cor',
    text: 'Mude a cor do carro, do teto ou dos detalhes sem mexer na pintura original.',
    tags: ['Teto', 'Retrovisor', 'Carro inteiro'],
  },
  {
    id: 'plotagem',
    icon: 'Truck',
    title: 'Plotagem em carros e móveis',
    text: 'Plotagem em carros, geral ou parcial, e também em eletrodomésticos, armários e guarda-roupas.',
    tags: ['Carro geral ou parcial', 'Eletrodomésticos', 'Armários'],
  },
]

// Tons de exemplo: confirmar com a loja quais trabalha
export const TINTS = [
  { id: 'g50', label: 'G50', desc: 'Clarinha. Reduz o calor e mantém o visual original.', opacity: 0.35 },
  { id: 'g35', label: 'G35', desc: 'Equilíbrio entre conforto e visibilidade.', opacity: 0.58 },
  { id: 'g20', label: 'G20', desc: 'Mais privacidade, o tom mais pedido.', opacity: 0.8 },
  { id: 'g5', label: 'G5', desc: 'Escurecimento máximo, privacidade total.', opacity: 0.94 },
]

export const BOOKING_SERVICES = [
  'Insulfilm',
  'Som',
  'Multimídia',
  'Lâmpadas / LED',
  'Envelopamento',
  'Outro',
]

export const PERIODS = ['Manhã', 'Tarde', 'Noite', 'Fim de semana']

export const GALLERY = [
  { car: 'Chery Tiggo 7 Turbo', cat: 'Insulfilm', desc: 'Película em todos os vidros, na frente da loja', img: tiggoTraseiraFachada },
  { car: 'Chery Tiggo 7 Turbo', cat: 'Insulfilm', desc: 'Acabamento escuro e uniforme em todo o carro', img: tiggoTraseira },
  { car: 'Visão de dentro', cat: 'Insulfilm', desc: 'Com a película, de dentro você continua enxergando tudo', img: tiggoInterna },
  { car: 'SUV BYD', cat: 'Insulfilm', desc: 'Aplicação de película em carro zero', img: bydLateral },
  { car: 'SUV BYD', cat: 'Insulfilm', desc: 'Vidro traseiro com película', img: bydTraseira },
  { car: 'Toyota Etios', cat: 'Multimídia', desc: 'Central multimídia com tela grande instalada no painel', img: multEtios },
  { car: 'Nissan Frontier', cat: 'Multimídia', desc: 'Multimídia instalada com acabamento de fábrica', img: multFrontier },
  { car: 'Nissan Frontier', cat: 'Multimídia', desc: 'Painel completo após a instalação', img: frontierPainel },
  { car: 'Película residencial', cat: 'Residencial', desc: 'Janela com película: menos calor e mais privacidade em casa', img: residencial },
  { car: 'VW Gol', cat: 'Serviços', desc: 'Serviço na parte elétrica do carro', img: golMotor },
]

export const VIDEOS = [
  { src: 'videos/video-1.mp4#t=1', title: 'Película no SUV BYD', desc: 'Volta completa no carro depois da aplicação.' },
  { src: 'videos/video-2.mp4#t=3', title: 'Detalhe do acabamento', desc: 'De perto: película lisa e rente à borracha.' },
]

export const REVIEWS = [
  {
    name: 'Nayara A.',
    when: 'Insulfilm, lâmpadas e som',
    text: 'Trabalho impecável, o valor mais em conta que encontrei, e atende até mais tarde. Virei cliente.',
  },
  {
    name: 'Luan M.',
    when: 'Multimídia e dois sons',
    text: 'Tudo certinho e com muito capricho. Ainda me atendeu num domingo. Recomendo muito!',
  },
  {
    name: 'Pedro H.',
    when: 'Insulfilm',
    text: 'Trabalho caprichado, preço sensacional, e a visibilidade de dentro e de fora surpreende.',
  },
  {
    name: 'Antony S.',
    when: 'Película na Oroch',
    text: 'Preço muito bom e atendimento no local que eu escolhi. Gostei e vou indicar.',
  },
  {
    name: 'Rodrigo M.',
    when: 'Atendimento em casa',
    text: 'Profissional atencioso e muito bom de serviço, e ainda atende no conforto de casa.',
  },
  {
    name: 'Angelo',
    when: 'Serviço com urgência',
    text: 'Me atendeu fora do horário comercial e ficou muito bem feito. Preço justo e imbatível.',
  },
]

export const FAQ = [
  {
    q: 'Vocês atendem à noite e no fim de semana?',
    a: 'O horário é combinado pelo WhatsApp, inclusive à noite e no fim de semana, para você não precisar faltar no trabalho.',
  },
  {
    q: 'Vocês vão até a minha casa?',
    a: 'Sim, aplicamos a película no local que for melhor para você. Combine pelo WhatsApp o endereço e o horário.',
  },
  {
    q: 'Qual película é permitida por lei?',
    a: 'A lei define limites diferentes para para-brisa, vidros dianteiros e traseiros. Na hora do orçamento indicamos o tom certo para cada vidro.',
  },
  {
    q: 'Quanto tempo leva para aplicar o insulfilm?',
    a: 'Depende do carro e da quantidade de vidros. Informamos o tempo certinho no orçamento.',
  },
  {
    q: 'Posso lavar o carro depois?',
    a: 'Na entrega explicamos todos os cuidados com a película e quanto tempo esperar para abrir os vidros e lavar.',
  },
]
