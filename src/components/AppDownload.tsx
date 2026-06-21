export default function AppDownload() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-coral px-6 py-24 relative overflow-hidden">
      {/* Left side - phone mockup image area */}
      <div className="absolute left-0 top-0 w-96 h-full opacity-30">
        <div className="w-48 h-96 bg-white rounded-3xl border-8 border-gray-300"></div>
      </div>

      <div className="max-w-7xl mx-auto text-white text-right relative z-10">
        <h2 className="text-5xl font-bold mb-8">
          Download our all new<br />
          Yenehealth app
        </h2>

        {/* App Store Buttons */}
        <div className="flex justify-end gap-4">
          <button onClick={handleClick} className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-800 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.5 1h17C21.33 1 23 2.67 23 4.5v15C23 21.33 21.33 23 19.5 23h-17C2.67 23 1 21.33 1 19.5v-15C1 2.67 2.67 1 3.5 1z" />
            </svg>
            Get on Google Play
          </button>

          <button onClick={handleClick} className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-800 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 13.5c-.91 0-1.74.68-1.96 1.51h-5.18c-.22-.83-1.05-1.51-1.96-1.51-1.2 0-2.17.97-2.17 2.17s.97 2.17 2.17 2.17c.91 0 1.74-.68 1.96-1.51h5.18c.22.83 1.05 1.51 1.96 1.51 1.2 0 2.17-.97 2.17-2.17s-.97-2.17-2.17-2.17z" />
            </svg>
            Download on App Store
          </button>
        </div>
      </div>
    </section>
  )
}
