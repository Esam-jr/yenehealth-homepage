import { useRef } from 'react'

export default function FeaturedLearning() {
  const scrollRef = useRef<HTMLDivElement | null>(null)


  const handleScrollNext = () => {
    if (!scrollRef.current) return

    const track = scrollRef.current.querySelector<HTMLDivElement>('.scroll-track')
    const card = track?.firstElementChild as HTMLElement | null
    const gap = 16
    const distance = card ? card.offsetWidth + gap : 280

    scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' })
  }

type LearningItem = {
  id: number
  title: string
  description: string
  image: string
}

const learningItems: LearningItem[] = [
  {
    id: 1,
    title:'Menopause 101: Understanding Hot Flashes and Night Sweats',
    description: 'Menopause is a natural phase in a woman’s life, marking the...',
    image: 'menopause.webp',
  },
  {
    id: 2,
    title: 'Love, Panic, and a Fever: A First-Time Mom’s Toughest Moment',
    description: 'Being a first-time mom is an incredible journey filled...',
    image: 'love-panic.webp',
  },
  { 
    id: 3,
    title: 'Fighting diabetes? Know the five white killers in your diet',
    description: 'It’s been over a decade since our family meals changed... ',
    image: 'fighting-diabetes.webp',
  }, 
  {
    id: 4,
    title: 'The 5 most common mistakes people make when taking their medication',
    description: 'Taking your medication is an important part of mana... ',
    image: 'medication.jpg',
  },
   {
    id: 5,
    title:'Menopause 101: Understanding Hot Flashes and Night Sweats',
    description: 'Menopause is a natural phase in a woman’s life, marking the...',
    image: 'menopause.webp',
  },

]
  return (
    <section className=" py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-base font-bold text-gray-900 mb-8">Featured In Learning</h2>

        <div className="relative group">
          <div ref={scrollRef} className="relative overflow-x-auto hide-scrollbar pb-4">
              <div className="inline-flex min-w-full gap-4 scroll-track">
            {learningItems.map((item) => (
              <div key={item.id} className="min-w-[260px] max-w-[300px] shrink-0 grid h-60 grid-rows-[65%_35%] overflow-hidden rounded-2xl border border-teal shadow-sm">
                <div className="relative overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent px-4 py-2 text-black">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                  </div>
                </div>
                <div className="bg-white p-4 text-gray-400 ">
                  <p className="text-sm leading-6">
                    {item.description}{' '}
                    <a href="#" className="text-xs underline text-teal hover:text-teal/80">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleScrollNext}
            className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-teal text-white shadow-lg transition-opacity duration-300 group-hover:flex"
            aria-label="Scroll featured learning items"
          >
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
