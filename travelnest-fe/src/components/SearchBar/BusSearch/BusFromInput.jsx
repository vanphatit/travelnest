import PlaceIcon from '@mui/icons-material/Place'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'

const BusFromInput = () => {
  return (
    <div className='flex items-center justify-between flex-1 px-4 py-4'>
      <div className='flex items-center'>
        <PlaceIcon className='w-5 h-5 text-deep-navy shrink-0' />
        <input
          type='text'
          placeholder='Từ'
          className='ml-2 outline-none placeholder-gray-400 bg-transparent w-full'
        />
      </div>
      <button
        className='text-gray-400 hover:text-deep-navy transition ml-2'
        aria-label='Đổi điểm đi / đến'
      >
        <CompareArrowsIcon className='w-5 h-5' />
      </button>
    </div>
  )
}

export default BusFromInput
