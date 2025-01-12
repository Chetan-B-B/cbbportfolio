import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 ">
      <div className="relative flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#" className="w-20 h-10 p-1 text-2xl font-bold text-center text-gray-800 bg-white rounded-xl font-berkshire">
          CBB
        </a>

        {/* Hamburger Menu (for mobile) */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
        >
          <img
            src={isMenuOpen ? "assets/close.svg" : "assets/hambergur.png"}
            alt="toggle"
            className="w-10 h-10 bg-white rounded-full "
          />
        </button>

        {/* Navigation Links (Desktop)
        <div className="hidden space-x-6 lg:flex">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </div> */}

        {/* Mobile Menu */}
        {/* inset-y-14 right-12 */}
        {isMenuOpen && (
          <div className="absolute flex flex-col justify-around p-6 text-xl font-semibold bg-white shadow-lg top-16 right-12 w-80 h-80 rounded-tl-3xl rounded-tr-md rounded-bl-3xl rounded-br-3xl">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#work" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
            <div className="flex justify-between mt-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800"
                aria-label="Twitter"
              >
                <img
                  src={"assets/twitter-alt.svg"}
                  alt="toggle"
                  className="w-10 h-10 rounded-full "
                />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800"
                aria-label="LinkedIn"
              >
                <img
                  src={"assets/LinkedIN.png"}
                  alt="toggle"
                  className="w-10 h-10 rounded-full "
                />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800"
                aria-label="Github"
              >
                <img
                  src={"assets/github.svg"}
                  alt="github"
                  className="w-10 h-10 rounded-full "
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
