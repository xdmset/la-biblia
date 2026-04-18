export default function NovedadesPage() {
  const updates = [
    { date: 'Abril 2025', title: 'Nuevas cuentas para depósito — Casas Mérida', desc: 'Se actualizaron los datos bancarios para transferencias internacionales hacia el desarrollo Casas Mérida.' },
    { date: 'Marzo 2025', title: 'Reglamento de ventas actualizado', desc: 'Se publicaron los nuevos lineamientos de cambios de equipo y territorialidad. Vigor desde 11 de septiembre 2023.' },
    { date: 'Febrero 2025', title: 'Esquema de comisiones USA 2025', desc: 'Se publicó la proyección anual actualizada para asesores junior bajo el modelo independent contractor.' },
    { date: 'Enero 2025', title: 'La Biblia migra a plataforma web', desc: 'Acceso más rápido, búsqueda inteligente con IA y solicitudes en línea. ¡Bienvenido a la nueva experiencia!' },
  ];

  return (
    <main>
      <div style={{ padding: '48px 64px', maxWidth: 800 }}>
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: 8, fontWeight: 500 }}>
            Actualizaciones
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Novedades 
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {updates.map((u, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '0 32px',
                padding: '24px 0',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', paddingTop: 3, fontWeight: 500 }}>
                {u.date}
              </span>
              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: 6 }}>{u.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
