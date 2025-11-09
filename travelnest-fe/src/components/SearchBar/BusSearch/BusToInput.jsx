import PlaceIcon from '@mui/icons-material/Place'

const BusToInput = () => {
  return (
    <div className='flex items-center flex-1 px-4 py-4 border-l border-gray-200'>
      <PlaceIcon className='w-5 h-5 text-deep-navy shrink-0' />
      <input
        type='text'
        placeholder='Đến'
        className='ml-2 outline-none placeholder-gray-400 bg-transparent w-full'
      />
    </div>
  )
}

export default BusToInput
