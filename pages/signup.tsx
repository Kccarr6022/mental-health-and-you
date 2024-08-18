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
        <h2 className="mt-6 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          A little more about you
        </h2>
        <div className="grid w-4/5 grid-cols-1 p-4 mx-auto mt-2 text-gray-800 border-4 border-solid border-secondary-green rounded-xl sm:grid-cols-4 sm:gap-4 md:w-3/5 lg:w-5/12">
          <input
            className="w-full h-10 pl-2 mx-auto mb-4 border-2 rounded-md border-secondary-green sm:col-span-2 sm:w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full h-10 pl-2 mx-auto mb-4 border-2 rounded-md border-secondary-green sm:col-span-2 sm:w-full"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="w-full h-10 pl-2 mx-auto mb-4 border-2 rounded-md border-secondary-green sm:col-span-2 sm:w-full"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full h-10 pl-2 mx-auto mb-4 border-2 rounded-md border-secondary-green sm:col-span-2 sm:w-full"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="w-full h-10 pl-2 mx-auto mb-4 border-2 rounded-md border-secondary-green sm:w-full"
            type="text"
            placeholder="Birthday"
          />
          <input
            className="w-full h-10 pl-2 mx-auto mb-4 border-2 rounded-md border-secondary-green sm:w-full"
            type="text"
            placeholder="Gender"
          />
          <input
            className="w-full h-10 pl-2 mx-auto border-2 rounded-md border-secondary-green sm:col-span-2 sm:w-full"
            type="text"
            placeholder="Nickname"
          />
        </div>
        <h2 className="mt-6 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Create a Password
        </h2>
        <div className="w-4/5 p-4 mx-auto mt-2 text-gray-800 border-4 border-solid border-secondary-green rounded-xl sm:w-2/5 md:w-1/3 lg:w-1/4">
          <input
            className="w-full h-10 pl-2 mx-auto mb-4 border-2 rounded-md border-secondary-green"
            type="password"
            placeholder="Password"
          />
          <input
            className="w-full h-10 pl-2 mx-auto border-2 rounded-md border-secondary-green"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button
          className="w-1/2 p-2 my-10 text-xl font-semibold text-center text-white bg-secondary-green sm:w-2/5 md:w-1/3 lg:w-1/4 sm:text-2xl md:text-3xl lg:text-4xl rounded-xl"
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
