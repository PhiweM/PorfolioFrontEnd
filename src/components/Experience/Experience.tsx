import { motion } from 'framer-motion';

interface Role {
  company: string;
  title: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const roles: Role[] = [
  {
    company: 'VISTECH',
    title: 'Software Developer',
    period: 'Jun 2023 — Present',
    type: 'Full-time',
    description:
      'Delivering custom enterprise web applications for external clients operating within the Microsoft 365 ecosystem. Sole frontend engineer on several client engagements — responsible for requirements, architecture, implementation, and handover.',
    highlights: [
      'Engineered SPFx web parts and React-based interfaces that replaced manual, paper-driven record-keeping workflows for enterprise clients, directly reducing administrative overhead and improving data accuracy.',
      'Owned the full frontend delivery lifecycle — from Figma prototype to production deployment — on multiple client projects simultaneously, consistently shipping within agreed timelines.',
      'Designed UI/UX mockups in Figma prior to each build cycle, securing stakeholder sign-off before a line of code was written and eliminating costly late-stage revision rounds.',
      'Integrated third-party REST APIs into SharePoint environments to automate cross-system data synchronisation, removing the need for manual data entry between business tools.',
      'Applied TypeScript strictly across all SPFx solutions, catching interface mismatches and null-safety issues at compile time rather than in production.',
    ],
    tech: ['SharePoint Framework (SPFx)', 'TypeScript', 'React', 'Microsoft 365', 'Azure', 'Figma', 'REST APIs', 'Node.js', 'Git', 'Jest'],
  },
  {
    company: 'GO-Digital',
    title: 'Software Developer',
    period: 'Oct 2019 — Jan 2021',
    type: 'Full-time',
    description:
      'Full-ownership web developer delivering WordPress sites and eCommerce platforms for small-to-medium businesses. Handled scoping, development, performance tuning, and client handover independently.',
    highlights: [
      'Delivered multiple client websites end-to-end — from initial scoping through to deployment — owning every layer of the stack including hosting configuration, CMS setup, and post-launch support.',
      'Wrote custom JavaScript modules to implement functionality outside the scope of standard plugins, including dynamic product filtering, AJAX-based cart interactions, and multi-step form flows.',
      'Built and launched WooCommerce eCommerce stores with payment gateway integration, custom product catalog structures, and optimised checkout experiences that directly drove client revenue.',
      'Improved Core Web Vitals scores across client sites through image optimisation, server-side caching, asset minification, and deferred script loading — measurably improving both performance and SEO ranking.',
      'Collaborated directly with clients to translate loose briefs and reference designs into polished, responsive websites, building strong stakeholder communication habits early in my career.',
    ],
    tech: ['WordPress', 'JavaScript', 'PHP', 'CSS3', 'WooCommerce', 'SEO'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="section-label mb-3">Experience</p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
          >
            Work history
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
            style={{ background: 'var(--border)', marginLeft: '7px' }}
          />

          <div className="space-y-12">
            {roles.map((role, i) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-10"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 hidden md:block"
                  style={{
                    borderColor: 'var(--accent)',
                    background: 'var(--bg)',
                  }}
                />

                <div
                  className="rounded-xl p-6"
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {/* Role header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3
                          className="text-base font-semibold"
                          style={{ color: 'var(--text)' }}
                        >
                          {role.title}
                        </h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded"
                          style={{
                            background: 'var(--accent-dim)',
                            color: 'var(--accent)',
                            fontFamily: 'var(--mono)',
                          }}
                        >
                          {role.type}
                        </span>
                      </div>
                      <p style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '0.9rem' }}>
                        {role.company}
                      </p>
                    </div>
                    <span
                      className="text-xs flex-shrink-0 pt-1"
                      style={{ color: 'var(--text-3)', fontFamily: 'var(--mono)' }}
                    >
                      {role.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-5" style={{ color: 'var(--text-2)', lineHeight: '1.7' }}>
                    {role.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-5">
                    {role.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: 'var(--text-2)' }}
                      >
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: 'var(--accent)' }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {role.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
