const Work = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">My Work</h2>
        <p className="text-gray-600 text-lg mb-12">
          Explore some of the projects I’ve worked on, showcasing my skills in development, design, and problem-solving.
        </p>

        {/* Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Example Card 1 */}
          <div className="relative group bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                alt="Project 1"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
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
          <div className="relative group bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                alt="Project 2"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
                alt="Overlay"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2">Another Project</h3>
              <p className="text-gray-600 text-sm mb-4">Branding | Web</p>
              <a
                href="#"
                className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Example Card 3 */}
          <div className="relative group bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src="https://framerusercontent.com/images/t1JiwWZvW2qWT31Dsu8iwpfSXSo.jpg"
                alt="Project 3"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                src="https://framerusercontent.com/images/afCvIGY60qx8bPPHVXLeOJZE.jpg"
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
        </div>
      </div>
    </section>
  );
};

export default Work;
