import { Heart, Eye, ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice: number
  discount: number
}

const products: Product[] = [
  {
    id: 1,
    name: 'Natures Bounty Hair, Skin and Nails Biotin Gummie',
    category: 'VITAMINS AND SUPPLEMENTS',
    price: 3000,
    originalPrice: 3500,
    discount: 14,
  },
  {
    id: 2,
    name: 'Gaullac 1 Infant Formula',
    category: 'MOMMY & BABY',
    price: 1000,
    originalPrice: 1200,
    discount: 0,
  },
  {
    id: 3,
    name: 'Gaullac 2 Follow-On Formula',
    category: 'MOMMY & BABY',
    price: 1000,
    originalPrice: 1200,
    discount: 0,
  },
  {
    id: 4,
    name: 'Equate Cold & Flu Nighttime Softgels',
    category: 'OVER THE COUNTER',
    price: 2880,
    originalPrice: 3200,
    discount: 0,
  },
  {
    id: 5,
    name: 'Equate Cold & Flu Nighttime Softgels',
    category: 'OVER THE COUNTER',
    price: 2880,
    originalPrice: 3200,
    discount: 0,
  },
]

export default function MainSection() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-white px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
        {/* Left - Hero Promo Section */}
        <div className="col-span-1 bg-gradient-to-b from-teal-100 to-teal-50 rounded-3xl p-8 flex flex-col justify-center items-start overflow-hidden relative">
          <div className="relative z-10">
            <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
              Dear <span className="text-teal">June</span>, Here&apos;s to a <span className="text-teal">Healthier Us</span>
            </h1>
            <p className="text-gray-700 text-sm font-medium mb-8">
              Halfway Through the Year, its time for yearly check ups
            </p>
            
            {/* Mock Phone Image */}
            <div className="bg-black rounded-3xl p-2 w-32 h-64 flex items-center justify-center mx-auto">
              <div className="bg-gradient-to-br from-blue-200 to-teal-200 w-full h-full rounded-2xl flex items-center justify-center">
                <span className="text-xs text-gray-600">App Preview</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" />
            </svg>
          </div>
        </div>

        {/* Right - Featured Products */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>

          {/* Horizontal scrollable container */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-min">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-56 bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  {/* Product Image */}
                  <div className="relative bg-gray-100 aspect-square flex items-center justify-center overflow-hidden">
                    {product.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-coral text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                        {product.discount}% OFF
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                      <button onClick={handleClick} className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-lg px-3 py-2 flex items-center gap-2 text-xs font-semibold">
                        <Eye size={14} />
                        <span>Quick View</span>
                      </button>
                    </div>

                    {/* Image placeholder */}
                    <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <p className="text-teal text-xs font-bold tracking-wide uppercase mb-2">{product.category.slice(0, 20)}</p>
                    <h3 className="text-sm font-bold text-gray-900 mb-3 line-clamp-2 h-9">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-lg font-bold text-gray-900">{product.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-600">ETB</span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through ml-2">{product.originalPrice}</span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button onClick={handleClick} className="flex-1 border-2 border-coral text-coral rounded-full py-2 hover:bg-coral hover:text-white transition font-semibold text-sm">
                        <Heart size={14} className="mx-auto" />
                      </button>
                      <button onClick={handleClick} className="flex-1 bg-coral text-white rounded-full py-2 hover:bg-opacity-90 transition font-semibold text-xs flex items-center justify-center gap-1">
                        <ShoppingCart size={12} />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor CTA - Floating */}
          <div className="mt-6 relative">
            <div className="absolute -top-12 -right-20 bg-teal text-white rounded-full px-8 py-4 font-semibold text-sm shadow-lg flex items-center gap-2">
              <span>👋</span>
              <div>
                <p>Hello! Our doctors are online & ready to help you now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
