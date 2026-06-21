export default function FeaturedLearning() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured In Learning</h2>

        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              onClick={handleClick}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg h-64 flex items-center justify-center hover:shadow-lg transition cursor-pointer border border-gray-100"
            >
              <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
