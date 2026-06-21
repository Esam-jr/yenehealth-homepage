export default function CTA() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-teal text-white py-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Help make our app better</h2>
          <p className="text-sm text-teal-100">Your feedback helps us improve. Share your thoughts and suggestions.</p>
        </div>

        <button onClick={handleClick} className="bg-coral text-white rounded-full px-6 py-2.5 font-semibold hover:bg-opacity-90 transition flex items-center gap-2 whitespace-nowrap ml-8">
          <span>See a Doctor Now</span>
        </button>
      </div>

      {/* Decorative stethoscope */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none text-white text-9xl">⚕️</div>
    </section>
  )
}
