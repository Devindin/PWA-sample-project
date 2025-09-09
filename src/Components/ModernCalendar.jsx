import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../index.css";

function ModernCalendar({ date, setDate }) {
  return (
    <div className="modern-calendar p-2  h-80%">
      <Calendar
        onChange={setDate}
        value={date}
        className="w-full h-80% text-sm border-none rounded-xl"
      />
    </div>
  );
}

export default ModernCalendar;
