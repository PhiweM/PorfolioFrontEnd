import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LuGithub } from 'react-icons/lu';
import { HiOutlineExternalLink, HiArrowLeft } from 'react-icons/hi';
import { projects } from '../projectsData';

const TOC_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem / Goal' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'features', label: 'Key Features' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'highlights', label: 'Technical Highlights' },
  { id: 'future', label: 'Future Improvements' },
];

function SectionAnchor({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-14 scroll-mt-24">
      {children}
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xl font-semibold mb-5 pb-3"
      style={{
        color: 'var(--text)',
        borderBottom: '1px solid var(--border)',
        letterSpacing: '-0.01em',
      }}
    >
      {children}
    </h2>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [activeId, setActiveId] = useState('overview');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    observerRef.current?.disconnect();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    TOC_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    observerRef.current = obs;
    return () => obs.disconnect();
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const {
    title,
    tagline,
    status,
    year,
    role,
    techStack,
    projectLink,
    gitHubLink,
    image,
    metrics,
    overview,
    problem,
    architecture,
    keyFeatures,
    challenges,
    technicalHighlights,
    futureImprovements,
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project hero banner */}
      <div
        className="w-full relative overflow-hidden"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {/* Banner image */}
        <div className="w-full h-48 md:h-64 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.25)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,10,10,0.3), rgba(10,10,10,0.85))',
            }}
          />
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 max-w-5xl mx-auto w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <Link
              to="/#projects"
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--mono)' }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)')
              }
            >
              <HiArrowLeft size={12} />
              Projects
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontFamily: 'var(--mono)' }}>
              {title}
            </span>
          </div>

          {/* Status + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className={`status-badge ${status === 'production' ? 'production' : ''}`}>
              <span className="dot" />
              {status === 'production' ? 'Production' : status}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--mono)', fontSize: '0.7rem' }}>
              {year} · {role}
            </span>
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold mb-2"
            style={{ color: '#fff', letterSpacing: '-0.03em' }}
          >
            {title}
          </h1>
          <p className="text-sm md:text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {tagline}
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Tech + Links row */}
        <div
          className="flex flex-col sm:flex-row sm:items-start gap-5 mb-10 pb-8"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="flex-1">
            <p className="section-label mb-3" style={{ fontSize: '0.65rem' }}>
              Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((t) => (
                <span key={t} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-6 sm:gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-right">
                <p
                  className="text-lg font-bold tabular-nums"
                  style={{ color: 'var(--accent)', letterSpacing: '-0.02em' }}
                >
                  {m.value}
                </p>
                <p style={{ color: 'var(--text-3)', fontSize: '0.65rem', fontFamily: 'var(--mono)' }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 flex-shrink-0 sm:self-end">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-3 py-2"
            >
              Live Demo <HiOutlineExternalLink size={12} />
            </a>
            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs px-3 py-2"
            >
              <LuGithub size={14} /> Source
            </a>
          </div>
        </div>

        {/* Doc layout: sidebar + content */}
        <div className="flex gap-10">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              <p className="section-label mb-4" style={{ fontSize: '0.62rem' }}>
                On this page
              </p>
              <nav className="flex flex-col">
                {TOC_SECTIONS.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`toc-link ${activeId === id ? 'active' : ''}`}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs mb-2 transition-colors"
                  style={{ color: 'var(--text-3)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--text-2)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')
                  }
                >
                  <HiOutlineExternalLink size={12} />
                  Live site
                </a>
                <a
                  href={gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs mb-4 transition-colors"
                  style={{ color: 'var(--text-3)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--text-2)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')
                  }
                >
                  <LuGithub size={12} />
                  Repository
                </a>
                <Link
                  to="/#projects"
                  className="flex items-center gap-1.5 text-xs transition-colors"
                  style={{ color: 'var(--text-3)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--text-2)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')
                  }
                >
                  <HiArrowLeft size={12} />
                  All projects
                </Link>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 max-w-2xl">
            {/* Overview */}
            <SectionAnchor id="overview">
              <SectionHeading>Overview</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                {overview}
              </p>
            </SectionAnchor>

            {/* Problem */}
            <SectionAnchor id="problem">
              <SectionHeading>Problem / Goal</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                {problem}
              </p>
            </SectionAnchor>

            {/* Architecture */}
            <SectionAnchor id="architecture">
              <SectionHeading>Architecture</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                {architecture}
              </p>
            </SectionAnchor>

            {/* Key Features */}
            <SectionAnchor id="features">
              <SectionHeading>Key Features</SectionHeading>
              <div className="space-y-5">
                {keyFeatures.map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="rounded-lg p-4"
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'var(--accent)', marginTop: '6px' }}
                      />
                      <div>
                        <p
                          className="text-sm font-semibold mb-1"
                          style={{ color: 'var(--text)' }}
                        >
                          {feat.title}
                        </p>
                        <p className="text-sm" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionAnchor>

            {/* Challenges */}
            <SectionAnchor id="challenges">
              <SectionHeading>Challenges</SectionHeading>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                {challenges}
              </p>
            </SectionAnchor>

            {/* Technical Highlights */}
            <SectionAnchor id="highlights">
              <SectionHeading>Technical Highlights</SectionHeading>
              <ul className="space-y-2">
                {technicalHighlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--text-2)' }}
                  >
                    <span
                      className="mt-1.5 flex-shrink-0"
                      style={{
                        color: 'var(--accent)',
                        fontFamily: 'var(--mono)',
                        fontSize: '0.65rem',
                      }}
                    >
                      ◆
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </SectionAnchor>

            {/* Future */}
            <SectionAnchor id="future">
              <SectionHeading>Future Improvements</SectionHeading>
              <ul className="space-y-2">
                {futureImprovements.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--text-2)' }}
                  >
                    <span
                      className="mt-1 flex-shrink-0 rounded"
                      style={{
                        width: '16px',
                        height: '16px',
                        minWidth: '16px',
                        border: '1px solid var(--border)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.55rem',
                        color: 'var(--text-3)',
                        fontFamily: 'var(--mono)',
                      }}
                    >
                      {i + 1}
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </SectionAnchor>

            {/* Bottom nav */}
            <div
              className="pt-8 mt-4 flex items-center justify-between"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              <Link to="/#projects" className="btn-ghost text-xs">
                <HiArrowLeft size={13} />
                All Projects
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs"
                >
                  Live Demo <HiOutlineExternalLink size={12} />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-8 text-center mt-10"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p style={{ color: 'var(--text-3)', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Phiwe Mhlope
        </p>
      </footer>
    </motion.div>
  );
}
