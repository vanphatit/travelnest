import PlaceIcon from '@mui/icons-material/Place'

const DestinationInput = () => (
  <div className='flex items-center flex-1 px-4 py-3'>
    <PlaceIcon className='w-5 h-5 text-deep-navy' />
    <input
      type='text'
      placeholder='Thành phố, khách sạn, điểm đến'
      className='flex-1 ml-2 py-2 outline-none placeholder-gray-400 bg-transparent'
    />
  </div>
)

export default DestinationInput
