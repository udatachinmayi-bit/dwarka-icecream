export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center"
    >
      <div className="h-[400px] bg-white rounded-3xl shadow-xl border-4 border-dashed border-pink-300 flex items-center justify-center text-gray-400 text-xl">
        Shop Photo Placeholder
      </div>

      <div>
        <h2 className="text-4xl font-bold text-gray-800">
          About Dwarka Icecream
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Dwarka Icecream brings joy through handcrafted frozen desserts,
          premium shakes, sundaes, and family treats.
        </p>
      </div>
    </section>
  )
}