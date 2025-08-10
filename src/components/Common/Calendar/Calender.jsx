import React, { Fragment, useState, useEffect } from "react";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import "./Calendar.css";
import "dayjs/locale/vi";
import DayData from "../../User/Emotion/DayData/DayData";

dayjs.locale("vi");
dayjs.extend(weekday);
dayjs.extend(weekOfYear);

const moodMap = [
  { value: 5, color: "#4CAF50" },
  { value: 4, color: "#8BC34A" },
  { value: 3, color: "#FFC107" },
  { value: 2, color: "#FF9800" },
  { value: 1, color: "#F44336" },
];

function Calendar({ dailyMoods = [], onSelectWeek = () => { }, setIsCustomWeek, onMonthChange }) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (onMonthChange) onMonthChange(currentMonth);
  }, [currentMonth, onMonthChange]);

  const startOfMonth = currentMonth.startOf("month").weekday(0);
  const days = [];
  for (let i = 0; i < 42; i++) {
    days.push(startOfMonth.add(i, "day"));
  }

  const getMoodColor = (date) => {
    const moodEntry = dailyMoods.find((m) => dayjs(m.date).isSame(date, "day"));
    if (!moodEntry) return "#000";
    const mood = moodMap.find((m) => m.value === moodEntry.value);
    return mood ? mood.color : "#000";
  };

  const handleDayClick = (date) => {
    const startOfWeek = date.startOf('isoWeek');
    const weekDays = Array(7).fill(null).map((_, i) => {
      const day = startOfWeek.add(i, 'day');
      const moodEntry = dailyMoods.find((m) => dayjs(m.date).isSame(day, "day"));
      return {
        name: day.format('ddd'),
        value: moodEntry ? moodEntry.value : null,
        date: day.format('DD/MM/YYYY')
      };
    });
    onSelectWeek(weekDays);
    setIsCustomWeek(true);
    setSelectedDate(date);

  };

  const changeMonth = (offset) => {
    setCurrentMonth(currentMonth.add(offset, "month"));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>{"<"}</button>
        <span>{`Tháng ${currentMonth.format("M/YYYY")}`}</span>
        <button onClick={() => changeMonth(1)}>{">"}</button>
      </div>

      <div className="calendar-grid">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
          <div key={d} className="calendar-day-header">
            {d}
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, weekIndex) => (
          <Fragment key={weekIndex}>
            {days
              .slice(weekIndex * 7, weekIndex * 7 + 7)
              .map((date, dayIndex) => (
                <div
                  key={dayIndex}
                  onClick={() => handleDayClick(date)}
                  className={`calendar-day ${date.isSame(dayjs(), "day") ? "today" : ""}`}
                  style={{ color: getMoodColor(date) }}
                >
                  {date.date()}
                </div>
              ))}
          </Fragment>
        ))}
      </div>

      {selectedDate && (
        <DayData
          date={selectedDate}
          onClose={() => setSelectedDate(null)}
          dailyMoods={dailyMoods}
        />
      )}
    </div>
  );
}

export default Calendar;
