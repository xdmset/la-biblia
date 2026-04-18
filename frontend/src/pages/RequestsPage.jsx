import { useState } from 'react';
import { requestsApi } from '../services/api';

export default function RequestsPage() {
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    const text = content.trim();
    if (!text || text.length < 5 || loading) return;
    setLoading(true);
    setError(null);
    try {
      await requestsApi.create(text);
      setSubmitted(true);
      setContent('');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al enviar la solicitud. ¿Está el servidor corriendo?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ width: '100%' }}>
      <div className="requests-page">

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <p className="page-header-eyebrow">Comunidad</p>
          <h1 className="page-header-title">Solicitudes e ideas</h1>
        </div>

        {/* Intro */}
        <div className="requests-intro">
          <p>
            Este espacio está pensado para que compartas <strong>cualquier solicitud o idea</strong> relacionada
            con la plataforma. Todas las solicitudes <strong>no tienen ningún costo</strong> y serán
            atendidas con base en su <strong>nivel de prioridad</strong> y en <strong>cuántas personas la estén solicitando.</strong>
          </p>
          <p>
            Sé lo más específico posible: videos, contenidos, archivos, cursos, nuevos apartados, cambios
            en alguna sección o cualquier otra idea. <strong>Toda sugerencia es bienvenida.</strong>
          </p>
        </div>

        {/* Form / Success */}
        {submitted ? (
          <div className="success-message">
            <p style={{ fontWeight: 600, marginBottom: 6 }}>¡Solicitud recibida!</p>
            <p>La revisaremos y le daremos seguimiento. Gracias por ayudarnos a mejorar la plataforma.</p>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                marginTop: 14,
                padding: '7px 16px',
                background: 'transparent',
                border: '1.5px solid #2a612a',
                borderRadius: 6,
                color: '#2a612a',
                fontSize: '0.8rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
              }}
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <>
            <textarea
              className="request-textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Describe tu solicitud o idea con el mayor detalle posible..."
            />

            {error && (
              <p style={{ color: '#b83232', fontSize: '0.82rem', marginTop: 8 }}>{error}</p>
            )}

            <div className="request-actions">
              <button
                className="btn-primary"
                onClick={handleSubmit}
                disabled={loading || content.trim().length < 5}
              >
                {loading
                  ? <><span className="spinner" style={{ width: 13, height: 13 }} /> Enviando...</>
                  : 'Enviar solicitud'
                }
              </button>
            </div>
          </>
        )}

      </div>
    </main>
  );
}