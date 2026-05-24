import { useState } from 'react'
import logo from '../assets/logo.png'
import dwarkaText from '../assets/dwarka-marathi.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="
          w-full
          bg-white/15
          backdrop-blur-md
          border-b
          border-white/20
          shadow-[0_10px_35px_rgba(0,166,214,0.10)]
          px-4 md:px-10
          py-2
        "
      >
        <div className="flex justify-between items-center">
          {/* BRAND */}
          <Link to="/" className="flex items-center gap-3 md:gap-5">
            <img
              src={logo}
              alt="Dwarka"
              className="
                h-14
                sm:h-16
                md:h-24
                object-contain
              "
            />

            <img
              src={dwarkaText}
              alt="द्वारका"
              className="
                h-8
                sm:h-10
                md:h-20
                object-contain
              "
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 font-bold text-lg">
            <Link
              to="/"
              className="text-[#081B4B] hover:text-[#00A6D6] transition"
            >
              Home
            </Link>

            <Link
              to="/menu"
              className="text-[#081B4B] hover:text-[#00A6D6] transition"
            >
              Menu
            </Link>

            <Link
              to="/about"
              className="text-[#081B4B] hover:text-[#00A6D6] transition"
            >
              About
            </Link>

            <Link
              to="/gallery"
              className="text-[#081B4B] hover:text-[#00A6D6] transition"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="text-[#081B4B] hover:text-[#00A6D6] transition"
            >
              Contact
            </Link>

            <a
              href="https://www.zomato.com/solapur/dwarka-falooda-ice-cream-solapur-locality/order"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-r
                from-[#081B4B]
                to-[#00A6D6]
                text-white
                px-6
                py-3
                rounded-full
                font-bold
                shadow-xl
                hover:scale-105
                transition
              "
            >
              Order Now
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#081B4B] text-3xl font-bold"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-5 text-center">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-[#081B4B] font-bold text-lg"
            >
              Home
            </Link>

            <Link
              to="/menu"
              onClick={() => setMenuOpen(false)}
              className="text-[#081B4B] font-bold text-lg"
            >
              Menu
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-[#081B4B] font-bold text-lg"
            >
              About
            </Link>

            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="text-[#081B4B] font-bold text-lg"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-[#081B4B] font-bold text-lg"
            >
              Contact
            </Link>

            <a
              href="https://www.zomato.com/solapur/dwarka-falooda-ice-cream-solapur-locality/order"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-r
                from-[#081B4B]
                to-[#00A6D6]
                text-white
                px-6
                py-3
                rounded-full
                font-bold
                shadow-xl
              "
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
