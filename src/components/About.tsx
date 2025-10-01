import heroImg from './../assets/heroimg2.png';
import { motion } from 'framer-motion';

export default function About() {
  const techStack = "https://img.icons8.com/color/48/000000/";
  const techStackIcons = [
    { name: 'CSS3', url: `${techStack}css3.png` },
    { name: 'Tailwind CSS', url: `${techStack}tailwindcss.png` },
    { name: 'JavaScript (ES6+)', url: `${techStack}javascript--v1.png` },
    { name: 'TypeScript', url: `${techStack}typescript--v1.png` },
    { name: 'Python', url: `${techStack}python.png` },
    { name: 'MongoDB', url: `${techStack}mongodb.png` },
    { name: 'Express.js', url: `${techStack}express-js.png` },
    { name: 'React', url: `${techStack}react-native.png` },
    { name: 'Nextjs', url: `${techStack}nextjs.png` },
    { name: 'Node.js', url: `${techStack}nodejs.png` },
    { name: 'Git', url: `${techStack}git.png` },
    { name: 'GitHub', url: `https://img.icons8.com/fluency/48/github.png` },
    { name: 'Npm', url: `${techStack}npm.png` },
    { name: 'Wordpress', url: `${techStack}wordpress.png` },
    { name: 'Figma', url: `${techStack}figma.png` },
    { name: 'Postman', url: `https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png`},
    { name: 'Microsoft Sharepoint + SPFx', url: `${techStack}microsoft-sharepoint-2019.png` },
    { name: 'Microsoft Azure', url: `https://img.icons8.com/fluency/48/azure-1.png` },
  ];

  return (
    <div className='about container mx-auto md:pt-20 px-4 md:px-14 mb-20 md:mb-16 max-w-[1000px] xl:w-[75%]' id='about'>
      <div className="md:hidden hero-img-container w-full pb-16">
        <img src={heroImg} alt="hero-Image" className="hero-img w-full h-auto" />
      </div>

      <div className="flex space-x-4">
        <div className="title-wrapper flex flex-col items-center">
          <p className="title-sub text-xs font-thin tracking-wider text-cyan-300 mr-2 mb-2">#About</p>
          <h1 className="about-title ubuntu-bold text-xl md:text-3xl font-extrabold text-gray-400 relative md:mr-2 pl-1">
            About Me
          </h1>
        </div>
        <span className='w-[52%] border-b border-cyan-700/30 mb-3'></span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} 
        className="details py-4 px-10 md:pr-20 h-auto max-w-[800px] flex flex-col "
      >
        <p className='text-gray-400 mb-3 font-normal'>
        Hello! My name is <strong>Phiwe,</strong> and I build things for the internet.
        I’m a <strong>Full-Stack Developer</strong> passionate about crafting seamless digital experiences. With a strong foundation in both frontend and backend development, I specialize in building scalable, high-performance applications.
        </p>
        <p className='text-gray-400 mb-3 font-normal'>
        I thrive on learning, problem-solving, and pushing the boundaries of technology, constantly improving my craft while sharing knowledge with others.
        </p>

        <p className='text-gray-400 mb-3 font-normal'>
          Currently, I work at <strong>VISTECH</strong>, where I build custom database management and record-keeping systemsfor external clients using <strong>SharePoint Framework (SPFx), TypeScript, and modern web technologies</strong>. I also <strong>design UI/UX mockups in Figma</strong> to enhance application workflows.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }} 
        className="tech-stack max-w-[700px] mx-auto md:p-3 text-center xl:ml-20"
      >
        <h2 className="tech-stack-title text-gray-400 text-lg ubuntu-bold my-3 ml-4 md:ml-0  xl:ml-12 text-center">Tech Stack</h2>
        <div className="tech-icons flex gap-4 flex-wrap justify-center">
          {techStackIcons.map((icon, index) => (
            <div key={index} className="tech-icon mb-3 flex flex-col justify-center items-center mr-3">
              <img src={icon.url} alt={icon.name} className='img-icon' />
              <p className='icon-name text-xs font-normal tracking-wider text-gray-400'>{icon.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
