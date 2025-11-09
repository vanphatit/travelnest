import { useState } from 'react'
import Navbar from './Navbar'
import SearchTabs from '~/components/SearchTabs'
import HotelSearchBar from '~/components/SearchBar/HotelSearchBar/HotelSearchBar'
import BusSearchBar from '~/components/SearchBar/BusSearch/BusSearchBar'
import ActivitySearchBar from '~/components/SearchBar/ActivitySearchBar'

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('hotel')

  return (
    <div
      className='relative min-h-[600px] flex flex-col items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage:
          'url(\'https://ik.imagekit.io/tvlk/image/imageResource/2025/10/09/1760028631175-baba0063c39e11156f32f14ef2e77e9f.png?tr=dpr-2,q-75\')',
      }}
    >
      {/* Lớp phủ tối */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Nội dung chính */}
      <div className='relative z-10 w-full text-center text-white px-4'>
        <Navbar />

        <h1 className='text-4xl font-bold mt-8'>
          App du lịch hàng đầu, một chạm đi bất cứ đâu
        </h1>
        <p className='text-lg mt-2 mb-6'>
          Đặt vé, đặt phòng và tận hưởng hành trình của bạn cùng TravelNest.
        </p>

        {/* Tabs (Khách sạn, Vé máy bay, Vé xe khách, ...) */}
        <SearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Ô tìm kiếm tương ứng tab */}
        <div className='w-full max-w-5xl mx-auto mt-6'>
          {activeTab === 'hotel' && <HotelSearchBar />}
          {activeTab === 'bus' && <BusSearchBar />}
          {activeTab === 'activity' && <ActivitySearchBar />}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
