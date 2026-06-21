export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
        {/* Left - Newsletter Signup */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Stay informed, Get exclusive updates
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Join 60,000+ Subscribers and get a new discount coupon on every week.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <button
              type="submit"
              className="bg-teal text-white rounded-full px-6 py-3 font-bold hover:bg-opacity-90 transition text-sm whitespace-nowrap"
            >
              SUBSCRIBE →
            </button>
          </form>
        </div>

        {/* Middle - Telegram */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-teal mb-6">
            Join our telegram channel
          </h3>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center flex-wrap">
            {[
              { icon: 'f' },
              { icon: '𝕏' },
              { icon: '▶' },
              { icon: '📷' },
              { icon: 'in' },
              { icon: '✈' },
            ].map((social, idx) => (
              <button
                key={idx}
                onClick={handleClick}
                className="w-10 h-10 bg-coral text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition font-bold text-sm"
              >
                {social.icon}
              </button>
            ))}
          </div>

          <button onClick={handleClick} className="mt-6 bg-coral text-white rounded-full px-6 py-2.5 font-semibold hover:bg-opacity-90 transition text-sm">
            For Investors
          </button>
        </div>

        {/* Right - Footer Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase">ABOUT US</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">About Us</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Learn</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase">SERVICES</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Our Services</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">FAQ</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase">INFORMATION</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">News</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Terms & Conditions</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Return Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase">LEGAL</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Newsletter</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Refund Policy</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
