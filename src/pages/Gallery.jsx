import featuredImg from '../assets/gallery-featured.png'
import chocolateImg from '../assets/chocolate-delight.jpg'
import vanillaImg from '../assets/vanilla-bliss.png'
import strawberryImg from '../assets/strawberry-dream.png'
import mangoImg from '../assets/mango-magic.png'
import butterscotchImg from '../assets/butterscotch-crunch.png'
import blackCurrantImg from '../assets/black-currant.png'

export default function Gallery() {
  const galleryItems = [
    { title: 'Chocolate Delight', image: chocolateImg },
    { title: 'Vanilla Bliss', image: vanillaImg },
    { title: 'Strawberry Dream', image: strawberryImg },
    { title: 'Mango Magic', image: mangoImg },
    { title: 'Butterscotch Crunch', image: butterscotchImg },
    { title: 'Black Currant', image: blackCurrantImg },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fdff] via-[#eef9ff] to-[#dff4ff]">

      {/* HERO */}
      <section className="pt-28 md:pt-28 pb-16 md:pb-16 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute top-10 md:top-20 left-4 md:left-20 w-20 h-20 md:w-40 md:h-40 bg-cyan-200/20 rounded-full"></div>
        <div className="absolute bottom-10 right-4 md:right-20 w-28 h-28 md:w-52 md:h-52 bg-blue-200/20 rounded-full"></div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-[#081B4B] via-[#0B4D8C] to-[#00A6D6] bg-clip-text text-transparent">
          Our Gallery
        </h1>

        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-[#0B4D8C] font-medium">
          Moments Of Sweetness, Memories Of Joy
        </p>
      </section>

      {/* FEATURED IMAGE */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-14 hover:scale-[1.01] transition duration-300">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl flex items-center justify-center h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden">
            <img
              src={featuredImg}
              alt="Featured Gallery"
              className="max-w-[90%] max-h-[90%] object-contain hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#081B4B] mb-10 md:mb-14">
          Premium Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#081B4B] text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16 md:pb-24 text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#081B4B]">
            Experience Dwarka
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-xl text-[#0B4D8C]">
            Crafted with love, served with happiness.
          </p>

          <a
            href="https://www.zomato.com/solapur/dwarka-falooda-ice-cream-solapur-locality/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 md:mt-10 px-8 md:px-10 py-4 rounded-full bg-gradient-to-r from-[#081B4B] to-[#00A6D6] text-white font-bold text-base md:text-lg shadow-xl hover:scale-105 transition"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-[#081B4B] to-[#00A6D6] py-8 md:py-10 text-center px-4">
        <p className="text-white text-sm md:text-lg font-semibold tracking-wide">
          Dwarka Icecream • Premium Frozen Delights
        </p>
      </footer>
    </div>
  )
}
