export default function TopNav() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <nav className="hidden bg-coral text-white py-2.5 px-6 md:block">
      <div className="max-w-full flex justify-end gap-6 text-xs font-medium">
        <a href="#" onClick={handleClick} className="hover:opacity-80 transition cursor-pointer">About Us</a>
        <a href="#" onClick={handleClick} className="hover:opacity-80 transition cursor-pointer">Our Services</a>
        <a href="#" onClick={handleClick} className="hover:opacity-80 transition cursor-pointer">News</a>
        <a href="#" onClick={handleClick} className="hover:opacity-80 transition cursor-pointer">Newsletter</a>
        <a href="#" onClick={handleClick} className="hover:opacity-80 transition cursor-pointer">Contact Us</a>
      </div>
    </nav>
  )
}
