const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen text-white bg-black font-portfolio"
    >
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(100% 1600px at 0% 0%, #2e2e2e 0%, rgb(0, 0, 0) 100%)",
          maskImage:
            "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          opacity: 1,
        }}
      ></div>

      <div
        className="absolute z-10 w-[900px] h-full left-[215px]"
        style={{
          backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 83.9344%, rgba(255, 255, 255, 0) 100%)",
          maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20.0362%, rgba(0, 0, 0, 0) 36.175%, rgb(0, 0, 0) 55.4054%, rgba(0, 0, 0, 0.13) 67.1171%, rgb(0, 0, 0) 78.2306%, rgba(0, 0, 0, 0) 97.2973%)",
          opacity: 0.05,
          transform: "skewX(45deg)",
        }}
      ></div>

      <div
        className="absolute w-full h-full bg-left-top bg-repeat bg-footer-texture bg-blend-overlay -z-10"
        style={{ backgroundColor: "#000", mixBlendMode: "overlay", opacity: 0.8 }}
      ></div>

      {/* Main Content */}
      <div className="z-10 px-6 mx-auto text-center max-w-7xl">
        {/* Subtitle */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-gradient-to-r from-gray-600/0 to-gray-200/70 h-[2px] w-[60px] opacity-50"></div>
            <p className="text-lg italic font-light text-gray-400">I&apos;m available</p>
            <div className="bg-gradient-to-l from-gray-600/0 to-gray-200/70 h-[2px] w-[60px] opacity-50"></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-5xl font-normal md:text-8xl">
          <span className="text-white">Let&apos;s</span>{" "}
          <span className="italic text-gray-400">Connect</span>
        </h2>

        {/* Description */}
        <p className="max-w-md mx-auto mt-4 text-lg font-light text-gray-400 md:text-2xl">
          Feel free to contact me if you have any questions.<br/> I&apos;m available for new
          projects or just for chatting.
        </p>

        {/* Contact Button */}
        <div className="mt-8">
          <a
            href="#"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-extrabold tracking-wider text-white transition-all bg-black rounded-full shadow-lg cursor-pointer ring-8 ring-stone-600  hover:bg-[#00000040]"
          >
            {/* hover:ring-gray-300 */}
            Contact Me
            <span className="">
              <img src="assets/arraow.svg" alt="arraow.svg"
              className="w-5 h-5 "
              />
            </span>
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 mt-12">
        {/* X (Twitter) */}
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 transition-all border border-gray-600 rounded-full hover:border-gray-300"
        >
          <i className="text-gray-400 fab fa-twitter"></i>
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 transition-all border border-gray-600 rounded-full hover:border-gray-300"
        >
          <i className="text-gray-400 fab fa-linkedin-in"></i>
        </a>

        {/* Instagram */}
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 transition-all border border-gray-600 rounded-full hover:border-gray-300"
        >
          <i className="text-gray-400 fab fa-instagram"></i>
        </a>
      </div>

      {/* Name Label */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
        <p className="px-4 py-2 text-sm italic font-light text-white rounded-full bg-white/10">
          Hanzo Hattori
        </p>
      </div>
    </section>
  );
};

export default Contact;
