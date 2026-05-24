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
      <section className="pt-28 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-200/20 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-52 h-52 bg-blue-200/20 rounded-full"></div>

        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#081B4B] via-[#0B4D8C] to-[#00A6D6] bg-clip-text text-transparent">
          Our Gallery
        </h1>

        <p className="mt-6 text-xl text-[#0B4D8C] font-medium">
          Moments Of Sweetness, Memories Of Joy
        </p>
      </section>

      {/* FEATURED IMAGE */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 hover:scale-[1.01] transition duration-300">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl flex items-center justify-center h-[420px] overflow-hidden">
            <img
              src={featuredImg}
              alt="Featured Gallery"
              className="max-w-[85%] max-h-[85%] object-contain hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-center text-[#081B4B] mb-14">
          Premium Showcase
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#081B4B] text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-14">
          <h2 className="text-5xl font-black text-[#081B4B]">
            Experience Dwarka
          </h2>

          <p className="mt-6 text-xl text-[#0B4D8C]">
            Crafted with love, served with happiness.
          </p>

          <a
            href="https://www.zomato.com/solapur/dwarka-falooda-ice-cream-solapur-locality/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-[#081B4B] to-[#00A6D6] text-white font-bold text-lg shadow-xl hover:scale-105 transition"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-[#081B4B] to-[#00A6D6] py-10 text-center">
        <p className="text-white text-lg font-semibold tracking-wide">
          Dwarka Icecream • Premium Frozen Delights
        </p>
      </footer>
    </div>
  )
}