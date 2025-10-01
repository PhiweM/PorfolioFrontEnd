import { motion } from 'framer-motion';
import WorkExpTabs from './VerticalTabs';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }} 
      className='experience container mx-auto px-4 md:px-20 mb-20 md:pt-20 md:mb-24 max-w-[1000px]'
      id='experience'
    >
      <div className="flex space-x-4 md:mb-4">
        <div className="title-wrapper flex flex-col items-center">
          <p className="title-sub text-xs font-thin tracking-wider text-cyan-300 mr-2 mb-2">#Experience</p>
          <h1 className="about-title ubuntu-bold text-xl md:text-3xl font-extrabold text-gray-400 relative md:mr-2 pl-1 whitespace-nowrap">
            My Work Experience
          </h1>
        </div>
        <span className='w-[42%] border-b border-cyan-700/30 mb-3'></span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }} 
        className="details py-4 h-auto flex flex-col max-w-[700px] pl-4"
      >
        <WorkExpTabs />
      </motion.div>
    </motion.div>
  );
}
