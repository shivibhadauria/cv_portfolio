import htmll from "../assets/html.png";
import csss from "../assets/css.png";
import jss from "../assets/js.png";
import reactt from "../assets/react.png";
import pythonn from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mysqll  from "../assets/mysql.png";
import cppp from "../assets/cpp.png";
function skills() {
  return (
<div className=" m-5 lg:m-20 p-5 rounded-lg shadow-lg animate-floatIn ">
  <div className="grid justify-items-center m-5">
    <h1 className="text-3xl text-white mt-5 font-bold">SKILLS</h1>
  </div>

 
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5 justify-center m-5">
    <div className="relative text-center p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-75">
      <img src={htmll} alt="HTML Icon" width={50} height={50} className="mx-auto" />
      <p className="text-white font-bold mt-2">HTML</p>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <span className="text-white font-bold">Advanced</span>
      </div>
    </div>

    <div className="relative text-center p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-75">
      <img src={csss} alt="CSS Icon" width={50} height={50} className="mx-auto" />
      <p className="text-white font-bold mt-2">CSS</p>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <span className="text-white font-bold">Advanced</span>
      </div>
    </div>

    <div className="relative text-center p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-75">
      <img src={jss} alt="JavaScript Icon" width={70} height={70} className="mx-auto" />
      <p className="text-white font-bold mt-2">JavaScript</p>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <span className="text-white font-bold">Advanced</span>
      </div>
    </div>

    <div className="relative text-center p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-75">
      <img src={reactt} alt="React.js Icon" width={50} height={50} className="mx-auto" />
      <p className="text-white font-bold mt-2">React.js</p>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <span className="text-white font-bold">Advanced</span>
      </div>
    </div>

    <div className="relative text-center p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-75">
      <img src={tailwind} alt="Tailwind CSS Icon" width={70} height={100} className="mx-auto" />
      <p className="text-white font-bold mt-2">Tailwind CSS</p>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <span className="text-white font-bold">Intermediate</span>
      </div>
    </div>
  </div>


  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-5 justify-center m-5">
    <div className="relative text-center p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-75">
      <img src={nodejs} alt="Node.js Icon" width={100} height={100} className="mx-auto" />
      <p className="text-white font-bold mt-2">Node.js</p>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <span className="text-white font-bold">Intermediate</span>
      </div>
    </div>

    <div className="relative text-center p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-75">
      <img src={pythonn} alt="Python Icon" width={50} height={50} className="mx-auto" />
      <p className="text-white font-bold mt-2">Python</p>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <span className="text-white font-bold">Advanced</span>
      </div>
    </div>

    <div className="relative text-center p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-75">
      <img src={cppp} alt="C++ Icon" width={50} height={50} className="mx-auto" />
      <p className="text-white font-bold mt-2">C++</p>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <span className="text-white font-bold">Advanced</span>
      </div>
    </div>

    <div className="relative text-center p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-75">
      <img src={mysqll} alt="MySQL Icon" width={50} height={50} className="mx-auto" />
      <p className="text-white font-bold mt-2">MySQL</p>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <span className="text-white font-bold">Advanced</span>
      </div>
    </div>
  </div>
</div>

    


  )
}

export default skills