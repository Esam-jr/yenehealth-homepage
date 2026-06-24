import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setHidden(true), 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-defaultBg transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src="/yhload.png"
        alt="Loading..."
        className="w-44 sm:w-52 md:w-56 animate-gentle-scale"
      />

      <div className="mt-8 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-teal animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="h-2.5 w-2.5 rounded-full bg-teal animate-bounce" style={{ animationDelay: '200ms' }} />
        <span className="h-2.5 w-2.5 rounded-full bg-teal animate-bounce" style={{ animationDelay: '400ms' }} />
      </div>
    </div>
  )
}
