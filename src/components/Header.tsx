import { Search, Heart, ShoppingCart, ChevronDown } from 'lucide-react'

export default function Header() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <header className="bg-defaultBg border-b border-gray-100">
      <div className="max-w-full px-6 py-2 flex items-center justify-between ">
        {/* Logo - with icon */}
        <div className="flex-shrink-0 flex items-center "> 
          <img src="/yhnavbarlogo.svg" alt="Logo" sizes='55px'/>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-6">
          <a href="#" onClick={handleClick} className="text-coral font-semibold text-xs hover:opacity-80 bg-coral bg-opacity-20 px-3 py-1.5 rounded-full cursor-pointer">Home</a>
          <a href="#" onClick={handleClick} className="text-gray-600 text-xs hover:text-gray-900 cursor-pointer">Shop</a>
          <a href="#" onClick={handleClick} className="text-gray-600 text-xs hover:text-gray-900 cursor-pointer">Learn</a>
          <a href="#" onClick={handleClick} className="text-gray-600 text-xs hover:text-gray-900 cursor-pointer">Doctors</a>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-xs mx-3 bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent flex-1 outline-none text-xs placeholder-gray-400"
          />
        </div>

        {/* Filter & Sort */}
        <div className="flex items-center gap-3">
          <button onClick={handleClick} className="text-gray-600 hover:text-gray-900 text-xs font-medium">Filter</button>
          <button onClick={handleClick} className="text-gray-600 hover:text-gray-900 text-xs font-medium">Sort</button>
          <button onClick={handleClick} className="bg-coral text-white rounded-full p-1.5 hover:bg-opacity-90 transition">
            <Search size={14} />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button onClick={handleClick} className="bg-coral text-white rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-opacity-90 transition whitespace-nowrap">
            For Businesses
          </button>

          {/* Language */}
          <button onClick={handleClick} className="flex items-center gap-1 text-coral hover:opacity-80 text-xs font-medium">
            <span>English</span>
            <ChevronDown size={12} />
          </button>

          {/* Sign In */}
          <button onClick={handleClick} className="text-coral text-xs font-semibold hover:opacity-80">SIGN IN</button>

          {/* Icons */}
          <button onClick={handleClick} className="text-coral hover:opacity-80 transition">
            <Heart size={16} fill="currentColor" />
          </button>
          <button onClick={handleClick} className="text-coral hover:opacity-80 transition">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </header>
  )
}
