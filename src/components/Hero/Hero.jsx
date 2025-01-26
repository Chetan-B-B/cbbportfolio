import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import heroImg from "../../../public/assets/hero-me-6.png"
import heroWork1 from "../../../public/assets/hero-work-1.jpeg"
import heroWork2 from "../../../public/assets/hero-work-3.jpeg"
import heroBng from "../../../public/assets/bng.jpg"

const Hero = () => {
  const heroRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      heroRef.current.querySelectorAll(".animate"),
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    const images = [heroWork1,heroWork2];
    let currentImageIndex = 0;

    gsap.to(imageRef.current, {
      duration: 3,
      repeat: -1,
      ease: "step.out",
      onRepeat: () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageRef.current.src = images[currentImageIndex];
      },
    });
  });

  return (
    <main
      ref={heroRef}
      className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8"
    >
        {/* //TODO This is the  gradient effect , it is incomplete you can continue if you want*/}
        {/* <div
        className="absolute z-10 w-[900px] h-full left-[215px]"
        style={{
          backgroundImage:
            "radial-gradient(100% 100% at 0% 0%, #ffffff 0%,  rgb(219, 219, 219) 100%)",
          maskImage:
            "radial-gradient(125% 100% at 0% 0%, #000000 0%, rgba(0, 0, 0, .22449) 88.28828828828829%, rgba(0, 0, 0, 0) 100%)",
          opacity: 0.05,
          transform: "skewX(45deg)",
        }}
      ></div> */}
      <div className="max-w-4xl px-6 text-center">
        {/* Hero Heading */}
        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-normal font-portfolio leading-tight mb-6 animate">
          <span className="block">
            I&apos;m
            <span className="italic text-transparent bg-gradient-to-r from-neutral-300 via-neutral-500 to-stone-400 bg-clip-text">
              Chetan
            </span>
            <img
              src={heroImg}
              alt="Me"
              className="inline-block object-contain w-16 h-12 sm:w-20 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-20 align-middle bg-[#c3c8d7] border-4 border-black shadow-lg rounded-xl"
            />
            ,
          </span>
          <span className="block">
            {"a "}
            <span className="italic text-transparent bg-gradient-to-r from-neutral-300 via-neutral-500 to-stone-400 bg-clip-text">
              Full Stack
            </span>
            <img
              ref={imageRef}
              src={heroWork1}
              alt="Dev"
              className="inline-block object-cover object-top w-16 h-12 mb-3 mr-3 align-middle transition-transform border-4 border-black shadow-lg sm:w-20 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-20 rounded-xl"
            />
            Developer
          </span>
          <span className="block">
            based in <span className="">Bengaluru</span>
            <img
              src={heroBng}
              alt="Bengaluru"
              className="inline-block object-fill object-bottom w-16 h-12 align-middle border-4 border-black shadow-lg sm:w-20 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-20 rounded-xl"
            />
          </span>
        </h1>

        {/* Hero Subtext */}
        <p className="mb-8 text-lg text-gray-600 animate">
          I have 3 years of experience crafting scalable backend solutions and
          automating infrastructure to deliver impactful, efficient products for
          businesses.
        </p>

        {/* Contact Section */}
        <div className="space-y-6 animate">
          <div className="flex items-center justify-center ">
            <span className="flex items-center w-full sm:w-[70%] md:w-64 px-4 py-2 font-semibold text-white bg-black justify-evenly rounded-xl h-14 ring-gray-300 ring-8">
            <a href="#contact" className="flex items-center gap-x-2">
              <span className="relative flex w-4 h-4">
                <span className="absolute inline-flex w-full h-full bg-gray-500 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-4 h-4 bg-gray-600 rounded-full"></span>
              </span>
              Contact Me</a>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
