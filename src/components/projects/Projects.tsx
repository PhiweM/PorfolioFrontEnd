
import { motion } from 'framer-motion';
import { projects } from '../projectsData';
import ProjectCard from './projectCard';
import ProjectCard2 from './ProjectCard2'


export default function Projects() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }} 
      className='projects container mx-auto px-6 md:px-14  md:pt-24 md:mb-16 max-w-[1000px] xl:w-[75%] flex flex-col z-0 mb-20'
      id='projects'
    >
      <div className="flex space-x-4 mb-6 md:mb-10 ">
        <div className="title-wrapper flex flex-col items-center ">
          <p className="title-sub text-xs font-thin tracking-wider text-cyan-300 mr-2 mb-2">#Projects</p>
          <h1 className="about-title ubuntu-bold text-xl md:text-3xl font-extrabold text-gray-400 relative whitespace-nowrap">
            What I've built
          </h1>
        </div>
        <span className='w-[52%] border-b border-cyan-700/30 mb-3'></span>
      </div>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {index % 2 === 0 ? (
            <ProjectCard
              image={project.image}
              title={project.title}
              desc={project.description}
              techStack={project.techStack}
              projectLink={project.projectLink}
              gitHubLink={project.gitHubLink}
            />
          ) : (
            <ProjectCard2
              image={project.image}
              title={project.title}
              desc={project.description}
              techStack={project.techStack}
              projectLink={project.projectLink}
              gitHubLink={project.gitHubLink}
            />
          )}
        </motion.div>
      ))}

    </motion.div>

  );
}
