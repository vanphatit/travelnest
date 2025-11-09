import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import BusFromInput from '~/components/SearchBar/BusSearch/BusFromInput'
import BusToInput from '~/components/SearchBar/BusSearch/BusToInput'
import BusPassengerSelector from '~/components/SearchBar/BusSearch/BusPassengerSelector'
import DatePicker from '~/components/SearchBar/DatePicker'

const BusSearchBar = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false)

  return (
    <div className='w-full/2 flex flex-col items-center space-y-1'>
      {/* Label trên thanh tìm kiếm */}
      <div className='flex w-full max-w-5xl text-xs text-white font-medium justify-around'>
        {/* Từ */}
        <div className='flex-1 text-center'>
          <span>Từ</span>
        </div>

        {/* Đến */}
        <div className='flex-1 text-center'>
          <span>Đến</span>
        </div>

        {/* Khứ hồi */}
        <div className='flex-2 text-center'>
          <span className='flex items-center justify-center space-x-1'>
            <input
              type='checkbox'
              id='roundTrip'
              checked={isRoundTrip}
              onChange={(e) => setIsRoundTrip(e.target.checked)}
              className='w-4 h-4 accent-orange-500 cursor-pointer'
            />
            <label htmlFor='roundTrip' className='text-white text-xs cursor-pointer'>
              Khứ hồi
            </label>
          </span>
        </div>

        <div className='flex-1 text-center'>
          <span>Hành khách</span>
        </div>
      </div>

      {/* Thanh tìm kiếm */}
      <div className='bg-white text-gray-700 rounded-full flex items-stretch shadow-lg w-full max-w-5xl'>
        <BusFromInput />
        <BusToInput />
        <DatePicker isRoundTrip={isRoundTrip} />
        <BusPassengerSelector />
        <button className='bg-orange-500 text-white px-5 flex items-center justify-center hover:bg-orange-600 transition rounded-r-full'>
          <SearchIcon className='w-5 h-5' />
        </button>
      </div>
    </div>
  )
}

export default BusSearchBar
