import projectDiagramImg from "../assets/project_diagram.png";
import projectKnowledgeImg from "../assets/project_knowledge.png";
import projectNetworkImg from "../assets/project_network.png";
import { FiArrowUpRight } from "react-icons/fi";

const PROJECTS = [
  {
    id: 1,
    title: "Diagram Analysis System",
    subtitle: "AI & Computer Vision Digitizer",
    tech: "YOLOv8 • TensorFlow • EasyOCR • Streamlit",
    year: "2024",
    image: projectDiagramImg,
    link: "https://github.com/VishnuVibin"
  },
  {
    id: 2,
    title: "Knowledge-Retrieval Web App",
    subtitle: "Conversational Document Agent",
    tech: "Flask • LLMs • Groq API • PDF Parser",
    year: "2024",
    image: projectKnowledgeImg,
    link: "https://github.com/VishnuVibin"
  },
  {
    id: 3,
    title: "Real-Time Networking GUI",
    subtitle: "Socket Communication System",
    tech: "Java Sockets • Multi-threading • Swing GUIs",
    year: "2023",
    image: projectNetworkImg,
    link: "https://simple-message-transfer.onrender.com/"
  }
];

function SelectedWork() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-5 mb-28 scroll-mt-24">
      
      {/* Header */}
      <div className="flex justify-between items-end pb-4 border-b border-gold-600/20">
        <h3 className="font-serif text-sm tracking-[0.2em] text-gold-400 uppercase">
          Selected Work
        </h3>
        <a 
          href="https://github.com/VishnuVibin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-1 font-sans text-xs tracking-[0.1em] text-gold-500 hover:text-gold-300 uppercase transition-colors"
        >
          View All Projects 
          <FiArrowUpRight className="text-sm transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {/* Image Container with Border & Hover Zoom */}
            <div className="relative aspect-[4/3] overflow-hidden border border-gold-600/20 bg-navy-900/60 rounded-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              {/* Overlay shadow / border effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold-400/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60"></div>
              
              {/* Tiny Hover Indicator icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy-950/80 border border-gold-600/30 flex items-center justify-center text-gold-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <FiArrowUpRight />
              </div>
            </div>

            {/* Info details */}
            <div className="flex justify-between items-start mt-4">
              <div>
                <h4 className="font-serif text-lg text-gold-200 group-hover:text-gold-400 transition-colors">
                  {project.title}
                </h4>
                <p className="font-sans text-xs text-gold-500 uppercase mt-0.5">
                  {project.subtitle}
                </p>
                <div className="font-sans text-[10px] tracking-wider text-gold-600/90 mt-2">
                  {project.tech}
                </div>
              </div>
              <span className="font-serif text-xs text-gold-500 mt-1">
                {project.year}
              </span>
            </div>

          </a>
        ))}
      </div>

    </section>
  );
}

export default SelectedWork;
