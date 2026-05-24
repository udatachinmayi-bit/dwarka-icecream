export default function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Visit Us
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            📍 Your Shop Address Here
          </p>

          <p className="mt-3 text-lg text-gray-600">
            📞 +91 6484737935
          </p>

          <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-full hover:scale-105 transition">
            WhatsApp Order
          </button>
        </div>

        <div className="h-[350px] bg-white rounded-3xl shadow-xl border-4 border-dashed border-pink-300 flex items-center justify-center text-gray-400 text-xl">
          Map Placeholder
        </div>
      </div>
    </section>
  )
}