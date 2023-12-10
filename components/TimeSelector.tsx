import React, { Component, useState } from "react";

interface PassedCalendarProps {
  date: Date;
  setDate: (date: Date) => void;
}

class TimeSelector extends Component<PassedCalendarProps> {
  date: Date;
  setDate: (date: Date) => void;
  times: string[];
  constructor(props: any) {
    super(props);

    this.date = props.date;
    this.setDate = props.setDate;
    this.times = [
      "8:00 AM",
      "8:45 AM",
      "9:30 AM",
      "10:15 AM",
      "11:00 AM",
      "11:45 AM",
      "12:30 PM",
      "1:15 PM",
      "2:00 PM",
      "2:45 PM",
      "3:30 PM",
      "4:15 PM",
      "5:00 PM",
      "5:45 PM",
    ];
  }

  changeCurrentDay = (day: any) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  };

  setSelectedTime = (time: string) => {
    this.setDate(new Date(this.date.setHours(parseInt(time.split(":")[0]))));
  };

  selectedTime = () => {
    return this.date.getHours() + ":00";
  };

  render() {
    return (
      <div className="w-[288px] h-[288px] flex flex-col mx-auto bg-primary-white rounded-[10px] text-black p-1">
        <div className="flex justify-between items-center px-4 py-2">
          <h2 className="text-xs">Time</h2>
          <h2 className="text-xs">Availability</h2>
        </div>
        <div className="overflow-y-scroll">
          {this.times.map((time) => (
            <div
              className={
                "flex justify-between items-center px-4 py-2 cursor-pointer " +
                (time == this.selectedTime()
                  ? "bg-primary-green"
                  : "bg-primary-white hover:bg-primary-green")
              }
              onClick={() => this.setSelectedTime(time)}
            >
              <h2 className="text-xs">{time}</h2>
              <h2 className="text-xs">Available</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TimeSelector;
