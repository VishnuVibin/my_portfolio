import { MdSchool, MdWorkOutline, MdSettings } from "react-icons/md";

function DetailsSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 mb-28 border-t border-gold-500/10 pt-16">
      
      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 lg:divide-x divide-gold-500/10 text-gold-300">
        
        {/* Column 1: Education & Core Competencies */}
        <div className="lg:pr-10 space-y-12">
          <div className="flex items-center gap-3 pb-4 border-b border-gold-500/10">
            <MdSchool className="text-gold-400 text-xl" />
            <h3 className="font-sans text-sm tracking-[0.2em] text-gold-400 uppercase font-semibold">
              Education
            </h3>
          </div>

          <div className="space-y-8">
            {/* Degree 1 */}
            <div className="space-y-2">
              <h4 className="font-sans text-lg text-gold-100 font-bold leading-snug">
                B.Tech in Artificial Intelligence & Data Science
              </h4>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-500">
                KGISL Institute of Technology, Coimbatore
              </p>
              <div className="flex justify-between items-center text-xs text-gold-400">
                <span>Jan 2023 – Present (3rd Year)</span>
                <span className="px-2.5 py-0.5 rounded border border-gold-500/20 bg-gold-500/5 text-gold-300 font-semibold">
                  CGPA: 7.8
                </span>
              </div>
            </div>

            {/* Degree 2 */}
            <div className="space-y-2">
              <h4 className="font-sans text-lg text-gold-100 font-bold leading-snug">
                HSC — Higher Secondary Certificate
              </h4>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-500">
                Sri Krishna Matric Higher Secondary School, Coimbatore
              </p>
              <div className="flex justify-between items-center text-xs text-gold-400">
                <span>Jan 2021 – Jan 2023</span>
                <span className="px-2.5 py-0.5 rounded border border-gold-500/10 text-gold-400">
                  Percentage: 89%
                </span>
              </div>
            </div>
          </div>

          {/* Competencies Box (Replaces Fake Testimonial) */}
          <div className="border border-gold-500/15 bg-navy-900/30 p-6 rounded-2xl space-y-4 mt-8">
            <h4 className="font-sans text-xs tracking-[0.2em] text-gold-400 uppercase border-b border-gold-500/10 pb-2 font-semibold">
              Core Achievements
            </h4>
            <ul className="space-y-3.5 text-xs text-gold-300/90">
              <li className="leading-relaxed">
                <strong className="text-gold-200 block mb-0.5 font-semibold">Software Delivery:</strong> Experience packaging python software and back-end script modules into standalone executables using PyInstaller.
              </li>
              <li className="leading-relaxed">
                <strong className="text-gold-200 block mb-0.5 font-semibold">Feature Design:</strong> Developed localized conversational speech frameworks, multi-lingual tools, and customized interactive kid-friendly dashboards.
              </li>
              <li className="leading-relaxed">
                <strong className="text-gold-200 block mb-0.5 font-semibold">Collaboration:</strong> Adept at standard Git workflow version control, collaborative development, and technical problem-solving.
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2: Technical Focus */}
        <div className="lg:px-10 space-y-12">
          <div className="flex items-center gap-3 pb-4 border-b border-gold-500/10">
            <MdWorkOutline className="text-gold-400 text-xl" />
            <h3 className="font-sans text-sm tracking-[0.2em] text-gold-400 uppercase font-semibold">
              Competencies & Focus
            </h3>
          </div>

          <div className="space-y-8">
            {/* Focus 1 */}
            <div className="space-y-2">
              <h4 className="font-sans text-lg text-gold-100 font-bold">
                Full-Stack Architecture
              </h4>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-500">
                REST APIs & Web Frameworks
              </p>
              <p className="text-xs md:text-sm text-gold-300/80 leading-relaxed font-light">
                Skilled in designing robust Python/Java backend servers (Flask, Sockets) integrated with responsive frontend interfaces (Streamlit, React).
              </p>
            </div>

            {/* Focus 2 */}
            <div className="space-y-2">
              <h4 className="font-sans text-lg text-gold-100 font-bold">
                AI & Vision Pipelines
              </h4>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-500">
                Computer Vision & NLP Integration
              </p>
              <p className="text-xs md:text-sm text-gold-300/80 leading-relaxed font-light">
                Experienced in deploying custom YOLOv8 detection models, TensorFlow classification pipelines, and LLM text analysis engines via Groq APIs.
              </p>
            </div>

            {/* Focus 3 */}
            <div className="space-y-2">
              <h4 className="font-sans text-lg text-gold-100 font-bold">
                Software Delivery & Tools
              </h4>
              <p className="font-sans text-xs uppercase tracking-wider text-gold-500">
                Packaging & Version Control
              </p>
              <p className="text-xs md:text-sm text-gold-300/80 leading-relaxed font-light">
                Adept at Git workflows, managing environment configurations, and packaging Python scripts into standalone binaries using PyInstaller.
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Dev Process */}
        <div className="lg:pl-10 space-y-12">
          <div className="flex items-center gap-3 pb-4 border-b border-gold-500/10">
            <MdSettings className="text-gold-400 text-xl animate-spin-slow" style={{ animationDuration: "12s" }} />
            <h3 className="font-sans text-sm tracking-[0.2em] text-gold-400 uppercase font-semibold">
              My Dev Process
            </h3>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <span className="font-sans text-lg text-gold-400/80 font-bold tracking-wide">01</span>
              <div>
                <h5 className="font-sans text-sm text-gold-250 uppercase tracking-widest font-semibold">
                  Discover
                </h5>
                <p className="text-xs text-gold-300/70 mt-1 leading-relaxed">
                  Analyzing system constraints, input data types (diagrams, PDFs), and project requirements.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <span className="font-sans text-lg text-gold-400/80 font-bold tracking-wide">02</span>
              <div>
                <h5 className="font-sans text-sm text-gold-250 uppercase tracking-widest font-semibold">
                  Strategize
                </h5>
                <p className="text-xs text-gold-300/70 mt-1 leading-relaxed">
                  Drafting system architecture, model choices (YOLOv8 vs TensorFlow), and database schemas.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <span className="font-sans text-lg text-gold-400/80 font-bold tracking-wide">03</span>
              <div>
                <h5 className="font-sans text-sm text-gold-250 uppercase tracking-widest font-semibold">
                  Develop
                </h5>
                <p className="text-xs text-gold-300/70 mt-1 leading-relaxed">
                  Writing clean, modular Python/Java code, configuring APIs, and styling user interfaces.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <span className="font-sans text-lg text-gold-400/80 font-bold tracking-wide">04</span>
              <div>
                <h5 className="font-sans text-sm text-gold-250 uppercase tracking-widest font-semibold">
                  Integrate
                </h5>
                <p className="text-xs text-gold-300/70 mt-1 leading-relaxed">
                  Testing connections between AI models and frontends, tuning socket multithreading speeds.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4">
              <span className="font-sans text-lg text-gold-400/80 font-bold tracking-wide">05</span>
              <div>
                <h5 className="font-sans text-sm text-gold-250 uppercase tracking-widest font-semibold">
                  Deploy
                </h5>
                <p className="text-xs text-gold-300/70 mt-1 leading-relaxed">
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
