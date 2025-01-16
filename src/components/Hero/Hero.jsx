import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      heroRef.current.querySelectorAll(".animate"), // Select elements with the 'animate' class within heroRef
      {
        opacity: 0, // Start with opacity 0
        y: 50,      // Start below their original position
      },
      {
        opacity: 1, // End with opacity 1
        y: 0,       // Move to their original position
        duration: 1, // Animation duration for each element
        stagger: 0.2, // Add a stagger effect for a cascading appearance
        ease: "power3.out", // Smooth easing
      }
    )

     // Animate image transitions
     const images = [
      "/assets/hero-work-1.jpeg",
      "/assets/hero-work-3.jpeg",
    ]; // Add the paths of the images you want to cycle through
    let currentImageIndex = 0;

    gsap.to(imageRef.current, {
      duration: 3,
      repeat: -1,
      onRepeat: () => {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through the images
        imageRef.current.src = images[currentImageIndex];
      },
    })
  
  });

  return (
    <main ref={heroRef} className="flex flex-col items-center justify-center min-h-screen ">
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
        <h1 className="text-[5rem] font-normal font-portfolio leading-tight mb-6 animate">
          <span className="block">
            I&apos;m <span className="italic text-transparent bg-gradient-to-r from-neutral-300 via-neutral-500 to-stone-400 bg-clip-text">Chetan</span>
            <img
              src="/assets/hero-me-6.png"
              alt="Me"
              className="inline-block object-contain w-32 h-20 align-middle bg-[#c3c8d7] border-4 border-black shadow-lg rounded-xl"
            />,
          </span>
          <span className="block">
            a <span className="italic text-transparent bg-gradient-to-r from-neutral-300 via-neutral-500 to-stone-400 bg-clip-text">Full Stack </span>
            <img
            ref={imageRef}  
              src="/assets/hero-work-1.jpeg"
              alt="Dev"
              className="inline-block object-cover object-top w-32 h-20 mb-3 mr-3 align-middle transition-transform border-4 border-black shadow-lg rounded-xl"
            />
            Developer
          </span>
          <span className="block">
            based in <span className="">Bengaluru</span>
            <img
              src="/assets/bng.jpg"
              alt="Bengaluru"
              className="inline-block object-fill object-bottom w-32 h-20 align-middle border-4 border-black shadow-lg rounded-xl"
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
          <div className="flex items-center justify-center space-x-2 ">
            <span className="flex items-center w-48 px-4 py-2 font-semibold text-white bg-black justify-evenly rounded-xl h-14 ring-gray-300 ring-8">
            <span className="relative flex w-4 h-4 ">
              <span className="absolute inline-flex w-full h-full bg-gray-500 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-4 h-4 bg-gray-600 rounded-full"></span>
            </span>
              <a href="#contact">Contact Me</a>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
