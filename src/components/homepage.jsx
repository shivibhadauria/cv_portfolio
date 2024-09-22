import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Footer from "./footer";
import Skills from "./skills";
import Contact from "./contact";
import Gallery from "./gallery";
import { AiOutlineArrowUp } from 'react-icons/ai';
const Homepage = () => {
  console.log('Main component rendered');
  return (
    <div className="bg-[url('./assets/abg.jpeg')] ">
        <Nav/>
        <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-50 bg-gray-500 text-white p-4 rounded-full shadow-lg hover:bg-gray-500 transition duration-300 ease-in-out flex items-center justify-center"
      aria-label="Scroll to Top"
    >
      <AiOutlineArrowUp size={24} />
    </button>

        <div id="hero">
          <Hero/>
        </div>
        <div id="projects">
          <Project/>
        </div>
        <div id="skills">
          <Skills/>
        </div>
        <div id="gallery">
          <Gallery/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default Homepage;
