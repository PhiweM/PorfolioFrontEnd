
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }} 
    className='contact container mx-auto px-6 md:px-14 max-w-[1000px] flex flex-col justify-center md:pt-20 mb-40' id='contact'>
        <div className="flex items-center space-x-4 mb-3">

          <div className="title-wrapper flex flex-col items-center">
            <p className="title-sub text-xs font-thin tracking-wider text-cyan-300 mr-2 mb-2">#Contact</p>
            <h1 className="about-title ubuntu-bold text-3xl md:text-5xl font-extrabold text-gray-400 relative md:mr-2 pl-1 whitespace-nowrap"> Get In Touch
            </h1>
          </div>

            <p className='w-[35%] border-b border-cyan-700/30 mt-12'></p>

        </div>

        <p className='p-3 md:pl-1 md:pr-20 xl:pr-48 h-auto flex flex-col md:w-4/5 mx-auto text-gray-400 font-normal mb-8'>Hey I'd love to hear from you! Whether you're looking to collaborate on an exciting project, have a freelance opportunity, or just want to connect, feel free to reach out. You can also find me on my socials—I’ll be sure to get back to you.</p>

        {/* <button className="border border-cyan-300 py-1 px-4 rounded  text-cyan-300 text-sm hover:text-gray-500  tracking-wide hvr-sweep-to-right w-32 mx-auto text-center">
           👋🏾Say Hello.
        </button> */}

        <a href="mailto:your.email@example.com" className="border border-cyan-300 py-1 px-4 rounded text-cyan-300 text-sm hover:text-gray-500 tracking-wide hvr-sweep-to-right w-32 mx-auto text-center flex justify-center">
          👋🏾 Say Hello
        </a>


        

        

    </motion.div>
  )
}
