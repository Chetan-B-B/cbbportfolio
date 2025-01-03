const About = () => {

   // about-floaters is a custom screen breakpoint that we defined in tailwind.config.js
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
            <h1 className="text-5xl font-normal leading-tight whitespace-pre-line md:text-6xl md:whitespace-normal">
              I help startups and enterprises to <br/> establish an emotional connection <br/>
              between their products and happy <br/> engaged customers
            </h1>
          </div>
  
          {/* Floating Labels */}
          <div className="relative mt-12">
            {/* Left Floating Labels */}
            <div className="space-y-6">
              <span className="absolute left-0 px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md xl:-top-80 -top-72 about-floaters:-top-80">
                Design systems
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md left-10 md:-top-52 -top-44 about-floaters:-top-32">
                UI/UX
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md left-20 -top-16 ">
                Research
              </span>
            </div>
  
            {/* Right Floating Labels */}
            <div className="space-y-6 ">
              <span className="absolute right-0 px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md xl:-top-80 -top-72 about-floaters:-top-80">
                Animation
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md right-10 md:-top-52 -top-44 about-floaters:-top-32">
                Prototyping
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md right-20 -top-16">
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
  