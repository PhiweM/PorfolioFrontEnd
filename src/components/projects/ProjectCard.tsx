import { motion } from 'framer-motion';
import { LuGithub } from "react-icons/lu";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  techStack: string[];
  projectLink: string;
  gitHubLink: string;
}

export default function ProjectCard({ image, title, desc, techStack, projectLink, gitHubLink }: ProjectCardProps) {
  return (
    <div
      className="group relative flex flex-col h-full rounded-xl overflow-hidden bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(6,182,212,0.12)] hover:-translate-y-1 cursor-pointer"
      onClick={() => window.open(projectLink, '_blank')}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      {/* Image */}
      <div className="relative w-full h-48 flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/40 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h2 className="text-gray-100 text-lg ubuntu-bold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">{desc}</p>

        <div className="flex items-end justify-between gap-3 flex-wrap mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-cyan-900/40 text-cyan-300 border border-cyan-600/30 rounded-full px-2.5 py-0.5 text-xs font-mono tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <motion.a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-600/50 border border-gray-500/50 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
              whileHover={{ y: -2 }}
            >
              <LuGithub className="text-base" />
            </motion.a>
            <motion.a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-600/50 border border-gray-500/50 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
              whileHover={{ y: -2 }}
            >
              <HiOutlineExternalLink className="text-base" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
