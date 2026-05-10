import { motion } from 'framer-motion';
import { LuMapPin, LuBriefcase, LuCode, LuZap, LuBookOpen } from 'react-icons/lu';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiCss3,
  SiNodedotjs, SiExpress, SiPython,
  SiMongodb, SiPostgresql, SiSupabase,
  SiGit, SiGithub, SiFigma, SiPostman, SiVite,
} from 'react-icons/si';
import { TbBrandAzure, TbBrandOffice, TbBrandWindows } from 'react-icons/tb';
import type { IconType } from 'react-icons';

const techCategories: { label: string; items: { name: string; icon: IconType; color: string }[] }[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React',               icon: SiReact,       color: '#61DAFB' },
      { name: 'Next.js',             icon: SiNextdotjs,   color: '#ffffff' },
      { name: 'TypeScript',          icon: SiTypescript,  color: '#3178C6' },
      { name: 'JavaScript (ES6+)',   icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'Tailwind CSS',        icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'CSS3',                icon: SiCss3,        color: '#1572B6' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js',    icon: SiNodedotjs,              color: '#339933' },
      { name: 'Express.js', icon: SiExpress,                color: '#ffffff' },
      { name: 'Python',     icon: SiPython,                 color: '#3776AB' },
      { name: 'REST APIs',  icon: LuCode as unknown as IconType, color: '#34d399' },
    ],
  },
  {
    label: 'Data',
    items: [
      { name: 'MongoDB',    icon: SiMongodb,    color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Supabase',   icon: SiSupabase,   color: '#3ECF8E' },
    ],
  },
  {
    label: 'Enterprise',
    items: [
      { name: 'SharePoint (SPFx)', icon: TbBrandWindows, color: '#0078D4' },
      { name: 'Microsoft Azure',   icon: TbBrandAzure,   color: '#0089D6' },
      { name: 'Microsoft 365',     icon: TbBrandOffice,  color: '#D83B01' },
    ],
  },
  {
    label: 'Tooling',
    items: [
      { name: 'Git',     icon: SiGit,     color: '#F05032' },
      { name: 'GitHub',  icon: SiGithub,  color: '#ffffff' },
      { name: 'Figma',   icon: SiFigma,   color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Vite',    icon: SiVite,    color: '#646CFF' },
    ],
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
              Full-Stack Developer based in Hartford, Connecticut. I specialize in building scalable,
              performant web applications across the full stack — from React frontends to Node.js
              APIs and cloud-connected data layers.
            </p>
            <p style={{ color: 'var(--text-2)', lineHeight: '1.8' }}>
              Formerly at{' '}
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>VISTECH</span>, I built
              custom enterprise tools using SharePoint Framework (SPFx), TypeScript, and modern
              web technologies for external clients operating within the Microsoft 365 ecosystem.
              My day-to-day involved everything from database design and API integration to UI/UX
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
                { label: 'Location',    value: 'Conneticut',                      icon: <LuMapPin size={11} />,    iconColor: '#f87171' },
                { label: 'Former role', value: 'Software Developer @ VISTECH',    icon: <LuBriefcase size={11} />, iconColor: '#fbbf24' },
                { label: 'Focus',       value: 'Full-Stack Engineering',           icon: <LuCode size={11} />,      iconColor: '#34d399' },
                { label: 'Status',      value: 'Open to opportunities',            icon: <LuZap size={11} />,       iconColor: '#a78bfa' },
                { label: 'Education',   value: 'BS in Computer Science',           icon: <LuBookOpen size={11} />,  iconColor: '#60a5fa' },
              ].map(({ label, value, icon, iconColor }) => (
                <div key={label}>
                  <p
                    className="flex items-center gap-1.5"
                    style={{ color: 'var(--text-3)', fontSize: '0.72rem', fontFamily: 'var(--mono)' }}
                  >
                    <span style={{ color: iconColor }}>{icon}</span>
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
                  {cat.items.map(({ name, icon: Icon, color }) => (
                    <span key={name} className="tech-badge flex items-center gap-1.5">
                      <Icon size={13} style={{ color, flexShrink: 0 }} />
                      {name}
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
