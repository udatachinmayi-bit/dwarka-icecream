import logo from '../assets/logo.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fdff] via-[#eaf8ff] to-[#d9f4ff]"
    >
      {/* Floating clear logo */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat animate-logoFloat"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: '60%',
          backgroundPosition: 'center 58%',
          opacity: 0.9,
        }}
      ></div>

      {/* Decorative premium shapes */}
      <div className="absolute top-44 left-20 w-36 h-36 bg-cyan-200/20 rounded-full animate-float1"></div>

      <div className="absolute bottom-32 right-24 w-48 h-48 bg-blue-200/20 rounded-full animate-float2"></div>

      {/* very light overlay */}
      <div className="absolute inset-0 bg-white/3"></div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-32"
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