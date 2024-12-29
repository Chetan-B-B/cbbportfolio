import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      <div className="relative mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-800 font-berkshire">
          CBB
        </a>

        {/* Hamburger Menu (for mobile) */}
        <button
          onClick={toggleMenu}
          className=" text-gray-800 focus:outline-none"
        >
          <img
            src={isMenuOpen ? "assets/close.svg" : "assets/hambergur.png"}
            alt="toggle"
            className=" bg-white w-10 h-10 rounded-full"
          />
        </button>

        {/* Navigation Links (Desktop)
        <div className="hidden lg:flex space-x-6">
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
          <div className="absolute top-16 right-12  bg-white shadow-lg  w-80 h-80  flex flex-col justify-around    font-semibold text-xl   rounded-tl-3xl rounded-tr-md rounded-bl-3xl  rounded-br-3xl  p-6">
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
            <div className="flex justify-between  mt-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800"
                aria-label="Twitter"
              >
                <img
                  src={"assets/twitter-alt.svg"}
                  alt="toggle"
                  className=" w-10 h-10 rounded-full"
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
                  className=" w-10 h-10 rounded-full"
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
                  className=" w-10 h-10 rounded-full"
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
