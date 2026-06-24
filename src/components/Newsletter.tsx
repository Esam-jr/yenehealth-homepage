import { ArrowRight } from "lucide-react"

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-gray-50 px-4 pb-10 pt-10 sm:px-6 sm:pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        {/* Left - Newsletter Signup */}
        <div
        className="bg-gray-100 lg:bg-white lg:rounded-2xl lg:shadow-lg p-6 flex flex-col items-center justify-center text-center">
          <h3 className="text-sm font-semibold text-center text-gray-900 mb-3">
            Stay informed, Get exclusive updates
          </h3> 
          <p className="text-gray-600 text-[8px] text-center mb-6">
            Join 60,000+ Subscribers and get a new discount coupon on every week.
          </p>

     <form onSubmit={handleSubmit} className="w-full max-w-md">
       <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center">
         <input
           type="email"
           placeholder="Your email address"
           className="w-full bg-white lg:bg-gray-200 rounded-full pl-5 pr-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal sm:pr-[135px]"
         />
         <button
           type="submit"
           className="w-full bg-teal text-white rounded-full px-5 py-4 hover:bg-opacity-90 transition text-sm whitespace-nowrap flex items-center justify-center sm:absolute sm:right-0.5 sm:w-auto"
          >
           SUBSCRIBE <ArrowRight className="inline-block ml-1.5 w-5 h-5" />
        </button>
       </div>
     </form>
        </div>

        {/* Middle - Telegram */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-base text-blue-400 font-semibold mb-6">
             <img src="/icons/tg-icon.svg" alt="Telegram" className="inline-block mr-2 w-5 h-5" /> Join our telegram channel
          </h3>

          {/* Social Icons */}
          <div className="flex gap-2 justify-center flex-wrap">
            {[
              { icon: '/icons/facebook.svg'},
              { icon: '/icons/x.svg' },
              { icon: '/icons/youtube.svg' },
              { icon: '/icons/instagram.svg' },
              { icon: '/icons/linkedin.svg' },
              { icon: '/icons/telegram.svg' },
            ].map((social, idx) => (
              <button
                key={idx}
                onClick={handleClick}
                className=" text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition font-bold text-sm"
              >
                <img src={social.icon} alt={social.icon.includes('facebook') ? 'Facebook' : social.icon.includes('twitter') ? 'Twitter' : social.icon.includes('youtube') ? 'YouTube' : social.icon.includes('instagram') ? 'Instagram' : social.icon.includes('linkedin') ? 'LinkedIn' : 'Apple'} className="w-7 h-7" />
              </button>
            ))}
          </div>

          <button onClick={handleClick} className="mt-6 bg-coral text-white rounded-full px-6 py-1.5 font-semibold hover:bg-opacity-90 transition text-sm">
            For Investors
          </button>
        </div>

        {/* Right - Footer Links */}
        <div className="grid  gap-8 grid-cols-2 ">
          <div>
            <ul className="space-y-2 uppercase">
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">About Us</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Our Services</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Contact Us</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">News</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Newsletter</a></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 uppercase ">
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Learn</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">FAQ</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Careers</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Term & Conditions</a></li>
              <li><a href="#" onClick={handleClick} className="text-gray-600 hover:text-coral transition text-xs cursor-pointer">Refund and Return Policy</a></li>
            </ul>
          </div>


        </div>
      </div>
    </section>
  )
}
