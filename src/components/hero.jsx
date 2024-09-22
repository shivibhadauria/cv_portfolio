import { FaLinkedin ,FaGithubSquare,FaPhoneSquareAlt} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

import HeroPic from "../assets/Hpic.jpg";
const hero = () => {
  return (
    <section className="flex justify-around items-center p-10  space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 font-bold text-white animate-floatIn">
        <div className="lg:w-1/3 ssm:w-fit">
            <p className="text-4xl mb-5 text-slate-300">I'm</p>
            <h1 className="text-6xl ">Shivi Singh Bhadauria</h1>
            <hr/>
            <p className="mt-10  text-slate-300 font-sans">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
        </div>
        <div className="w-1/3 items-center ssm:w-fit">
        <img 
  src={HeroPic} 
  alt="" 
  width={250} 
  height={250} 
  className="rounded-full w-full border-8 border-white"
/>
        </div>
        <div className="w-1/3 ssm:w-fit">
            <p className="text-4xl mb-4">About Me</p>
            <p className="text-slate-300">
                Let's build quality in programming ad design with our services
            </p>
            
            <a href=".\public\shivi_cv.pdf" target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-300 text-gray-700 px-10 py-2 my-3 rounded-full hover:bg-gray-500 hover:text-white">
            Resume
          </button>
        </a>
            <div className="flex mt-5 space-x-4 cursor-pointer">
            <a href="https://www.linkedin.com/in/shivi-b-42606b226/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} className="border-4 hover:border-indigo-500" />
          </a>
          <a href="https://github.com/shivibhadauria" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size={40} className="border-4 hover:border-indigo-500" />
          </a>
          <a href="mailto:shivi.singh.bhadauria@gmail.com">
            <MdMarkEmailUnread size={40} className="border-4 hover:border-indigo-500" />
          </a>
                <FaPhoneSquareAlt size={40} className="border-4 hover:border-indigo-500 "/>
            </div>
        </div>

    </section>
  )
}

export default hero