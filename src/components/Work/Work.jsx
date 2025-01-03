const Work = () => {
  return (
    <section id="work" className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header
        <h2 className="text-4xl font-bold text-gray-800 mb-6">My Work</h2>
        <p className="text-gray-600 text-lg mb-12">
          Explore some of the projects I’ve worked on, showcasing my skills in development, design, and problem-solving.
        </p> */}

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example Card 1 */}
          <div className="relative group h-96 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative h-full">
            <img
                src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
                alt="Project 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
             
                src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                alt="Overlay"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">Remix Supply</h3>
              <p className="text-gray-600 text-sm mb-4">Branding | Web</p>
              <a
                href="#"
                className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Example Card 2 */}
          <div className="relative group h-96 rounded-2xl border border-gray-200 shadow-lg overflow-hidden  ">
            <div className="relative h-full">
              <img
                src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
                alt="Project 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
             
                src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                alt="Overlay"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-6 flex  justify-between items-center">
              <h3 className="text-xl font-bold mb-2">Another Project</h3>
              <span className="flex items-center space-x-2 font-semibold">

              
              <p className="text-gray-600  ">Branding | Web</p>
              <a
                href="#"
                className="  "
              >
                View Details
                </a>
                </span>
            </div>
          </div>

          {/* Example Card 3 */}
          <div className="relative group h-96 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative h-full">
            <img
                src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
                alt="Project 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
             
                src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                alt="Overlay"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">Final Project</h3>
              <p className="text-gray-600 text-sm mb-4">Branding | Web</p>
              <a
                href="#"
                className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Example Card 4 */}
          <div className="relative group h-96 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative h-full">
            <img
                src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
                alt="Project 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
             
                src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                alt="Overlay"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">Creative Design</h3>
              <p className="text-gray-600 text-sm mb-4">UI/UX | Branding</p>
              <a
                href="#"
                className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Example Card 5 */}
          <div className="relative group h-96 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative h-full">
            <img
                src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
                alt="Project 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
             
                src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                alt="Overlay"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">Innovative App</h3>
              <p className="text-gray-600 text-sm mb-4">Development | Web</p>
              <a
                href="#"
                className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Example Card 6 */}
          <div className="relative group h-96 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative h-full">
            <img
                src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
                alt="Project 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
             
                src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                alt="Overlay"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">Tech Savvy</h3>
              <p className="text-gray-600 text-sm mb-4">Software | Innovation</p>
              <a
                href="#"
                className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
