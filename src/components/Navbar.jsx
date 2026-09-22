import resumeFile from "../assets/Vishnu_J_Resume.pdf";

function Navbar() {
  return (
    <header className="w-full bg-[#12100f]/90 backdrop-blur-md py-6 px-6 md:px-12 border-b border-gold-500/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gold-400 uppercase tracking-[0.2em] text-[10px]">
        
        {/* Left Info */}
        <div className="text-left leading-relaxed">
          <div className="font-semibold text-gold-300">AI & Full Stack Developer</div>
          <div className="text-gold-500">Portfolio</div>
        </div>

        {/* Monogram Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="font-sans font-extrabold text-2xl md:text-3xl text-gold-300 hover:text-gold-150 tracking-widest transition-colors">
            VJ
          </a>
        </div>

        {/* Right Info / Action */}
        <div className="text-right leading-relaxed flex items-center gap-6">
          <div className="hidden sm:block text-left sm:text-right">
            <div className="font-semibold text-gold-300">Available For</div>
            <div className="text-gold-500">Internship & Projects</div>
          </div>
          <a 
            href={resumeFile} 
            download="Vishnu_J_Resume.pdf"
            className="px-4 py-2 border border-gold-500/20 hover:border-gold-500 bg-gold-500/5 hover:bg-gold-500/15 text-gold-300 hover:text-gold-100 rounded-full transition-all"
          >
            CV
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;