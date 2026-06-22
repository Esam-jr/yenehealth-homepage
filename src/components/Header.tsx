import { useState } from 'react'
import { Search, Heart, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShopOpen, setIsShopOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <header className="sticky top-0 z-40 bg-defaultBg">
      <div className="max-w-full px-4 py-2.5 flex items-center justify-between gap-2 sm:px-6">
        {/* Left: Logo + hamburger for small screens */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center text-coral lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
          <div className="flex-shrink-0 flex items-center">
            <img src="/yhnavbarlogo.svg" alt="Logo" className="h-12 w-auto" />
          </div>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center font-medium text-coral text-xs gap-6">
          <a href="#" onClick={handleClick} className="text-white bg-coral px-3 py-2.5 rounded-full cursor-pointer">Home</a>
          <a href="#" onClick={handleClick} className="hover:text-teal cursor-pointer">Shop</a>
          
          <a href="#" onClick={handleClick} className="hover:text-teal cursor-pointer">Learn</a>
          <a href="#" onClick={handleClick} className="hover:text-teal cursor-pointer">Doctors</a>
        </nav>

        {/* Desktop search bar */}
        <div className="hidden md:flex flex-1 max-w-xs mx-3 bg-gray-100 rounded-full px-4 py-2 items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent flex-1 outline-none text-xs placeholder-gray-400"
          />
          <div className="flex items-center gap-3">
            <button onClick={handleClick} className="text-gray-600 hover:text-gray-900 text-xs ">Filter</button>
            |
            <button onClick={handleClick} className="text-gray-600 hover:text-gray-900 text-xs ">Sort</button>
            <button onClick={handleClick} className="bg-coral text-white rounded-full p-1.5 hover:bg-opacity-90 transition">
              <Search size={14} />
            </button>
          </div>
        </div>

        {/* Right side desktop + mobile icons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button onClick={handleClick} className="flex items-center justify-center text-coral md:hidden">
            <Search size={18} />
          </button>

          

          <div className="hidden lg:flex items-center gap-6 px-2">
            <button onClick={handleClick} className="bg-coral text-white rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-opacity-90 transition whitespace-nowrap">
              For Businesses
            </button>
            <button onClick={handleClick} className="flex items-center gap-1 text-coral hover:opacity-80 text-xs font-medium">
              <span>English</span>
              <ChevronDown size={12} />
            </button>
            <button onClick={handleClick} className="text-coral text-xs hover:opacity-80">SIGN IN</button>
          </div>
          <button onClick={handleClick} className="flex items-center justify-center text-coral">
            <Heart size={18} />
          </button>
          <button onClick={handleClick} className="flex items-center justify-center text-coral">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-coral text-white">
          <div className="flex items-center justify-between px-4 py-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={24} />
            </button>
            <div className="flex items-center gap-3">
              <button onClick={handleClick} className="flex items-center gap-1 text-white text-sm font-medium">
                <span>English</span>
                <ChevronDown size={14} />
              </button>
              <button onClick={handleClick} className="text-white text-sm font-medium">SIGN IN</button>
              <button onClick={handleClick} className="text-white">
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>

          <div className="flex h-[calc(100%-80px)] flex-col  py-4">
            <div className="flex flex-1 items-center justify-center">
              <nav className="flex w-screen flex-col items-center gap-4 text-center">
                <a href="#" onClick={(e) => { handleClick(e); setIsMenuOpen(false) }} className="w-screen bg-white text-coral py-3 text-3xl font-semibold">Home</a>
                <div className="w-full">
                  <button
                    type="button"
                    onClick={() => setIsShopOpen((prev) => !prev)}
                    className="flex w-full items-center justify-center gap-2 py-3 text-3xl font-semibold text-white"
                  >
                    <ChevronDown size={22} />
                    <span>Shop</span>
                  </button>
                  {isShopOpen && (
                    <div className="mx-4 mt-2 rounded-xl bg-white py-2 shadow-lg">
                      <a href="#" onClick={handleClick} className="block px-4 py-2 text-base text-coral">All</a>
                      <a href="#" onClick={handleClick} className="block px-4 py-2 text-base text-coral">Products</a>
                      <a href="#" onClick={handleClick} className="block px-4 py-2 text-base text-coral">Services</a>
                      <a href="#" onClick={handleClick} className="block px-4 py-2 text-base text-coral">Subscriptions</a>
                    </div>
                  )}
                </div>
                <a href="#" onClick={(e) => { handleClick(e); setIsMenuOpen(false) }} className="text-3xl font-semibold text-white">Learn</a>
              </nav>
            </div>

            <div className="px-4 pb-4">
              <button onClick={handleClick} className="mx-auto mb-6 block rounded-full bg-white px-6 py-3 text-sm font-semibold text-coral">
                For Businesses
              </button>
              <div className="grid grid-cols-2 mx-auto max-w-xs  text-base text-white">
                <div className="space-y-3">
                  <a href="#" onClick={handleClick} className="block">About Us</a>
                  <a href="#" onClick={handleClick} className="block">News</a>
                  <a href="#" onClick={handleClick} className="block">Newsletter</a>
                </div>
                <div className="space-y-3">
                  <a href="#" onClick={handleClick} className="block">Our Services</a>
                  <a href="#" onClick={handleClick} className="block">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
