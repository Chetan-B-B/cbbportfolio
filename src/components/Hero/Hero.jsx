const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <div className="max-w-4xl px-6 text-center">
        {/* Hero Heading */}
        <h1 className="text-[5rem] font-normal font-portfolio leading-tight mb-6  ">
          <span className="block">
            I&apos;m <span className="italic text-transparent bg-gradient-to-r from-neutral-300 via-neutral-500 to-stone-400 bg-clip-text">Chetan</span>
            <img
              src="/assets/hero-me.png"
              alt="Me"
              className="inline-block object-cover w-32 h-20 align-middle border-4 border-black shadow-lg rounded-xl " 
            />,
          </span>
          <span className="block">
            a <span className="italic text-transparent bg-gradient-to-r from-neutral-300 via-neutral-500 to-stone-400 bg-clip-text">Full Stack </span>
            <img
              src="/assets/hero-work-1.jpeg"
              alt="Dev"
              className="inline-block object-cover object-top w-32 h-20 mb-3 mr-3 align-middle border-4 border-black shadow-lg rounded-xl"
            />
            Developer
          </span>
          <span className="block">
            based in <span className="">Bengaluru</span>
            <img
              src="/assets/bng.jpg"
              alt="Bengaluru"
              className="inline-block object-cover object-bottom w-32 h-20 align-middle border-4 border-black shadow-lg rounded-xl "
            />
          </span>
        </h1>

        {/* Hero Subtext */}
        <p className="mb-8 text-lg text-gray-600">
          I have 3 years of experience crafting scalable backend solutions and
          automating infrastructure to deliver impactful, efficient products for
          businesses.
        </p>

        {/* Contact Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <span className="flex items-center w-48 px-4 py-2 font-semibold text-white bg-black justify-evenly rounded-xl h-14">
            <span className="relative flex w-4 h-4 ">
              <span className="absolute inline-flex w-full h-full bg-gray-500 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-4 h-4 bg-gray-600 rounded-full"></span>
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
