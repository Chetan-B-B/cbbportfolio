import { experiences, certificates } from "../../constants";

const Experience = () => {
  
    return (
      <section id="experience" className="min-h-screen px-6 mt-6 font-portfolio">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center">
          <div className="flex items-center justify-center space-x-3">
                    <div className=" bg-gradient-to-r from-gray-600/0 to-black/50  h-[2px] w-[69px] overflow-hidden opacity-50"/>
                    <p className="text-lg italic font-normal  text-[#00000080]">Expereience!</p>

                        <div className="bg-gradient-to-l from-gray-600/0 to-black/50 h-[2px] w-[69px] overflow-hidden opacity-50" />
                    </div>
          </div>
  
          {/* Experience List */}
          <div className="mt-10 space-y-5">
            {experiences.map((exp, index) => (
              <div
                key={index}
                    className="grid items-center grid-cols-1 py-4 text-xl font-medium capitalize border-b border-gray-300 md:grid-cols-3 last:border-none"
              >
                {/* Role */}
                <p className="text-gray-600">{exp.role}</p>
  
                {/* Company */}
                <p className="text-gray-800 md:justify-self-center">{exp.company}</p>
  
                {/* Duration */}
                <p className="text-gray-600 md:justify-self-end">{exp.duration}</p>
              </div>
            ))}
          </div>
          {/* Certificates */}
          <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-3">
                    <div className=" bg-gradient-to-r from-gray-600/0 to-black/50  h-[2px] w-[69px] overflow-hidden opacity-50"/>
                    <p className="text-lg italic font-normal  text-[#00000080]">Certificates</p>
                    <div className="bg-gradient-to-l from-gray-600/0 to-black/50 h-[2px] w-[69px] overflow-hidden opacity-50" />
                    </div>
          </div>
          
          {/* Certificates List */}
          <div className="mt-10 space-y-5">
            {certificates.map((cer, index) => (
              <div
                key={index}
                    className="grid items-center grid-cols-1 py-4 text-xl font-medium capitalize border-b border-gray-300 md:grid-cols-3 last:border-none group"
              >
                {/* Role */}
                <p className="text-gray-600">{cer.name}</p>
                {/* Duration */}
                <p className="text-gray-600 md:justify-self-center ">{cer.platform}</p>
                <div className="flex items-center md:justify-self-end">
                <a
                  href={cer.link}
                  className="relative text-gray-600 group-hover:text-gray-800 transition-all duration-500 cursor-pointer before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-gray-800 before:w-0 before:transition-all before:duration-500 group-hover:before:w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate
                </a>
                <img
                  src="assets/arraow.svg"
                  alt="arraow"
                  className="w-5 h-5 filter brightness-150 invert"
                />
                
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  