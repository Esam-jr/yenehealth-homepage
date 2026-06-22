import { useState } from 'react'
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

const campaigns = [
  {
    id: 1,
    title: 'Dear June',
    image: '/dear-june.jpeg',
  },
  {
    id: 2,
    title: 'Discount Alert',
    image: '/discount.jpeg',
  },
  {
    id: 3,
    title: 'Baby Formula',
    image: '/babyformula.jpeg',
  },
  {
    id: 4,
    title: 'Tilla',
    image: '/tilla.jpeg',
  },
]
 
export default function MainSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }


  return (
    <section className=" p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Left - Hero Promo Section */}
        <div className="lg:col-span-2">
          <div className="relative h-[420px] overflow-hidden rounded-2xl ">
            <img
              src={campaigns[currentSlide].image}
              alt={campaigns[currentSlide].title}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {campaigns.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-4  rounded-2xl transition ${
                    index === currentSlide ? 'w-14 bg-teal' : 'w-8 bg-black/30'
                  }`}
                />
              ))}
            </div>
          </div>
 
         <div className="flex flex-wrap gap-3 mt-4">
  {campaigns.map((campaign, index) => {
    const isActive = index === currentSlide;
    
    return (
      <button
        key={campaign.id}
        onClick={() => setCurrentSlide(index)}
        title={campaign.title}
        className={`w-32 shrink-0 rounded-2xl py-1.5 text-sm font-semibold text-center truncate transition-colors duration-200 border border-solid ${
          isActive
            ? 'bg-[#4A8B88] text-white border-[#4A8B88]'
            : 'bg-white text-[#4A8B88] border-[#4A8B88] hover:bg-coral hover:text-white'
        }`}
      >
        {campaign.title}
      </button>
    );
  })}
</div>
        </div>

        {/* Right - Featured Products */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-gray-900">Featured Products</h2>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-min">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-56 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-xl group"
                >
                  <div className="relative aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                    {product.discount > 0 && (
                      <div className="absolute left-3 top-3 z-10 rounded-full bg-coral px-3 py-1 text-xs font-bold text-white">
                        {product.discount}% OFF
                      </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all group-hover:bg-opacity-20">
                      <button onClick={handleClick} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                        <Eye size={14} />
                        <span>Quick View</span>
                      </button>
                    </div>

                    <svg className="h-16 w-16 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                  </div>

                  <div className="p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-teal">{product.category.slice(0, 20)}</p>
                    <h3 className="mb-3 h-9 text-sm font-bold text-gray-900 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="mb-4 flex items-baseline gap-1">
                      <span className="text-lg font-bold text-gray-900">{product.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-600">ETB</span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through ml-2">{product.originalPrice}</span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button onClick={handleClick} className="flex-1 rounded-full border-2 border-coral py-2 text-sm font-semibold text-coral transition hover:bg-coral hover:text-white">
                        <Heart size={14} className="mx-auto" />
                      </button>
                      <button onClick={handleClick} className="flex-1 rounded-full bg-coral py-2 text-xs font-semibold text-white transition hover:bg-opacity-90 flex items-center justify-center gap-1">
                        <ShoppingCart size={12} />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-6">
            <div className="absolute -top-12 -right-20 flex items-center gap-2 rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white shadow-lg">
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
