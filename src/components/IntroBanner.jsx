import { MdLocationOn, MdSchool, MdFolderOpen, MdBuild } from "react-icons/md";

function IntroBanner() {
  return (
    <div className="max-w-7xl mx-auto px-5 mb-20">
      <div className="border border-gold-500/15 bg-[#1a1816]/40 backdrop-blur-sm rounded-[20px] overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold-500/10 text-gold-300">
        
        {/* Left Column: Name & Title */}
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="font-sans text-3xl lg:text-4xl font-extrabold tracking-tight text-gold-200 uppercase">
              VISHNU J
            </h2>
            <p className="font-sans text-xs tracking-[0.2em] text-gold-500 uppercase mt-2 font-semibold">
              Full-Stack & AI Engineer
            </p>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold mt-6 md:mt-0">
            Based in India
          </div>
        </div>

        {/* Middle Column: Description & Status */}
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <p className="font-sans text-[15px] leading-relaxed text-gold-150 font-light italic">
            "I help parse complex data workflows and build intelligent systems with clean, robust code and seamless full-stack integrations."
          </p>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-gold-400">
              <MdLocationOn className="text-gold-400 text-base flex-shrink-0" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/20 bg-gold-500/5 text-[10px] tracking-wider uppercase text-gold-450 font-semibold w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Internships & Projects
            </div>
          </div>
        </div>

        {/* Right Column: Key Stats */}
        <div className="p-8 md:p-10 flex flex-col justify-center space-y-6">
          {/* Stat 1 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-450 bg-gold-500/5">
              <MdSchool className="text-xl" />
            </div>
            <div>
              <div className="text-lg font-sans font-bold text-gold-100">3rd Year</div>
              <div className="text-[10px] uppercase tracking-widest text-gold-500 font-semibold">B.Tech Student (AI & DS)</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-450 bg-gold-500/5">
              <MdFolderOpen className="text-xl" />
            </div>
            <div>
              <div className="text-lg font-sans font-bold text-gold-100">5+ Projects</div>
              <div className="text-[10px] uppercase tracking-widest text-gold-500 font-semibold">Completed & Delivered</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-450 bg-gold-500/5">
              <MdBuild className="text-xl" />
            </div>
            <div>
              <div className="text-lg font-sans font-bold text-gold-100">10+ Core</div>
              <div className="text-[10px] uppercase tracking-widest text-gold-500 font-semibold">Technologies Mastered</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default IntroBanner;
