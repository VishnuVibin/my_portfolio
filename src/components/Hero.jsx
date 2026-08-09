import vishnuImg from "../assets/Vishnu.jpg";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Hero() {
  return (
    <section className="relative py-10 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Outer Card with Rounded Corners and Thin Border */}
      <div className="relative w-full border border-gold-500/20 rounded-[28px] bg-gradient-to-b from-[#1c1a18] to-[#12100f] p-6 md:p-10 lg:p-12 overflow-hidden shadow-2xl">
        
        {/* Ambient spotlight effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        {/* Top Rounded Navbar Pill */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="border border-gold-500/15 rounded-full px-6 py-2 bg-[#25211d]/40 backdrop-blur-md text-[9px] md:text-xs tracking-[0.2em] text-gold-300/90 font-medium uppercase text-center max-w-full overflow-x-auto whitespace-nowrap scrollbar-none">
            FULL-STACK DEVELOPMENT &nbsp;•&nbsp; BACKEND ENGINEERING &nbsp;•&nbsp; AI & VISION INTEGRATION &nbsp;•&nbsp; REAL-TIME NETWORKING &nbsp;•&nbsp; DESKTOP GUIs
          </div>
        </div>

        {/* Middle Section: 3-Column Layout on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative min-h-[380px] md:min-h-[460px]">
          
          {/* Left Column: Name, Subtitle, and Social Handles */}
          <div className="lg:col-span-4 flex flex-col justify-between order-1 lg:order-1 text-center lg:text-left py-2">
            <div className="space-y-3">
              <h1 className="font-sans text-3.5xl md:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-gold-200 leading-none uppercase">
                VISHNU J
              </h1>
              <p className="font-sans text-xs md:text-sm tracking-[0.15em] text-gold-400/80 uppercase font-light">
                Full-Stack Developer & Software Engineer
              </p>
            </div>
            
            {/* Social Links matching Sultan's layout */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 mt-8 lg:mt-auto justify-center lg:justify-start items-center lg:items-start text-xs text-gold-300/80">
              <a 
                href="https://github.com/VishnuVibin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/10 bg-[#25211d]/20 hover:bg-[#25211d]/50 hover:text-gold-200 hover:border-gold-500/30 transition-all duration-300 w-fit"
              >
                <FiGithub className="text-sm text-gold-400" />
                <span className="tracking-wide">github.com/VishnuVibin</span>
              </a>
              <a 
                href="https://linkedin.com/in/vishnu-vibin-48ab85281" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/10 bg-[#25211d]/20 hover:bg-[#25211d]/50 hover:text-gold-200 hover:border-gold-500/30 transition-all duration-300 w-fit"
              >
                <FiLinkedin className="text-sm text-gold-400" />
                <span className="tracking-wide">linkedin.com/in/vishnu-vibin</span>
              </a>
            </div>
          </div>

          {/* Center Column: Portrait Image & Giant Background Text */}
          <div className="lg:col-span-4 flex justify-center items-end relative min-h-[300px] md:min-h-[400px] lg:min-h-auto order-3 lg:order-2">
            
            {/* Giant Background Text "DEVELOPER" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none text-center z-0">
              <span className="font-sans text-[12vw] lg:text-[7vw] font-black tracking-widest text-[#5c4f43]/[0.08] uppercase leading-none inline-block">
                DEVELOPER
              </span>
            </div>

            {/* Styled Portrait Container */}
            <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] aspect-[3/4.2] overflow-hidden rounded-2xl border border-gold-500/15 bg-gradient-to-b from-[#2a2520] to-[#12100f] z-10">
              <img 
                src={vishnuImg} 
                alt="Vishnu J" 
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-90 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
              />
              {/* Fade out bottom overlay to blend image into the border */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100f] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>

          </div>

          {/* Right Column: Tagline & Overlay Role Text */}
          <div className="lg:col-span-4 flex flex-col justify-between items-center lg:items-end text-center lg:text-right py-2 order-2 lg:order-3">
            
            {/* Right Tagline */}
            <div className="text-sm md:text-base font-sans text-gold-300/80 font-light space-y-1 tracking-wide">
              <p>Code that speaks.</p>
              <p>Systems that deliver.</p>
            </div>

            {/* Bottom Overlay Label */}
            <div className="mt-8 lg:mt-auto">
              <span className="font-sans text-2xl md:text-3.5xl lg:text-4xl font-extrabold tracking-wider text-gold-400/90 uppercase leading-none block">
                FULL-STACK DEVELOPER
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Section: Bio Quote Paragraph */}
        <div className="mt-10 md:mt-14 pt-8 border-t border-gold-500/10 text-center relative z-20">
          <p className="text-xs md:text-sm lg:text-[15px] text-gold-200/80 font-sans font-light leading-relaxed max-w-5xl mx-auto italic">
            "Between data and logic lies the space where I build. From training intelligent models to engineering robust server architectures, my work revolves around performance, precision, and clean code. Through full-stack engineering, I translate complex data pipelines into intuitive, deployable user experiences."
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hero;