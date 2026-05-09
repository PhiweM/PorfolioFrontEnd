import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LuGithub, LuFileText, LuFolder, LuUser, LuBriefcase, LuMail, LuExternalLink } from 'react-icons/lu';
import { HiMagnifyingGlass, HiOutlineHome } from 'react-icons/hi2';

const RESUME_URL = '/Phiwe-MhlopeDev.pdf';

interface PaletteItem {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  type: 'section' | 'project' | 'link';
  action: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const items: PaletteItem[] = [
    {
      id: 'home',
      label: 'Go to Home',
      icon: <HiOutlineHome size={15} />,
      type: 'section',
      action: () => { navigate('/'); setTimeout(() => scrollTo('#home'), 100); },
    },
    {
      id: 'about',
      label: 'About',
      sublabel: 'Engineering background & tech stack',
      icon: <LuUser size={15} />,
      type: 'section',
      action: () => { navigate('/'); setTimeout(() => scrollTo('#about'), 100); },
    },
    {
      id: 'experience',
      label: 'Experience',
      sublabel: 'Work history',
      icon: <LuBriefcase size={15} />,
      type: 'section',
      action: () => { navigate('/'); setTimeout(() => scrollTo('#experience'), 100); },
    },
    {
      id: 'projects',
      label: 'Projects',
      sublabel: 'Selected work',
      icon: <LuFolder size={15} />,
      type: 'section',
      action: () => { navigate('/'); setTimeout(() => scrollTo('#projects'), 100); },
    },
    {
      id: 'contact',
      label: 'Contact',
      sublabel: 'Get in touch',
      icon: <LuMail size={15} />,
      type: 'section',
      action: () => { navigate('/'); setTimeout(() => scrollTo('#contact'), 100); },
    },
    {
      id: 'afriverse',
      label: 'Afriverse — Case Study',
      sublabel: 'React · TypeScript · Supabase · PostgreSQL',
      icon: <LuFolder size={15} />,
      type: 'project',
      action: () => navigate('/projects/afriverse'),
    },
    {
      id: 'product-store',
      label: 'Product Store — Case Study',
      sublabel: 'MERN · React · Express · MongoDB',
      icon: <LuFolder size={15} />,
      type: 'project',
      action: () => navigate('/projects/product-store'),
    },
    {
      id: 'resume',
      label: 'View Resume',
      sublabel: 'Opens in new tab',
      icon: <LuFileText size={15} />,
      type: 'link',
      action: () => window.open(RESUME_URL, '_blank'),
    },
    {
      id: 'github',
      label: 'GitHub Profile',
      sublabel: 'github.com/PhiweM',
      icon: <LuGithub size={15} />,
      type: 'link',
      action: () => window.open('https://github.com/PhiweM', '_blank'),
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      sublabel: 'linkedin.com/in/phiwe-mhlope',
      icon: <LuExternalLink size={15} />,
      type: 'link',
      action: () => window.open('https://www.linkedin.com/in/phiwe-mhlope/', '_blank'),
    },
  ];

  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filtered = query.trim()
    ? items.filter(
        (i) =>
          i.label.toLowerCase().includes(query.toLowerCase()) ||
          i.sublabel?.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected((v) => Math.min(v + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected((v) => Math.max(v - 1, 0));
      } else if (e.key === 'Enter' && filtered[selected]) {
        filtered[selected].action();
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, selected, filtered, onClose]);

  const typeLabel: Record<string, string> = {
    section: 'Section',
    project: 'Project',
    link: 'Link',
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="palette-overlay" onClick={onClose}>
          <motion.div
            className="palette-box"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search input */}
            <div
              className="flex items-center gap-3 px-4"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <HiMagnifyingGlass size={16} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
              <input
                ref={inputRef}
                className="palette-input"
                placeholder="Search pages, projects, links…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <kbd
                className="hidden sm:block text-xs px-1.5 py-0.5 rounded flex-shrink-0"
                style={{
                  fontFamily: 'var(--mono)',
                  color: 'var(--text-3)',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-elevated)',
                }}
              >
                esc
              </kbd>
            </div>

            {/* Results */}
            <div style={{ maxHeight: '360px', overflowY: 'auto' }}>
              {filtered.length === 0 ? (
                <p className="px-4 py-6 text-center text-sm" style={{ color: 'var(--text-3)' }}>
                  No results for "{query}"
                </p>
              ) : (
                <ul className="py-1.5">
                  {filtered.map((item, i) => (
                    <li key={item.id}>
                      <button
                        className={`palette-item w-full text-left ${i === selected ? 'selected' : ''}`}
                        onClick={() => { item.action(); onClose(); }}
                        onMouseEnter={() => setSelected(i)}
                      >
                        <span className="palette-item-icon">{item.icon}</span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-sm" style={{ color: 'var(--text)' }}>
                            {item.label}
                          </span>
                          {item.sublabel && (
                            <span
                              className="block text-xs truncate"
                              style={{ color: 'var(--text-3)' }}
                            >
                              {item.sublabel}
                            </span>
                          )}
                        </span>
                        <span className="palette-item-type">{typeLabel[item.type]}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer hint */}
            <div
              className="flex items-center gap-4 px-4 py-2.5 text-xs"
              style={{
                borderTop: '1px solid var(--border)',
                color: 'var(--text-3)',
                fontFamily: 'var(--mono)',
              }}
            >
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
