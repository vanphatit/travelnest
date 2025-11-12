"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import DatePicker from "./DatePicker";

const BusSearchBar = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  return (
    <div className="w-full flex flex-col items-center space-y-3">
      {/* Label trên thanh tìm kiếm */}
      <div className="flex w-full max-w-5xl text-xs text-white font-medium justify-around">
        <div className="flex-1 text-center">
          <span>Từ</span>
        </div>
        <div className="flex-1 text-center">
          <span>Đến</span>
        </div>
        <div className="flex-2 text-center">
          <span className="flex items-center justify-center space-x-2">
            <input
              type="checkbox"
              id="roundTrip"
              checked={isRoundTrip}
              onChange={(e) => setIsRoundTrip(e.target.checked)}
              className="w-4 h-4 accent-orange-500 cursor-pointer"
            />
            <label
              htmlFor="roundTrip"
              className="text-white text-xs cursor-pointer"
            >
              Khứ hồi
            </label>
          </span>
        </div>
        <div className="flex-1 text-center">
          <span>Hành khách</span>
        </div>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="bg-white text-gray-700 rounded-full flex items-stretch shadow-lg w-full max-w-5xl overflow-hidden">
        {/* From Input */}
        <div className="flex items-center flex-1 px-4 py-3">
          <input
            type="text"
            placeholder="Điểm đi"
            className="flex-1 py-2 outline-none placeholder-gray-400 bg-transparent text-sm"
          />
        </div>

        {/* To Input */}
        <div className="flex items-center flex-1 px-4 py-3 border-l border-gray-200">
          <input
            type="text"
            placeholder="Điểm đến"
            className="flex-1 py-2 outline-none placeholder-gray-400 bg-transparent text-sm"
          />
        </div>

        <DatePicker isRoundTrip={isRoundTrip} />

        {/* Passenger Selector */}
        <div className="flex items-center border-l border-gray-200 px-4 py-3">
          <span className="text-sm">1 hành khách</span>
        </div>

        <button className="bg-orange-500 text-white px-6 hover:bg-orange-600 transition-colors flex items-center justify-center">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BusSearchBar;
