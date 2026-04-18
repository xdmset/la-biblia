import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { articlesApi } from '../services/api';

const sectionLabel = {
  onboarding: 'Onboarding',
  ventas: 'Ventas',
  postventa: 'Postventa',
  universidad: 'Universidad',
  general: 'General',
};

function BackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M9 11L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    articlesApi.getBySlug(slug)
      .then(res => setArticle(res.data.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', width: '100%' }}>
        <span className="spinner spinner-dark" style={{ width: 24, height: 24 }} />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="empty-state" style={{ width: '100%', paddingTop: 100 }}>
        <p className="empty-state-title">Artículo no encontrado</p>
        <p className="empty-state-desc">El documento que buscas no existe o fue eliminado.</p>
        <Link to="/" style={{ display: 'inline-block', marginTop: 20, fontSize: '0.85rem', color: 'var(--color-text-muted)', textDecoration: 'none' }}>
          ← Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <article className="article-container">

        {/* Back link */}
        <nav className="article-nav">
          <Link to="/" className="article-nav-link">
            <BackIcon />
            Volver al inicio
          </Link>
        </nav>

        {/* Header */}
        <header className="article-header">
          <div className="article-meta">
            <span className="article-section-badge">
              {sectionLabel[article.section] || article.section}
            </span>
            {article.subsection && (
              <span className="article-subsection">{article.subsection}</span>
            )}
          </div>

          <h1 className="article-title">{article.title}</h1>

          {article.tags?.length > 0 && (
            <div className="article-tags">
              {article.tags.map(tag => (
                <span key={tag} className="article-tag">{tag}</span>
              ))}
            </div>
          )}
        </header>

        {/* Body */}
        <div className="article-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <footer className="article-footer">
          Documento Oficial Ciudad Maderas
          {article.updatedAt && (
            <> · Actualizado {new Date(article.updatedAt).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</>
          )}
        </footer>

      </article>
    </div>
  );
}