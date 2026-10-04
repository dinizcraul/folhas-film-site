import logo from '../assets/logo-folhas.webp'

export default function Logo({ size = 48 }) {
  return (
    <span className="logo">
      <img src={logo} width={Math.round(size * 0.956)} height={size} alt="Logo Folha's Film's" />
      <span className="logo-text">
        <strong>Folha's Film's</strong>
        <small>Insulfilm · Som · Plotagem</small>
      </span>
    </span>
  )
}
