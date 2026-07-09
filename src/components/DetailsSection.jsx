import { MdSchool, MdWorkOutline, MdSettings } from "react-icons/md";
import testimonialAvatar from "../assets/Vishnu.jpg"; // Using Vishnu's photo for a testimonial mock or we can style a initials bubble

function DetailsSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 mb-28 border-t border-gold-600/20 pt-16">
      
      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 lg:divide-x divide-gold-600/20 text-gold-300">
        
        {/* Column 1: Education */}
        <div className="lg:pr-10 space-y-12">
          <div className="flex items-center gap-3 pb-4 border-b border-gold-600/10">
            <MdSchool className="text-gold-500 text-xl" />
            <h3 className="font-serif text-sm tracking-[0.2em] text-gold-400 uppercase">
              Education
            </h3>
          </div>

          <div className="space-y-8">
            {/* Degree 1 */}
            <div className="space-y-2">
              <h4 className="font-serif text-lg text-gold-100">
                B.Tech in Artificial Intelligence & Data Science
              </h4>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-500">
                KGISL Institute of Technology, Coimbatore
              </p>
              <div className="flex justify-between items-center text-xs text-gold-400">
                <span>Jan 2023 – Present (3rd Year)</span>
                <span className="px-2 py-0.5 rounded border border-gold-500/30 text-gold-300 font-semibold">
                  CGPA: 7.8
                </span>
              </div>
            </div>

            {/* Degree 2 */}
            <div className="space-y-2">
              <h4 className="font-serif text-lg text-gold-100">
                HSC — Higher Secondary Certificate
              </h4>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-500">
                Sri Krishna Matric Higher Secondary School, Coimbatore
              </p>
              <div className="flex justify-between items-center text-xs text-gold-400">
                <span>Jan 2021 – Jan 2023</span>
                <span className="text-gold-300">
                  Percentage: 89%
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Box */}
          <div className="border border-gold-600/20 bg-navy-900/30 p-6 rounded-sm space-y-4 mt-8">
            <p className="font-serif text-sm italic leading-relaxed text-gold-100">
              "Vishnu is a highly analytical and creative engineer. The intelligence systems and real-time vision pipelines he developed show a level of technical depth that exceeds expectations."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-500/30 overflow-hidden bg-navy-950 flex items-center justify-center font-serif text-gold-400 text-xs">
                Dr. R
              </div>
              <div>
                <h5 className="font-serif text-xs text-gold-200 font-semibold uppercase">
                  Dr. S. K. Ramesh
                </h5>
                <p className="font-sans text-[10px] text-gold-500 uppercase tracking-widest">
                  Academic Project Advisor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Technical Focus */}
        <div className="lg:px-10 space-y-12">
          <div className="flex items-center gap-3 pb-4 border-b border-gold-600/10">
            <MdWorkOutline className="text-gold-500 text-xl" />
            <h3 className="font-serif text-sm tracking-[0.2em] text-gold-400 uppercase">
              Competencies & Focus
            </h3>
          </div>

          <div className="space-y-8">
            {/* Focus 1 */}
            <div className="space-y-2">
              <h4 className="font-serif text-lg text-gold-100">
                Full-Stack Architecture
              </h4>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-500">
                REST APIs & Web Frameworks
              </p>
              <p className="text-sm text-gold-400 leading-relaxed">
                Skilled in designing robust Python/Java backend servers (Flask, Sockets) integrated with responsive frontend interfaces (Streamlit, React).
              </p>
            </div>

            {/* Focus 2 */}
            <div className="space-y-2">
              <h4 className="font-serif text-lg text-gold-100">
                AI & Vision Pipelines
              </h4>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-500">
                Computer Vision & NLP Integration
              </p>
              <p className="text-sm text-gold-400 leading-relaxed">
                Experienced in deploying custom YOLOv8 detection models, TensorFlow classification pipelines, and LLM text analysis engines via Groq APIs.
              </p>
            </div>

            {/* Focus 3 */}
            <div className="space-y-2">
              <h4 className="font-serif text-lg text-gold-100">
                Software Delivery & Tools
              </h4>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-500">
                Packaging & Version Control
              </p>
              <p className="text-sm text-gold-400 leading-relaxed">
                Adept at Git workflows, managing environment configurations, and packaging Python scripts into standalone binaries using PyInstaller.
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Dev Process */}
        <div className="lg:pl-10 space-y-12">
          <div className="flex items-center gap-3 pb-4 border-b border-gold-600/10">
            <MdSettings className="text-gold-500 text-xl animate-spin-slow" style={{ animationDuration: "12s" }} />
            <h3 className="font-serif text-sm tracking-[0.2em] text-gold-400 uppercase">
              My Dev Process
            </h3>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <span className="font-serif text-lg text-gold-500/80 font-bold tracking-wide">01</span>
              <div>
                <h5 className="font-serif text-sm text-gold-200 uppercase tracking-widest">
                  Discover
                </h5>
                <p className="text-xs text-gold-400 mt-1">
                  Analyzing system constraints, input data types (diagrams, PDFs), and project requirements.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <span className="font-serif text-lg text-gold-500/80 font-bold tracking-wide">02</span>
              <div>
                <h5 className="font-serif text-sm text-gold-200 uppercase tracking-widest">
                  Strategize
                </h5>
                <p className="text-xs text-gold-400 mt-1">
                  Drafting system architecture, model choices (YOLOv8 vs TensorFlow), and database schemas.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <span className="font-serif text-lg text-gold-500/80 font-bold tracking-wide">03</span>
              <div>
                <h5 className="font-serif text-sm text-gold-200 uppercase tracking-widest">
                  Develop
                </h5>
                <p className="text-xs text-gold-400 mt-1">
                  Writing clean, modular Python/Java code, configuring APIs, and styling user interfaces.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <span className="font-serif text-lg text-gold-500/80 font-bold tracking-wide">04</span>
              <div>
                <h5 className="font-serif text-sm text-gold-200 uppercase tracking-widest">
                  Integrate
                </h5>
                <p className="text-xs text-gold-400 mt-1">
                  Testing connections between AI models and frontends, tuning socket multithreading speeds.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4">
              <span className="font-serif text-lg text-gold-500/80 font-bold tracking-wide">05</span>
              <div>
                <h5 className="font-serif text-sm text-gold-200 uppercase tracking-widest">
                  Deploy
                </h5>
                <p className="text-xs text-gold-400 mt-1">
                  Compiling binaries using PyInstaller and deploying lightweight web dashboards.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default DetailsSection;
