
import { motion } from 'framer-motion';
import { projects } from '../projectsData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='projects container mx-auto px-6 md:px-14 md:pt-16 md:mb-10 max-w-[1000px] xl:w-[75%] flex flex-col z-0 mb-12'
      id='projects'
    >
      <div className="flex space-x-4 mb-6 md:mb-8">
        <div className="title-wrapper flex flex-col items-center">
          <p className="title-sub text-xs font-thin tracking-wider text-cyan-300 mr-2 mb-2">#Projects</p>
          <h1 className="about-title ubuntu-bold text-xl md:text-3xl font-extrabold text-gray-400 relative whitespace-nowrap">
            What I've built
          </h1>
        </div>
        <span className='w-[52%] border-b border-cyan-700/30 mb-3'></span>
      </div>

      {/* 2-column grid — cards in same row share equal height automatically */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              desc={project.description}
              techStack={project.techStack}
              projectLink={project.projectLink}
              gitHubLink={project.gitHubLink}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
