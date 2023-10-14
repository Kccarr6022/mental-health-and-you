import { useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

const BenefitsCheckList = () => {
  const [benefits, setBenefits] = useState([
    {
      benefit: "Provided by a licensed therapist",
      mentalHealthAndYou: true,
      traditional: true,
    },
    {
      benefit: "In-office appointments",
      mentalHealthAndYou: false,
      traditional: true,
    },
    {
      benefit: "Messaging at any time",
      mentalHealthAndYou: true,
      traditional: false,
    },
    {
      benefit: "Chat sessions",
      mentalHealthAndYou: true,
      traditional: false,
    },
    {
      benefit: "Phone sessions",
      mentalHealthAndYou: true,
      traditional: false,
    },
    {
      benefit: "Video sessions",
      mentalHealthAndYou: true,
      traditional: false,
    },
    {
      benefit: "Easy scheduling",
      mentalHealthAndYou: true,
      traditional: false,
    },
    {
      benefit: "Digital worksheets",
      mentalHealthAndYou: true,
      traditional: false,
    },
    {
      benefit: "Group sessions",
      mentalHealthAndYou: true,
      traditional: null,
    },
    {
      benefit: "Smart provider matching",
      mentalHealthAndYou: true,
      traditional: false,
    },
    {
      benefit: "Easy to switch",
      mentalHealthAndYou: true,
      traditional: false,
    },
    {
      benefit: "Access from anywhere",
      mentalHealthAndYou: true,
      traditional: false,
    },
  ]);

  return (
    <section className="grid grid-cols-4 text-primary-white mx-6 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl md sm:w-[60%] sm:mx-auto sm:text-md">
      {/* first row */}
      <div className="flex flex-col border-secondary-green border-r-2 col-span-2 border-b-2"></div>
      <div className="flex flex-col border-secondary-green overflow-hidden border-l-2 border-r-2 border-b-2">
        Mental Health & You
      </div>
      <div className="flex flex-col border-secondary-green overflow-hidden border-l-2 border-b-2">
        Traditional in-office
      </div>
      {benefits.map((item, index) => (
        <>
          <div className="flex flex-col text-left pl-2 overflow-hidden text-lg sm:text-xl md:text-2xl lg:text-4xl py-1 border-y-2 border-r-2 border-secondary-green col-span-2 ">
            {item.benefit}
          </div>
          <div className="flex flex-col overflow-hidden text-left text-lg sm:text-xl md:text-2xl lg:text-4xl border-secondary-green items-center justify-center border-2">
            {item.mentalHealthAndYou ? (
              <div className="rounded-md bg-secondary-green p-1 m-2">
                <FaCheck color="#fffff" />
              </div>
            ) : (
              <div className="bg-primary-white rounded-md p-1 m-2">
                <FaTimes color="#5EC7B6" />
              </div>
            )}
          </div>
          <div className="flex flex-col overflow-hidden text-left text-lg sm:text-xl md:text-2xl lg:text-4xl border-y-2 border-b-2 border-l-2 border-secondary-green items-center justify-center">
            {item.traditional ? (
              <div className="rounded-md bg-secondary-green p-1 m-2">
                <FaCheck color="#fffff" />
              </div>
            ) : (
              <div className="bg-primary-white rounded-md p-1 m-2">
                <FaTimes color="#5EC7B6" />
              </div>
            )}
          </div>
        </>
      ))}
    </section>
  );
};

export default BenefitsCheckList;
