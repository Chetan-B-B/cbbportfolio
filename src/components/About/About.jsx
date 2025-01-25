import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.set("#bro", { opacity: 0.2 });
    gsap.timeline({
      scrollTrigger:{
        trigger: '#bro',
        scrub:0.3,
        start:"top 40%",
        end:"top 20%",
        //markers:true
      }
   }).to("#bro", {
     opacity: 1,
     stagger: 0.2,
    duration: 1,
    delay: 1,
    });
  })

   // about-floaters is a custom screen breakpoint that we defined in tailwind.config.js
    return (
      <section id="about" className="min-h-screen px-6 mt-10 font-portfolio">
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Intro Text */}
                <div className="text-gray-900">
                    <div className="flex items-center justify-center my-20 space-x-3">
                    <div className=" bg-gradient-to-r from-gray-600/0 to-black/50  h-[2px] w-[69px] overflow-hidden opacity-50"/>
                    <p className="text-lg italic font-normal  text-[#00000080]">Hello!</p>

                    <div className="bg-gradient-to-l from-gray-600/0 to-black/50 h-[2px] w-[69px] overflow-hidden opacity-50"/>
            </div>
            {/* https://codepen.io/akapowl/pen/zYRqbwm  -> tried this but didn't work 
            //TODO Update the description along with the labels */}
            <h1 className="space-x-2 text-5xl font-normal leading-tight tracking-normal whitespace-pre-line md:text-6xl md:whitespace-normal">
                  <span id="bro">I</span>
                  <span id="bro">help</span>
                  <span id="bro">startups</span>
                  <span id="bro">and</span>
                  <span id="bro">companies</span>
                  <span id="bro">to</span>
                  <br />
                  <span id="bro">create</span>
                  <span id="bro">a</span>
                  <span id="bro">sense of</span>
                  <span id="bro">connection</span>
                  <br/>
                  <span id="bro">between</span>
                  <span id="bro">their</span>
                  <span id="bro">products</span>
                  <span id="bro">and</span>
                  <span id="bro">happy</span>
                  <br/>
                  <span id="bro">engaged</span>
                  <span id="bro">customers</span>
            </h1>
          </div>
  
          {/* Floating Labels */}
          <div className="relative mt-12">
            {/* Left Floating Labels */}
            <div className="space-y-6">
              <span className="absolute left-0 px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md xl:-top-80 -top-72 about-floaters:-top-80">
                Design systems
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md left-10 md:-top-52 -top-44 about-floaters:-top-32">
                UI/UX
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md left-20 -top-16 ">
                Research
              </span>
            </div>
  
            {/* Right Floating Labels */}
            <div className="space-y-6 ">
              <span className="absolute right-0 px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md xl:-top-80 -top-72 about-floaters:-top-80">
                Animation
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md right-10 md:-top-52 -top-44 about-floaters:-top-32">
                Prototyping
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md right-20 -top-16">
                Strategy
              </span>
            </div>
          </div>
  
          {/* Logos Section */}
          {/* This is called marquee effect in design jorgan  */}
          <div className="relative flex mt-16 overflow-x-hidden text-base text-gray-400">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="mx-4">Javascript</span>
            <span className="mx-4">Python</span>
            <span className="mx-4">ReactJs</span>
            <span className="mx-4">NodeJS</span>
            <span className="mx-4">MongoDB</span>
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span className="mx-4">Javascript</span>
            <span className="mx-4">Python</span>
            <span className="mx-4">ReactJs</span>
            <span className="mx-4">NodeJS</span>
            <span className="mx-4">MongoDB</span>
          </div>
        </div>

        </div>
      </section>
    );
  };
  
  export default About;
  