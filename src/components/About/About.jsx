import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { FaPython, FaJsSquare, FaJava, FaNodeJs, FaReact, FaAws, FaJenkins } from "react-icons/fa";
import { SiMongodb, SiTerraform } from "react-icons/si";
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
      <section id="about" className="min-h-screen px-6 mt-10 overflow-x-hidden font-portfolio">
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
            <h1 className="text-3xl font-normal leading-snug tracking-normal break-words whitespace-normal sm:text-3xl md:text-4xl lg:text-5xl">
            <span id="bro">I</span> <span id="bro">help</span> <span id="bro">startups</span> <span id="bro">and </span>
            <span id="bro">companies</span> <span id="bro">to</span>
            <br />
            <span id="bro">create</span> <span id="bro">a</span> <span id="bro">sense of </span>
            <span id="bro">connection</span>
            <br />
            <span id="bro">between</span> <span id="bro">their</span> <span id="bro">products</span> <span id="bro">and </span>
            <span id="bro">happy</span>
            <br />
            <span id="bro">engaged</span> <span id="bro">customers</span>
          </h1>

          </div>
  
          {/* Floating Labels */}
          <div className="relative mt-12">
            {/* Left Floating Labels */}
            <div className="space-y-6">
              <span className="absolute left-0 px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md xl:-top-80 -top-64 about-floaters:-top-56">
                Design systems
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md left-14 md:-top-52 -top-28 about-floaters:-top-32">
                UI/UX
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md left-20 -top-16 ">
                Research
              </span>
            </div>
  
            {/* Right Floating Labels */}
            <div className="space-y-6 ">
              <span className="absolute right-0 px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md xl:-top-80 -top-64 about-floaters:-top-56">
                Animation
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md right-8 md:-top-52 -top-28 about-floaters:-top-32">
                Prototyping
              </span>
              <span className="absolute px-4 py-2 text-sm font-medium bg-white rounded-full shadow-md right-20 -top-16">
                Strategy
              </span>
            </div>
          </div>
  
          {/* Logos Section */}
          {/* This is called marquee effect in design jorgan  */}
          <div className="relative flex items-center justify-center overflow-x-hidden text-base text-gray-600 mt-28">
      {/* Center the Marquee */}
          <Marquee
            style={{
              width: "100%",
              maxWidth: "600px", 
              wordSpacing: "20px",
            }}
            gradient={true}
            speed={40}
            gradientColor="#e5e7eb"
            gradientWidth={30}
            autoFill={true}
            pauseOnHover={true}
            pauseOnCLick={true}
            className="flex items-center"
                >
                  
            {/* Add icons with labels */}
            <span className="flex items-center ml-4 space-x-2">
              <FaPython size={24} className="text-blue-400" />
              <span>Python</span>
            </span>
            <span className="flex items-center ml-4 space-x-2">
              <FaJsSquare size={24} className="text-yellow-400" />
              <span>Javascript</span>
            </span>
            <span className="flex items-center ml-4 space-x-2">
              <FaJava size={24} className="text-red-400" />
              <span>Java</span>
            </span>
            <span className="flex items-center ml-4 space-x-2">
              <FaNodeJs size={24} className="text-green-400" />
              <span>NodeJs</span>
            </span>
            <span className="flex items-center ml-4 space-x-2">
              <FaReact size={24} className="text-blue-400" />
              <span>ReactJS</span>
            </span>
            <span className="flex items-center ml-4 space-x-2">
              <SiMongodb size={24} className="text-green-400" />
              <span>MongoDB</span>
            </span>
            <span className="flex items-center ml-4 space-x-2">
              <FaAws size={24} className="text-orange-400" />
              <span>AWS</span>
            </span>
            <span className="flex items-center ml-4 space-x-2">
              <SiTerraform size={24} className="text-purple-400" />
              <span>Terraform</span>
            </span>
            <span className="flex items-center ml-4 space-x-2">
              <FaJenkins size={24} className="text-blue-400" />
              <span>Jenkins</span>
            </span>
          </Marquee>
        </div>
        </div>
      </section>
    );
  };
  
  export default About;
  