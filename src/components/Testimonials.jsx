export default function Testimonials() {
  const reviews = [
    "Amazing taste and premium quality!",
    "Best ice cream in town!",
    "Loved the sundaes and shakes!"
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        What Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <p className="text-gray-600 text-lg">"{review}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}