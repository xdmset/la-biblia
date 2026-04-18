import { Link } from 'react-router-dom';
import AISearchBox from '../components/AISearchBox';

const quickLinks = [
  { title: 'Cuentas para depositar', slug: 'cuentas-para-depositar', section: 'Ventas' },
  { title: 'Links de pago con tarjeta', slug: 'links-pago-tarjeta', section: 'Ventas' },
  { title: 'Esquema de comisiones', slug: 'esquema-de-comisiones', section: 'Onboarding' },
  { title: 'Estatus de contratación', slug: 'estatus-sistema-contratacion', section: 'Ventas' },
  { title: 'Tabla de plazo de crédito', slug: 'tabla-plazo-credito', section: 'Ventas' },
  { title: 'Firma del contrato', slug: 'firma-contrato-parametros', section: 'Ventas' },
  { title: 'Contratación FV México', slug: 'proceso-contratacion-fv-mexico', section: 'Postventa' },
  { title: 'Qué producto vender', slug: 'que-producto-vender', section: 'Onboarding' },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5 10.5L9 7L5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main style={{ width: '100%' }}>

     
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-hero-eyebrow">Documentación oficial</p>

          <h1 className="home-hero-title">
            La <strong>Biblia</strong>
          </h1>

          <p className="home-hero-subtitle">
            Toda la información operativa de Ciudad Maderas en un solo lugar.
            Actualizada, estructurada, siempre disponible.
          </p>

          <div className="home-search-wrapper">
            <AISearchBox placeholder="Busca procesos, cuentas, lineamientos..." />
          </div>
        </div>
      </section>

      
      <section className="quick-links-section">
        <div className="section-header">
          <p className="quick-links-title">Accesos frecuentes</p>
          <div className="title-underline" />
        </div>

        <div className="quick-links-grid">
          {quickLinks.map((link) => (
            <Link
              key={link.slug}
              to={`/articulo/${link.slug}`}
              className="quick-link-card"
            >
              <div className="card-content">
                <span className="quick-link-section-tag">{link.section}</span>
                <span className="quick-link-title">{link.title}</span>
              </div>
              <div className="card-arrow">
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}