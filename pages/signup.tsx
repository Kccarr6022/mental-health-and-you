import React from "react";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <section className="bg-primary-green min-h-[100vh] text-primary-white text-center">
        <h1 className="pt-10 pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-[75%] mx-auto">
          Account Creation
        </h1>
        <div className="relative">
          <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
          <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
          <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 font-semibold">
          A little more about you
        </h2>
        <div className="border-solid border-4 w-4/5 mx-auto border-secondary-green rounded-xl mt-2 p-4 text-gray-800 grid-cols-1 grid sm:grid-cols-4 sm:gap-4 md:w-3/5 lg:w-5/12">
          <input
            className="border-2 border-secondary-green rounded-md w-full h-10 mb-4 mx-auto pl-2 sm:col-span-2 sm:w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border-2 border-secondary-green rounded-md w-full h-10 mb-4 mx-auto pl-2 sm:col-span-2 sm:w-full"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="border-2 border-secondary-green rounded-md w-full h-10 mb-4 mx-auto pl-2 sm:col-span-2 sm:w-full"
            type="text"
            placeholder="Email"
          />
          <input
            className="border-2 border-secondary-green rounded-md w-full h-10 mb-4 mx-auto pl-2 sm:col-span-2 sm:w-full"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="border-2 border-secondary-green rounded-md w-full h-10 mb-4 mx-auto pl-2 sm:w-full"
            type="text"
            placeholder="Birthday"
          />
          <input
            className="border-2 border-secondary-green rounded-md w-full h-10 mb-4 mx-auto pl-2 sm:w-full"
            type="text"
            placeholder="Gender"
          />
          <input
            className="border-2 border-secondary-green rounded-md w-full h-10 mx-auto pl-2 sm:col-span-2 sm:w-full"
            type="text"
            placeholder="Nickname"
          />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 font-semibold">
          Create a Password
        </h2>
        <div className="border-solid border-4 w-4/5 mx-auto border-secondary-green rounded-xl mt-2 p-4 text-gray-800 sm:w-2/5 md:w-1/3 lg:w-1/4">
          <input
            className="border-2 border-secondary-green rounded-md w-full h-10 mb-4 mx-auto pl-2"
            type="password"
            placeholder="Password"
          />
          <input
            className="border-2 border-secondary-green rounded-md w-full h-10 mx-auto pl-2"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button
          className="bg-secondary-green p-2 font-semibold my-10 w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white rounded-xl"
          onClick={() => {
            router.push("/payment-processing");
          }}
        >
          Confirm
        </button>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
