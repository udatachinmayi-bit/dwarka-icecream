import logo from '../assets/logo.png'
import dwarkaText from '../assets/dwarka-marathi.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 animate-slideDown">
      <div
        className="
          w-full
          bg-white/15
          backdrop-blur-md
          border-b
          border-white/20
          shadow-[0_10px_35px_rgba(0,166,214,0.10)]
          px-10
          py-2
          flex
          justify-between
          items-center
        "
      >
        {/* LEFT BRAND */}
        <Link to="/" className="flex items-center gap-5">
          <img
            src={logo}
            alt="Dwarka"
            className="
              h-20
              md:h-24
              object-contain
              animate-logoPop
              hover:scale-105
              transition
              duration-300
            "
          />

          <div className="flex flex-col justify-center">
            <img
              src={dwarkaText}
              alt="द्वारका"
              className="
                h-10
                md:h-20
                object-contain
                drop-shadow-md
              "
            />

            <span
              className="
                text-xs
                md:text-sm
                tracking-[0.25em]
                uppercase
                text-[#0B4D8C]
                font-bold
              "
            >
              
            </span>
          </div>
        </Link>

        {/* RIGHT NAVIGATION */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-10 font-bold text-xl">
            <Link
              to="/"
              className="
                text-[#081B4B]
                hover:text-[#00A6D6]
                transition
                duration-300
                hover:scale-105
              "
            >
              Home
            </Link>

            <Link
              to="/menu"
              className="
                text-[#081B4B]
                hover:text-[#00A6D6]
                transition
                duration-300
                hover:scale-105
              "
            >
              Menu
            </Link>

            <Link
              to="/about"
              className="
                text-[#081B4B]
                hover:text-[#00A6D6]
                transition
                duration-300
                hover:scale-105
              "
            >
              About
            </Link>

            <Link
              to="/gallery"
              className="
                text-[#081B4B]
                hover:text-[#00A6D6]
                transition
                duration-300
                hover:scale-105
              "
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="
                text-[#081B4B]
                hover:text-[#00A6D6]
                transition
                duration-300
                hover:scale-105
              "
            >
              Contact
            </Link>
          </div>

          <button>
         <a
  href="https://www.zomato.com/solapur/dwarka-falooda-ice-cream-solapur-locality/order"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-gradient-to-r
    from-[#081B4B]
    to-[#00A6D6]
    text-white
    px-7
    py-3
    rounded-full
    font-bold
    text-lg
    shadow-xl
    hover:scale-105
    transition
  "
>
  Order Now
</a>
          </button>
        </div>
      </div>
    </nav>
  )
}