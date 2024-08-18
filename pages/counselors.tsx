import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import person3 from "../public/person3.png";
import ClientDescription from "@/components/ClientDescription";

const counselors = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="flex flex-col bg-primary-green pt-[3%]">
        <div className="flex w-full justify-evenly">
          <span className="text-xl font-bold md:text-5xl text-slate-100 md:mb-5 md:font-normal">
            Public Profile
          </span>
          <span className="hidden text-xl md:text-5xl text-slate-100 md:mb-5 md:block">
            Current Patients
          </span>
        </div>
        <span className="flex items-center justify-center w-full">
          <div className="w-5 h-5 border rounded-full border-secondary-green bg-secondary-green" />
          <hr className="border-2 border-secondary-green min-w-[40%]"></hr>
          <div className="hidden w-5 h-5 border rounded-full border-secondary-green bg-secondary-green md:block" />
          <hr className="border-2 border-secondary-green min-w-[40%]"></hr>
          <div className="w-5 h-5 border rounded-full border-secondary-green bg-secondary-green" />
        </span>
        <div className="md:flex mx-[10%] text-lg">
          <div className="flex flex-col md:max-w-[49.8%] mt-8 items-center md:pr-10">
            <div className="items-center md:flex">
              <Image src={person3} alt="" height={500} width={250} />
              <div className="ml-5">
                <div className="mb-5 text-lg text-slate-100">
                  <span className="font-bold">Name: </span>
                  John Smith
                </div>
                <div className="mb-5 text-lg text-slate-100">
                  <span className="font-bold">Gender: </span>
                  Male
                </div>
                <div className="mb-5 text-lg text-slate-100">
                  <span className="font-bold">Age: </span>
                  26
                </div>
                <div className="text-lg text-slate-100">
                  <span className="font-bold">Ethnicity: </span>
                  Caucasian
                </div>
              </div>
            </div>
            <div className="text-slate-100 mt-10 md:max-w-[60%]">
              <span className="font-bold">Specialty: </span>
              Specialization in so and so type of psychology
            </div>
            <div className="text-slate-100 mt-10 md:max-w-[60%]">
              <span className="font-bold">Education: </span>
              Masters in Psychology in so and so University
            </div>
            <div className="text-slate-100 mt-10 md:max-w-[60%]">
              <span className="font-bold">Biography: </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="md:max-w-[50%] flex justify-center">
              <button className="p-4 my-6 text-lg font-bold border-0 rounded-lg text-slate-100 bg-secondary-green">
                EDIT PROFILE
              </button>
            </div>
          </div>
          <span className="flex justify-center w-full text-lg font-bold md:text-5xl text-slate-100 md:mb-5 md:hidden md:font-normal">
            Current Patients
          </span>
          <span className="flex items-center justify-center w-full md:hidden">
            <div className="w-5 h-5 border rounded-full border-secondary-green bg-secondary-green" />
            <hr className="border-2 border-secondary-green min-w-[40%]"></hr>
            <hr className="border-2 border-secondary-green min-w-[40%]"></hr>
            <div className="w-5 h-5 border rounded-full border-secondary-green bg-secondary-green" />
          </span>
          <div className="hidden md:inline-block h-[full] min-h-[1em] min-w-[4px] self-stretch bg-secondary-green rounded-sm ml-[1px]"></div>
          <div className="flex flex-col items-center mt-8">
            <ClientDescription />
            <ClientDescription />
            <ClientDescription />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default counselors;
