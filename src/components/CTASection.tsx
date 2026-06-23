
export default function CTASection() {
  return (
<>
    <section className=" my-8 overflow-hidden ">
      <div className=" bg-coral mx-4 rounded-2xl flex flex-col md:flex-row items-center justify-between relative px-6 md:px-16  md:py-0">
        
        {/* Left Side: Overlapping Phones */}
        <div className="relative w-full md:w-1/2 h-64 md:h-[320px] flex justify-center items-end mt-4 md:mt-0 order-2 md:order-1">
          
          {/* Back Phone (Amharic) */}
          <img 
            src="/back-mobile-.png" 
            alt="Yenehealth app Amharic version" 
            className="absolute left-4 md:left-[-40px] bottom-[-20px] md:bottom-[-280px] w-44 md:w-[500px] z-0 drop-shadow-2xl object-contain "
          />
          
          {/* Front Phone (English) */} 
          <img 
            src="/home-banner.svg" 
            alt="Yenehealth app English version" 
            className="absolute left-28 md:left-30 bottom-[-10px] md:bottom-[-16px] w-44 md:w-[500px] z-10 drop-shadow-2xl object-contain "
          />
        </div>

        {/* Right Side: Text & Buttons */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left z-20 order-1 md:order-2 py-4 md:py-14">
          <h2 className="text-coral-100 text-xl md:text-3xl  font-semibold tracking-wider  text-center mb-6">
            Download our all new <br className="hidden md:block" /> Yenehealth app
          </h2>
          
          <div className="flex gap-6 ">
            {/* Google Play Button */}
            <a href="#" className="transition-transform hover:scale-105">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-5 md:h-8 opacity-85"
              />
            </a>
            
            {/* App Store Button */}
            <a href="#" className="transition-transform hover:scale-105">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                className="h-5 md:h-8 opacity-80"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
    <div className="bg-[#4A8C8A] text-white py-3 px-6 mt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-5">
        <div>
          <p className="text-xl">Help make our app better</p>
        </div>

        <button  className="bg-coral text-white rounded-md px-3 py-1  hover:bg-opacity-90 transition flex items-center gap-2 whitespace-nowrap ml-8">
          <p>Learn More</p>
        </button>
      </div>
    </div>
    </>
  );
}