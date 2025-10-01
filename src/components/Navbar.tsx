import React, { useEffect, useState } from 'react';
import logo from './../assets/logo.png';
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems: string[] = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className={`sticky top-0 p-3  xl:w-[100%] xl:mx-auto transition-all duration-300
        ${isScrolled ? "bg-slate-800 shadow-lg border-b border-cyan-700/30" : "bg-gray-800/90 backdrop-blur-sm"} z-50`}>
      <div className="flex items-center justify-between xl:w-[75%] xl:mx-auto">
        {/* Logo */}
        <a href="#home">
          <motion.img
            src={logo}
            alt="logo"
            className="w-20 md:ml-10"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          />
        </a>

        {/* Mobile Menu Icon */}
        <motion.div
          className="md:hidden"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <RiMenu3Line className="text-3xl text-cyan-300 cursor-pointer" />
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4 mr-5">
          {menuItems.map((item: string, index: number) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: '#0ff', transition: { duration: 0.2 } }}
              className="text-gray-200 text-sm border-l-2 border-l-cyan-300 pl-3 pr-1 tracking-wide hover:text-cyan-300"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="flex items-center border border-cyan-300 py-1 px-4 rounded text-cyan-300 text-sm hover:text-gray-600 tracking-wide hvr-sweep-to-right cursor-pointer"
          >
            Resume
          </motion.li>
        </ul>
      </div>

      {/* Background blur overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 min-h-screen z-40 h-full bg-gray-900 bg-opacity-80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-3/4 bg-gray-800 text-gray-200 flex flex-col items-end z-50 min-h-screen"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <IoCloseOutline
              className="text-4xl text-cyan-300 cursor-pointer m-4 mt-3 transition-colors duration-300 hover:text-gray-200"
              onClick={toggleMenu}
            />
            <motion.ul
              className="flex flex-col space-y-6 p-8 items-end mt-20"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              {menuItems.map((item: string, index: number) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="border-r-2 border-r-cyan-300 pr-5 pl-20 hover:text-cyan-300 rounded-tl rounded-bl text-lg text-gray-200 tracking-wide transition-colors duration-300"
                >
                  <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}>
                    {item}
                  </a>
                </motion.li>
              ))}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: '#0ff',
                  color: '#111',
                  transition: { duration: 0.3 },
                }}
                className="flex items-center border border-cyan-300 p-2 rounded text-cyan-300 text-lg tracking-wide px-6"
              >
                Resume
              </motion.button>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;