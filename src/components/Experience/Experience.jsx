const Experience = () => {
    const experiences = [
      { role: "Associate Software Engg. ", company: "Altimetrik", duration: "2022 → Now" },
      { role: "Project Intern", company: "Altimetrik", duration: "2022 → 2022" },
    ];
  
    return (
      <section id="experience" className="px-6 min-h-60 font-portfolio">
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
        </div>
      </section>
    );
  };
  
  export default Experience;
  