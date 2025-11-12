"use client";

import { useState } from "react";
import SearchTabs from "./SearchTabs";
import HotelSearchBar from "../search/HotelSearchBar";
import BusSearchBar from "../search/BusSearchBar";
import ActivitySearchBar from "../search/ActivitySearchBar";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("hotel");

  return (
    <div
      className="relative min-h-[600px] flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/tvlk/image/imageResource/2025/10/09/1760028631175-baba0063c39e11156f32f14ef2e77e9f.png?tr=dpr-2,q-75')",
      }}
    >
      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Nội dung chính */}
      <div className="relative z-10 w-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mt-16 mb-4">
          App du lịch hàng đầu, một chạm đi bất cứ đâu
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Đặt vé, đặt phòng và tận hưởng hành trình của bạn cùng TravelNest.
        </p>

        {/* Tabs (Khách sạn, Vé máy bay, Vé xe khách, ...) */}
        <SearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Ô tìm kiếm tương ứng tab */}
        <div className="w-full max-w-5xl mx-auto mt-8 px-4">
          {activeTab === "hotel" && <HotelSearchBar />}
          {activeTab === "bus" && <BusSearchBar />}
          {activeTab === "activity" && <ActivitySearchBar />}
          {activeTab === "flight" && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
              <p className="text-lg">
                Tính năng đặt vé máy bay đang được phát triển...
              </p>
            </div>
          )}
          {activeTab === "car" && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
              <p className="text-lg">
                Tính năng thuê xe đang được phát triển...
              </p>
            </div>
          )}
          {activeTab === "more" && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
              <p className="text-lg">
                Các tính năng khác đang được phát triển...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
