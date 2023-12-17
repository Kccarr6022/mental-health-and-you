import React, { Component } from "react";

interface PassedCalendarProps {
  date: Date;
  setDate: (date: Date) => void;
}

class TimeSelector extends Component<PassedCalendarProps> {
  date: Date;
  times: string[];

  constructor(props: PassedCalendarProps) {
    super(props);

    this.date = this.props.date;

    this.date = props.date;
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

  componentDidUpdate(prevProps: PassedCalendarProps) {
    // Check if the 'date' prop has changed
    if (this.props.date !== prevProps.date) {
      this.date = this.props.date;
      this.forceUpdate();
    }
  }

  setSelectedTime = (time: string) => {
    const [hours, minutes] = time.split(":").map((value) => parseInt(value));
    const newDate = new Date(this.date);
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    this.props.setDate(newDate);
  };

  selectedTime = () => {
    return this.date.getHours() + ":00";
  };

  render() {
    return (
      <div className="w-full h-[288px] flex flex-col mx-auto bg-primary-white rounded-[10px] text-black p-1">
        <div className="grid grid-cols-2 px-4 py-2">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">Time</h2>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
            Availability
          </h2>
        </div>
        <div className="overflow-y-scroll">
          {this.times.map((time) => (
            <div
              key={time}
              className={
                "grid grid-cols-2 px-4 py-2 cursor-pointer z-20" +
                (time === this.selectedTime()
                  ? "bg-primary-green"
                  : "bg-primary-white hover:bg-primary-green")
              }
              onClick={() => {
                this.setSelectedTime(time);
              }}
            >
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                {time}
              </h2>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                Available
              </h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TimeSelector;
