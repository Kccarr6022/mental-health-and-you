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
      <div className="flex flex-col col-span-2 border-b-2 border-r-2 border-secondary-green"></div>
      <div className="flex flex-col overflow-hidden border-b-2 border-l-2 border-r-2 border-secondary-green">
        Mental Health & You
      </div>
      <div className="flex flex-col overflow-hidden border-b-2 border-l-2 border-secondary-green">
        Traditional in-office
      </div>
      {benefits.map((item, index) => (
        <>
          <div className="flex flex-col col-span-2 py-1 pl-2 overflow-hidden text-lg text-left border-r-2 sm:text-xl md:text-2xl lg:text-4xl border-y-2 border-secondary-green ">
            {item.benefit}
          </div>
          <div className="flex flex-col items-center justify-center overflow-hidden text-lg text-left border-2 sm:text-xl md:text-2xl lg:text-4xl border-secondary-green">
            {item.mentalHealthAndYou ? (
              <div className="p-1 m-2 rounded-md bg-secondary-green">
                <FaCheck color="#fffff" />
              </div>
            ) : (
              <div className="p-1 m-2 rounded-md bg-primary-white">
                <FaTimes color="#5EC7B6" />
              </div>
            )}
          </div>
          <div className="flex flex-col items-center justify-center overflow-hidden text-lg text-left border-b-2 border-l-2 sm:text-xl md:text-2xl lg:text-4xl border-y-2 border-secondary-green">
            {item.traditional ? (
              <div className="p-1 m-2 rounded-md bg-secondary-green">
                <FaCheck color="#fffff" />
              </div>
            ) : (
              <div className="p-1 m-2 rounded-md bg-primary-white">
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
