export default function Contact() {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Location',
      detail:
        'Shop No.1, Vico Process Shopping Centre, Near New WIT College & Mahalaxmi Mandir, Ashok Chowk, Solapur - 413006, Maharashtra',
    },
    {
      icon: '📞',
      title: 'Phone Number',
      detail: '+91 9756484367',
      link: 'tel:+919756484367',
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      detail: '+91 3647859076',
      link: 'https://wa.me/913647859076',
    },
    {
      icon: '🕒',
      title: 'Opening Hours',
      detail: '10:00 AM – 11:00 PM',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fdff] via-[#eef9ff] to-[#dff4ff]">
      {/* HERO */}
      <section className="pt-28 md:pt-28 pb-16 md:pb-20 px-4 md:px-6 text-center relative overflow-hidden">
        <div className="absolute top-10 md:top-20 left-4 md:left-20 w-20 h-20 md:w-40 md:h-40 bg-cyan-200/30 rounded-full"></div>
        <div className="absolute bottom-10 right-4 md:right-20 w-28 h-28 md:w-52 md:h-52 bg-blue-200/30 rounded-full"></div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-[#081B4B] via-[#0B4D8C] to-[#00A6D6] bg-clip-text text-transparent">
          Contact Us
        </h1>

        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-[#0B4D8C] font-medium">
          We’d Love To Serve You Sweetness
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-6 md:p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="text-4xl md:text-5xl mb-4 md:mb-5">{item.icon}</div>

              <h3 className="text-xl md:text-2xl font-bold text-[#081B4B]">
                {item.title}
              </h3>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-sm md:text-base text-[#0B4D8C] leading-relaxed hover:text-[#00A6D6] font-medium break-words"
                >
                  {item.detail}
                </a>
              ) : (
                <p className="mt-4 text-sm md:text-base text-[#0B4D8C] leading-relaxed font-medium break-words">
                  {item.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MAP + ACTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* GOOGLE MAP */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Shop No.1, Vico Process Shopping Centre, Near New WIT College & Mahalaxmi Mandir, Ashok Chowk, Solapur-413006, Maharashtra&output=embed"
              width="100%"
              height="300"
              className="md:h-[550px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Dwarka Location"
            ></iframe>
          </div>

          {/* ACTION BOX */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#081B4B] text-center md:text-left">
              Visit Dwarka Today
            </h2>

            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-[#0B4D8C] leading-relaxed text-center md:text-left">
              Experience authentic falooda, premium handcrafted ice creams,
              and unforgettable frozen delights served with love and tradition.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-5">
              <a
                href="tel:+919756484367"
                className="w-full text-center bg-gradient-to-r from-[#081B4B] to-[#00A6D6] text-white py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:scale-105 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/913647859076"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-green-500 text-white py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:scale-105 transition"
              >
                💬 WhatsApp Us
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop No.1, Vico Process Shopping Centre, Near New WIT College & Mahalaxmi Mandir, Ashok Chowk, Solapur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-white border border-blue-200 text-[#081B4B] py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:scale-105 transition"
              >
                📍 Open In Google Maps
              </a>

              <a
                href="https://www.zomato.com/solapur/dwarka-falooda-ice-cream-solapur-locality/order"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:scale-105 transition"
              >
                🍨 Order On Zomato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-[#081B4B] to-[#00A6D6] py-8 md:py-10 text-center px-4">
        <p className="text-white text-sm md:text-lg font-semibold tracking-wide">
          Dwarka Icecream • Premium Frozen Delights • Solapur
        </p>
      </footer>
    </div>
  )
}
