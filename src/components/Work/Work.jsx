const Work = () => {
  return (
    <section id="work" className="min-h-screen py-12 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Work Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="group">
              {/* Card */}
              <div className="relative  h-[28rem] rounded-2xl bg-white bg-opacity-45 border border-gray-200 shadow-lg overflow-hidden cursor-pointer">
                <div className="relative h-full ">
                  <img
                    src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
                    alt={`Project ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                    alt="Overlay"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              {/* Details Below Card */}
              <div className="mt-4 flex justify-between">
                <h3 className="text-lg font-bold text-gray-500 group-hover:text-gray-900">
                  Project {index + 1}
                </h3>

                <p className="text-gray-200 group-hover:text-black text-sm space-x-4 ">
                  <span className="inline-block group-hover:bg-white bg-zinc-500 rounded-xl w-14 h-fit p-2  ">Web</span>
                  <span className="inline-block rounded-xl w-14 h-fit bg-zinc-500  group-hover:bg-white p-2">Cloud</span>
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
