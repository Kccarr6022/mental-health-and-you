import Navbar from "@/components/NavBar";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";
import { useState } from "react";
import Footer from "@/components/Footer";

const Services = () => {
  const pageHeight = "calc(100vh - 8rem)";

  return (
    <>
      <Navbar />
      <div className="bg-primary-green text-primary-white w-full text-center h-fit py-10">
        <h1 className=" pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-[75%] mx-auto">
          Provide Virtual Services
        </h1>
        <div className="relative">
          <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
          <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
          <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
        </div>
        <section className="bg-[#D9D9D9] w-3/4 sm:w-11/12 h-20vh overflow-hidden mx-auto sm:mr-0 my-12 grid-cols-1 sm:grid-cols-2 sm:rounded-l-3xl sm:rounded-none rounded-3xl grid">
          <img src="/services-1.jpg" alt="sample" className="" />
          <div className="flex justify-center items-center">
            <div className="text-[#1E1E1E] p-4 w-4/5">
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Psychotherapy
              </h2>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-4">
                Give Yourself Another Chance
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                The treatment of mental disorders by psychological rather than
                medical means.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#D9D9D9] w-3/4 sm:w-11/12 h-20vh overflow-hidden mx-auto sm:ml-0 my-12 grid-cols-1 sm:grid-cols-2 sm:rounded-r-3xl sm:rounded-none rounded-3xl grid">
          <img src="/services-2.jpg" alt="sample" className="" />
          <div className="flex justify-center items-center">
            <div className="text-[#1E1E1E] p-4 w-4/5">
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Trauma Therapy
              </h2>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-4">
                The Process of Healing
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                This is a specific approach to therapy that recognizes and
                emphasizes understanding how the traumatic experience impacts a
                person’s mental, behavioral, emotional, physical, and spiritual
                well-being.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#D9D9D9] w-3/4 sm:w-11/12 h-20vh overflow-hidden mx-auto sm:mr-0 my-12 grid-cols-1 sm:grid-cols-2 sm:rounded-l-3xl sm:rounded-none rounded-3xl grid">
          <img src="/services-3.jpg" alt="sample" className="" />
          <div className="flex justify-center items-center">
            <div className="text-[#1E1E1E] p-4 w-4/5">
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Family Therapy
              </h2>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl py-4">
                The Attention You Always Deserved
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Family therapy is a type of psychological counseling
                (psychotherapy) that can help family members improve
                communication and resolve conflicts.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
