export default function CTASection() {
  return (
    <>
      <section className="mt-6 lg:mb-12 overflow-hidden">
        {/* Container shifts from full vertical centering to row on large screens */}
        <div className="bg-gradient-to-b from-white from-[0%] to-coral  lg:bg-none lg:bg-coral lg:mx-4 lg:rounded-2xl flex flex-col lg:flex-row items-center justify-between lg:justify-center relative px-6 lg:px-16 py-4 lg:py-0">
           
          {/* Left Side: Overlapping Phones - Centered on mobile */}
          <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[320px] flex justify-center items-end mt-4 lg:mt-0 order-1">
            
            {/* Back Phone */}
            <img 
              src="/back-mobile-.png" 
              alt="Yenehealth app Amharic version" 
              className="absolute left-[15%] sm:left-[25%] lg:left-[-25px] bottom-[35px] lg:bottom-[-310px] w-[195px] sm:w-[225px] lg:w-[500px] z-0 drop-shadow-2xl object-contain transform -translate-x-4"
            />

            {/* Front Phone - ONLY VISIBLE BELOW LG */}
            <img 
              src="/front-mobile.png" 
              alt="Yenehealth app English version mobile" 
              className="block lg:hidden absolute right-[10%] sm:right-[35%] bottom-0 w-[218px] sm:w-[285px] z-10 drop-shadow-2xl object-contain transform translate-x-4"
                 />

           {/* Front Phone - ONLY VISIBLE ON LG AND ABOVE */} 
           <img 
             src="/home-banner.svg" 
             alt="Yenehealth app English version desktop" 
             className="hidden lg:block absolute lg:left-[115px] lg:bottom-[-16px] lg:w-[500px] z-10 drop-shadow-2xl object-contain transform translate-x-4"
               />
          </div>

          {/* Right Side: Text & Buttons - Aligned under the phone on mobile */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-left z-20 order-2  lg:mt-0 py-4 lg:py-10">
            <h2 className="text-white lg:text-coral-100 text-base sm:text-2xl lg:text-3xl font-semibold tracking-wider mb-6 leading-relaxed">
              Download our all new <br /> Yenehealth app
            </h2>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* Google Play Button */}
              <a href="#" className="transition-transform hover:scale-105">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-8 lg:h-10 opacity-90"
                />
              </a>
              
              {/* App Store Button */}
              <a href="#" className="transition-transform hover:scale-105">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  className="h-8 lg:h-10 opacity-85"
                />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Banner: Stacked vertically on mobile, row on large screens */}
      <div className="bg-gradient-to-b from-coral from-[5%] to-white lg:bg-none lg:bg-[#4A8C8A] text-white py-2 px-6 lg:mt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 text-center">
          <div>
            <p className="text-lg sm:text-xl ">Help make our app better</p>
          </div>

          <button className="bg-[#4A8C8A] lg:bg-coral text-white font-medium rounded-md px-6 py-2 hover:bg-opacity-90 transition whitespace-nowrap mt-2 lg:mt-0 lg:ml-8">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}