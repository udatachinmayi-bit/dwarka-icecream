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
      <section id="menu" className="pt-28 md:pt-24 pb-16 md:pb-20 px-4 md:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-[#081B4B] via-[#0B4D8C] to-[#00A6D6] bg-clip-text text-transparent">
          Our Menu
        </h1>

        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-[#0B4D8C] font-medium">
          Premium Frozen Delights Crafted With Love
        </p>
      </section>

      {/* CATEGORY BUTTONS */}
      <section className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex justify-center gap-4 md:gap-8 mb-14 md:mb-20 flex-wrap">
          <a
            href="#falooda"
            className="px-6 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#081B4B] via-[#0B4D8C] to-[#00A6D6] text-white font-bold text-sm md:text-lg shadow-2xl hover:scale-105 transition"
          >
            ✨ Falooda Specials
          </a>

          <a
            href="#icecream"
            className="px-6 md:px-10 py-3 md:py-4 rounded-full bg-white text-[#081B4B] font-bold text-sm md:text-lg border border-blue-100 shadow-xl hover:bg-blue-50 hover:scale-105 transition"
          >
            🍦 Premium Ice Cream
          </a>
        </div>
      </section>

      {/* FALOODA */}
      <section id="falooda" className="max-w-6xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="bg-white rounded-3xl shadow-2xl p-5 md:p-10 border border-blue-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#081B4B] text-center mb-8 md:mb-12">
            Falooda Specials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {faloodaItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl px-4 md:px-6 py-4 md:py-5 hover:scale-[1.02] transition shadow-md"
              >
                <span className="text-sm sm:text-lg md:text-xl font-semibold text-[#081B4B]">
                  {item.name}
                </span>

                <span className="text-sm sm:text-lg md:text-xl font-bold text-[#00A6D6]">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICE CREAM */}
      <section id="icecream" className="max-w-6xl mx-auto px-4 md:px-6 pb-20 md:pb-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#081B4B] mb-10 md:mb-14">
          Premium Ice Cream Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {iceCreamItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-5 md:p-6 hover:scale-105 transition duration-300"
            >
              <div className="h-44 sm:h-48 md:h-52 rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-5 md:mt-6 text-xl md:text-2xl font-bold text-[#081B4B]">
                {item.name}
              </h3>

              <p className="mt-2 md:mt-3 text-sm md:text-base text-[#0B4D8C] leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-5 md:mt-6 w-full bg-gradient-to-r from-[#081B4B] to-[#00A6D6] text-white py-3 rounded-full font-bold shadow-lg hover:scale-105 transition">
                View Details
              </button>
            </div>
          ))}
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
