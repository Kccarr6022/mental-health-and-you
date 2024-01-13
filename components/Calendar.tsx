import React, { Component, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

interface CalendarState {
  currentDay: Date;
}

interface Day {
  currentMonth: boolean;
  selected: boolean;
  number: number;
}

function CalendarDays(props: {
  day: {
    getFullYear: () => number;
    getMonth: () => number;
    toDateString: () => string;
  };
  changeCurrentDay: (arg0: {
    currentMonth: boolean;
    date: Date;
    month: number;
    number: number;
    selected: boolean;
    year: number;
  }) => void;
}) {
  const firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    1
  );
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  return (
    <div className="w-full grid grid-cols-7">
      {currentDays.map((day, key) => {
        return (
          <div
            key={key}
            className={
              "h-[5vw] min-h-[36px] relative border-solid border-[1px] border-[#5EC7B6] cursor-pointer " +
              (day.currentMonth ? "" : "bg-gray-400") +
              (day.selected
                ? " bg-primary-green "
                : " border-solid border-[1px] border-[#5EC7B6] bg-white hover:bg-primary-green")
            }
            onClick={() => {
              props.changeCurrentDay(day);
            }}
          >
            <p className="absolute right-[8px] text-black text-base sm:text-lg md:text-xl lg:text-2xl">
              {day.number}
            </p>
          </div>
        );
      })}
    </div>
  );
}

interface CalendarState {
  currentDay: Date;
}

interface PassedCalendarProps {
  date?: Date | null;
  setDate: (date: Date) => void;
}

class Calendar extends Component<PassedCalendarProps, CalendarState> {
  weekdays: string[];
  months: string[];
  date?: Date | null;
  setDate: (date: Date) => void;
  constructor(props: any) {
    super(props);

    this.weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.state = {
      currentDay: new Date(),
    };
    this.date = props.date;
    this.setDate = props.setDate;
  }

  changeCurrentDay = (day: any) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
    this.setDate(new Date(day.year, day.month, day.number));
  };

  componentDidUpdate(prevProps: PassedCalendarProps) {
    // Check if the 'date' prop has changed
    console.log("componentDidUpdate");
    if (this.props.date !== prevProps.date) {
      console.log("componentDidUpdate if statement");
      this.date = this.props.date;
      console.log("date set to: " + this.date);
      this.forceUpdate();
    }
  }

  nextDay = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)
      ),
    });
    this.setDate(
      new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)
      )
    );
  };

  previousDay = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)
      ),
    });
    this.setDate(
      new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)
      )
    );
  };

  render() {
    return (
      <div className="w-full h-fit flex flex-col mx-auto bg-primary-white rounded-[10px] overflow-hidden border-[#5EC7B6] border-solid border-2">
        <div className="bg-[#23655A] h-fit p-0 m-0">
          <h2 className="m-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-white text-center font-semibold py-1">
            {this.months[this.state.currentDay.getMonth()]}{" "}
            {this.state.currentDay.getFullYear()}
          </h2>
        </div>
        <div className="w-full grid grid-cols-7">
          {this.weekdays.map((weekday, key) => {
            return (
              <div
                className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold"
                key={key}
              >
                <p className="text-gray-800">{weekday}</p>
              </div>
            );
          })}
        </div>
        <CalendarDays
          day={this.state.currentDay}
          changeCurrentDay={this.changeCurrentDay}
        />
      </div>
    );
  }
}

export default Calendar;
