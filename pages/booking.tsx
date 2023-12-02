import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

const Booking = () => {
  return (
    <>
      <Navbar />
      <div className="bg-primary-green text-primary-white w-full text-center h-fit py-10">
        <h1 className=" pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-[75%] mx-auto">
          Booking
        </h1>
        <div className="relative">
          <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
          <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
          <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
        </div>
        <section className="bg-primary-green min-h-[100vh] h-fit py-8 text-primary-white text-center">
          <Calendar className="w-3/4 h-full mx-auto text-black" />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
