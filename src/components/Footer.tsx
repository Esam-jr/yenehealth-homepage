export default function Footer() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <>

      {/* Footer */}
      <footer className="bg-coral text-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 text-center text-xs md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <span className="font-semibold">(+251) 90-699-9111</span>
            <span>support@yenehealth.com</span>
          </div>

          <div className="text-center md:text-left">
            <p>
              © 2026 - YeneHealth • All Rights Reserved •{' '}
              <a href="#" onClick={handleClick} className="hover:underline cursor-pointer">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
