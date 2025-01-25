import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useState } from "react";


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    // Nav Animation
    gsap.fromTo(
      navRef.current,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      })
  });
  return (
    <nav className="sticky top-0 z-50 ">
      <div ref={navRef} className="relative flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#" className="w-20 h-10 p-1 text-2xl font-bold text-center text-gray-800 bg-white rounded-xl font-berkshire">
          CBB
        </a>

        {/* Hamburger Menu (for mobile) */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 bg-white rounded-full w-11 h-11 focus:outline-none group"
        >
         <div className="grid justify-items-center gap-1.5">
            <span className={`h-1 w-8 rounded-full bg-black transition-transform ${isMenuOpen ? "rotate-45 duration-[0.8s] translate-y-2.5" : "duration-[0.8s]"}`}/>
            <span className={`h-1 w-8 rounded-full bg-black transition-transform ${isMenuOpen ? "scale-x-0 duration-[0.8s]" : "duration-[0.8s]" }`}/>
            <span className={`h-1 w-8 rounded-full bg-black transition-transform ${ isMenuOpen ? "-rotate-45 -translate-y-2.5 duration-[0.8s]" : "duration-[0.8s]"}`}/>
          </div>

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
            <a href="#work" className="text-gray-700 hover:text-gray-900">
              Projects
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#experience" className="text-gray-700 hover:text-gray-900">
            Experience
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
            <div className="flex justify-between mt-4">
              <a
                href="https://www.linkedin.com/in/chetan-bb/"
                className="text-gray-500 hover:text-gray-800"
                aria-label="LinkedIn"
                target="_blank"
              >
                <img
                  src={"assets/LinkedIN.png"}
                  alt="toggle"
                  className="w-10 h-10 rounded-full "
                />
              </a>
              <a
                href="https://github.com/Chetan-B-B"
                className="text-gray-500 hover:text-gray-800"
                aria-label="Github"
                target="_blank"
              >
                <img
                  src={"assets/github.svg"}
                  alt="github"
                  className="w-10 h-10 rounded-full "
                />
              </a>
              <a
                href="https://x.com/Chetan_B_B"
                className="text-gray-500 hover:text-gray-800"
                aria-label="Twitter"
                target="_blank"
              >
                <img
                  src={"assets/twitter-alt.svg"}
                  alt="toggle"
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
