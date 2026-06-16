import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { HiArrowRight } from 'react-icons/hi2';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/phiwe-mhlope/',
    icon: <FaLinkedin size={16} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/PhiweM',
    icon: <FaGithub size={16} />,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/',
    icon: <BsTwitterX size={15} />,
  },
  {
    label: 'Blog',
    href: 'https://www.mhlopephiwe.com/',
    icon: null,
    isText: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-4">Contact</p>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-5"
              style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
            >
              Let's work together
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-2)' }}>
              I'm open to full-time roles, freelance projects, and technical collaborations.
              If you're building something interesting or have an engineering role that needs
              filling — I'd like to hear about it.
            </p>

            <a
              href="mailto:wycliffwhite7@gmail.com"
              className="btn-primary inline-flex mb-6"
            >
              Send an email <HiArrowRight size={14} />
            </a>

            {/* <p className="text-xs" style={{ color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
              wycliffwhite7@gmail.com
            </p> */}
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="rounded-xl p-6"
              style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}
            >
              <p className="section-label mb-5" style={{ fontSize: '0.65rem' }}>
                Find me on
              </p>
              <div className="space-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150"
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
                    {s.icon && (
                      <span style={{ color: 'var(--text-3)', width: '16px' }}>{s.icon}</span>
                    )}
                    {s.isText && (
                      <span
                        style={{
                          color: 'var(--text-3)',
                          fontFamily: 'var(--mono)',
                          fontSize: '0.7rem',
                          width: '16px',
                        }}
                      >
                        ✍
                      </span>
                    )}
                    <span className="text-sm">{s.label}</span>
                    <span
                      className="ml-auto text-xs"
                      style={{ color: 'var(--text-3)', fontFamily: 'var(--mono)' }}
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-xs" style={{ color: 'var(--text-3)' }}>
                  Response time is typically within 24–48 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
