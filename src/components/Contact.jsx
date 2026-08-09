import { FiArrowRight, FiMail, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import resumeFile from "../assets/Vishnu_J_FullStack_Resume (1).pdf";

function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-5 pb-20 scroll-mt-24">
      <div className="border-t border-gold-500/15 pt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 text-gold-300">
        
        {/* Left Column: Big Title */}
        <div className="flex flex-col justify-between space-y-8 lg:space-y-0">
          <div>
            <h2 className="font-sans text-3xl lg:text-4xl leading-tight font-extrabold text-gold-100 uppercase tracking-tight">
              Let's Create<br />
              Something<br />
              Extraordinary
            </h2>
            <p className="font-sans text-xs tracking-widest text-gold-500 uppercase mt-6 font-semibold">
              Open to internships, projects, and collaborations.
            </p>
          </div>
          <div className="font-sans text-xs text-gold-500/70 font-medium">
            © {new Date().getFullYear()} Vishnu J. All rights reserved.
          </div>
        </div>

        {/* Middle Column: Let's Connect links */}
        <div className="space-y-8">
          <h3 className="font-sans text-xs tracking-[0.2em] text-gold-400 uppercase pb-2 border-b border-gold-500/10 w-fit font-semibold">
            Let's Connect
          </h3>
          
          <ul className="space-y-5 text-sm">
            {/* Email */}
            <li>
              <a 
                href="mailto:vishnuvibin813@gmail.com" 
                className="group flex items-center gap-3 text-gold-300 hover:text-gold-400 transition-colors"
              >
                <FiMail className="text-gold-400 text-base flex-shrink-0" />
                <span className="border-b border-transparent group-hover:border-gold-400 transition-all duration-300">
                  vishnuvibin813@gmail.com
                </span>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a 
                href="https://linkedin.com/in/vishnu-vibin-48ab85281" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 text-gold-300 hover:text-gold-400 transition-colors"
              >
                <FiLinkedin className="text-gold-400 text-base flex-shrink-0" />
                <span className="border-b border-transparent group-hover:border-gold-400 transition-all duration-300">
                  linkedin.com/in/vishnu-vibin
                </span>
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a 
                href="https://github.com/VishnuVibin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 text-gold-300 hover:text-gold-400 transition-colors"
              >
                <FiGithub className="text-gold-400 text-base flex-shrink-0" />
                <span className="border-b border-transparent group-hover:border-gold-400 transition-all duration-300">
                  github.com/VishnuVibin
                </span>
              </a>
            </li>

            {/* Location */}
            <li className="flex items-center gap-3 text-gold-400">
              <FiMapPin className="text-gold-400 text-base flex-shrink-0" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Work Together & Resume QR */}
        <div className="space-y-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-sans text-xs tracking-[0.2em] text-gold-400 uppercase pb-2 border-b border-gold-500/10 w-fit font-semibold">
              Let's Work Together
            </h3>
            <p className="text-xs md:text-sm text-gold-300/80 leading-relaxed font-light">
              Have an internship opportunity, a project idea, or just want to say hello? I'd love to chat.
            </p>
            
            <a 
              href="mailto:vishnuvibin813@gmail.com?subject=Project%20Inquiry%20-%20Portfolio"
              className="inline-flex items-center justify-between gap-4 w-full md:w-auto px-6 py-3 border border-gold-500 bg-gold-500/10 hover:bg-gold-500 hover:text-navy-950 text-gold-200 hover:font-semibold rounded-full transition-all duration-500 group text-xs tracking-wider uppercase font-semibold"
            >
              <span>Get In Touch</span>
              <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* QR Code Block */}
          <div className="flex items-center gap-4 border border-gold-500/10 bg-[#1a1816]/40 p-4 rounded-[16px]">
            {/* Elegant SVG QR Design */}
            <div className="w-16 h-16 bg-[#cda375] p-1 flex-shrink-0 rounded-[8px] flex flex-wrap justify-between items-between">
              {/* Outer corners */}
              <div className="w-5 h-5 border-2 border-navy-950 bg-transparent flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-navy-950"></div>
              </div>
              <div className="w-5 h-5 border-2 border-navy-950 bg-transparent flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-navy-950"></div>
              </div>
              <div className="w-full h-1 flex justify-around">
                <div className="w-1 h-1 bg-navy-950"></div>
                <div className="w-2 h-1 bg-navy-950"></div>
              </div>
              <div className="w-5 h-5 border-2 border-navy-950 bg-transparent flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-navy-950"></div>
              </div>
              {/* Center noise blocks */}
              <div className="w-5 h-5 flex flex-wrap justify-between p-0.5">
                <div className="w-1.5 h-1.5 bg-navy-950"></div>
                <div className="w-1.5 h-1.5 bg-navy-950"></div>
                <div className="w-2 h-1.5 bg-navy-950"></div>
                <div className="w-1.5 h-2 bg-navy-950"></div>
              </div>
            </div>
            <div>
              <a 
                href={resumeFile} 
                download="Vishnu_J_Resume.pdf"
                className="font-sans text-xs text-gold-200 font-bold uppercase hover:underline block tracking-wide"
              >
                Scan / Click To View
              </a>
              <p className="font-sans text-[10px] text-gold-500 uppercase tracking-widest mt-0.5 font-medium">
                My Professional CV
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
