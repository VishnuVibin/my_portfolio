import resumeFile from "../assets/Vishnu_J_FullStack_Resume (1).pdf";

function Navbar() {
  return (
    <header className="w-full bg-[#03060f] py-8 px-6 md:px-12 border-b border-gold-600/10 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-gold-400 uppercase tracking-[0.2em] text-[10px]">
        
        {/* Left Info */}
        <div className="text-left leading-relaxed">
          <div className="font-semibold text-gold-300">Full-Stack Developer</div>
          <div className="text-gold-500">Portfolio</div>
        </div>

        {/* Monogram Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="font-serif text-3xl md:text-4xl text-gold-400 hover:text-gold-200 tracking-tighter transition-colors">
            VJ
          </a>
        </div>

        {/* Right Info / Action */}
        <div className="text-right leading-relaxed flex items-center gap-6">
          <div className="hidden sm:block">
            <div className="font-semibold text-gold-300">Available For</div>
            <div className="text-gold-500">Internship & Freelance</div>
          </div>
          <a 
            href={resumeFile} 
            download="Vishnu_J_Resume.pdf"
            className="px-4 py-2 border border-gold-500/30 hover:border-gold-400 bg-gold-500/5 hover:bg-gold-500/15 text-gold-300 hover:text-gold-100 rounded-sm transition-all"
          >
            CV
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;