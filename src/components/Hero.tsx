import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

const RESUME_URL = '/Phiwe-MhlopeDev.pdf';

const stats = [
  { value: '2+', label: 'Years experience' },
  { value: '2', label: 'Companies' },
  { value: '5+', label: 'Production apps' },
  { value: '7+', label: 'Technologies' },
];

function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, -40]);
  const imageOpacity = useTransform(scrollY, [0, 500], [1, 0.25]);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.6 }} />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

          {/* ── Text content ───────────────────────────── */}
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability badge */}
            <div className="flex items-center gap-2 mb-8">
              <span className="status-badge production">
                <span className="dot" />
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 leading-tight"
              style={{ color: 'var(--text)', letterSpacing: '-0.03em' }}
            >
              Phiwe Mhlope
            </h1>

            {/* Role */}
            <p
              className="text-xl md:text-2xl font-medium mb-6"
              style={{ color: 'var(--text-2)', letterSpacing: '-0.01em' }}
            >
              Full-Stack Developer
            </p>

            {/* Bio */}
            <p
              className="text-base md:text-lg max-w-lg leading-relaxed mb-10"
              style={{ color: 'var(--text-3)' }}
            >
              I build production-grade web applications with a focus on performance,
              accessibility, and developer experience. Currently at{' '}
              <span style={{ color: 'var(--text-2)', fontWeight: 500 }}>VISTECH</span>{' '}
              where I develop enterprise tools on the Microsoft 365 platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <a href="#projects" className="btn-primary">
                View Projects <HiArrowRight size={14} />
              </a>
              <a href="#contact" className="btn-ghost">
                Get in Touch
              </a>
              <button onClick={() => window.open(RESUME_URL, '_blank')} className="btn-ghost">
                Resume ↗
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mb-14">
              <a
                href="https://www.linkedin.com/in/phiwe-mhlope/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/PhiweM"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')}
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-3)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')}
                aria-label="Twitter / X"
              >
                <BsTwitterX size={16} />
              </a>
              <a
                href="https://www.mhlopephiwe.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-3)', fontFamily: 'var(--mono)', fontSize: '0.75rem' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-2)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')}
              >
                Blog ↗
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-px rounded-lg overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 min-w-[110px] px-5 py-4"
                  style={{ background: 'var(--bg-subtle)' }}
                >
                  <p
                    className="text-2xl font-bold mb-0.5 tabular-nums"
                    style={{ color: 'var(--accent)', letterSpacing: '-0.02em' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-3)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Hero image ──────────────────────────────── */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center w-full md:w-auto md:pt-12"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ y: imageY, opacity: imageOpacity }}
          >
            {/* Floating bob wrapper */}
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Radial glow behind */}
              <div
                className="absolute -inset-4 rounded-2xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(34,211,238,0.14) 0%, transparent 70%)',
                }}
              />

              {/* Image */}
              <img
                src="/heroimg.png"
                alt="Phiwe Mhlope"
                loading="eager"
                className="relative w-64 md:w-72 lg:w-80 rounded-2xl object-cover"
                style={{
                  border: '1px solid var(--border)',
                  boxShadow: [
                    '0 0 0 1px rgba(34,211,238,0.18)',
                    '4px 4px 0px 0px rgba(34,211,238,0.12)',
                    '8px 8px 0px 0px rgba(34,211,238,0.06)',
                    '0 32px 72px rgba(0,0,0,0.5)',
                  ].join(', '),
                  aspectRatio: '3/4',
                }}
              />

              {/* Right edge glow */}
              <div
                className="absolute top-0 bottom-0 right-0 w-10 rounded-r-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, rgba(34,211,238,0.07) 0%, transparent 100%)',
                }}
              />
              {/* Bottom edge glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16 rounded-b-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(34,211,238,0.09) 0%, transparent 100%)',
                }}
              />

              {/* Bottom-right corner bracket */}
              <div
                className="absolute -bottom-2 -right-2 w-7 h-7 pointer-events-none"
                style={{
                  borderRight: '2px solid rgba(34,211,238,0.6)',
                  borderBottom: '2px solid rgba(34,211,238,0.6)',
                  borderRadius: '0 0 6px 0',
                }}
              />
              {/* Top-left corner bracket */}
              <div
                className="absolute -top-2 -left-2 w-7 h-7 pointer-events-none"
                style={{
                  borderLeft: '2px solid rgba(34,211,238,0.25)',
                  borderTop: '2px solid rgba(34,211,238,0.25)',
                  borderRadius: '6px 0 0 0',
                }}
              />

              {/* Verified badge */}
              <div
                className="absolute bottom-4 right-4 rounded-lg px-2.5 py-1"
                style={{
                  background: 'rgba(31,41,55,0.85)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <span className="flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="12" fill="#22d3ee" opacity="0.15" />
                    <circle cx="12" cy="12" r="12" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                    <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: 'var(--accent)', fontFamily: 'var(--mono)' }}>
                    Verified Human
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
