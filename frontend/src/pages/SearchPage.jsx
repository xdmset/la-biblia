import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { articlesApi } from '../services/api';

const sectionLabel = {
  onboarding: 'Onboarding',
  ventas: 'Ventas',
  postventa: 'Postventa',
  universidad: 'Universidad',
  general: 'General',
};

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 10l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const inputRef = useRef(null);

  const doSearch = async (q) => {
    const term = q.trim();
    if (!term) return;
    setLoading(true);
    setSearched(true);
    try {
      const res = await articlesApi.search(term);
      setResults(res.data.data || []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) { setQuery(q); doSearch(q); }
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(query ? { q: query } : {});
    doSearch(query);
  };

  return (
    <main style={{ width: '100%' }}>
      <div className="search-page">

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <p className="page-header-eyebrow">Búsqueda</p>
          <h1 className="page-header-title">Buscar en La Biblia</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: 32 }}>
          <div className="ai-search-box">
            <input
              ref={inputRef}
              className="ai-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ej: cuentas Caribe, firma contrato, plazo de crédito..."
              disabled={loading}
            />
            <button type="submit" className="ai-search-btn" disabled={loading || !query.trim()}>
              {loading
                ? <><span className="spinner" /> Buscando...</>
                : <><SearchIcon /> Buscar</>
              }
            </button>
          </div>
        </form>

        {/* Loading */}
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '48px 0' }}>
            <span className="spinner spinner-dark" style={{ width: 26, height: 26 }} />
          </div>
        )}

        {/* Results */}
        {!loading && searched && (
          <>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', marginBottom: 16, letterSpacing: '0.01em' }}>
              {results.length === 0
                ? 'Sin resultados — prueba con otras palabras clave.'
                : `${results.length} resultado${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}`}
            </p>

            {results.length === 0 ? (
              <div className="empty-state" style={{ textAlign: 'left', padding: '24px 0' }}>
                <p className="empty-state-desc" style={{ margin: 0 }}>
                  Intenta buscar con términos más específicos o revisa la sección correspondiente en el menú lateral.
                </p>
              </div>
            ) : (
              <div className="search-results-list">
                {results.map((article) => (
                  <Link
                    key={article._id}
                    to={`/articulo/${article.slug}`}
                    className="search-result-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span className="article-section-badge">
                        {sectionLabel[article.section] || article.section}
                      </span>
                      {article.subsection && (
                        <span style={{ fontSize: '0.72rem', color: 'var(--color-text-light)' }}>
                          {article.subsection}
                        </span>
                      )}
                    </div>
                    <div className="search-result-title">{article.title}</div>
                    <div className="search-result-excerpt">
                      {article.content?.replace(/<[^>]+>/g, '').substring(0, 180)}...
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

      </div>
    </main>
  );
} 