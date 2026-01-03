"use client";

import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface BookingDatePickerProps {
  label: string;
  value: Date | null;
  onChange: (date: Date) => void;
}

export function BookingDatePicker({
  label,
  value,
  onChange,
}: BookingDatePickerProps) {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="relative w-full">
      <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
      <input
        type="text"
        readOnly
        value={value ? format(value, "MMM dd, yyyy") : ""}
        onClick={() => setShowCalendar(!showCalendar)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Select date"
      />
      {showCalendar && (
        <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(date) => {
              if (date) {
                onChange(date);
                setShowCalendar(false);
              }
            }}
            footer={
              <button
                className="text-sm text-indigo-500 mt-2 px-3 py-1 hover:bg-indigo-50 rounded"
                onClick={() => setShowCalendar(false)}
              >
                Close
              </button>
            }
          />
        </div>
      )}
    </div>
  );
}
