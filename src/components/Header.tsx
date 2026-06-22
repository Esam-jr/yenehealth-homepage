import { Search, Heart, ShoppingCart, ChevronDown } from 'lucide-react'

export default function Header() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <header className="bg-defaultBg border-b border-gray-100">
      <div className="max-w-full px-6 py-1.5 flex items-center justify-between ">
        {/* Logo - with icon */}
        <div className="flex-shrink-0 flex items-center"> 
          <img src="/yhnavbarlogo.svg" alt="Logo" sizes='55px'/>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center font-medium text-coral text-xs gap-6">
          <a href="#" onClick={handleClick} className="text-white bg-coral px-3 py-2.5 rounded-full cursor-pointer">Home</a>
          <a href="#" onClick={handleClick} className="  hover:text-teal cursor-pointer">Shop</a>
          <a href="#" onClick={handleClick} className="  hover:text-teal cursor-pointer">Learn</a>
          <a href="#" onClick={handleClick} className="  hover:text-teal cursor-pointer">Doctors</a>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-xs mx-3 bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent flex-1 outline-none text-xs placeholder-gray-400"
          />
          <div className="flex items-center gap-3">
            <button onClick={handleClick} className="text-gray-600 hover:text-gray-900 text-xs font-medium">Filter</button>
            |
            <button onClick={handleClick} className="text-gray-600 hover:text-gray-900 text-xs font-medium">Sort</button>
            <button onClick={handleClick} className="bg-coral text-white rounded-full p-1.5 hover:bg-opacity-90 transition">
              <Search size={14} />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <button onClick={handleClick} className="bg-coral text-white rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-opacity-90 transition whitespace-nowrap">
            For Businesses
          </button>

          {/* Language */}
          <button onClick={handleClick} className="flex items-center gap-1 text-coral hover:opacity-80 text-xs font-medium">
            <span>English</span>
            <ChevronDown size={12} />
          </button>

          {/* Sign In */}
          <button onClick={handleClick} className="text-coral text-xs  hover:opacity-80">SIGN IN</button>

          {/* Icons */}
          <button onClick={handleClick} className="text-coral hover:opacity-80 transition">
            <Heart size={18}  />
          </button>
          <button onClick={handleClick} className="text-coral hover:opacity-80 transition">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
