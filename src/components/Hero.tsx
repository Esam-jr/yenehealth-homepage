export default function Hero() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
        {/* Left - Hero Text */}
        <div className="space-y-6">
          <div>
            <h1 className="text-6xl font-bold leading-tight mb-4">
              Dear June, Here's to a{' '}
              <span className="text-teal">Healthier Us</span>
            </h1>
            <p className="text-gray-700 text-lg">
              Halfway Through the Year, its time for yearly check ups
            </p>
          </div>

          {/* Phone Mockup - Placeholder */}
          <div className="relative w-56 h-80 bg-black rounded-3xl border-8 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col items-center justify-center p-4 text-center">
              <div className="text-teal font-bold text-xs mb-2">See a Doctor</div>
              <div className="w-12 h-12 bg-teal rounded-full mb-3"></div>
              <div className="text-xs text-gray-600 space-y-1">
                <div>Connect with our</div>
                <div>provider in minutes</div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <div>Consult a Doctor</div>
                <div>Consult a Pharmacist</div>
              </div>
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
          </div>
        </div>

        {/* Right - Featured Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Natures Bounty Hair, Skin and Nails Biotin...', price: '3,000', original: '3,500', discount: '14%', cat: 'VITAMINS AND SUPPLEMENTS' },
              { name: 'Gaullac 1 Infant Formula', price: '1,000', original: '1,200', discount: '', cat: 'MOMMY & BABY' },
              { name: 'Gaullac 2 Follow-On Formula', price: '1,000', original: '1,200', discount: '', cat: 'MOMMY & BABY' },
              { name: 'Equate Cold & Flu Nighttime Softgels', price: '2,880', original: '', discount: '', cat: 'OVER THE COUNTER' },
            ].map((product, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                {/* Image Container */}
                <div className="relative bg-gray-100 h-48 flex items-center justify-center group">
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-coral text-white px-2 py-1 rounded text-xs font-bold z-10">
                      {product.discount} OFF
                    </div>
                  )}

                  {/* Product placeholder */}
                  <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition flex items-center justify-center">
                    <button onClick={(e) => e.preventDefault()} className="opacity-0 group-hover:opacity-100 transition bg-white rounded px-2 py-1 text-xs font-semibold">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3">
                  <p className="text-xs text-teal font-bold mb-1">{product.cat.substring(0, 20)}</p>
                  <h3 className="text-xs font-semibold text-gray-900 mb-2 line-clamp-2 h-8">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-1 mb-3">
                    <span className="font-bold text-gray-900">{product.price}</span>
                    <span className="text-xs text-gray-500">ETB</span>
                    {product.original && (
                      <span className="text-xs text-gray-400 line-through ml-1">{product.original}</span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button onClick={(e) => e.preventDefault()} className="flex-1 border-2 border-coral text-coral rounded-full py-1.5 hover:bg-coral hover:text-white transition font-semibold text-xs">
                      ♡
                    </button>
                    <button onClick={(e) => e.preventDefault()} className="flex-1 bg-coral text-white rounded-full py-1.5 hover:bg-opacity-90 transition font-semibold text-xs">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
