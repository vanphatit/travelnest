"use client";

import { useState, useRef, useEffect } from "react";
import { Users } from "lucide-react";

interface GuestState {
  adults: number;
  children: number;
  rooms: number;
}

const GuestSelector = () => {
  const [open, setOpen] = useState(false);
  const [guests, setGuests] = useState<GuestState>({
    adults: 2,
    children: 0,
    rooms: 1,
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const guestItems = [
    { key: "adults" as keyof GuestState, label: "Người lớn" },
    { key: "children" as keyof GuestState, label: "Trẻ em" },
    { key: "rooms" as keyof GuestState, label: "Phòng" },
  ];

  return (
    <div
      ref={ref}
      className="flex items-center border-l border-gray-200 px-4 cursor-pointer relative hover:bg-gray-50"
      onClick={() => setOpen(!open)}
    >
      <Users className="w-5 h-5 text-slate-900" />
      <span className="ml-2 text-sm">
        {`${guests.adults} người lớn, ${guests.children} trẻ em, ${guests.rooms} phòng`}
      </span>

      {open && (
        <div className="absolute top-14 right-0 bg-white shadow-xl rounded-xl p-4 w-64 text-sm z-50 border">
          {guestItems.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between py-2"
            >
              <span className="font-medium">{item.label}</span>
              <div className="flex items-center gap-2">
                <button
                  className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setGuests((prev) => ({
                      ...prev,
                      [item.key]: Math.max(
                        prev[item.key] - 1,
                        item.key === "adults" ? 1 : 0
                      ),
                    }));
                  }}
                >
                  −
                </button>
                <span className="w-8 text-center font-medium">
                  {guests[item.key]}
                </span>
                <button
                  className="w-6 h-6 rounded-full bg-blue-100 text-slate-900 hover:bg-blue-200 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setGuests((prev) => ({
                      ...prev,
                      [item.key]: prev[item.key] + 1,
                    }));
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <button
            className="w-full mt-3 bg-slate-900 text-white py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors"
            onClick={() => setOpen(false)}
          >
            Xong
          </button>
        </div>
      )}
    </div>
  );
};

export default GuestSelector;
