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
    <div className="w-full flex-grow flex flex-wrap justify-center box-border">
      {currentDays.map((day) => {
        return (
          <div
            className={
              "w-[40px] h-[24px] relative border-solid border-[1px] border-black cursor-pointer " +
              (day.currentMonth ? "" : "bg-gray-300") +
              (day.selected
                ? " bg-primary-green "
                : " border-solid border-[1px] border-black bg-white")
            }
            onClick={() => {
              // console.log(day);
              props.changeCurrentDay(day);
              console.log(day);
            }}
          >
            <p className="absolute right-[8px] text-black">{day.number}</p>
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
  date: Date;
  setDate: (date: Date) => void;
}

class Calendar extends Component<PassedCalendarProps, CalendarState> {
  weekdays: string[];
  months: string[];
  date: Date;
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
  };

  nextDay = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() + 1)
      ),
    });
  };

  previousDay = () => {
    this.setState({
      currentDay: new Date(
        this.state.currentDay.setDate(this.state.currentDay.getDate() - 1)
      ),
    });
  };

  render() {
    return (
      <div className="w-[288px] h-[288px] flex flex-col mx-auto bg-primary-white rounded-[10px]">
        <div className="w-full h-[16px] m-auto flex items-center justify-between text-black font-bold">
          <div className="w-2/4 h-full flex items-center">
            <h2 className="m-auto text-xs">
              {this.months[this.state.currentDay.getMonth()]}{" "}
              {this.state.currentDay.getFullYear()}
            </h2>
          </div>
          <div className="w-2/4 h-full flex items-center ">
            <button
              className="m-auto flex items-center justify-center box-border bg-[#ffffff] border-none"
              onClick={this.previousDay}
            >
              <span className="material-icons text-xs">
                <FaAngleLeft />
              </span>
            </button>
            <p className="text-xs">
              {this.months[this.state.currentDay.getMonth()].substring(0, 3)}{" "}
              {this.state.currentDay.getDate()}
            </p>
            <button
              className="m-auto flex items-center justify-center box-border bg-[#ffffff] border-none"
              onClick={this.nextDay}
            >
              <span className="material-icons text-xs">
                <FaAngleRight />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex-grow flex flex-col">
          <div className="h-[32px] w-full flex items-center justify-between">
            {this.weekdays.map((weekday) => {
              return (
                <div className="w-[32px] text-center text-xs font-semibold">
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
      </div>
    );
  }
}

export default Calendar;
