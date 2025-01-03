const About = () => {
    return (
      <section id="about" className="min-h-screen px-6 mt-10 font-portfolio">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Intro Text */}
                <div className="text-gray-900">
                    <div className="flex items-center justify-center my-20 space-x-3">
                    <div className=" bg-gradient-to-r from-gray-600/0 to-black/50  h-[2px] w-[69px] overflow-hidden opacity-50"/>
                    <p className="text-lg italic font-normal  text-[#00000080]">Hello!</p>

                    <div className="bg-gradient-to-l from-gray-600/0 to-black/50 h-[2px] w-[69px] overflow-hidden opacity-50"/>
                    </div>
            <h1 className="text-5xl font-normal leading-tight md:text-6xl">
              I help startups and enterprises to <br/> establish an emotional connection <br/>
              between their products and happy <br/> engaged customers
            </h1>
          </div>
  
          {/* Floating Labels */}
          <div className="relative mt-12">
            {/* Left Floating Labels */}
            <div className="space-y-6">
              <span className="absolute left-0 px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md -top-80 w-fit ">
                Design systems
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md">
                UI/UX
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md">
                Research
              </span>
            </div>
  
            {/* Right Floating Labels */}
            <div className="absolute right-0 space-y-6 top-1/4">
              <span className="px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md">
                Animation
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md">
                Prototyping
              </span>
              <span className="px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md">
                Strategy
              </span>
            </div>
          </div>
  
          {/* Logos Section */}
          <div className="flex flex-wrap justify-center gap-6 mt-16 text-gray-400">
            <span className="text-sm">Handbook</span>
            <span className="text-sm">Interlock</span>
            <span className="text-sm">FeatherDev</span>
            <span className="text-sm">Epicurious</span>
            <span className="text-sm">Studio</span>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  