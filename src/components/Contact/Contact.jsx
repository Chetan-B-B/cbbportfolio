const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen text-white bg-black bg-custom-radial font-portfolio"
    >
      {/* Spotlight Effect */}
      {/* <div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-white/10 via-white/5 to-transparent opacity-30 rounded-full pointer-events-none"
        style={{ filter: "blur(150px)" }}
      ></div> */}

      {/* Main Content */}
      <div className="px-6 mx-auto text-center max-w-7xl">
        {/* Subtitle */}
        <div className="text-center mb-14 ">
          <div className="flex items-center justify-center space-x-3">
                    <div className=" bg-gradient-to-r from-gray-600/0 to-gray-200/70  h-[2px] w-[69px] overflow-hidden opacity-50"/>
                    <p className="text-lg italic font-normal text-gray-400">I&apos;m Available </p>

                        <div className="bg-gradient-to-l from-gray-600/0 to-gray-200/70 h-[2px] w-[69px] overflow-hidden opacity-50" />
                    </div>
          </div>

        {/* Title */}
        <h2 className="mt-2 font-medium text-8xl md:text-6xl">
         <span className="text-white">Let&apos;s</span>  <span className="italic text-[#ffffff80]">Connect</span>
        </h2>

        {/* Description */}
        <p className="max-w-[26rem] mx-auto mt-4 text-2xl font-[900px] text-[#ffffff80]">
          Feel free to contact me if you have any questions. I&apos;m available for
          new projects or just for chatting.
        </p>

        {/* Contact Button */}
        <div className="mt-8">
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-white transition-all bg-gray-800 rounded-full shadow-lg hover:bg-gray-700"
          >
            Contact Me
            <span className="material-icons">arrow_outward</span>
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-6 mt-12">
        {/* X (Twitter) */}
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 transition-all border border-gray-500 rounded-full hover:border-gray-300"
        >
          <i className="text-gray-400 fab fa-twitter"></i>
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 transition-all border border-gray-500 rounded-full hover:border-gray-300"
        >
          <i className="text-gray-400 fab fa-linkedin-in"></i>
        </a>

        {/* Instagram */}
        <a
          href="#"
          className="flex items-center justify-center w-10 h-10 transition-all border border-gray-500 rounded-full hover:border-gray-300"
        >
          <i className="text-gray-400 fab fa-instagram"></i>
        </a>
      </div>

      {/* Name Label */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
        <p className="px-4 py-2 italic font-light text-white rounded-full bg-white/10">
         Chetan BB
        </p>
      </div>
    </section>
  );
};

export default Contact;
