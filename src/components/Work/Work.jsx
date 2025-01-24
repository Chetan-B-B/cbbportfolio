import { projects } from "../../constants";

const Work = () => {
  return (
    <section id="work" className="min-h-screen px-6 py-12 ">
      <div className="mx-auto text-center max-w-7xl">
        {/* Work Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="group">
              {/* Card */}
              <div className="relative  h-[28rem] rounded-2xl bg-white bg-opacity-45 border border-gray-200 shadow-lg overflow-hidden cursor-pointer [perspective:1000px]" >
                <div className="relative h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <img
                    src={project.img1}
                    alt={`${project.name}`}
                    className="absolute inset-0 object-contain object-top w-full h-full bg-white [backface-visibility:hidden]"
                  />
                  <img
                    src= {project.img2}
                    alt="Overlay"
                    className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100  [transform:rotateY(180deg)] [backface-visibility:hidden] object-contain bg-white"
                  />
                </div>
              </div>
              {/* Details Below Card */}
              <div className="flex flex-wrap items-center justify-between mt-4">
                <h3 className="text-lg font-bold text-gray-600 group-hover:text-gray-900">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 text-sm text-gray-200 bg-gray-600 group-hover:bg-white rounded-xl group-hover:text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
