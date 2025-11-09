import SearchIcon from '@mui/icons-material/Search'
import DestinationInput from '~/components/SearchBar/HotelSearchBar/DestinationInput'
import DatePicker from '~/components/SearchBar/DatePicker'
import GuestSelector from '~/components/SearchBar/HotelSearchBar/GuestSelector'

const HotelSearchBar = () => {
  return (
    <div className='bg-white text-gray-700 rounded-full flex items-stretch shadow-lg'>
      <DestinationInput />
      <DatePicker isRoundTrip={true} />
      <GuestSelector />
      <button className='bg-orange-500 text-white px-5 hover:bg-orange-600 transition flex items-center justify-center rounded-r-full'>
        <SearchIcon className='w-5 h-5' />
      </button>
    </div>
  )
}

export default HotelSearchBar
