import PlaceIcon from '@mui/icons-material/Place'
import SearchIcon from '@mui/icons-material/Search'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const ActivitySearchBar = () => (
  <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
    <div className='bg-white text-gray-700 rounded-full flex items-stretch shadow-lg overflow-hidden w-full sm:w-[600px] md:w-[700px]'>
      <input
        type='text'
        placeholder='Bạn có ý tưởng gì cho chuyến đi tiếp theo không?'
        className='flex-1 px-4 py-4 rounded-full outline-none focus:ring-2 focus:ring-orange-100'
      />
      <button className='bg-orange-500 text-white px-5 flex items-center justify-center hover:bg-orange-600 transition-all duration-200 rounded-r-full'>
        <SearchIcon className='w-5 h-5' />
      </button>
    </div>

    <button className='hidden md:flex bg-black/50 text-white rounded-full px-6 py-3 items-center gap-2 border border-white/30 hover:bg-black/60 transition-all duration-200'>
      <PlaceIcon className='w-5 h-5' />
      Tôi vẫn chưa biết đi đâu
      <ArrowRightAltIcon />
    </button>
  </div>
)

export default ActivitySearchBar
