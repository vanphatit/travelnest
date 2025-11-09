import { useState, useRef, useEffect } from 'react'
import GroupsIcon from '@mui/icons-material/Groups'

const BusPassengerSelector = () => {
  const [open, setOpen] = useState(false)
  const [passengers, setPassengers] = useState(1)
  const ref = useRef(null)

  // Đóng popup khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      ref={ref}
      className='flex items-center px-4 cursor-pointer relative'
      onClick={() => setOpen(!open)}
    >
      <GroupsIcon className='w-5 h-5 text-deep-navy shrink-0' />
      <span className='ml-2 text-sm whitespace-nowrap'>
        {passengers} hành khách
      </span>

      {open && (
        <div className='absolute top-14 right-0 bg-white shadow-lg rounded-xl p-4 w-56 text-sm z-50'>
          <div className='flex items-center justify-between'>
            <span>Số hành khách</span>
            <div className='flex items-center gap-2'>
              <button
                className='w-6 h-6 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200'
                onClick={(e) => {
                  e.stopPropagation()
                  setPassengers((prev) => Math.max(prev - 1, 1))
                }}
              >
                −
              </button>
              <span>{passengers}</span>
              <button
                className='w-6 h-6 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200'
                onClick={(e) => {
                  e.stopPropagation()
                  setPassengers((prev) => prev + 1)
                }}
              >
                +
              </button>
            </div>
          </div>

          <button
            className='w-full mt-3 bg-deep-navy text-white py-2 rounded-lg font-medium hover:bg-blue-600'
            onClick={(e) => {
              e.stopPropagation()
              setOpen(false)
            }}
          >
            Xong
          </button>
        </div>
      )}
    </div>
  )
}

export default BusPassengerSelector
