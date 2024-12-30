const Hero = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center ">
      <div className="max-w-4xl text-center px-6">
        {/* Hero Heading */}
        <h1 className="text-[5rem] font-normal font-portfolio leading-tight mb-6  ">
          <span className="block">
            I&apos;m <span className="bg-gradient-to-r from-neutral-300 via-neutral-500 to-stone-400 bg-clip-text text-transparent italic">Chetan</span>
            <img
              src="/assets/hero-me.png"
              alt="Me"
              className="inline-block w-32 h-20 rounded-xl shadow-lg align-middle object-cover border-4 border-black " 
            />,
          </span>
          <span className="block">
            a <span className="bg-gradient-to-r from-neutral-300 via-neutral-500 to-stone-400 bg-clip-text text-transparent italic">Full Stack </span>
            <img
              src="/assets/hero-work-1.jpeg"
              alt="Dev"
              className="inline-block w-32 h-20 rounded-xl shadow-lg align-middle object-cover object-top border-4 border-black mb-3 mr-3"
            />
            Developer
          </span>
          <span className="block">
            based in <span className="">Bengaluru</span>
            <img
              src="/assets/bng.jpg"
              alt="Bengaluru"
              className="inline-block w-32 h-20 rounded-xl shadow-lg align-middle object-cover object-bottom border-4 border-black "
            />
          </span>
        </h1>

        {/* Hero Subtext */}
        <p className="text-lg text-gray-600 mb-8">
          I have 3 years of experience crafting scalable backend solutions and
          automating infrastructure to deliver impactful, efficient products for
          businesses.
        </p>

        {/* Contact Section */}
        <div className="space-y-6">
          <div className="flex justify-center items-center space-x-2">
            <span className=" bg-black flex justify-evenly items-center text-white py-2 px-4 rounded-xl font-semibold w-48 h-14">
            <span className="relative flex h-4 w-4 ">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-gray-600"></span>
            </span>
              Contact Me
            </span>
          </div>
          {/* <div className="text-center">
            <p className="text-xl font-medium text-gray-800">bbchetan16@gmail.com</p>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
