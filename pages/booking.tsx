import Calendar from "@/components/Calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import TimeSelector from "@/components/TimeSelector";
import CounselorSelector from "@/components/CounselorSelector";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Counselor } from "@/types/Counselor";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCounselor, setSelectedCounselor] = useState<Counselor | null>(
    null
  );

  const incrementMonth = () => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setMonth(newDate.getMonth() + 1);
      setSelectedDate(newDate);
    }
  };

  const decrementMonth = () => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setMonth(newDate.getMonth() - 1);
      setSelectedDate(newDate);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-primary-green text-primary-white w-full text-center h-fit py-10">
        <h1 className=" pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-[75%] mx-auto">
          Book Appointment
        </h1>
        <div className="relative">
          <div className="circle-left w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 left-[10%] rounded-full"></div>
          <hr className="border-2 md:border-4 lg:border-8 border-[#5EC7B6] w-[80%] mx-auto" />
          <div className="circle-right w-4 h-4 md:w-8 md:h-8 lg:h-12 lg:w-12 bg-[#5EC7B6] absolute top-1/2 transform -translate-y-1/2 right-[10%] rounded-full"></div>
        </div>
        <section className="bg-primary-green min-h-[100vh] h-fit py-8 text-primary-white text-center">
          <div className="mx-auto w-5/6 sm:w-3/4 md:w-1/2 mb-8">
            <div className="flex items-center justify-center">
              <BiLeftArrow onClick={decrementMonth} />
              <Calendar date={selectedDate} setDate={setSelectedDate} />
              <BiRightArrow onClick={incrementMonth} />
            </div>
          </div>
          {selectedDate && (
            <div className="mx-auto w-5/6 sm:w-3/4 md:w-1/2 mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                {selectedDate.toDateString()}
              </h1>
              <TimeSelector date={selectedDate} setDate={setSelectedDate} />
            </div>
          )}
          {selectedDate && selectedDate.getHours() !== 0 && (
            <div className="mx-auto w-5/6 sm:w-3/4 md:w-1/2 mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Counselors for {selectedDate.getHours() % 12 || 12}:
                {selectedDate.getMinutes() || "00"}{" "}
                {selectedDate.getHours() > 12 ? "PM" : "AM"}
              </h1>
              <CounselorSelector
                date={selectedDate}
                setCounselor={setSelectedCounselor}
              />
            </div>
          )}
          <div className="mx-auto w-5/6 sm:w-3/4 md:w-1/2 mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Appointment:
            </h1>
            <table className="bg-secondary-green w-full my-2 text-black">
              <thead className="font-bold text-center text-lg sm:text-xl md:text-2xl lg:texl-3xl">
                <tr>
                  <td className="border-[1px] border-solid border-black">
                    Date
                  </td>
                  <td className="border-[1px] border-solid border-black">
                    Time
                  </td>
                  <td className="border-[1px] border-solid border-black">
                    Counselor
                  </td>
                </tr>
              </thead>
              <tbody className="text-lg sm:text-xl md:text-2xl lg:texl-3xl">
                <tr>
                  <td className="border-[1px] border-solid border-black text-center">
                    {selectedDate?.toDateString() || "None"}
                  </td>
                  <td className="border-[1px] border-solid border-black text-center">
                    {(selectedDate && selectedDate.getHours() % 12) || 12}:
                    {(selectedDate && selectedDate.getMinutes()) || "00"}{" "}
                    {selectedDate && selectedDate.getHours() > 12 ? "PM" : "AM"}
                  </td>
                  <td className="border-[1px] border-solid border-black text-center">
                    {selectedCounselor?.name || "None"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className="bg-secondary-green p-4 rounded-xl text-xl sm:text-2xl md:text-3xl lg:texl-4xl"
            onClick={() => {
              alert("Appointment booked with");
            }}
          >
            Book Appointment
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
