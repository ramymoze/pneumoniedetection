import React, { useState } from "react";

type CalendarProps = {
  onDateSelect?: (date: Date) => void;
  initialDate?: Date;
  disabledDates?: Date[];
  showWeekNumbers?: boolean;
};

const Calendar: React.FC<CalendarProps> = ({
  onDateSelect,
  initialDate,
  disabledDates = [],
  showWeekNumbers = false,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(
    initialDate || new Date()
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const monthNames: string[] = [
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

  const daysOfWeek: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = (): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = (): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const isDateDisabled = (date: Date): boolean => {
    return disabledDates.some(
      (disabledDate) =>
        disabledDate.getDate() === date.getDate() &&
        disabledDate.getMonth() === date.getMonth() &&
        disabledDate.getFullYear() === date.getFullYear()
    );
  };

  const handleDateClick = (day: number): void => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    if (isDateDisabled(newDate)) return;

    setSelectedDate(newDate);
    if (onDateSelect) onDateSelect(newDate);
  };

  const renderDays = (): JSX.Element[] => {
    const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth();
    const daysInMonth: number = getDaysInMonth(year, month);
    const firstDayOfMonth: number = getFirstDayOfMonth(year, month);

    const days: JSX.Element[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-10 w-10 flex items-center justify-center"
        />
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;
      const isToday =
        new Date().getDate() === day &&
        new Date().getMonth() === month &&
        new Date().getFullYear() === year;
      const isDisabled = isDateDisabled(date);

      days.push(
        <div
          key={`day-${day}`}
          className={`h-10 w-10 flex items-center justify-center rounded-full cursor-pointer
            ${isSelected ? "bg-blue-500 text-white" : ""}
            ${isToday && !isSelected ? "border border-blue-500" : ""}
            ${
              isDisabled
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }
            transition-colors duration-200`}
          onClick={() => !isDisabled && handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b">
        <button
          onClick={prevMonth}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
          aria-label="Previous month"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <h2 className="text-lg font-semibold text-gray-800">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>

        <button
          onClick={nextMonth}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
          aria-label="Next month"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`grid ${
          showWeekNumbers ? "grid-cols-8" : "grid-cols-7"
        } gap-1 p-2 text-center text-sm font-medium text-gray-500`}
      >
        {showWeekNumbers && <div className="py-2">Week</div>}
        {daysOfWeek.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>

      <div
        className={`grid ${
          showWeekNumbers ? "grid-cols-8" : "grid-cols-7"
        } gap-1 p-2`}
      >
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
