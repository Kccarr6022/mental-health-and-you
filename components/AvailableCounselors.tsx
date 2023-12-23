import React from "react";

interface AvailableCounselorsProps {
  date?: Date | null;
  setCounselor: (counselor: Object) => void;
}

const AvailableCounselors: React.FC<AvailableCounselorsProps> = ({
  date,
  setCounselor,
}) => {
  return (
    <div className="w-fit h-fit grid grid-cols-3">
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default AvailableCounselors;
