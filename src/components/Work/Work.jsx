const Work = () => {
  return (
    <section id="work" className="min-h-screen px-6 py-12 ">
      <div className="mx-auto text-center max-w-7xl">
        {/* Work Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="group">
              {/* Card */}
              <div className="relative  h-[28rem] rounded-2xl bg-white bg-opacity-45 border border-gray-200 shadow-lg overflow-hidden cursor-pointer">
                <div className="relative h-full ">
                  <img
                    src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
                    alt={`Project ${index + 1}`}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <img
                    src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                    alt="Overlay"
                    className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
              {/* Details Below Card */}
              <div className="flex justify-between mt-4">
                <h3 className="text-lg font-bold text-gray-500 group-hover:text-gray-900">
                  Project {index + 1}
                </h3>

                <p className="space-x-4 text-sm text-gray-200 group-hover:text-black ">
                  <span className="inline-block p-2 group-hover:bg-white bg-zinc-500 rounded-xl w-14 h-fit ">Web</span>
                  <span className="inline-block p-2 rounded-xl w-14 h-fit bg-zinc-500 group-hover:bg-white">Cloud</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
