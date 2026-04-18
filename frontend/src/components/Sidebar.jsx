import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const sections = [
  {
    id: 'onboarding',
    label: 'Onboarding',
    items: [
      { label: 'Sueño Mexicano', slug: 'bienvenida-sueno-mexicano' },
      { label: 'Presencia Ciudad Maderas', slug: 'presencia-ciudad-maderas' },
      { label: 'Qué producto vender', slug: 'que-producto-vender' },
      { label: 'Ventajas competitivas', slug: 'ventajas-competitivas' },
      { label: 'Cómo comenzar a vender', slug: 'como-comenzar-a-vender' },
      { label: 'Esquema de comisiones', slug: 'esquema-de-comisiones' },
      { label: 'Comisiones Asesores MX', slug: 'esquema-comisiones-mexico' },
      { label: 'Comisiones Asesores USA', slug: 'esquema-comisiones-usa-junior' },
      { label: 'Herramientas', slug: 'herramientas-ciudad-maderas' },
      { label: 'Viajes y Premios', slug: 'bootcamp-viajes-premios' },
    ],
  },
  {
    id: 'ventas',
    label: 'I · Ventas',
    items: [
      { label: 'Cuentas para depositar', slug: 'cuentas-para-depositar' },
      { label: 'Links de pago con tarjeta', slug: 'links-pago-tarjeta' },
      { label: 'Estatus de contratación', slug: 'estatus-sistema-contratacion' },
      { label: 'Documentación persona moral', slug: 'documentacion-persona-moral' },
      { label: 'Tabla de plazo de crédito', slug: 'tabla-plazo-credito' },
      { label: 'Firma del contrato', slug: 'firma-contrato-parametros' },
      { label: 'Inicio de mensualidad', slug: 'inicio-mensualidad-fechas' },
      { label: 'Calendario comisiones MX', slug: 'calendario-comisiones-mexico' },
      { label: 'Calendario comisiones USA', slug: 'calendario-comisiones-extranjeros' },
      { label: 'Reglamento de ventas', slug: 'reglamento-ventas' },
      { label: 'Multas y penalizaciones', slug: 'multas-penalizaciones' },
      { label: 'Metas para viajes', slug: 'metas-para-viajes' },
    ],
  },
  {
    id: 'postventa',
    label: 'II · Postventa',
    items: [
      { label: 'Manual del cliente', slug: 'manual-cliente-introduccion' },
      { label: 'Formas de pago (cliente)', slug: 'manual-cliente-formas-pago' },
      { label: 'Escrituración', slug: 'escrituracion' },
      { label: 'Fideicomiso', slug: 'fideicomiso' },
      { label: 'Disolución de propiedad', slug: 'disolucion-propiedad' },
      { label: 'Cancelación de contrato', slug: 'cancelacion-contrato' },
      { label: 'Contratación FV México', slug: 'proceso-contratacion-fv-mexico' },
      { label: 'Contratación FV USA', slug: 'proceso-contratacion-fv-usa' },
    ],
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      width="10" height="10" viewBox="0 0 10 10" fill="none"
      style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', flexShrink: 0 }}
    >
      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 9l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg width="5" height="5" viewBox="0 0 5 5" fill="currentColor" style={{ flexShrink: 0 }}>
      <circle cx="2.5" cy="2.5" r="1.5" />
    </svg>
  );
}

export default function Sidebar({ open, onClose }) {
  const [collapsed, setCollapsed] = useState({});
  const navigate = useNavigate();

  const toggle = (id) => setCollapsed(p => ({ ...p, [id]: !p[id] }));

  const handleSearch = () => {
    navigate('/search');
    onClose?.();
  };

  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>

      {/* Logo */}
      <div className="sidebar-logo">
        <NavLink to="/" style={{ textDecoration: 'none' }} onClick={onClose}>
          <div className="sidebar-logo-title">La Biblia</div>
          <div className="sidebar-logo-subtitle">Ciudad Maderas · Ver 1.4</div>
        </NavLink>
      </div>

      {/* Search */}
      <button className="sidebar-search-btn" onClick={handleSearch}>
        <SearchIcon />
        <span>Buscar información...</span>
      </button>

      {/* Nav */}
      <nav className="sidebar-nav">
        {sections.map((section) => {
          const isOpen = !collapsed[section.id];
          return (
            <div key={section.id} className="sidebar-section">
              <button
                className={`sidebar-section-header ${isOpen ? 'open' : ''}`}
                onClick={() => toggle(section.id)}
              >
                <span>{section.label}</span>
                <ChevronIcon open={isOpen} />
              </button>

              {isOpen && (
                <div className="sidebar-section-items">
                  {section.items.map((item) => (
                    <NavLink
                      key={item.slug}
                      to={`/articulo/${item.slug}`}
                      className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                      onClick={onClose}
                    >
                      <DotIcon />
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <NavLink
          to="/solicitudes"
          className={({ isActive }) => `sidebar-footer-btn highlight${isActive ? ' active' : ''}`}
          onClick={onClose}
        >
          Solicitudes e ideas
        </NavLink>
        <NavLink
          to="/novedades"
          className={({ isActive }) => `sidebar-footer-btn${isActive ? ' active' : ''}`}
          onClick={onClose}
        >
          Novedades
        </NavLink>
      </div>

    </aside>
  );
}