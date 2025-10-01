import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact';
import Projects from './components/projects/Projects';
import { useState, useEffect } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";

function App() {
    const [showButton, setShowButton] = useState<boolean>(false);

  // Show the button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="appjsx bg-gray-800 relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      {/* Return to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 rounded-full bg-cyan-500 text-white shadow-lg hover:bg-cyan-400 transition-transform transform hover:scale-110 hover:animate-pulse"
          aria-label="Scroll to Top"
        >
          <IoIosArrowRoundUp size={20}/>
        </button>
      )}


      <div className="footer mt-auto mx-auto w-full pb-5">
        <p className='text-gray-400 text-center text-sm cursor-pointer hover:text-cyan-300 mb-5'>
          © Designed by Phiwe Mhlope 2024
        </p>
        <p className='text-center cursor-pointer mx-auto text-xs text-gray-400 underline hover:text-cyan-300 '>
          <a href="https://phiwem.netlify.app/" target='blank'>previous site version</a>
        </p>
      </div>
    </div>
   
  )
}

export default App