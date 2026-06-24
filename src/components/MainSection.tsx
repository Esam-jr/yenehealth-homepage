import { useEffect, useState } from 'react'
import { Heart, Eye, ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  image: string
  category: string
  price: number
  originalPrice: number
  discount: number
}

const products: Product[] = [
  {
    id: 1,
    name: 'Natures Bounty Hair, Skin and Nails Biotin Gummie',
    image: 'naturesBounty.png',
    category: 'VITAMINS AND SUPPLEMENTS',
    price: 3000,
    originalPrice: 3500,
    discount: 14,
  },
  {
    id: 2,
    name: 'Gaullac 1 Infant Formula',
    image: 'gaullac1.png',
    category: 'MOMMY & BABY',
    price: 1000,
    originalPrice: 1200,
    discount: 0,
  },
  {
    id: 3,
    name: 'Gaullac 2 Follow-On Formula',
    image: 'gaullac2.png',
    category: 'MOMMY & BABY',
    price: 1000,
    originalPrice: 1200,
    discount: 0,
  },
  {
    id: 4,
    name: 'Equate Cold & Flu Nighttime Softgels',
    image: 'equate.png',
    category: 'OVER THE COUNTER',
    price: 2880,
    originalPrice: 3200,
    discount: 0,
  },
  {
    id: 5,
    name: 'Equate Cold & Flu Nighttime Softgels',
    image: 'equate2.png',
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % campaigns.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }


  return (
    <section className=" p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Left -  Promo Section */}
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/10] lg:h-[420px] lg:aspect-auto">
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="min-w-full h-full shrink-0">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="h-full w-full object-contain lg:object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {campaigns.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-4 rounded-2xl transition-all duration-300 ${
                    index === currentSlide ? 'w-14 bg-teal' : 'w-8 bg-black/30'
                  }`}
                />
              ))}
            </div>
          </div>
 
          <div className="mt-4">
            <div className="flex flex-wrap gap-3">
              {campaigns.map((campaign, index) => {
                const isActive = index === currentSlide;

                return (
                  <button
                    key={campaign.id}
                    onClick={() => setCurrentSlide(index)}
                    title={campaign.title}
                    className={`flex-1 min-w-0 rounded-2xl border border-solid  py-1.5 px-3 text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#4A8B88] text-white border-[#4A8B88]'
                        : 'text-[#4A8B88] border-[#4A8B88] hover:bg-coral hover:text-white'
                    }`}
                  >
                    <span className="block truncate">{campaign.title}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right - Featured Products */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-6 shadow-sm">
          <h2 className="mb-6 text-base font-bold text-gray-900">Featured Products</h2>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-min">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-56 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-xl group"
                >
                  <div className="relative aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                    {product.discount > 0 && (
                      <div className="absolute left-3 top-3 z-10 rounded-md bg-coral px-3 py-1 text-xs  text-white">
                        {product.discount}% OFF
                      </div> 
                    )}

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <button
                        onClick={handleClick}
                        className="z-20 transform translate-y-25 opacity-0 transition-all duration-500 ease-out flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold group-hover:translate-y-8 group-hover:opacity-100 hover:bg-coral hover:text-white"
                      >
                        <Eye size={14} />
                        <span>Quick View</span>
                      </button>
                    </div>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <p className="mb-2 text-xs  uppercase tracking-wide text-gray-400 hover:text-coral hover:cursor-pointer transition">
                      {product.category.slice(0, 20)}
                    </p>
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

                    <div className="flex justify-between gap-4">
                      <div
                      className="flex rounded-md border border-gray-300  transition hover:border-coral  items-center justify-center gap-1"
                      >
                      <button onClick={handleClick} className=" text-gray-400 rounded-md  px-3 text-sm font-semibold hover:text-coral transition">
                        <Heart size={18} className="mx-auto" />
                      </button>
                      </div>
                      <button onClick={handleClick} className=" rounded-md bg-coral p-2  text-xs font-semibold text-white transition hover:bg-opacity-90 flex items-center justify-center gap-1">
                        <ShoppingCart size={12} />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
