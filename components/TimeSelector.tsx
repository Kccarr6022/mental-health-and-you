import React, { Component } from "react";

interface PassedCalendarProps {
  date: Date;
  setDate: (date: Date) => void;
}

type TimeSlot = {
  available: boolean;
};

type Schedule = {
  [time: string]: TimeSlot;
};

class TimeSelector extends Component<PassedCalendarProps> {
  date: Date;
  times: Schedule;

  constructor(props: PassedCalendarProps) {
    super(props);

    this.date = this.props.date;

    this.date = props.date;
    this.times = {
      // TODO: UPDATE TO PROP
      "8:00 AM": {
        available: true,
      },
      "8:45 AM": {
        available: true,
      },
      "9:30 AM": {
        available: true,
      },
      "10:15 AM": {
        available: true,
      },
      "11:00 AM": {
        available: true,
      },
      "11:45 AM": {
        available: true,
      },
      "12:30 PM": {
        available: true,
      },
      "1:15 PM": {
        available: true,
      },
      "2:00 PM": {
        available: true,
      },
      "2:45 PM": {
        available: false,
      },
      "3:30 PM": {
        available: false,
      },
      "4:15 PM": {
        available: true,
      },
      "5:00 PM": {
        available: true,
      },
      "5:45 PM": {
        available: true,
      },
    };
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
          {Object.keys(this.times).map((time) => (
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
                {this.times[time].available ? "Available" : "Unavailable"}
              </h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TimeSelector;
