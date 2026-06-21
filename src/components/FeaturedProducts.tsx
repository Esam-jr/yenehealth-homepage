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
]

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>

        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image Container */}
              <div className="relative bg-gray-200 aspect-square flex items-center justify-center overflow-hidden">
                {product.discount > 0 && (
                  <div className="absolute top-3 left-3 bg-coral text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    {product.discount}% OFF
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-lg px-3 py-2 flex items-center gap-2 text-xs font-semibold">
                    <Eye size={14} />
                    <span>Quick View</span>
                  </button>
                </div>

                {/* Placeholder */}
                <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-teal text-xs font-bold tracking-wide uppercase mb-2">{product.category.slice(0, 25)}</p>
                <h3 className="text-sm font-semibold text-gray-900 mb-3 line-clamp-2 h-9 hover:text-coral">
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

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 border-2 border-coral text-coral rounded-full py-2 hover:bg-coral hover:text-white transition font-semibold">
                    <Heart size={16} className="mx-auto" />
                  </button>
                  <button className="flex-1 bg-coral text-white rounded-full py-2 hover:bg-opacity-90 transition font-semibold text-xs flex items-center justify-center gap-1">
                    <ShoppingCart size={14} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-8 h-8 border border-gray-300 rounded text-sm font-medium hover:bg-gray-100">1</button>
          <button className="w-8 h-8 border border-gray-300 rounded text-sm font-medium hover:bg-gray-100">2</button>
          <button className="text-gray-400">...</button>
        </div>
      </div>
    </section>
  )
}
