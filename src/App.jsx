import { useEffect, useState } from 'react'
import {
  Lightbulb, Sun, MonitorSmartphone, Speaker, Palette, Truck, Star, MapPin, Clock,
  ChevronDown, Check, CalendarCheck, Car, Menu, X, Moon, House, HandCoins, UserRound, Store,
} from 'lucide-react'
import Logo from './components/Logo'
import CarTint from './components/CarTint'
import { Instagram, WhatsApp } from './components/BrandIcons'
import {
  BUSINESS, waLink, SERVICES, TINTS, BOOKING_SERVICES, PERIODS, GALLERY, VIDEOS, PHOTOS, REVIEWS, FAQ,
} from './data'

const ICONS = { Lightbulb, Sun, MonitorSmartphone, Speaker, Palette, Truck }
const CAT_ICONS = { Insulfilm: Sun, Som: Speaker, Envelopamento: Palette }

const NAV = [
  ['#servicos', 'Serviços'],
  ['#pelicula', 'Simulador'],
  ['#agendar', 'Agendar'],
  ['#trabalhos', 'Trabalhos'],
  ['#videos', 'Vídeos'],
  ['#avaliacoes', 'Avaliações'],
  ['#contato', 'Contato'],
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function WaButton({ text, children, variant = 'primary', className = '' }) {
  return (
    <a className={`btn btn-${variant} ${className}`} href={waLink(text)} target="_blank" rel="noreferrer">
      <WhatsApp size={18} />
      {children}
    </a>
  )
}

function Stars({ size = 16 }) {
  return (
    <span className="stars" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={size} fill="currentColor" strokeWidth={0} />)}
    </span>
  )
}

function SectionHead({ kicker, title, sub }) {
  return (
    <div className="section-head reveal">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 20)
    on()
    window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`header ${solid ? 'solid' : ''}`}>
      <div className="container header-in">
        <a href="#topo" aria-label="Início"><Logo size={54} /></a>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {NAV.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <WaButton text="Olá! Vim pelo site e quero agendar um horário." className="nav-cta">Chamar no WhatsApp</WaButton>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}

function Hero() {
  const [i, setI] = useState(2)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TINTS.length), 2200)
    return () => clearInterval(t)
  }, [])
  return (
    <section className="hero" id="topo">
      <div className="hero-bg" />
      <div className="container hero-in">
        <div className="hero-copy">
          <a className="rating-pill" href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">
            <Stars size={14} /> <strong>{BUSINESS.rating}</strong> no Google · {BUSINESS.reviews} avaliações
          </a>
          <h1>
            Insulfilm e som <span className="hl">no horário</span> que cabe na sua rotina.
          </h1>
          <p className="lead">
            Horário combinado pelo WhatsApp, inclusive à noite e no fim de semana, e vamos até você se preferir.
            Película, som e multimídia com capricho e preço justo em Contagem.
          </p>
          <div className="hero-ctas">
            <WaButton text="Olá! Vim pelo site e quero um orçamento.">Pedir orçamento no WhatsApp</WaButton>
            <a className="btn btn-ghost" href="#pelicula">Simular minha película</a>
          </div>
          <ul className="hero-bullets">
            <li><Moon size={16} /> Horário flexível</li>
            <li><House size={16} /> Atendimento a domicílio</li>
            <li><HandCoins size={16} /> Preço justo</li>
          </ul>
        </div>
        <div className="hero-visual">
          <CarTint opacity={TINTS[i].opacity} />
          <div className="tint-badge">
            <span>Película</span>
            <strong>{TINTS[i].label}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = [
    [Star, `${BUSINESS.rating} estrelas`, `${BUSINESS.reviews} avaliações no Google`],
    [Moon, 'Horário flexível', 'combinado pelo WhatsApp'],
    [House, 'Vamos até você', 'película aplicada na sua casa'],
    [UserRound, 'Dono atende', 'o Claudiney cuida de cada carro'],
  ]
  return (
    <section className="trust">
      <div className="container trust-in">
        {items.map(([Icon, big, small]) => (
          <div className="trust-item reveal" key={big}>
            <Icon size={26} />
            <div><strong>{big}</strong><span>{small}</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <SectionHead
          kicker="Serviços"
          title="Do vidro ao som, tudo num lugar só"
          sub="Faça vários serviços na mesma visita e saia com o carro pronto."
        />
        <div className="services">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <article className="card service reveal" key={s.id}>
                <div className="service-icon"><Icon size={26} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <a className="link-cta" href={waLink(`Olá! Vim pelo site e quero um orçamento de ${s.title}.`)} target="_blank" rel="noreferrer">
                  Quero orçamento →
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Simulator() {
  const [sel, setSel] = useState('g20')
  const tint = TINTS.find((t) => t.id === sel)
  return (
    <section className="section section-alt" id="pelicula">
      <div className="container films">
        <div className="films-copy">
          <SectionHead
            kicker="Simulador de película"
            title="Veja como seu carro fica antes de escolher"
            sub="Toque nos tons e compare. Na hora do orçamento indicamos o tom certo para cada vidro, dentro da lei."
          />
          <div className="film-tabs reveal" role="tablist">
            {TINTS.map((t) => (
              <button key={t.id} role="tab" aria-selected={sel === t.id} className={sel === t.id ? 'active' : ''} onClick={() => setSel(t.id)}>
                {t.label}
              </button>
            ))}
          </div>
          <p className="tint-desc reveal" key={tint.id}><strong>{tint.label}:</strong> {tint.desc}</p>
          <div className="reveal">
            <WaButton text={`Olá! Vim pelo site e quero orçamento de insulfilm ${tint.label}. Meu carro é: `}>
              Quero a {tint.label} no meu carro
            </WaButton>
          </div>
        </div>
        <div className="sim-stage card reveal">
          <CarTint opacity={tint.opacity} />
          <span className="sim-note">Simulação ilustrativa</span>
        </div>
      </div>
    </section>
  )
}

function Booking() {
  const [services, setServices] = useState(['Insulfilm'])
  const [where, setWhere] = useState('Na loja')
  const [period, setPeriod] = useState('Noite')
  const [car, setCar] = useState('')
  const toggle = (s) => setServices((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))
  const msg =
    `Olá, Claudiney! Vim pelo site e quero agendar.\n` +
    `Carro: ${car || '(informar modelo e ano)'}\n` +
    `Serviço: ${services.join(', ') || '(escolher)'}\n` +
    `Onde: ${where}\n` +
    `Melhor horário: ${period}`
  return (
    <section className="section" id="agendar">
      <div className="container">
        <SectionHead
          kicker="Agende do seu jeito"
          title="Você escolhe o serviço, o lugar e o horário"
          sub="Na loja ou na sua casa, de manhã, à noite ou no fim de semana. A mensagem chega pronta para o Claudiney."
        />
        <div className="builder reveal">
          <div className="builder-left card">
            <label className="field">
              <span><Car size={16} /> Modelo e ano do carro</span>
              <input value={car} onChange={(e) => setCar(e.target.value)} placeholder="Ex.: Renault Oroch 2022" />
            </label>
            <span className="group-label">Serviços</span>
            <div className="options">
              {BOOKING_SERVICES.map((s) => (
                <button key={s} className={`option ${services.includes(s) ? 'on' : ''}`} onClick={() => toggle(s)} aria-pressed={services.includes(s)}>
                  <span className="box">{services.includes(s) && <Check size={14} />}</span>{s}
                </button>
              ))}
            </div>
            <span className="group-label">Onde</span>
            <div className="segmented">
              {[['Na loja', Store], ['Na minha casa', House]].map(([w, Icon]) => (
                <button key={w} className={where === w ? 'active' : ''} onClick={() => setWhere(w)}><Icon size={16} /> {w}</button>
              ))}
            </div>
            <span className="group-label">Melhor horário</span>
            <div className="presets">
              {PERIODS.map((p) => (
                <button key={p} className={period === p ? 'active' : ''} onClick={() => setPeriod(p)}>{p}</button>
              ))}
            </div>
          </div>
          <div className="builder-right card">
            <span className="kicker">Sua mensagem</span>
            <pre className="msg">{msg}</pre>
            <WaButton text={msg} className={services.length ? '' : 'disabled'}>Enviar pelo WhatsApp</WaButton>
            <p className="fine">Sem compromisso. O Claudiney responde com o valor e confirma o horário.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const cats = ['Todos', 'Insulfilm', 'Multimídia', 'Residencial', 'Serviços']
  const [cat, setCat] = useState('Todos')
  const list = GALLERY.filter((g) => cat === 'Todos' || g.cat === cat)
  return (
    <section className="section section-alt" id="trabalhos">
      <div className="container">
        <SectionHead kicker="Trabalhos realizados" title="Do carro zero à sua casa" sub="Fotos reais de trabalhos recentes da Folha's Film's." />
        <div className="filters reveal">
          {cats.map((c) => <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <div className="gallery">
          {list.map((g) => (
            <figure className="shot" key={g.car + g.desc}>
              <div className="shot-img photo">
                <span className="shot-cat">{g.cat}</span>
                <img src={g.img} alt={`${g.car}: ${g.desc}`} loading="lazy" />
              </div>
              <figcaption><strong>{g.car}</strong><span>{g.desc}</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="center reveal">
          <a className="btn btn-ghost" href={BUSINESS.instagram} target="_blank" rel="noreferrer">
            <Instagram size={18} /> Ver mais no {BUSINESS.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  )
}

function Videos() {
  return (
    <section className="section" id="videos">
      <div className="container">
        <SectionHead kicker="Vídeos" title="Veja o acabamento de perto" sub="Película aplicada num SUV BYD. Repare no acabamento rente à borracha." />
        <div className="videos">
          {VIDEOS.map((v) => (
            <figure className="video-card card reveal" key={v.src}>
              <video src={v.src} controls muted playsInline preload="metadata" />
              <figcaption><strong>{v.title}</strong><span>{v.desc}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const why = [
    [Moon, 'Horário flexível', 'Combinado pelo WhatsApp, até à noite e no fim de semana.'],
    [House, 'Vai até você', 'Película aplicada na sua garagem, se preferir.'],
    [HandCoins, 'Preço justo', 'O tema mais citado pelos clientes nas avaliações.'],
    [UserRound, 'Atendimento do dono', 'O Claudiney responde cada cliente pessoalmente.'],
  ]
  return (
    <section className="section" id="sobre">
      <div className="container about">
        <div className="about-photo reveal">
          <div className="about-frame photo"><img src={PHOTOS.fachada} alt="Fachada da Folha's Film's com carro com insulfilm" loading="lazy" /></div>
          <div className="about-badge"><strong>{BUSINESS.rating} ★</strong><span>em {BUSINESS.reviews} avaliações no Google</span></div>
        </div>
        <div className="about-copy reveal">
          <span className="kicker">Quem cuida do seu carro</span>
          <h2>O Claudiney e a Folha's Film's</h2>
          <p>
            Na Folha's Film's quem atende é o próprio dono. O Claudiney aplica película, instala som e
            multimídia com capricho, e faz questão de responder cada cliente.
          </p>
          <p>
            Sabe que quem trabalha o dia todo não tem tempo de deixar o carro na loja em horário comercial.
            Por isso combina o horário pelo WhatsApp, atende à noite, no fim de semana e, se for melhor para você, na sua casa.
          </p>
          <div className="why">
            {why.map(([Icon, t, d]) => (
              <div key={t} className="why-item"><Icon size={22} /><div><strong>{t}</strong><span>{d}</span></div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="section section-alt" id="avaliacoes">
      <div className="container">
        <div className="reviews-head reveal">
          <div>
            <span className="kicker">Avaliações</span>
            <h2>Quem fez, voltou e indicou</h2>
          </div>
          <a className="google-score card" href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">
            <span className="g">G</span>
            <div><strong>{BUSINESS.rating}</strong> <Stars size={16} /><span>{BUSINESS.reviews} avaliações no Google</span></div>
          </a>
        </div>
        <div className="reviews">
          {REVIEWS.map((r) => (
            <blockquote className="card review reveal" key={r.name}>
              <Stars size={15} />
              <p>“{r.text}”</p>
              <footer>
                <span className="avatar">{r.name[0]}</span>
                <div><strong>{r.name}</strong><span>{r.when}</span></div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="duvidas">
      <div className="container faq-wrap">
        <SectionHead kicker="Dúvidas frequentes" title="Antes de agendar" />
        <div className="faq">
          {FAQ.map((f, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={f.q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>{f.q}<ChevronDown size={20} /></button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section section-alt" id="contato">
      <div className="container contact">
        <div className="contact-card card reveal">
          <span className="kicker">Visite a loja</span>
          <h2>Venha até a Folha's Film's</h2>
          <ul className="contact-list">
            <li><MapPin size={20} /><div><strong>{BUSINESS.address}</strong><span>{BUSINESS.district} · CEP {BUSINESS.cep}</span></div></li>
            <li><Clock size={20} /><div>{BUSINESS.hours.map(([d, h]) => <span key={d}><strong>{d}:</strong> {h}</span>)}</div></li>
            <li><WhatsApp size={20} /><div><strong>{BUSINESS.whatsappLabel}</strong><span>WhatsApp e ligações</span></div></li>
            <li><Instagram size={20} /><div><strong>{BUSINESS.instagramHandle}</strong><span>Acompanhe os trabalhos</span></div></li>
          </ul>
          <p className="fine">Entrada e estacionamento acessíveis para cadeira de rodas.</p>
          <div className="hero-ctas">
            <WaButton text="Olá! Vim pelo site e quero agendar um horário.">Agendar agora</WaButton>
            <a className="btn btn-ghost" href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18} /> Como chegar</a>
          </div>
        </div>
        <div className="map reveal">
          <iframe title="Mapa da Folha's Film's" src={BUSINESS.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container final-in reveal">
        <h2>Chegou do trabalho? Ainda dá tempo.</h2>
        <p>O horário é combinado pelo WhatsApp. Chame agora e escolha o melhor para você.</p>
        <WaButton text="Olá! Vim pelo site e quero um orçamento.">Falar com o Claudiney</WaButton>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-in">
        <Logo size={84} />
        <p>{BUSINESS.address}, {BUSINESS.district}<br />WhatsApp {BUSINESS.whatsappLabel}</p>
        <nav>{NAV.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados.</span>
        <span className="demo-tag">Site demonstrativo</span>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Simulator />
        <Booking />
        <Gallery />
        <Videos />
        <About />
        <Reviews />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <a className="wa-float" href={waLink('Olá! Vim pelo site e quero um orçamento.')} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <WhatsApp size={28} />
      </a>
    </>
  )
}
