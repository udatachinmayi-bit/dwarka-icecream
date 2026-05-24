export default function MenuSection() {
  const items = [
    "Classic Cone",
    "Chocolate Sundae",
    "Oreo Shake",
    "Family Pack"
  ]

  return (
    <section id="menu" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Our Best Sellers
      </h2>

      <div className="grid md:grid-cols-4 gap-8 mt-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-5 hover:scale-105 transition"
          >
            <div className="h-44 border-4 border-dashed border-pink-200 rounded-2xl flex items-center justify-center text-gray-400">
              Product Photo
            </div>

            <h3 className="text-xl font-semibold mt-5">{item}</h3>
            <p className="text-gray-500 mt-2">Premium delicious treat</p>
          </div>
        ))}
      </div>
    </section>
  )
}