import gyani from "../assets/gyani.jpeg";
import quizzy from "../assets/quizzy.png";
import calci from "../assets/calci.png";
import instacap from "../assets/instacap.jpeg";

const projectData = [
  {
    title: "GYANI VIRTUAL BOT",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolorem quasi sit. Molestias incidunt excepturi veniam.",
    image: gyani,
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-repo",
  },
  {
    title: "CALCII",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolorem quasi sit. Molestias incidunt excepturi veniam.",
    image: calci,
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-repo",
  },
  {
    title: "QUIZZY APP",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolorem quasi sit. Molestias incidunt excepturi veniam.",
    image: quizzy,
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-repo",
  },
  {
    title: "INSTA CAP CLONE",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolorem quasi sit. Molestias incidunt excepturi veniam.",
    image: instacap,
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-repo",
  },
];

function Project() {
  return (
    <div className="bg-[url('./assets/bg.jpeg')] m-20 max-w-full  animate-floatIn">
      <div className="grid justify-items-center m-10">
        <h1 className="text-3xl text-white font-bold mt-10">PROJECTS</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 p-5">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative max-w-md mx-auto bg-gray-400 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse group"
          >
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm to-indigo-500 font-bold">
                  {project.title}
                </div>
                <p className="mt-2 text-white">{project.description}</p>
              </div>
              <div className="md:shrink-0 p-5">
                <img
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                />
              </div>
            </div>

            {/* Popup on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
              >
                Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
