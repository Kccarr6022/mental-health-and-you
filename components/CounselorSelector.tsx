import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Counselor } from "@/types/Counselor";

interface CounselorSelectorProps {
  date?: Date | null;
  setCounselor: (counselor: Counselor | null) => void;
}

const CounselorSelector: React.FC<CounselorSelectorProps> = ({
  date,
  setCounselor,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [availableCounselors, setAvailableCounselors] = useState<Counselor[]>([
    {
      picture: "/person3.png",
      name: "Mateo",
      description:
        "Hello my name is John Doe, I am a counselor. I have been a counselor for 10 years. I have a degree in counseling from the University of Texas at Austin. I am a counselor. I have been a counselor for 10 years. I have a degree in counseling from the University of Texas at Austin. Hello my name is John Doe, I am a counselor. I have been a counselor for 10 years. I have a degree in counseling from the University of Texas at Austin. I am a counselor. I have been a counselor for 10 years. I have a degree in counseling from the University of Texas at Austin.",
    },
    {
      picture: "/person2.png",
      name: "Lisa",
      description: "description",
    },
    {
      picture: "/person.png",
      name: "Ben",
      description: "description",
    },
  ]);
  const [counselorIndex, setCounselorIndex] = useState(0);

  const incrementCounselorIndex = () => {
    if (counselorIndex + 1 < availableCounselors.length) {
      setCounselorIndex(counselorIndex + 1);
    }
  };

  const decrementCounselorIndex = () => {
    if (counselorIndex - 1 >= 0) {
      setCounselorIndex(counselorIndex - 1);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // TODO: Get counselors from backend
  }, []);

  return (
    <div className="relative flex flex-col w-full my-6 sm:flex-row h-fit">
      <div className="flex items-center justify-center w-full sm:w-2/6">
        <img
          src={availableCounselors[counselorIndex].picture}
          className=""
          alt="Counselor"
        />
      </div>
      <div className="w-full p-2 m-2 text-left sm:w-3/6">
        <div className="h-fit ">
          <h1 className="pb-2 text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
            Name: {availableCounselors[counselorIndex].name}
          </h1>
          <p className="text-lg h-fit sm:text-xl md:text-2xl lg:text-3xl">
            {availableCounselors[counselorIndex].description}
          </p>
        </div>
        <div className="flex flex-col h-1/5">
          <button
            className="w-full p-2 my-2 text-sm bg-secondary-green rounded-xl sm:text-base md:text-lg lg:text-xl"
            onClick={() => setCounselor(availableCounselors[counselorIndex])}
          >
            Counselor Profile
          </button>
          <button
            className="w-full p-2 my-2 text-sm bg-secondary-green rounded-xl sm:text-base md:text-lg lg:text-xl"
            onClick={() => setCounselor(availableCounselors[counselorIndex])}
          >
            Select Counselor
          </button>
        </div>
      </div>
      {isMobile ? (
        <>
          <FaArrowLeft
            className="absolute left-[5%] top-[35%] cursor-pointer w-6 h-6"
            color="white"
            onClick={decrementCounselorIndex}
          />
          <FaArrowRight
            className="absolute right-[5%] top-[35%] cursor-pointer w-6 h-6"
            color="white"
            onClick={incrementCounselorIndex}
          />
        </>
      ) : (
        <>
          <FaArrowUp
            className="absolute right-[5%] top-[35%] cursor-pointer w-6 h-6"
            color="white"
            onClick={decrementCounselorIndex}
          />
          <FaArrowDown
            className="absolute right-[5%] bottom-[35%] cursor-pointer w-6 h-6"
            color="white"
            onClick={incrementCounselorIndex}
          />
        </>
      )}
    </div>
  );
};

export default CounselorSelector;
