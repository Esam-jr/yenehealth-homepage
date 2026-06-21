export default function Footer() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <>
      {/* Help make app better section */}
      <section className="bg-teal text-white px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h3 className="text-lg font-semibold">Help make our app better</h3>
          <button onClick={handleClick} className="bg-coral text-white rounded-full px-6 py-2 font-semibold hover:bg-opacity-90 transition text-sm">
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coral text-white px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex gap-6">
            <span className="font-semibold">(+251) 90-699-9111</span>
            <span>support@yenehealth.com</span>
          </div>

          <div className="text-center">
            <p>
              © 2026 - YeneHealth • All Rights Reserved •{' '}
              <a href="#" onClick={handleClick} className="hover:underline cursor-pointer">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Scroll to top button */}
          <button onClick={handleClick} className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition text-lg">
            ↑
          </button>
        </div>
      </footer>
    </>
  )
}
