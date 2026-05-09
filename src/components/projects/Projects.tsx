import { motion } from 'framer-motion';
import { projects } from '../projectsData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="section-label mb-3">Projects</p>
          <div className="flex items-end justify-between gap-4">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
            >
              Selected work
            </h2>
            <p className="text-sm hidden sm:block" style={{ color: 'var(--text-3)' }}>
              {projects.length} projects
            </p>
          </div>
          <p className="mt-3 text-sm max-w-lg" style={{ color: 'var(--text-3)' }}>
            Production applications built end-to-end. Each entry links to a full case study
            covering architecture, decisions, and outcomes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
