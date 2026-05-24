import logo from '../assets/logo.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fdff] via-[#eaf8ff] to-[#d9f4ff]"
    >
      {/* Floating logo */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat animate-logoFloat"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'clamp(220px, 50vw, 700px)',
          backgroundPosition: 'center center',
          opacity: 0.9,
        }}
      ></div>

      {/* Decorative shapes */}
      <div className="absolute top-28 md:top-44 left-4 md:left-20 w-20 h-20 md:w-36 md:h-36 bg-cyan-200/20 rounded-full animate-float1"></div>

      <div className="absolute bottom-24 md:bottom-32 right-4 md:right-24 w-28 h-28 md:w-48 md:h-48 bg-blue-200/20 rounded-full animate-float2"></div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/3"></div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-20 md:h-32"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,96L60,106.7C120,117,240,139,360,149.3C480,160,600,160,720,138.7C840,117,960,75,1080,74.7C1200,75,1320,117,1380,138.7L1440,160L1440,200L0,200Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
