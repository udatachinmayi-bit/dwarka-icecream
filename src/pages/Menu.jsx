import chocolateImg from '../assets/chocolate-delight.jpg'
import vanillaImg from '../assets/vanilla-bliss.png'
import strawberryImg from '../assets/strawberry-dream.png'
import mangoImg from '../assets/mango-magic.png'
import butterscotchImg from '../assets/butterscotch-crunch.png'
import blackCurrantImg from '../assets/black-currant.png'

export default function Menu() {
  const faloodaItems = [
    { name: 'Special Falooda', price: '₹45' },
    { name: 'Mawa Falooda', price: '₹20' },
    { name: 'Gulkand Falooda', price: '₹20' },
    { name: 'Pista Falooda', price: '₹20' },
    { name: 'Kesar Pista Falooda', price: '₹20' },
    { name: 'Chocolate Falooda', price: '₹20' },
    { name: 'Mango Falooda', price: '₹20' },
    { name: 'Mama Ice Cream', price: '₹100' },
  ]

  const iceCreamItems = [
    {
      name: 'Chocolate Delight',
      desc: 'Rich chocolate handcrafted premium ice cream',
      image: chocolateImg,
    },
    {
      name: 'Vanilla Bliss',
      desc: 'Smooth creamy vanilla experience',
      image: vanillaImg,
    },
    {
      name: 'Strawberry Dream',
      desc: 'Fresh fruity strawberry indulgence',
      image: strawberryImg,
    },
    {
      name: 'Mango Magic',
      desc: 'Refreshing mango frozen delight',
      image: mangoImg,
    },
    {
      name: 'Butterscotch Crunch',
      desc: 'Crunchy premium butterscotch goodness',
      image: butterscotchImg,
    },
    {
      name: 'Black Currant',
      desc: 'Tangy and creamy signature favorite',
      image: blackCurrantImg,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fdff] via-[#eef9ff] to-[#dff4ff]">
      {/* HERO */}
      <section id="menu" className="pt-24 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#081B4B] via-[#0B4D8C] to-[#00A6D6] bg-clip-text text-transparent">
          Our Menu
        </h1>

        <p className="mt-6 text-xl text-[#0B4D8C] font-medium">
          Premium Frozen Delights Crafted With Love
        </p>
      </section>

      {/* CATEGORY TABS */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-8 mb-20 flex-wrap">
          <a
            href="#about"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#081B4B] via-[#0B4D8C] to-[#00A6D6] text-white font-bold text-lg shadow-2xl hover:scale-105 transition"
          >
            ✨ Falooda Specials
          </a>

          <a
            href="#gallery"
            className="px-10 py-4 rounded-full bg-white text-[#081B4B] font-bold text-lg border border-blue-100 shadow-xl hover:bg-blue-50 hover:scale-105 transition"
          >
            🍦 Premium Ice Cream
          </a>
        </div>
      </section>

      {/* FALOODA */}
      <section id="about" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-blue-100">
          <h2 className="text-4xl font-bold text-[#081B4B] text-center mb-12">
            Falooda Specials
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {faloodaItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl px-6 py-5 hover:scale-[1.02] transition shadow-md"
              >
                <span className="text-xl font-semibold text-[#081B4B]">
                  {item.name}
                </span>

                <span className="text-xl font-bold text-[#00A6D6]">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICE CREAM */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-center text-[#081B4B] mb-14">
          Premium Ice Cream Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {iceCreamItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300"
            >
              <div className="h-52 rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#081B4B]">
                {item.name}
              </h3>

              <p className="mt-3 text-[#0B4D8C] leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-6 w-full bg-gradient-to-r from-[#081B4B] to-[#00A6D6] text-white py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">
                View Details
              </button>
            </div>
          ))}
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