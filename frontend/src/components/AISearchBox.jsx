import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { articlesApi } from '../services/api';

function SparkleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1v2M6 9v2M1 6h2M9 6h2M2.64 2.64l1.41 1.41M7.95 7.95l1.41 1.41M2.64 9.36l1.41-1.41M7.95 4.05l1.41-1.41"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
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

const sectionLabel = {
  onboarding: 'Onboarding',
  ventas: 'Ventas',
  postventa: 'Postventa',
  universidad: 'Universidad',
  general: 'General',
};

export default function AISearchBox({ placeholder = '¿Qué quieres saber?', autoFocus = false }) {
  const [query, setQuery] = useState('');
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    const q = query.trim();
    if (!q || loading) return;

    setLoading(true);
    setSources([]);
    setError(null);
    setSearched(true);

    try {
      const res = await articlesApi.search(q);
      setSources(res.data.data || []);
    } catch (err) {
      setError('Error al conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="ai-search-container">
      <div className="ai-search-label">
        <SparkleIcon /> Búsqueda inteligente
      </div>

      <form onSubmit={handleSubmit}>
        <div className="ai-search-box">
          <input
            ref={inputRef}
            className="ai-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoFocus={autoFocus}
            disabled={loading}
          />
          <button
            type="submit"
            className="ai-search-btn"
            disabled={loading || !query.trim()}
          >
            {loading
              ? <><span className="spinner" /> Buscando...</>
              : <><SearchIcon /> Buscar</>
            }
          </button>
        </div>
      </form>

      {/* Error */}
      {error && (
        <div style={{
          marginTop: 12,
          padding: '12px 16px',
          background: '#fff5f5',
          border: '1px solid #f5cccc',
          borderRadius: 8,
          color: '#b83232',
          fontSize: '0.82rem',
        }}>
          {error}
        </div>
      )}

      {/* Results */}
      {searched && !loading && sources.length === 0 && !error && (
        <p style={{ marginTop: 12, fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
          Sin resultados para esa búsqueda.
        </p>
      )}

      {sources.length > 0 && (
        <div className="ai-answer-card">
          <div className="ai-answer-header">
            <SparkleIcon />
            {sources.length} artículo{sources.length !== 1 ? 's' : ''} encontrado{sources.length !== 1 ? 's' : ''}
          </div>
          <div className="ai-sources">
            <span className="ai-sources-label">Ir a:</span>
            {sources.map((article) => (
              <Link
                key={article.slug || article._id}
                to={`/articulo/${article.slug}`}
                className="ai-source-chip"
              >
                {sectionLabel[article.section] || article.section} · {article.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}