import { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920&dpr=2"
          alt="A caring female healthcare professional — representing compassionate care for African women"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#67bbaa]/70 via-transparent to-[#E7E7E7]/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-12 pb-24 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div ref={contentRef} className="fade-in-up z-10">
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-gray-800 backdrop-blur-md ring-1 ring-teal-200/50">
              <Sparkles className="h-4 w-4 text-coral-500" />
              <span>Ethiopia's First Femtech Startup</span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-bold  text-gray-900 md:text-5xl lg:text-6xl">
              Health Is <span className="text-coral-600">Her Choice</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-700">
              YeneHealth is the first femtech startup in Ethiopia, unlocking the digital door for sexual and reproductive healthcare services. We empower African women with AI-powered tools, trusted health information, and access to care.
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col gap-3 sm:flex-row">
              <a
                href="#get-started"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-600/20"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 px-8 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-teal-400 hover:text-teal-700"
              >
                Learn More
              </a>
            </div>

          
          </div>

         
        </div>

      </div>
    </section>
  );
}

export default Hero;
