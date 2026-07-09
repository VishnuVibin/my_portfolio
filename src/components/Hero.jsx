import vishnuImg from "../assets/Vishnu.jpg";

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-10 pb-16 overflow-hidden">
      
      {/* Massive Background Text */}
      <div className="absolute top-[18%] md:top-[12%] left-1/2 -translate-x-1/2 -z-10 w-full select-none pointer-events-none text-center">
        <h1 className="font-serif text-[18vw] md:text-[21vw] font-black uppercase tracking-tighter leading-none text-[#dfcca9]/[0.025] inline-block">
          PORTFOLIO
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full px-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10">
        
        {/* Left Info Column (Visible on Desktop, stacked underneath on mobile) */}
        <div className="order-2 lg:order-1 lg:col-span-3 text-center lg:text-left lg:pb-12">
          <div className="space-y-2">
            <p className="font-serif text-[10px] tracking-[0.3em] text-gold-500 uppercase">
              Intelligent Systems
            </p>
            <p className="font-serif text-xl md:text-2xl text-gold-200 uppercase tracking-wider">
              That Drive <span className="italic font-light text-gold-400">Impact.</span>
            </p>
          </div>
        </div>

        {/* Center Portrait Column */}
        <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center">
          <div className="relative group">
            {/* Ambient gold glow behind image */}
            <div className="absolute -inset-1 rounded-sm bg-gradient-to-b from-gold-500/20 to-transparent blur-md opacity-60 group-hover:opacity-85 transition-opacity duration-1000"></div>
            <div className="relative border border-gold-600/30 p-2 bg-navy-950/90 rounded-sm">
              <img 
                src={vishnuImg} 
                alt="Vishnu J" 
                className="w-[260px] md:w-[320px] lg:w-[340px] aspect-[3/4.2] object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Right Info Column */}
        <div className="order-3 lg:order-3 lg:col-span-3 text-center lg:text-left lg:pb-12 space-y-5 flex flex-col items-center lg:items-start">
          <p className="text-xs text-gold-400 leading-relaxed font-sans max-w-xs">
            I engineer robust full-stack architectures and build computer vision & language models, translating complex algorithms into elegant, interactive software solutions.
          </p>
          
          <div className="pt-2">
            <span className="font-signature text-6xl text-gold-300 block -rotate-3 select-none leading-none">
              Vishnu J
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;