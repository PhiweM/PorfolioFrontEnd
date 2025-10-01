import heroImg from './../assets/heroimg2.png';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className='hero container ubuntu-regular mx-auto flex flex-col md:flex-row text-white gap-1 xl:px-16 items-center justify-center md:justify-start h-[80vh] md:h-[95vh] xl:w-[75%] z-30 px-4 md:px-10 ' id='home'>

      {/* Content Animation */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} 
        className="bio md:w-2/3 px-6 md:px-1"
      >
        <p className='hi text-cyan-300 mb-3 text-sm md:text-md'>Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl ubuntu-bold font-black mb-2 mb:3 text-gray-300">Phiwe Mhlope.</h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl ubuntu-medium mb-5 text-gray-400">I'm a Full-Stack Developer.</h1>
        <p className="xl:pr-20 text-gray-400 text-base md:text-base mb-5"> <span className='italic'>Turning ideas into reality through code.</span> <br />
        I build modern, scalable web applications with a focus on performance and user experience. Let’s create something amazing together!</p>

        <div className="social-icons flex gap-2 mt-5 items-center cursor-pointer">
          <a href="https://www.linkedin.com/in/phiwe-mhlope/" target="_blank" className='social-media-icon text-gray-400 text-lg hover:text-cyan-300'><FaLinkedin /></a>
          <a href="https://github.com/PhiweM" target="_blank" className='social-media-icon text-gray-400 text-lg hover:text-cyan-300'><FaGithub /></a>
          <a href="https://github.com/PhiweM" target="_blank" className='social-media-icon text-gray-400 text-lg hover:text-cyan-300'> <FaInstagram /> </a>
          <a href="https://github.com/PhiweM" target="_blank" className='social-media-icon text-gray-400 text-base hover:text-cyan-300'><BsTwitterX /></a>
          <a href="https://www.mhlopephiwe.com/" target="_blank" className='text-gray-400 text-base p-0.5 mt-1 rounded hover:text-cyan-300 flex items-center pb-1.5'>Blog</a>
        </div>
      </motion.div>

      {/* Image Animation */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} 
        className="hidden md:block hero-img-container w-[400px] md:w-[450px] xl:w-[600px] md:pb-20 pb-16 "
      >
       <img
          src={heroImg}
          alt="hero-Image"
          className="hero-img w-full h-auto transition-all duration-300 hover:-translate-y-2"
        />

      </motion.div>

    </div>
  );
}

export default Hero;