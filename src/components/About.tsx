import { motion } from 'framer-motion';
import { LuMapPin, LuBriefcase, LuCode, LuZap, LuBookOpen } from 'react-icons/lu';

const techCategories = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'CSS3'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'Python', 'REST APIs'],
  },
  {
    label: 'Data',
    items: ['MongoDB', 'PostgreSQL', 'Supabase'],
  },
  {
    label: 'Enterprise',
    items: ['SharePoint (SPFx)', 'Microsoft Azure', 'Microsoft 365'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'GitHub', 'Figma', 'Postman', 'Vite'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="section-label mb-3">About</p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
          >
            Engineering background
          </h2>
        </motion.div>

        {/* Bio */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <motion.div
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ color: 'var(--text-2)', lineHeight: '1.8' }}>
              I'm{' '}
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>Phiwe Mhlope</span>, a
              Full-Stack Developer based in South Africa. I specialize in building scalable,
              performant web applications across the full stack — from React frontends to Node.js
              APIs and cloud-connected data layers.
            </p>
            <p style={{ color: 'var(--text-2)', lineHeight: '1.8' }}>
              Currently at{' '}
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>VISTECH</span>, I build
              custom enterprise tools using SharePoint Framework (SPFx), TypeScript, and modern
              web technologies for external clients operating within the Microsoft 365 ecosystem.
              My day-to-day involves everything from database design and API integration to UI/UX
              prototyping in Figma.
            </p>
            <p style={{ color: 'var(--text-2)', lineHeight: '1.8' }}>
              I care about{' '}
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>
                maintainability, performance, and accessibility
              </span>{' '}
              — and I bring that discipline to every layer of a project, not just the parts
              users see.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="rounded-lg p-5 space-y-4"
              style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}
            >
              <p className="section-label" style={{ fontSize: '0.65rem' }}>
                Quick facts
              </p>
              {[
                { label: 'Location',    value: 'Conneticut',                      icon: <LuMapPin size={11} /> },
                { label: 'Former role', value: 'Software Developer @ VISTECH',    icon: <LuBriefcase size={11} /> },
                { label: 'Focus',       value: 'Full-Stack Engineering',           icon: <LuCode size={11} /> },
                { label: 'Status',      value: 'Open to opportunities',            icon: <LuZap size={11} /> },
                { label: 'Education',   value: 'BS in Computer Science',           icon: <LuBookOpen size={11} /> },
              ].map(({ label, value, icon }) => (
                <div key={label}>
                  <p
                    className="flex items-center gap-1.5"
                    style={{ color: 'var(--text-3)', fontSize: '0.72rem', fontFamily: 'var(--mono)' }}
                  >
                    <span style={{ color: 'var(--accent)', opacity: 0.8 }}>{icon}</span>
                    {label}
                  </p>
                  <p style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: 500, paddingLeft: '1.4rem' }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <hr className="hr mb-12" />

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-6">Tech stack</p>
          <div className="space-y-5">
            {techCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                className="flex flex-col sm:flex-row sm:items-start gap-3"
                custom={ci}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span
                  className="sm:w-28 flex-shrink-0 text-xs pt-0.5"
                  style={{ color: 'var(--text-3)', fontFamily: 'var(--mono)' }}
                >
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
