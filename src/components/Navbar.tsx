import React, { useEffect, useState } from 'react';
import logo from './../assets/logo.png';
import { RiMenu3Line } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';
import { LuGithub } from 'react-icons/lu';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const RESUME_URL = '/Phiwe-MhlopeDev.pdf';

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Contact'];

interface NavbarProps {
  onPaletteOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onPaletteOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = ['home', ...NAV_ITEMS.map((i) => i.toLowerCase())];
    const onScroll = () => {
      const offset = 80; // navbar height
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const navHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <nav
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(24,32,48,0.97)' : 'rgba(31,41,55,0.82)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto flex items-center justify-between px-6 py-3 max-w-6xl">
          {/* Logo */}
          <a href={isHome ? '#home' : '/'} className="flex items-center gap-2 flex-shrink-0">
            <img src={logo} alt="Phiwe Mhlope" className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity" />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = isHome && activeSection === item.toLowerCase();
              return (
                <li key={item}>
                  <a
                    href={navHref(item.toLowerCase())}
                    className="px-3 py-1.5 rounded-md text-sm transition-colors duration-150"
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--text-2)',
                      background: isActive ? 'var(--accent-dim)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-2)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Cmd+K hint */}
            <button
              onClick={onPaletteOpen}
              className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs transition-all duration-150 cursor-pointer"
              style={{
                color: 'var(--text-3)',
                border: '1px solid var(--border)',
                background: 'var(--bg-subtle)',
                fontFamily: 'var(--mono)',
              }}
              aria-label="Open command palette"
            >
              <span>Search</span>
              <span
                className="px-1 rounded"
                style={{ background: 'var(--bg-elevated)', color: 'var(--text-3)' }}
              >
                ⌘K
              </span>
            </button>

            <a
              href="https://github.com/PhiweM"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-150"
              style={{ color: 'var(--text-3)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')}
              aria-label="GitHub"
            >
              <LuGithub size={17} />
            </a>

            <button
              onClick={() => window.open(RESUME_URL, '_blank')}
              className="btn-ghost text-xs px-3 py-1.5"
            >
              Resume
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-1.5 rounded-md"
            style={{ color: 'var(--accent)' }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoCloseOutline size={24} /> : <RiMenu3Line size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-72 z-50 flex flex-col p-6"
              style={{ background: 'var(--bg-surface)', borderLeft: '1px solid var(--border)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-2)' }}>
                  <IoCloseOutline size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={navHref(item.toLowerCase())}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-2.5 rounded-md text-sm"
                    style={{ color: 'var(--text-2)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                      (e.currentTarget as HTMLElement).style.background = 'var(--bg-elevated)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-2)';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-2">
                <button
                  onClick={onPaletteOpen}
                  className="w-full px-4 py-2.5 rounded-md text-sm text-left"
                  style={{ color: 'var(--text-3)', border: '1px solid var(--border)' }}
                >
                  Search <span style={{ fontFamily: 'var(--mono)' }}>⌘K</span>
                </button>
                <button
                  className="btn-ghost w-full justify-center"
                  onClick={() => { window.open(RESUME_URL, '_blank'); setMenuOpen(false); }}
                >
                  Resume
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
