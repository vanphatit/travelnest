"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar } from "lucide-react";
import { DateRange, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface DatePickerProps {
  isRoundTrip?: boolean;
}

interface DateState {
  depart: Date;
  return: Date;
}

const DatePicker = ({ isRoundTrip = true }: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [selectingReturn, setSelectingReturn] = useState(false);
  const [date, setDate] = useState<DateState>(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return {
      depart: today,
      return: tomorrow,
    };
  });
  const ref = useRef<HTMLDivElement>(null);

  // đóng popup khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (d: Date) =>
    d.toLocaleDateString("vi-VN", { day: "2-digit", month: "short" });

  const handleSelect = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    if (selection && selection.startDate) {
      if (selectingReturn) {
        setDate((prev) => ({ ...prev, return: selection.startDate as Date }));
      } else {
        setDate((prev) => ({ ...prev, depart: selection.startDate as Date }));
      }
    }
  };

  return (
    <div className="flex border-l border-gray-200 items-center">
      {/* Ô ngày đi */}
      <div
        className="flex items-center px-4 cursor-pointer relative hover:bg-gray-50"
        onClick={() => {
          setSelectingReturn(false);
          setOpen(true);
        }}
      >
        <Calendar className="w-5 h-5 text-slate-900" />
        <span className="ml-2 text-sm font-medium">
          {formatDate(date.depart)}
        </span>
      </div>

      {/* Ô ngày về */}
      <div
        className={`flex items-center px-4 border-l border-gray-200 relative ${
          !isRoundTrip
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer hover:bg-gray-50"
        }`}
        onClick={() => {
          if (!isRoundTrip) return;
          setSelectingReturn(true);
          setOpen(true);
        }}
      >
        <Calendar className="w-5 h-5 text-slate-900" />
        <span className="ml-2 text-sm font-medium">
          {formatDate(date.return)}
        </span>
      </div>

      {/* Popup lịch */}
      {open && (
        <div
          ref={ref}
          className="absolute top-14 right-0 z-50 bg-white shadow-xl rounded-xl p-3 border"
          onClick={(e) => e.stopPropagation()}
        >
          <DateRange
            ranges={[
              {
                startDate: selectingReturn ? date.return : date.depart,
                endDate: selectingReturn ? date.return : date.depart,
                key: "selection",
              },
            ]}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            editableDateInputs
            rangeColors={["#2563eb"]}
            months={2}
            direction="horizontal"
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
