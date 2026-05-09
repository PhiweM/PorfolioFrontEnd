import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/projects/ProjectDetail';
import CommandPalette from './components/CommandPalette';
import { IoIosArrowRoundUp } from 'react-icons/io';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  const [showTop, setShowTop] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if (e.key === 'Escape') setPaletteOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const isDetailPage = location.pathname.startsWith('/projects/');

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar onPaletteOpen={() => setPaletteOpen(true)} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      {!isDetailPage && (
        <footer className="py-10 text-center border-t" style={{ borderColor: 'var(--border)' }}>
          <p style={{ color: 'var(--text-3)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Phiwe Mhlope — Designed &amp; built with intent.
          </p>
        </footer>
      )}

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-40"
          style={{
            background: 'var(--accent)',
            color: '#000',
            boxShadow: '0 0 16px rgba(34,211,238,0.3)',
          }}
          aria-label="Scroll to top"
        >
          <IoIosArrowRoundUp size={18} />
        </button>
      )}

      {/* Command palette */}
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}

export default App;
