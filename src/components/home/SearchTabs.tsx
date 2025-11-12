"use client";

import {
  Building,
  Plane,
  Bus,
  Car,
  MapPin,
  MoreHorizontal,
} from "lucide-react";

interface Tab {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const tabs: Tab[] = [
  { id: "hotel", icon: <Building className="w-5 h-5" />, label: "Khách sạn" },
  { id: "flight", icon: <Plane className="w-5 h-5" />, label: "Vé máy bay" },
  { id: "bus", icon: <Bus className="w-5 h-5" />, label: "Vé xe khách" },
  { id: "car", icon: <Car className="w-5 h-5" />, label: "Cho thuê xe" },
  {
    id: "activity",
    icon: <MapPin className="w-5 h-5" />,
    label: "Hoạt động & Vui chơi",
  },
  { id: "more", icon: <MoreHorizontal className="w-5 h-5" />, label: "Khác" },
];

interface SearchTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SearchTabs = ({ activeTab, setActiveTab }: SearchTabsProps) => {
  return (
    <div className="flex justify-center space-x-6 px-6 py-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 font-medium ${
            activeTab === tab.id
              ? "bg-white text-slate-900 shadow-sm"
              : "text-white hover:bg-white/10"
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SearchTabs;
