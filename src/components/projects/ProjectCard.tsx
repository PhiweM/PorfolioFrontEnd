import { Link } from 'react-router-dom';
import { LuGithub } from 'react-icons/lu';
import { HiOutlineExternalLink, HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import type { Project } from '../projectsData';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, image, title, tagline, techStack, projectLink, gitHubLink, status, year, metrics } =
    project;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="eng-card flex flex-col h-full rounded-xl overflow-hidden"
    >
      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: 'brightness(0.85)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.7))' }}
        />
        {/* Status + year overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`status-badge ${status === 'production' ? 'production' : ''}`}>
            <span className="dot" />
            {status === 'production' ? 'Production' : status}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            {year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h2
          className="text-base font-semibold mb-2 leading-snug"
          style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}
        >
          {title}
        </h2>

        {/* Tagline */}
        <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: 'var(--text-3)' }}>
          {tagline}
        </p>

        {/* Metrics row */}
        {metrics.length > 0 && (
          <div
            className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-lg"
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
          >
            {metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <p className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                  {m.value}
                </p>
                <p style={{ color: 'var(--text-3)', fontSize: '0.65rem', fontFamily: 'var(--mono)' }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span
              className="text-xs px-2 py-0.5 rounded"
              style={{ color: 'var(--text-3)', fontFamily: 'var(--mono)' }}
            >
              +{techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto">
          <Link
            to={`/projects/${slug}`}
            className="btn-primary flex-1 justify-center text-xs py-2"
          >
            Case Study <HiArrowRight size={12} />
          </Link>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-150"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-3)',
              background: 'var(--bg-elevated)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')}
            aria-label="Live demo"
            title="Live demo"
          >
            <HiOutlineExternalLink size={14} />
          </a>
          <a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-150"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-3)',
              background: 'var(--bg-elevated)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-3)')}
            aria-label="GitHub repository"
            title="View source"
          >
            <LuGithub size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
