import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SearchPage from './pages/SearchPage';
import RequestsPage from './pages/RequestsPage';
import NovedadesPage from './pages/NovedadesPage';

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MobileHeader({ onOpen }) {
  return (
    <div className="mobile-header" style={{
      display: 'none', position: 'fixed', top: 0, left: 0, right: 0,
      height: 56, background: '#111110', zIndex: 90, alignItems: 'center',
      justifyContent: 'space-between', padding: '0 20px', borderBottom: '1px solid #222',
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#fff', fontWeight: 600 }}>La Biblia</span>
      <button onClick={onOpen} style={{ background: 'none', border: 'none', color: '#aaa', cursor: 'pointer' }}>
        <HamburgerIcon />
      </button>
    </div>
  );
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-layout" style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
        <MobileHeader onOpen={() => setSidebarOpen(true)} />

        {sidebarOpen && (
          <div onClick={() => setSidebarOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 99 }} />
        )}

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

       
        <main className="main-content" style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          background: 'var(--color-bg)',
          overflowY: 'auto',
          width: '100%'
        }}>
          
          <div style={{ 
            width: '100%', 
            maxWidth: '1200px', // Ancho máximo de la interfaz
            margin: '0 auto',   // Centrado automático
            padding: '40px 20px' 
          }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articulo/:slug" element={<ArticlePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/solicitudes" element={<RequestsPage />} />
              <Route path="/novedades" element={<NovedadesPage />} />
            </Routes>
          </div>
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-header { display: flex !important; }
          .main-content { padding-top: 56px; }
          .app-layout { flex-direction: column; }
        }
      `}</style>
    </BrowserRouter>
  );
}