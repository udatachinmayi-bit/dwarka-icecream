import shopImg from '../assets/shop-image.png'

export default function About() {
  const features = [
    {
      title: 'Premium Ingredients',
      desc: 'Only high-quality ingredients crafted for unforgettable taste.',
      icon: '🍦',
    },
    {
      title: 'Hygienic Preparation',
      desc: 'Prepared with utmost cleanliness and premium quality standards.',
      icon: '✨',
    },
    {
      title: 'Family Favorite',
      desc: 'A trusted destination for delightful treats and family moments.',
      icon: '💙',
    },
    {
      title: 'Authentic Taste',
      desc: 'Rich creamy flavors made with tradition and love.',
      icon: '🥛',
    },
  ]

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '50+', label: 'Menu Delights' },
    { number: '100%', label: 'Quality Promise' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fdff] via-[#eef9ff] to-[#dff4ff]">

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-200/30 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-52 h-52 bg-blue-200/30 rounded-full"></div>

        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#081B4B] via-[#0B4D8C] to-[#00A6D6] bg-clip-text text-transparent">
          About Dwarka
        </h1>

        <p className="mt-6 text-xl text-[#0B4D8C] font-medium">
          Serving Happiness, One Scoop At A Time
        </p>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* SHOP IMAGE */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 hover:scale-105 transition duration-300">
            <img
              src={shopImg}
              alt="Dwarka Shop"
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-[#081B4B] mb-6">
              Our Story
            </h2>

            <p className="text-[#0B4D8C] text-lg leading-relaxed">
              Dwarka Icecream is more than just a dessert destination — it is a
              place where tradition meets premium taste. For years, we have
              delighted families with handcrafted frozen treats made from
              carefully selected ingredients, authentic recipes, and a passion
              for quality.
            </p>

            <p className="mt-6 text-[#0B4D8C] text-lg leading-relaxed">
              From signature falooda to rich premium ice creams, every delight
              is created to bring joy, freshness, and unforgettable flavor to
              every customer.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-center text-[#081B4B] mb-14">
          Why Choose Dwarka
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold text-[#081B4B]">
                {item.title}
              </h3>

              <p className="mt-4 text-[#0B4D8C] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-[#081B4B] to-[#00A6D6] rounded-3xl shadow-2xl p-12">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            {stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-5xl font-black text-white">
                  {item.number}
                </h3>

                <p className="mt-3 text-white text-lg font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-14">
          <h2 className="text-4xl font-bold text-[#081B4B] mb-8">
            Our Promise
          </h2>

          <p className="text-2xl text-[#0B4D8C] leading-relaxed font-medium">
            “Every scoop is crafted with purity, freshness, and unforgettable taste.”
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <div className="bg-gradient-to-r from-[#eaf8ff] to-[#dff4ff] rounded-3xl p-14 shadow-xl">
          <h2 className="text-5xl font-black text-[#081B4B]">
            Visit Dwarka Today
          </h2>

          <p className="mt-6 text-xl text-[#0B4D8C]">
            Experience premium frozen delights made with love.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <a
              href="https://www.zomato.com/solapur/dwarka-falooda-ice-cream-solapur-locality/order"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#081B4B] to-[#00A6D6] text-white font-bold text-lg shadow-xl hover:scale-105 transition"
            >
              Order Now
            </a>

            <a
              href="/contact"
              className="px-10 py-4 rounded-full bg-white text-[#081B4B] font-bold text-lg shadow-lg hover:scale-105 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}