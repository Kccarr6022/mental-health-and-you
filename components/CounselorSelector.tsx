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

  return (
    <div className="w-full flex flex-col sm:flex-row my-2 h-fit relative">
      <div className="w-full sm:w-2/6 flex items-center justify-center">
        <img
          src={availableCounselors[counselorIndex].picture}
          className="resize-none rounded-xl mx-auto my-auto"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt="Counselor"
        />
      </div>
      <div className="w-full sm:w-3/6 overflow-y-scroll m-2 text-left">
        <div className="h-4/5 ">
          <h1 className="font-bold pb-2">
            Name: {availableCounselors[counselorIndex].name}
          </h1>
          <p>{availableCounselors[counselorIndex].description}</p>
        </div>
        <div className="h-1/5 flex flex-col">
          <button
            className="bg-secondary-green p-2 rounded-xl w-full my-2 text-sm"
            onClick={() => setCounselor(availableCounselors[counselorIndex])}
          >
            Counselor Profile
          </button>
          <button
            className="bg-secondary-green p-2 rounded-xl w-full my-2 text-sm"
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
